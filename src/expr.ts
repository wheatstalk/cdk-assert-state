export type BasicType = number | string | boolean | object;
export type DynamicType = BasicType | Expr;
export type DynamicNumber = number | Expr;
export type DynamicString = string | Expr;

export abstract class Expr {
  static value(value: BasicType): ValueExpr {
    return new ValueExpr(value);
  }

  static input(path?: string): Expr {
    return new SymbolExpression('input', path);
  }

  static anything(): Expr {
    return new CallExpression('expect.anything', []);
  }

  static arrayType(items: DynamicType[]): Expr {
    return new ArrayTypeExpr(items);
  }

  static objectType(record: Record<string, DynamicType>) {
    return new ObjectTypeExpr(record);
  }

  static expect(expression: DynamicType): ExpectExpr {
    return new ExpectExpr(Expr.dynamicType(expression));
  }

  static dynamicType(value: DynamicType): Expr {
    return value instanceof Expr ? value : Expr.value(value);
  }

  static objectContaining(record: Record<string, DynamicType>): Expr {
    return new CallExpression('expect.objectContaining', [Expr.objectType(record)]);
  }

  static arrayContaining(items: DynamicType[]): Expr {
    return new CallExpression('expect.arrayContaining', [Expr.arrayType(items)]);
  }

  abstract renderCode(): string;
}

export class MemberCallExpr extends Expr {
  constructor(
    private readonly parent: Expr,
    private readonly member: string,
    private readonly args: Expr[],
  ) {
    super();
  }

  renderCode(): string {
    return `${this.parent.renderCode()}.${this.member}(${this.args.map(a => a.renderCode()).join(',')})`;
  }
}

export class ArrayTypeExpr extends Expr {
  constructor(private readonly items: DynamicType[]) {
    super();
  }

  renderCode(): string {
    const itemsExpr = this.items
      .map(item => Expr.dynamicType(item).renderCode())
      .join(',');
    return `[${itemsExpr}]`;
  }
}

export class ObjectTypeExpr extends Expr {
  constructor(private readonly record: Record<string, DynamicType>) {
    super();
  }

  renderCode(): string {
    const itemsExpr = Object.entries(this.record)
      .map(([key, value]) =>
        `${JSON.stringify(key)}:${Expr.dynamicType(value).renderCode()}`)
      .join(',');
    return `{${itemsExpr}}`;
  }
}

export abstract class ExpectExprBase extends Expr {
  get not(): ExpectNotExpr {
    return new ExpectNotExpr(this);
  }

  toHaveLength(length: DynamicNumber): Expr {
    return new MemberCallExpr(this, 'toHaveLength', [
      Expr.dynamicType(length),
    ]);
  }

  toBeDefined(): Expr {
    return new MemberCallExpr(this, 'toBeDefined', []);
  }

  toBeUndefined(): Expr {
    return new MemberCallExpr(this, 'toBeUndefined', []);
  }

  toBeTruthy(): Expr {
    return new MemberCallExpr(this, 'toBeTruthy', []);
  }

  toBeFalsy(): Expr {
    return new MemberCallExpr(this, 'toBeFalsy', []);
  }

  toBeGreaterThan(value: DynamicNumber): Expr {
    return new MemberCallExpr(this, 'toBeGreaterThan', [
      Expr.dynamicType(value),
    ]);
  }

  toBeGreaterThanOrEqual(value: DynamicNumber): Expr {
    return new MemberCallExpr(this, 'toBeGreaterThanOrEqual', [
      Expr.dynamicType(value),
    ]);
  }

  toBeLessThan(value: DynamicNumber): Expr {
    return new MemberCallExpr(this, 'toBeLessThan', [
      Expr.dynamicType(value),
    ]);
  }

  toBeLessThanOrEqual(value: DynamicNumber): Expr {
    return new MemberCallExpr(this, 'toBeLessThanOrEqual', [
      Expr.dynamicType(value),
    ]);
  }

  toBeCloseTo(value: DynamicNumber, digits?: DynamicNumber): Expr {
    const args = [Expr.dynamicType(value)];
    if (digits !== undefined) {
      args.push(Expr.dynamicType(digits));
    }
    return new MemberCallExpr(this, 'toBeCloseTo', args);
  }

  toHaveProperty(property: DynamicString, value?: DynamicType): Expr {
    const args: Expr[] = [Expr.dynamicType(property)];
    if (value !== undefined) {
      args.push(Expr.dynamicType(value));
    }

    return new MemberCallExpr(this, 'toHaveProperty', args);
  }

  toContain(value: BasicType): Expr {
    return new MemberCallExpr(this, 'toContain', [
      Expr.dynamicType(value),
    ]);
  }

  toContainEqual(value: DynamicType): Expr {
    return new MemberCallExpr(this, 'toContainEqual', [
      Expr.dynamicType(value),
    ]);
  }

  toEqual(value: DynamicType): Expr {
    return new MemberCallExpr(this, 'toEqual', [Expr.dynamicType(value)]);
  }
}

export class ExpectNotExpr extends ExpectExprBase {
  constructor(private readonly parent: Expr) {
    super();
  }

  renderCode(): string {
    return `${this.parent.renderCode()}.not`;
  }
}

export class ExpectExpr extends ExpectExprBase {
  constructor(private readonly expression: Expr) {
    super();
  }

  renderCode(): string {
    return `expect(${this.expression.renderCode()})`;
  }
}

export class SymbolExpression extends Expr {
  constructor(private readonly symbol: string, private readonly path?: string) {
    super();
  }

  renderCode(): string {
    return this.path ? `${this.symbol}.${this.path}` : this.symbol;
  }
}

export class ValueExpr extends Expr {
  constructor(private readonly value: BasicType) {
    super();
  }

  renderCode(): string {
    if (Array.isArray(this.value)) {
      const entries = this.value
        .map(item => Expr.dynamicType(item).renderCode())
        .join(',');
      return `[${entries}]`;
    }

    if (typeof this.value === 'object') {
      const entries = Object.entries(this.value)
        .map(([key, value]) => {
          const keyCode = JSON.stringify(key);
          const valueCode = Expr.dynamicType(value).renderCode();
          return `${keyCode}:${valueCode}`;
        })
        .join(',');
      return `{${entries}}`;
    }

    return JSON.stringify(this.value);
  }
}

class CallExpression extends Expr {
  constructor(private readonly symbol: string, private readonly args: Expr[]) {
    super();
  }

  renderCode(): string {
    return `${this.symbol}(${this.args.map(arg => arg.renderCode()).join(',')})`;
  }
}
