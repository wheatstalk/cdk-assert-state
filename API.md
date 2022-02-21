# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AssertState <a name="AssertState" id="@wheatstalk/cdk-assert-state.AssertState"></a>

#### Initializers <a name="Initializers" id="@wheatstalk/cdk-assert-state.AssertState.Initializer"></a>

```typescript
import { AssertState } from '@wheatstalk/cdk-assert-state'

new AssertState(scope: Construct, id: string, props: ExpectStateProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@wheatstalk/cdk-assert-state.AssertState.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.AssertState.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.AssertState.Initializer.parameter.props">props</a></code> | <code><a href="#@wheatstalk/cdk-assert-state.ExpectStateProps">ExpectStateProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@wheatstalk/cdk-assert-state.AssertState.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@wheatstalk/cdk-assert-state.AssertState.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@wheatstalk/cdk-assert-state.AssertState.Initializer.parameter.props"></a>

- *Type:* <a href="#@wheatstalk/cdk-assert-state.ExpectStateProps">ExpectStateProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@wheatstalk/cdk-assert-state.AssertState.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@wheatstalk/cdk-assert-state.AssertState.next">next</a></code> | Continue normal execution with the given state. |
| <code><a href="#@wheatstalk/cdk-assert-state.AssertState.prefixStates">prefixStates</a></code> | Prefix the IDs of all states in this state machine fragment. |
| <code><a href="#@wheatstalk/cdk-assert-state.AssertState.toSingleState">toSingleState</a></code> | Wrap all states in this state machine fragment up into a single state. |

---

##### `toString` <a name="toString" id="@wheatstalk/cdk-assert-state.AssertState.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `next` <a name="next" id="@wheatstalk/cdk-assert-state.AssertState.next"></a>

```typescript
public next(next: IChainable): Chain
```

Continue normal execution with the given state.

###### `next`<sup>Required</sup> <a name="next" id="@wheatstalk/cdk-assert-state.AssertState.next.parameter.next"></a>

- *Type:* aws-cdk-lib.aws_stepfunctions.IChainable

---

##### `prefixStates` <a name="prefixStates" id="@wheatstalk/cdk-assert-state.AssertState.prefixStates"></a>

```typescript
public prefixStates(prefix?: string): StateMachineFragment
```

Prefix the IDs of all states in this state machine fragment.

Use this to avoid multiple copies of the state machine all having the same state IDs.

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@wheatstalk/cdk-assert-state.AssertState.prefixStates.parameter.prefix"></a>

- *Type:* string

The prefix to add.

Will use construct ID by default.

---

##### `toSingleState` <a name="toSingleState" id="@wheatstalk/cdk-assert-state.AssertState.toSingleState"></a>

```typescript
public toSingleState(options?: SingleStateOptions): Parallel
```

Wrap all states in this state machine fragment up into a single state.

This can be used to add retry or error handling onto this state machine fragment.  Be aware that this changes the result of the inner state machine to be an array with the result of the state machine in it. Adjust your paths accordingly. For example, change 'outputPath' to '$[0]'.

###### `options`<sup>Optional</sup> <a name="options" id="@wheatstalk/cdk-assert-state.AssertState.toSingleState.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_stepfunctions.SingleStateOptions

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@wheatstalk/cdk-assert-state.AssertState.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@wheatstalk/cdk-assert-state.AssertState.isConstruct"></a>

```typescript
import { AssertState } from '@wheatstalk/cdk-assert-state'

AssertState.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@wheatstalk/cdk-assert-state.AssertState.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@wheatstalk/cdk-assert-state.AssertState.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@wheatstalk/cdk-assert-state.AssertState.property.endStates">endStates</a></code> | <code>aws-cdk-lib.aws_stepfunctions.INextable[]</code> | The states to chain onto if this fragment is used. |
| <code><a href="#@wheatstalk/cdk-assert-state.AssertState.property.id">id</a></code> | <code>string</code> | Descriptive identifier for this chainable. |
| <code><a href="#@wheatstalk/cdk-assert-state.AssertState.property.startState">startState</a></code> | <code>aws-cdk-lib.aws_stepfunctions.State</code> | The start state of this state machine fragment. |

---

##### `node`<sup>Required</sup> <a name="node" id="@wheatstalk/cdk-assert-state.AssertState.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `endStates`<sup>Required</sup> <a name="endStates" id="@wheatstalk/cdk-assert-state.AssertState.property.endStates"></a>

```typescript
public readonly endStates: INextable[];
```

- *Type:* aws-cdk-lib.aws_stepfunctions.INextable[]

The states to chain onto if this fragment is used.

---

##### `id`<sup>Required</sup> <a name="id" id="@wheatstalk/cdk-assert-state.AssertState.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Descriptive identifier for this chainable.

---

##### `startState`<sup>Required</sup> <a name="startState" id="@wheatstalk/cdk-assert-state.AssertState.property.startState"></a>

```typescript
public readonly startState: State;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.State

The start state of this state machine fragment.

---


## Structs <a name="Structs" id="Structs"></a>

### ExpectStateProps <a name="ExpectStateProps" id="@wheatstalk/cdk-assert-state.ExpectStateProps"></a>

#### Initializer <a name="Initializer" id="@wheatstalk/cdk-assert-state.ExpectStateProps.Initializer"></a>

```typescript
import { ExpectStateProps } from '@wheatstalk/cdk-assert-state'

const expectStateProps: ExpectStateProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectStateProps.property.assert">assert</a></code> | <code><a href="#@wheatstalk/cdk-assert-state.Assert">Assert</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectStateProps.property.inputPath">inputPath</a></code> | <code>string</code> | *No description.* |

---

##### `assert`<sup>Required</sup> <a name="assert" id="@wheatstalk/cdk-assert-state.ExpectStateProps.property.assert"></a>

```typescript
public readonly assert: Assert;
```

- *Type:* <a href="#@wheatstalk/cdk-assert-state.Assert">Assert</a>

---

##### `inputPath`<sup>Optional</sup> <a name="inputPath" id="@wheatstalk/cdk-assert-state.ExpectStateProps.property.inputPath"></a>

```typescript
public readonly inputPath: string;
```

- *Type:* string

---

## Classes <a name="Classes" id="Classes"></a>

### ArrayTypeExpr <a name="ArrayTypeExpr" id="@wheatstalk/cdk-assert-state.ArrayTypeExpr"></a>

#### Initializers <a name="Initializers" id="@wheatstalk/cdk-assert-state.ArrayTypeExpr.Initializer"></a>

```typescript
import { ArrayTypeExpr } from '@wheatstalk/cdk-assert-state'

new ArrayTypeExpr(items: string | number | boolean | object | Expr[])
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@wheatstalk/cdk-assert-state.ArrayTypeExpr.Initializer.parameter.items">items</a></code> | <code>string \| number \| boolean \| object \| <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>[]</code> | *No description.* |

---

##### `items`<sup>Required</sup> <a name="items" id="@wheatstalk/cdk-assert-state.ArrayTypeExpr.Initializer.parameter.items"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>[]

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@wheatstalk/cdk-assert-state.ArrayTypeExpr.renderCode">renderCode</a></code> | *No description.* |

---

##### `renderCode` <a name="renderCode" id="@wheatstalk/cdk-assert-state.ArrayTypeExpr.renderCode"></a>

```typescript
public renderCode(): string
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@wheatstalk/cdk-assert-state.ArrayTypeExpr.anything">anything</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ArrayTypeExpr.arrayContaining">arrayContaining</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ArrayTypeExpr.arrayType">arrayType</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ArrayTypeExpr.dynamicType">dynamicType</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ArrayTypeExpr.expect">expect</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ArrayTypeExpr.input">input</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ArrayTypeExpr.objectContaining">objectContaining</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ArrayTypeExpr.objectType">objectType</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ArrayTypeExpr.value">value</a></code> | *No description.* |

---

##### `anything` <a name="anything" id="@wheatstalk/cdk-assert-state.ArrayTypeExpr.anything"></a>

```typescript
import { ArrayTypeExpr } from '@wheatstalk/cdk-assert-state'

ArrayTypeExpr.anything()
```

##### `arrayContaining` <a name="arrayContaining" id="@wheatstalk/cdk-assert-state.ArrayTypeExpr.arrayContaining"></a>

```typescript
import { ArrayTypeExpr } from '@wheatstalk/cdk-assert-state'

ArrayTypeExpr.arrayContaining(items: string | number | boolean | object | Expr[])
```

###### `items`<sup>Required</sup> <a name="items" id="@wheatstalk/cdk-assert-state.ArrayTypeExpr.arrayContaining.parameter.items"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>[]

---

##### `arrayType` <a name="arrayType" id="@wheatstalk/cdk-assert-state.ArrayTypeExpr.arrayType"></a>

```typescript
import { ArrayTypeExpr } from '@wheatstalk/cdk-assert-state'

ArrayTypeExpr.arrayType(items: string | number | boolean | object | Expr[])
```

###### `items`<sup>Required</sup> <a name="items" id="@wheatstalk/cdk-assert-state.ArrayTypeExpr.arrayType.parameter.items"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>[]

---

##### `dynamicType` <a name="dynamicType" id="@wheatstalk/cdk-assert-state.ArrayTypeExpr.dynamicType"></a>

```typescript
import { ArrayTypeExpr } from '@wheatstalk/cdk-assert-state'

ArrayTypeExpr.dynamicType(value: string | number | boolean | object | Expr)
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-assert-state.ArrayTypeExpr.dynamicType.parameter.value"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>

---

##### `expect` <a name="expect" id="@wheatstalk/cdk-assert-state.ArrayTypeExpr.expect"></a>

```typescript
import { ArrayTypeExpr } from '@wheatstalk/cdk-assert-state'

ArrayTypeExpr.expect(expression: string | number | boolean | object | Expr)
```

###### `expression`<sup>Required</sup> <a name="expression" id="@wheatstalk/cdk-assert-state.ArrayTypeExpr.expect.parameter.expression"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>

---

##### `input` <a name="input" id="@wheatstalk/cdk-assert-state.ArrayTypeExpr.input"></a>

```typescript
import { ArrayTypeExpr } from '@wheatstalk/cdk-assert-state'

ArrayTypeExpr.input(path?: string)
```

###### `path`<sup>Optional</sup> <a name="path" id="@wheatstalk/cdk-assert-state.ArrayTypeExpr.input.parameter.path"></a>

- *Type:* string

---

##### `objectContaining` <a name="objectContaining" id="@wheatstalk/cdk-assert-state.ArrayTypeExpr.objectContaining"></a>

```typescript
import { ArrayTypeExpr } from '@wheatstalk/cdk-assert-state'

ArrayTypeExpr.objectContaining(record: {[ key: string ]: string | number | boolean | object | Expr})
```

###### `record`<sup>Required</sup> <a name="record" id="@wheatstalk/cdk-assert-state.ArrayTypeExpr.objectContaining.parameter.record"></a>

- *Type:* {[ key: string ]: string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>}

---

##### `objectType` <a name="objectType" id="@wheatstalk/cdk-assert-state.ArrayTypeExpr.objectType"></a>

```typescript
import { ArrayTypeExpr } from '@wheatstalk/cdk-assert-state'

ArrayTypeExpr.objectType(record: {[ key: string ]: string | number | boolean | object | Expr})
```

###### `record`<sup>Required</sup> <a name="record" id="@wheatstalk/cdk-assert-state.ArrayTypeExpr.objectType.parameter.record"></a>

- *Type:* {[ key: string ]: string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>}

---

##### `value` <a name="value" id="@wheatstalk/cdk-assert-state.ArrayTypeExpr.value"></a>

```typescript
import { ArrayTypeExpr } from '@wheatstalk/cdk-assert-state'

ArrayTypeExpr.value(value: string | number | boolean | object)
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-assert-state.ArrayTypeExpr.value.parameter.value"></a>

- *Type:* string | number | boolean | object

---



### Assert <a name="Assert" id="@wheatstalk/cdk-assert-state.Assert"></a>

#### Initializers <a name="Initializers" id="@wheatstalk/cdk-assert-state.Assert.Initializer"></a>

```typescript
import { Assert } from '@wheatstalk/cdk-assert-state'

new Assert()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@wheatstalk/cdk-assert-state.Assert.renderCode">renderCode</a></code> | *No description.* |

---

##### `renderCode` <a name="renderCode" id="@wheatstalk/cdk-assert-state.Assert.renderCode"></a>

```typescript
public renderCode(): string
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@wheatstalk/cdk-assert-state.Assert.expressions">expressions</a></code> | *No description.* |

---

##### `expressions` <a name="expressions" id="@wheatstalk/cdk-assert-state.Assert.expressions"></a>

```typescript
import { Assert } from '@wheatstalk/cdk-assert-state'

Assert.expressions(expressions: Expr[])
```

###### `expressions`<sup>Required</sup> <a name="expressions" id="@wheatstalk/cdk-assert-state.Assert.expressions.parameter.expressions"></a>

- *Type:* <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>[]

---



### AssertExpressions <a name="AssertExpressions" id="@wheatstalk/cdk-assert-state.AssertExpressions"></a>

#### Initializers <a name="Initializers" id="@wheatstalk/cdk-assert-state.AssertExpressions.Initializer"></a>

```typescript
import { AssertExpressions } from '@wheatstalk/cdk-assert-state'

new AssertExpressions(statements: Expr[])
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@wheatstalk/cdk-assert-state.AssertExpressions.Initializer.parameter.statements">statements</a></code> | <code><a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>[]</code> | *No description.* |

---

##### `statements`<sup>Required</sup> <a name="statements" id="@wheatstalk/cdk-assert-state.AssertExpressions.Initializer.parameter.statements"></a>

- *Type:* <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>[]

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@wheatstalk/cdk-assert-state.AssertExpressions.renderCode">renderCode</a></code> | *No description.* |

---

##### `renderCode` <a name="renderCode" id="@wheatstalk/cdk-assert-state.AssertExpressions.renderCode"></a>

```typescript
public renderCode(): string
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@wheatstalk/cdk-assert-state.AssertExpressions.expressions">expressions</a></code> | *No description.* |

---

##### `expressions` <a name="expressions" id="@wheatstalk/cdk-assert-state.AssertExpressions.expressions"></a>

```typescript
import { AssertExpressions } from '@wheatstalk/cdk-assert-state'

AssertExpressions.expressions(expressions: Expr[])
```

###### `expressions`<sup>Required</sup> <a name="expressions" id="@wheatstalk/cdk-assert-state.AssertExpressions.expressions.parameter.expressions"></a>

- *Type:* <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>[]

---



### ExpectExpr <a name="ExpectExpr" id="@wheatstalk/cdk-assert-state.ExpectExpr"></a>

#### Initializers <a name="Initializers" id="@wheatstalk/cdk-assert-state.ExpectExpr.Initializer"></a>

```typescript
import { ExpectExpr } from '@wheatstalk/cdk-assert-state'

new ExpectExpr(expression: Expr)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectExpr.Initializer.parameter.expression">expression</a></code> | <code><a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a></code> | *No description.* |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@wheatstalk/cdk-assert-state.ExpectExpr.Initializer.parameter.expression"></a>

- *Type:* <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectExpr.renderCode">renderCode</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectExpr.toBeCloseTo">toBeCloseTo</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectExpr.toBeDefined">toBeDefined</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectExpr.toBeFalsy">toBeFalsy</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectExpr.toBeGreaterThan">toBeGreaterThan</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectExpr.toBeGreaterThanOrEqual">toBeGreaterThanOrEqual</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectExpr.toBeLessThan">toBeLessThan</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectExpr.toBeLessThanOrEqual">toBeLessThanOrEqual</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectExpr.toBeTruthy">toBeTruthy</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectExpr.toBeUndefined">toBeUndefined</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectExpr.toContain">toContain</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectExpr.toContainEqual">toContainEqual</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectExpr.toEqual">toEqual</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectExpr.toHaveLength">toHaveLength</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectExpr.toHaveProperty">toHaveProperty</a></code> | *No description.* |

---

##### `renderCode` <a name="renderCode" id="@wheatstalk/cdk-assert-state.ExpectExpr.renderCode"></a>

```typescript
public renderCode(): string
```

##### `toBeCloseTo` <a name="toBeCloseTo" id="@wheatstalk/cdk-assert-state.ExpectExpr.toBeCloseTo"></a>

```typescript
public toBeCloseTo(value: number | Expr, digits?: number | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-assert-state.ExpectExpr.toBeCloseTo.parameter.value"></a>

- *Type:* number | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>

---

###### `digits`<sup>Optional</sup> <a name="digits" id="@wheatstalk/cdk-assert-state.ExpectExpr.toBeCloseTo.parameter.digits"></a>

- *Type:* number | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>

---

##### `toBeDefined` <a name="toBeDefined" id="@wheatstalk/cdk-assert-state.ExpectExpr.toBeDefined"></a>

```typescript
public toBeDefined(): Expr
```

##### `toBeFalsy` <a name="toBeFalsy" id="@wheatstalk/cdk-assert-state.ExpectExpr.toBeFalsy"></a>

```typescript
public toBeFalsy(): Expr
```

##### `toBeGreaterThan` <a name="toBeGreaterThan" id="@wheatstalk/cdk-assert-state.ExpectExpr.toBeGreaterThan"></a>

```typescript
public toBeGreaterThan(value: number | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-assert-state.ExpectExpr.toBeGreaterThan.parameter.value"></a>

- *Type:* number | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>

---

##### `toBeGreaterThanOrEqual` <a name="toBeGreaterThanOrEqual" id="@wheatstalk/cdk-assert-state.ExpectExpr.toBeGreaterThanOrEqual"></a>

```typescript
public toBeGreaterThanOrEqual(value: number | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-assert-state.ExpectExpr.toBeGreaterThanOrEqual.parameter.value"></a>

- *Type:* number | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>

---

##### `toBeLessThan` <a name="toBeLessThan" id="@wheatstalk/cdk-assert-state.ExpectExpr.toBeLessThan"></a>

```typescript
public toBeLessThan(value: number | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-assert-state.ExpectExpr.toBeLessThan.parameter.value"></a>

- *Type:* number | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>

---

##### `toBeLessThanOrEqual` <a name="toBeLessThanOrEqual" id="@wheatstalk/cdk-assert-state.ExpectExpr.toBeLessThanOrEqual"></a>

```typescript
public toBeLessThanOrEqual(value: number | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-assert-state.ExpectExpr.toBeLessThanOrEqual.parameter.value"></a>

- *Type:* number | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>

---

##### `toBeTruthy` <a name="toBeTruthy" id="@wheatstalk/cdk-assert-state.ExpectExpr.toBeTruthy"></a>

```typescript
public toBeTruthy(): Expr
```

##### `toBeUndefined` <a name="toBeUndefined" id="@wheatstalk/cdk-assert-state.ExpectExpr.toBeUndefined"></a>

```typescript
public toBeUndefined(): Expr
```

##### `toContain` <a name="toContain" id="@wheatstalk/cdk-assert-state.ExpectExpr.toContain"></a>

```typescript
public toContain(value: string | number | boolean | object): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-assert-state.ExpectExpr.toContain.parameter.value"></a>

- *Type:* string | number | boolean | object

---

##### `toContainEqual` <a name="toContainEqual" id="@wheatstalk/cdk-assert-state.ExpectExpr.toContainEqual"></a>

```typescript
public toContainEqual(value: string | number | boolean | object | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-assert-state.ExpectExpr.toContainEqual.parameter.value"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>

---

##### `toEqual` <a name="toEqual" id="@wheatstalk/cdk-assert-state.ExpectExpr.toEqual"></a>

```typescript
public toEqual(value: string | number | boolean | object | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-assert-state.ExpectExpr.toEqual.parameter.value"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>

---

##### `toHaveLength` <a name="toHaveLength" id="@wheatstalk/cdk-assert-state.ExpectExpr.toHaveLength"></a>

```typescript
public toHaveLength(length: number | Expr): Expr
```

###### `length`<sup>Required</sup> <a name="length" id="@wheatstalk/cdk-assert-state.ExpectExpr.toHaveLength.parameter.length"></a>

- *Type:* number | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>

---

##### `toHaveProperty` <a name="toHaveProperty" id="@wheatstalk/cdk-assert-state.ExpectExpr.toHaveProperty"></a>

```typescript
public toHaveProperty(property: string | Expr, value?: string | number | boolean | object | Expr): Expr
```

###### `property`<sup>Required</sup> <a name="property" id="@wheatstalk/cdk-assert-state.ExpectExpr.toHaveProperty.parameter.property"></a>

- *Type:* string | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>

---

###### `value`<sup>Optional</sup> <a name="value" id="@wheatstalk/cdk-assert-state.ExpectExpr.toHaveProperty.parameter.value"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectExpr.anything">anything</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectExpr.arrayContaining">arrayContaining</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectExpr.arrayType">arrayType</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectExpr.dynamicType">dynamicType</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectExpr.expect">expect</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectExpr.input">input</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectExpr.objectContaining">objectContaining</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectExpr.objectType">objectType</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectExpr.value">value</a></code> | *No description.* |

---

##### `anything` <a name="anything" id="@wheatstalk/cdk-assert-state.ExpectExpr.anything"></a>

```typescript
import { ExpectExpr } from '@wheatstalk/cdk-assert-state'

ExpectExpr.anything()
```

##### `arrayContaining` <a name="arrayContaining" id="@wheatstalk/cdk-assert-state.ExpectExpr.arrayContaining"></a>

```typescript
import { ExpectExpr } from '@wheatstalk/cdk-assert-state'

ExpectExpr.arrayContaining(items: string | number | boolean | object | Expr[])
```

###### `items`<sup>Required</sup> <a name="items" id="@wheatstalk/cdk-assert-state.ExpectExpr.arrayContaining.parameter.items"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>[]

---

##### `arrayType` <a name="arrayType" id="@wheatstalk/cdk-assert-state.ExpectExpr.arrayType"></a>

```typescript
import { ExpectExpr } from '@wheatstalk/cdk-assert-state'

ExpectExpr.arrayType(items: string | number | boolean | object | Expr[])
```

###### `items`<sup>Required</sup> <a name="items" id="@wheatstalk/cdk-assert-state.ExpectExpr.arrayType.parameter.items"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>[]

---

##### `dynamicType` <a name="dynamicType" id="@wheatstalk/cdk-assert-state.ExpectExpr.dynamicType"></a>

```typescript
import { ExpectExpr } from '@wheatstalk/cdk-assert-state'

ExpectExpr.dynamicType(value: string | number | boolean | object | Expr)
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-assert-state.ExpectExpr.dynamicType.parameter.value"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>

---

##### `expect` <a name="expect" id="@wheatstalk/cdk-assert-state.ExpectExpr.expect"></a>

```typescript
import { ExpectExpr } from '@wheatstalk/cdk-assert-state'

ExpectExpr.expect(expression: string | number | boolean | object | Expr)
```

###### `expression`<sup>Required</sup> <a name="expression" id="@wheatstalk/cdk-assert-state.ExpectExpr.expect.parameter.expression"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>

---

##### `input` <a name="input" id="@wheatstalk/cdk-assert-state.ExpectExpr.input"></a>

```typescript
import { ExpectExpr } from '@wheatstalk/cdk-assert-state'

ExpectExpr.input(path?: string)
```

###### `path`<sup>Optional</sup> <a name="path" id="@wheatstalk/cdk-assert-state.ExpectExpr.input.parameter.path"></a>

- *Type:* string

---

##### `objectContaining` <a name="objectContaining" id="@wheatstalk/cdk-assert-state.ExpectExpr.objectContaining"></a>

```typescript
import { ExpectExpr } from '@wheatstalk/cdk-assert-state'

ExpectExpr.objectContaining(record: {[ key: string ]: string | number | boolean | object | Expr})
```

###### `record`<sup>Required</sup> <a name="record" id="@wheatstalk/cdk-assert-state.ExpectExpr.objectContaining.parameter.record"></a>

- *Type:* {[ key: string ]: string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>}

---

##### `objectType` <a name="objectType" id="@wheatstalk/cdk-assert-state.ExpectExpr.objectType"></a>

```typescript
import { ExpectExpr } from '@wheatstalk/cdk-assert-state'

ExpectExpr.objectType(record: {[ key: string ]: string | number | boolean | object | Expr})
```

###### `record`<sup>Required</sup> <a name="record" id="@wheatstalk/cdk-assert-state.ExpectExpr.objectType.parameter.record"></a>

- *Type:* {[ key: string ]: string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>}

---

##### `value` <a name="value" id="@wheatstalk/cdk-assert-state.ExpectExpr.value"></a>

```typescript
import { ExpectExpr } from '@wheatstalk/cdk-assert-state'

ExpectExpr.value(value: string | number | boolean | object)
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-assert-state.ExpectExpr.value.parameter.value"></a>

- *Type:* string | number | boolean | object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectExpr.property.not">not</a></code> | <code><a href="#@wheatstalk/cdk-assert-state.ExpectNotExpr">ExpectNotExpr</a></code> | *No description.* |

---

##### `not`<sup>Required</sup> <a name="not" id="@wheatstalk/cdk-assert-state.ExpectExpr.property.not"></a>

```typescript
public readonly not: ExpectNotExpr;
```

- *Type:* <a href="#@wheatstalk/cdk-assert-state.ExpectNotExpr">ExpectNotExpr</a>

---


### ExpectExprBase <a name="ExpectExprBase" id="@wheatstalk/cdk-assert-state.ExpectExprBase"></a>

#### Initializers <a name="Initializers" id="@wheatstalk/cdk-assert-state.ExpectExprBase.Initializer"></a>

```typescript
import { ExpectExprBase } from '@wheatstalk/cdk-assert-state'

new ExpectExprBase()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectExprBase.renderCode">renderCode</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectExprBase.toBeCloseTo">toBeCloseTo</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectExprBase.toBeDefined">toBeDefined</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectExprBase.toBeFalsy">toBeFalsy</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectExprBase.toBeGreaterThan">toBeGreaterThan</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectExprBase.toBeGreaterThanOrEqual">toBeGreaterThanOrEqual</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectExprBase.toBeLessThan">toBeLessThan</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectExprBase.toBeLessThanOrEqual">toBeLessThanOrEqual</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectExprBase.toBeTruthy">toBeTruthy</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectExprBase.toBeUndefined">toBeUndefined</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectExprBase.toContain">toContain</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectExprBase.toContainEqual">toContainEqual</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectExprBase.toEqual">toEqual</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectExprBase.toHaveLength">toHaveLength</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectExprBase.toHaveProperty">toHaveProperty</a></code> | *No description.* |

---

##### `renderCode` <a name="renderCode" id="@wheatstalk/cdk-assert-state.ExpectExprBase.renderCode"></a>

```typescript
public renderCode(): string
```

##### `toBeCloseTo` <a name="toBeCloseTo" id="@wheatstalk/cdk-assert-state.ExpectExprBase.toBeCloseTo"></a>

```typescript
public toBeCloseTo(value: number | Expr, digits?: number | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-assert-state.ExpectExprBase.toBeCloseTo.parameter.value"></a>

- *Type:* number | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>

---

###### `digits`<sup>Optional</sup> <a name="digits" id="@wheatstalk/cdk-assert-state.ExpectExprBase.toBeCloseTo.parameter.digits"></a>

- *Type:* number | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>

---

##### `toBeDefined` <a name="toBeDefined" id="@wheatstalk/cdk-assert-state.ExpectExprBase.toBeDefined"></a>

```typescript
public toBeDefined(): Expr
```

##### `toBeFalsy` <a name="toBeFalsy" id="@wheatstalk/cdk-assert-state.ExpectExprBase.toBeFalsy"></a>

```typescript
public toBeFalsy(): Expr
```

##### `toBeGreaterThan` <a name="toBeGreaterThan" id="@wheatstalk/cdk-assert-state.ExpectExprBase.toBeGreaterThan"></a>

```typescript
public toBeGreaterThan(value: number | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-assert-state.ExpectExprBase.toBeGreaterThan.parameter.value"></a>

- *Type:* number | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>

---

##### `toBeGreaterThanOrEqual` <a name="toBeGreaterThanOrEqual" id="@wheatstalk/cdk-assert-state.ExpectExprBase.toBeGreaterThanOrEqual"></a>

```typescript
public toBeGreaterThanOrEqual(value: number | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-assert-state.ExpectExprBase.toBeGreaterThanOrEqual.parameter.value"></a>

- *Type:* number | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>

---

##### `toBeLessThan` <a name="toBeLessThan" id="@wheatstalk/cdk-assert-state.ExpectExprBase.toBeLessThan"></a>

```typescript
public toBeLessThan(value: number | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-assert-state.ExpectExprBase.toBeLessThan.parameter.value"></a>

- *Type:* number | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>

---

##### `toBeLessThanOrEqual` <a name="toBeLessThanOrEqual" id="@wheatstalk/cdk-assert-state.ExpectExprBase.toBeLessThanOrEqual"></a>

```typescript
public toBeLessThanOrEqual(value: number | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-assert-state.ExpectExprBase.toBeLessThanOrEqual.parameter.value"></a>

- *Type:* number | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>

---

##### `toBeTruthy` <a name="toBeTruthy" id="@wheatstalk/cdk-assert-state.ExpectExprBase.toBeTruthy"></a>

```typescript
public toBeTruthy(): Expr
```

##### `toBeUndefined` <a name="toBeUndefined" id="@wheatstalk/cdk-assert-state.ExpectExprBase.toBeUndefined"></a>

```typescript
public toBeUndefined(): Expr
```

##### `toContain` <a name="toContain" id="@wheatstalk/cdk-assert-state.ExpectExprBase.toContain"></a>

```typescript
public toContain(value: string | number | boolean | object): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-assert-state.ExpectExprBase.toContain.parameter.value"></a>

- *Type:* string | number | boolean | object

---

##### `toContainEqual` <a name="toContainEqual" id="@wheatstalk/cdk-assert-state.ExpectExprBase.toContainEqual"></a>

```typescript
public toContainEqual(value: string | number | boolean | object | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-assert-state.ExpectExprBase.toContainEqual.parameter.value"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>

---

##### `toEqual` <a name="toEqual" id="@wheatstalk/cdk-assert-state.ExpectExprBase.toEqual"></a>

```typescript
public toEqual(value: string | number | boolean | object | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-assert-state.ExpectExprBase.toEqual.parameter.value"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>

---

##### `toHaveLength` <a name="toHaveLength" id="@wheatstalk/cdk-assert-state.ExpectExprBase.toHaveLength"></a>

```typescript
public toHaveLength(length: number | Expr): Expr
```

###### `length`<sup>Required</sup> <a name="length" id="@wheatstalk/cdk-assert-state.ExpectExprBase.toHaveLength.parameter.length"></a>

- *Type:* number | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>

---

##### `toHaveProperty` <a name="toHaveProperty" id="@wheatstalk/cdk-assert-state.ExpectExprBase.toHaveProperty"></a>

```typescript
public toHaveProperty(property: string | Expr, value?: string | number | boolean | object | Expr): Expr
```

###### `property`<sup>Required</sup> <a name="property" id="@wheatstalk/cdk-assert-state.ExpectExprBase.toHaveProperty.parameter.property"></a>

- *Type:* string | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>

---

###### `value`<sup>Optional</sup> <a name="value" id="@wheatstalk/cdk-assert-state.ExpectExprBase.toHaveProperty.parameter.value"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectExprBase.anything">anything</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectExprBase.arrayContaining">arrayContaining</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectExprBase.arrayType">arrayType</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectExprBase.dynamicType">dynamicType</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectExprBase.expect">expect</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectExprBase.input">input</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectExprBase.objectContaining">objectContaining</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectExprBase.objectType">objectType</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectExprBase.value">value</a></code> | *No description.* |

---

##### `anything` <a name="anything" id="@wheatstalk/cdk-assert-state.ExpectExprBase.anything"></a>

```typescript
import { ExpectExprBase } from '@wheatstalk/cdk-assert-state'

ExpectExprBase.anything()
```

##### `arrayContaining` <a name="arrayContaining" id="@wheatstalk/cdk-assert-state.ExpectExprBase.arrayContaining"></a>

```typescript
import { ExpectExprBase } from '@wheatstalk/cdk-assert-state'

ExpectExprBase.arrayContaining(items: string | number | boolean | object | Expr[])
```

###### `items`<sup>Required</sup> <a name="items" id="@wheatstalk/cdk-assert-state.ExpectExprBase.arrayContaining.parameter.items"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>[]

---

##### `arrayType` <a name="arrayType" id="@wheatstalk/cdk-assert-state.ExpectExprBase.arrayType"></a>

```typescript
import { ExpectExprBase } from '@wheatstalk/cdk-assert-state'

ExpectExprBase.arrayType(items: string | number | boolean | object | Expr[])
```

###### `items`<sup>Required</sup> <a name="items" id="@wheatstalk/cdk-assert-state.ExpectExprBase.arrayType.parameter.items"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>[]

---

##### `dynamicType` <a name="dynamicType" id="@wheatstalk/cdk-assert-state.ExpectExprBase.dynamicType"></a>

```typescript
import { ExpectExprBase } from '@wheatstalk/cdk-assert-state'

ExpectExprBase.dynamicType(value: string | number | boolean | object | Expr)
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-assert-state.ExpectExprBase.dynamicType.parameter.value"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>

---

##### `expect` <a name="expect" id="@wheatstalk/cdk-assert-state.ExpectExprBase.expect"></a>

```typescript
import { ExpectExprBase } from '@wheatstalk/cdk-assert-state'

ExpectExprBase.expect(expression: string | number | boolean | object | Expr)
```

###### `expression`<sup>Required</sup> <a name="expression" id="@wheatstalk/cdk-assert-state.ExpectExprBase.expect.parameter.expression"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>

---

##### `input` <a name="input" id="@wheatstalk/cdk-assert-state.ExpectExprBase.input"></a>

```typescript
import { ExpectExprBase } from '@wheatstalk/cdk-assert-state'

ExpectExprBase.input(path?: string)
```

###### `path`<sup>Optional</sup> <a name="path" id="@wheatstalk/cdk-assert-state.ExpectExprBase.input.parameter.path"></a>

- *Type:* string

---

##### `objectContaining` <a name="objectContaining" id="@wheatstalk/cdk-assert-state.ExpectExprBase.objectContaining"></a>

```typescript
import { ExpectExprBase } from '@wheatstalk/cdk-assert-state'

ExpectExprBase.objectContaining(record: {[ key: string ]: string | number | boolean | object | Expr})
```

###### `record`<sup>Required</sup> <a name="record" id="@wheatstalk/cdk-assert-state.ExpectExprBase.objectContaining.parameter.record"></a>

- *Type:* {[ key: string ]: string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>}

---

##### `objectType` <a name="objectType" id="@wheatstalk/cdk-assert-state.ExpectExprBase.objectType"></a>

```typescript
import { ExpectExprBase } from '@wheatstalk/cdk-assert-state'

ExpectExprBase.objectType(record: {[ key: string ]: string | number | boolean | object | Expr})
```

###### `record`<sup>Required</sup> <a name="record" id="@wheatstalk/cdk-assert-state.ExpectExprBase.objectType.parameter.record"></a>

- *Type:* {[ key: string ]: string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>}

---

##### `value` <a name="value" id="@wheatstalk/cdk-assert-state.ExpectExprBase.value"></a>

```typescript
import { ExpectExprBase } from '@wheatstalk/cdk-assert-state'

ExpectExprBase.value(value: string | number | boolean | object)
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-assert-state.ExpectExprBase.value.parameter.value"></a>

- *Type:* string | number | boolean | object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectExprBase.property.not">not</a></code> | <code><a href="#@wheatstalk/cdk-assert-state.ExpectNotExpr">ExpectNotExpr</a></code> | *No description.* |

---

##### `not`<sup>Required</sup> <a name="not" id="@wheatstalk/cdk-assert-state.ExpectExprBase.property.not"></a>

```typescript
public readonly not: ExpectNotExpr;
```

- *Type:* <a href="#@wheatstalk/cdk-assert-state.ExpectNotExpr">ExpectNotExpr</a>

---


### ExpectNotExpr <a name="ExpectNotExpr" id="@wheatstalk/cdk-assert-state.ExpectNotExpr"></a>

#### Initializers <a name="Initializers" id="@wheatstalk/cdk-assert-state.ExpectNotExpr.Initializer"></a>

```typescript
import { ExpectNotExpr } from '@wheatstalk/cdk-assert-state'

new ExpectNotExpr(parent: Expr)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectNotExpr.Initializer.parameter.parent">parent</a></code> | <code><a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a></code> | *No description.* |

---

##### `parent`<sup>Required</sup> <a name="parent" id="@wheatstalk/cdk-assert-state.ExpectNotExpr.Initializer.parameter.parent"></a>

- *Type:* <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectNotExpr.renderCode">renderCode</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectNotExpr.toBeCloseTo">toBeCloseTo</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectNotExpr.toBeDefined">toBeDefined</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectNotExpr.toBeFalsy">toBeFalsy</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectNotExpr.toBeGreaterThan">toBeGreaterThan</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectNotExpr.toBeGreaterThanOrEqual">toBeGreaterThanOrEqual</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectNotExpr.toBeLessThan">toBeLessThan</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectNotExpr.toBeLessThanOrEqual">toBeLessThanOrEqual</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectNotExpr.toBeTruthy">toBeTruthy</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectNotExpr.toBeUndefined">toBeUndefined</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectNotExpr.toContain">toContain</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectNotExpr.toContainEqual">toContainEqual</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectNotExpr.toEqual">toEqual</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectNotExpr.toHaveLength">toHaveLength</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectNotExpr.toHaveProperty">toHaveProperty</a></code> | *No description.* |

---

##### `renderCode` <a name="renderCode" id="@wheatstalk/cdk-assert-state.ExpectNotExpr.renderCode"></a>

```typescript
public renderCode(): string
```

##### `toBeCloseTo` <a name="toBeCloseTo" id="@wheatstalk/cdk-assert-state.ExpectNotExpr.toBeCloseTo"></a>

```typescript
public toBeCloseTo(value: number | Expr, digits?: number | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-assert-state.ExpectNotExpr.toBeCloseTo.parameter.value"></a>

- *Type:* number | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>

---

###### `digits`<sup>Optional</sup> <a name="digits" id="@wheatstalk/cdk-assert-state.ExpectNotExpr.toBeCloseTo.parameter.digits"></a>

- *Type:* number | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>

---

##### `toBeDefined` <a name="toBeDefined" id="@wheatstalk/cdk-assert-state.ExpectNotExpr.toBeDefined"></a>

```typescript
public toBeDefined(): Expr
```

##### `toBeFalsy` <a name="toBeFalsy" id="@wheatstalk/cdk-assert-state.ExpectNotExpr.toBeFalsy"></a>

```typescript
public toBeFalsy(): Expr
```

##### `toBeGreaterThan` <a name="toBeGreaterThan" id="@wheatstalk/cdk-assert-state.ExpectNotExpr.toBeGreaterThan"></a>

```typescript
public toBeGreaterThan(value: number | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-assert-state.ExpectNotExpr.toBeGreaterThan.parameter.value"></a>

- *Type:* number | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>

---

##### `toBeGreaterThanOrEqual` <a name="toBeGreaterThanOrEqual" id="@wheatstalk/cdk-assert-state.ExpectNotExpr.toBeGreaterThanOrEqual"></a>

```typescript
public toBeGreaterThanOrEqual(value: number | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-assert-state.ExpectNotExpr.toBeGreaterThanOrEqual.parameter.value"></a>

- *Type:* number | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>

---

##### `toBeLessThan` <a name="toBeLessThan" id="@wheatstalk/cdk-assert-state.ExpectNotExpr.toBeLessThan"></a>

```typescript
public toBeLessThan(value: number | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-assert-state.ExpectNotExpr.toBeLessThan.parameter.value"></a>

- *Type:* number | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>

---

##### `toBeLessThanOrEqual` <a name="toBeLessThanOrEqual" id="@wheatstalk/cdk-assert-state.ExpectNotExpr.toBeLessThanOrEqual"></a>

```typescript
public toBeLessThanOrEqual(value: number | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-assert-state.ExpectNotExpr.toBeLessThanOrEqual.parameter.value"></a>

- *Type:* number | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>

---

##### `toBeTruthy` <a name="toBeTruthy" id="@wheatstalk/cdk-assert-state.ExpectNotExpr.toBeTruthy"></a>

```typescript
public toBeTruthy(): Expr
```

##### `toBeUndefined` <a name="toBeUndefined" id="@wheatstalk/cdk-assert-state.ExpectNotExpr.toBeUndefined"></a>

```typescript
public toBeUndefined(): Expr
```

##### `toContain` <a name="toContain" id="@wheatstalk/cdk-assert-state.ExpectNotExpr.toContain"></a>

```typescript
public toContain(value: string | number | boolean | object): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-assert-state.ExpectNotExpr.toContain.parameter.value"></a>

- *Type:* string | number | boolean | object

---

##### `toContainEqual` <a name="toContainEqual" id="@wheatstalk/cdk-assert-state.ExpectNotExpr.toContainEqual"></a>

```typescript
public toContainEqual(value: string | number | boolean | object | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-assert-state.ExpectNotExpr.toContainEqual.parameter.value"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>

---

##### `toEqual` <a name="toEqual" id="@wheatstalk/cdk-assert-state.ExpectNotExpr.toEqual"></a>

```typescript
public toEqual(value: string | number | boolean | object | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-assert-state.ExpectNotExpr.toEqual.parameter.value"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>

---

##### `toHaveLength` <a name="toHaveLength" id="@wheatstalk/cdk-assert-state.ExpectNotExpr.toHaveLength"></a>

```typescript
public toHaveLength(length: number | Expr): Expr
```

###### `length`<sup>Required</sup> <a name="length" id="@wheatstalk/cdk-assert-state.ExpectNotExpr.toHaveLength.parameter.length"></a>

- *Type:* number | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>

---

##### `toHaveProperty` <a name="toHaveProperty" id="@wheatstalk/cdk-assert-state.ExpectNotExpr.toHaveProperty"></a>

```typescript
public toHaveProperty(property: string | Expr, value?: string | number | boolean | object | Expr): Expr
```

###### `property`<sup>Required</sup> <a name="property" id="@wheatstalk/cdk-assert-state.ExpectNotExpr.toHaveProperty.parameter.property"></a>

- *Type:* string | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>

---

###### `value`<sup>Optional</sup> <a name="value" id="@wheatstalk/cdk-assert-state.ExpectNotExpr.toHaveProperty.parameter.value"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectNotExpr.anything">anything</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectNotExpr.arrayContaining">arrayContaining</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectNotExpr.arrayType">arrayType</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectNotExpr.dynamicType">dynamicType</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectNotExpr.expect">expect</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectNotExpr.input">input</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectNotExpr.objectContaining">objectContaining</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectNotExpr.objectType">objectType</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectNotExpr.value">value</a></code> | *No description.* |

---

##### `anything` <a name="anything" id="@wheatstalk/cdk-assert-state.ExpectNotExpr.anything"></a>

```typescript
import { ExpectNotExpr } from '@wheatstalk/cdk-assert-state'

ExpectNotExpr.anything()
```

##### `arrayContaining` <a name="arrayContaining" id="@wheatstalk/cdk-assert-state.ExpectNotExpr.arrayContaining"></a>

```typescript
import { ExpectNotExpr } from '@wheatstalk/cdk-assert-state'

ExpectNotExpr.arrayContaining(items: string | number | boolean | object | Expr[])
```

###### `items`<sup>Required</sup> <a name="items" id="@wheatstalk/cdk-assert-state.ExpectNotExpr.arrayContaining.parameter.items"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>[]

---

##### `arrayType` <a name="arrayType" id="@wheatstalk/cdk-assert-state.ExpectNotExpr.arrayType"></a>

```typescript
import { ExpectNotExpr } from '@wheatstalk/cdk-assert-state'

ExpectNotExpr.arrayType(items: string | number | boolean | object | Expr[])
```

###### `items`<sup>Required</sup> <a name="items" id="@wheatstalk/cdk-assert-state.ExpectNotExpr.arrayType.parameter.items"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>[]

---

##### `dynamicType` <a name="dynamicType" id="@wheatstalk/cdk-assert-state.ExpectNotExpr.dynamicType"></a>

```typescript
import { ExpectNotExpr } from '@wheatstalk/cdk-assert-state'

ExpectNotExpr.dynamicType(value: string | number | boolean | object | Expr)
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-assert-state.ExpectNotExpr.dynamicType.parameter.value"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>

---

##### `expect` <a name="expect" id="@wheatstalk/cdk-assert-state.ExpectNotExpr.expect"></a>

```typescript
import { ExpectNotExpr } from '@wheatstalk/cdk-assert-state'

ExpectNotExpr.expect(expression: string | number | boolean | object | Expr)
```

###### `expression`<sup>Required</sup> <a name="expression" id="@wheatstalk/cdk-assert-state.ExpectNotExpr.expect.parameter.expression"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>

---

##### `input` <a name="input" id="@wheatstalk/cdk-assert-state.ExpectNotExpr.input"></a>

```typescript
import { ExpectNotExpr } from '@wheatstalk/cdk-assert-state'

ExpectNotExpr.input(path?: string)
```

###### `path`<sup>Optional</sup> <a name="path" id="@wheatstalk/cdk-assert-state.ExpectNotExpr.input.parameter.path"></a>

- *Type:* string

---

##### `objectContaining` <a name="objectContaining" id="@wheatstalk/cdk-assert-state.ExpectNotExpr.objectContaining"></a>

```typescript
import { ExpectNotExpr } from '@wheatstalk/cdk-assert-state'

ExpectNotExpr.objectContaining(record: {[ key: string ]: string | number | boolean | object | Expr})
```

###### `record`<sup>Required</sup> <a name="record" id="@wheatstalk/cdk-assert-state.ExpectNotExpr.objectContaining.parameter.record"></a>

- *Type:* {[ key: string ]: string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>}

---

##### `objectType` <a name="objectType" id="@wheatstalk/cdk-assert-state.ExpectNotExpr.objectType"></a>

```typescript
import { ExpectNotExpr } from '@wheatstalk/cdk-assert-state'

ExpectNotExpr.objectType(record: {[ key: string ]: string | number | boolean | object | Expr})
```

###### `record`<sup>Required</sup> <a name="record" id="@wheatstalk/cdk-assert-state.ExpectNotExpr.objectType.parameter.record"></a>

- *Type:* {[ key: string ]: string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>}

---

##### `value` <a name="value" id="@wheatstalk/cdk-assert-state.ExpectNotExpr.value"></a>

```typescript
import { ExpectNotExpr } from '@wheatstalk/cdk-assert-state'

ExpectNotExpr.value(value: string | number | boolean | object)
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-assert-state.ExpectNotExpr.value.parameter.value"></a>

- *Type:* string | number | boolean | object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@wheatstalk/cdk-assert-state.ExpectNotExpr.property.not">not</a></code> | <code><a href="#@wheatstalk/cdk-assert-state.ExpectNotExpr">ExpectNotExpr</a></code> | *No description.* |

---

##### `not`<sup>Required</sup> <a name="not" id="@wheatstalk/cdk-assert-state.ExpectNotExpr.property.not"></a>

```typescript
public readonly not: ExpectNotExpr;
```

- *Type:* <a href="#@wheatstalk/cdk-assert-state.ExpectNotExpr">ExpectNotExpr</a>

---


### Expr <a name="Expr" id="@wheatstalk/cdk-assert-state.Expr"></a>

#### Initializers <a name="Initializers" id="@wheatstalk/cdk-assert-state.Expr.Initializer"></a>

```typescript
import { Expr } from '@wheatstalk/cdk-assert-state'

new Expr()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@wheatstalk/cdk-assert-state.Expr.renderCode">renderCode</a></code> | *No description.* |

---

##### `renderCode` <a name="renderCode" id="@wheatstalk/cdk-assert-state.Expr.renderCode"></a>

```typescript
public renderCode(): string
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@wheatstalk/cdk-assert-state.Expr.anything">anything</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.Expr.arrayContaining">arrayContaining</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.Expr.arrayType">arrayType</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.Expr.dynamicType">dynamicType</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.Expr.expect">expect</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.Expr.input">input</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.Expr.objectContaining">objectContaining</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.Expr.objectType">objectType</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.Expr.value">value</a></code> | *No description.* |

---

##### `anything` <a name="anything" id="@wheatstalk/cdk-assert-state.Expr.anything"></a>

```typescript
import { Expr } from '@wheatstalk/cdk-assert-state'

Expr.anything()
```

##### `arrayContaining` <a name="arrayContaining" id="@wheatstalk/cdk-assert-state.Expr.arrayContaining"></a>

```typescript
import { Expr } from '@wheatstalk/cdk-assert-state'

Expr.arrayContaining(items: string | number | boolean | object | Expr[])
```

###### `items`<sup>Required</sup> <a name="items" id="@wheatstalk/cdk-assert-state.Expr.arrayContaining.parameter.items"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>[]

---

##### `arrayType` <a name="arrayType" id="@wheatstalk/cdk-assert-state.Expr.arrayType"></a>

```typescript
import { Expr } from '@wheatstalk/cdk-assert-state'

Expr.arrayType(items: string | number | boolean | object | Expr[])
```

###### `items`<sup>Required</sup> <a name="items" id="@wheatstalk/cdk-assert-state.Expr.arrayType.parameter.items"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>[]

---

##### `dynamicType` <a name="dynamicType" id="@wheatstalk/cdk-assert-state.Expr.dynamicType"></a>

```typescript
import { Expr } from '@wheatstalk/cdk-assert-state'

Expr.dynamicType(value: string | number | boolean | object | Expr)
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-assert-state.Expr.dynamicType.parameter.value"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>

---

##### `expect` <a name="expect" id="@wheatstalk/cdk-assert-state.Expr.expect"></a>

```typescript
import { Expr } from '@wheatstalk/cdk-assert-state'

Expr.expect(expression: string | number | boolean | object | Expr)
```

###### `expression`<sup>Required</sup> <a name="expression" id="@wheatstalk/cdk-assert-state.Expr.expect.parameter.expression"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>

---

##### `input` <a name="input" id="@wheatstalk/cdk-assert-state.Expr.input"></a>

```typescript
import { Expr } from '@wheatstalk/cdk-assert-state'

Expr.input(path?: string)
```

###### `path`<sup>Optional</sup> <a name="path" id="@wheatstalk/cdk-assert-state.Expr.input.parameter.path"></a>

- *Type:* string

---

##### `objectContaining` <a name="objectContaining" id="@wheatstalk/cdk-assert-state.Expr.objectContaining"></a>

```typescript
import { Expr } from '@wheatstalk/cdk-assert-state'

Expr.objectContaining(record: {[ key: string ]: string | number | boolean | object | Expr})
```

###### `record`<sup>Required</sup> <a name="record" id="@wheatstalk/cdk-assert-state.Expr.objectContaining.parameter.record"></a>

- *Type:* {[ key: string ]: string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>}

---

##### `objectType` <a name="objectType" id="@wheatstalk/cdk-assert-state.Expr.objectType"></a>

```typescript
import { Expr } from '@wheatstalk/cdk-assert-state'

Expr.objectType(record: {[ key: string ]: string | number | boolean | object | Expr})
```

###### `record`<sup>Required</sup> <a name="record" id="@wheatstalk/cdk-assert-state.Expr.objectType.parameter.record"></a>

- *Type:* {[ key: string ]: string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>}

---

##### `value` <a name="value" id="@wheatstalk/cdk-assert-state.Expr.value"></a>

```typescript
import { Expr } from '@wheatstalk/cdk-assert-state'

Expr.value(value: string | number | boolean | object)
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-assert-state.Expr.value.parameter.value"></a>

- *Type:* string | number | boolean | object

---



### MemberCallExpr <a name="MemberCallExpr" id="@wheatstalk/cdk-assert-state.MemberCallExpr"></a>

#### Initializers <a name="Initializers" id="@wheatstalk/cdk-assert-state.MemberCallExpr.Initializer"></a>

```typescript
import { MemberCallExpr } from '@wheatstalk/cdk-assert-state'

new MemberCallExpr(parent: Expr, member: string, args: Expr[])
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@wheatstalk/cdk-assert-state.MemberCallExpr.Initializer.parameter.parent">parent</a></code> | <code><a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.MemberCallExpr.Initializer.parameter.member">member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.MemberCallExpr.Initializer.parameter.args">args</a></code> | <code><a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>[]</code> | *No description.* |

---

##### `parent`<sup>Required</sup> <a name="parent" id="@wheatstalk/cdk-assert-state.MemberCallExpr.Initializer.parameter.parent"></a>

- *Type:* <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>

---

##### `member`<sup>Required</sup> <a name="member" id="@wheatstalk/cdk-assert-state.MemberCallExpr.Initializer.parameter.member"></a>

- *Type:* string

---

##### `args`<sup>Required</sup> <a name="args" id="@wheatstalk/cdk-assert-state.MemberCallExpr.Initializer.parameter.args"></a>

- *Type:* <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>[]

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@wheatstalk/cdk-assert-state.MemberCallExpr.renderCode">renderCode</a></code> | *No description.* |

---

##### `renderCode` <a name="renderCode" id="@wheatstalk/cdk-assert-state.MemberCallExpr.renderCode"></a>

```typescript
public renderCode(): string
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@wheatstalk/cdk-assert-state.MemberCallExpr.anything">anything</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.MemberCallExpr.arrayContaining">arrayContaining</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.MemberCallExpr.arrayType">arrayType</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.MemberCallExpr.dynamicType">dynamicType</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.MemberCallExpr.expect">expect</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.MemberCallExpr.input">input</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.MemberCallExpr.objectContaining">objectContaining</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.MemberCallExpr.objectType">objectType</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.MemberCallExpr.value">value</a></code> | *No description.* |

---

##### `anything` <a name="anything" id="@wheatstalk/cdk-assert-state.MemberCallExpr.anything"></a>

```typescript
import { MemberCallExpr } from '@wheatstalk/cdk-assert-state'

MemberCallExpr.anything()
```

##### `arrayContaining` <a name="arrayContaining" id="@wheatstalk/cdk-assert-state.MemberCallExpr.arrayContaining"></a>

```typescript
import { MemberCallExpr } from '@wheatstalk/cdk-assert-state'

MemberCallExpr.arrayContaining(items: string | number | boolean | object | Expr[])
```

###### `items`<sup>Required</sup> <a name="items" id="@wheatstalk/cdk-assert-state.MemberCallExpr.arrayContaining.parameter.items"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>[]

---

##### `arrayType` <a name="arrayType" id="@wheatstalk/cdk-assert-state.MemberCallExpr.arrayType"></a>

```typescript
import { MemberCallExpr } from '@wheatstalk/cdk-assert-state'

MemberCallExpr.arrayType(items: string | number | boolean | object | Expr[])
```

###### `items`<sup>Required</sup> <a name="items" id="@wheatstalk/cdk-assert-state.MemberCallExpr.arrayType.parameter.items"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>[]

---

##### `dynamicType` <a name="dynamicType" id="@wheatstalk/cdk-assert-state.MemberCallExpr.dynamicType"></a>

```typescript
import { MemberCallExpr } from '@wheatstalk/cdk-assert-state'

MemberCallExpr.dynamicType(value: string | number | boolean | object | Expr)
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-assert-state.MemberCallExpr.dynamicType.parameter.value"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>

---

##### `expect` <a name="expect" id="@wheatstalk/cdk-assert-state.MemberCallExpr.expect"></a>

```typescript
import { MemberCallExpr } from '@wheatstalk/cdk-assert-state'

MemberCallExpr.expect(expression: string | number | boolean | object | Expr)
```

###### `expression`<sup>Required</sup> <a name="expression" id="@wheatstalk/cdk-assert-state.MemberCallExpr.expect.parameter.expression"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>

---

##### `input` <a name="input" id="@wheatstalk/cdk-assert-state.MemberCallExpr.input"></a>

```typescript
import { MemberCallExpr } from '@wheatstalk/cdk-assert-state'

MemberCallExpr.input(path?: string)
```

###### `path`<sup>Optional</sup> <a name="path" id="@wheatstalk/cdk-assert-state.MemberCallExpr.input.parameter.path"></a>

- *Type:* string

---

##### `objectContaining` <a name="objectContaining" id="@wheatstalk/cdk-assert-state.MemberCallExpr.objectContaining"></a>

```typescript
import { MemberCallExpr } from '@wheatstalk/cdk-assert-state'

MemberCallExpr.objectContaining(record: {[ key: string ]: string | number | boolean | object | Expr})
```

###### `record`<sup>Required</sup> <a name="record" id="@wheatstalk/cdk-assert-state.MemberCallExpr.objectContaining.parameter.record"></a>

- *Type:* {[ key: string ]: string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>}

---

##### `objectType` <a name="objectType" id="@wheatstalk/cdk-assert-state.MemberCallExpr.objectType"></a>

```typescript
import { MemberCallExpr } from '@wheatstalk/cdk-assert-state'

MemberCallExpr.objectType(record: {[ key: string ]: string | number | boolean | object | Expr})
```

###### `record`<sup>Required</sup> <a name="record" id="@wheatstalk/cdk-assert-state.MemberCallExpr.objectType.parameter.record"></a>

- *Type:* {[ key: string ]: string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>}

---

##### `value` <a name="value" id="@wheatstalk/cdk-assert-state.MemberCallExpr.value"></a>

```typescript
import { MemberCallExpr } from '@wheatstalk/cdk-assert-state'

MemberCallExpr.value(value: string | number | boolean | object)
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-assert-state.MemberCallExpr.value.parameter.value"></a>

- *Type:* string | number | boolean | object

---



### ObjectTypeExpr <a name="ObjectTypeExpr" id="@wheatstalk/cdk-assert-state.ObjectTypeExpr"></a>

#### Initializers <a name="Initializers" id="@wheatstalk/cdk-assert-state.ObjectTypeExpr.Initializer"></a>

```typescript
import { ObjectTypeExpr } from '@wheatstalk/cdk-assert-state'

new ObjectTypeExpr(record: {[ key: string ]: string | number | boolean | object | Expr})
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@wheatstalk/cdk-assert-state.ObjectTypeExpr.Initializer.parameter.record">record</a></code> | <code>{[ key: string ]: string \| number \| boolean \| object \| <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>}</code> | *No description.* |

---

##### `record`<sup>Required</sup> <a name="record" id="@wheatstalk/cdk-assert-state.ObjectTypeExpr.Initializer.parameter.record"></a>

- *Type:* {[ key: string ]: string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@wheatstalk/cdk-assert-state.ObjectTypeExpr.renderCode">renderCode</a></code> | *No description.* |

---

##### `renderCode` <a name="renderCode" id="@wheatstalk/cdk-assert-state.ObjectTypeExpr.renderCode"></a>

```typescript
public renderCode(): string
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@wheatstalk/cdk-assert-state.ObjectTypeExpr.anything">anything</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ObjectTypeExpr.arrayContaining">arrayContaining</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ObjectTypeExpr.arrayType">arrayType</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ObjectTypeExpr.dynamicType">dynamicType</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ObjectTypeExpr.expect">expect</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ObjectTypeExpr.input">input</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ObjectTypeExpr.objectContaining">objectContaining</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ObjectTypeExpr.objectType">objectType</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ObjectTypeExpr.value">value</a></code> | *No description.* |

---

##### `anything` <a name="anything" id="@wheatstalk/cdk-assert-state.ObjectTypeExpr.anything"></a>

```typescript
import { ObjectTypeExpr } from '@wheatstalk/cdk-assert-state'

ObjectTypeExpr.anything()
```

##### `arrayContaining` <a name="arrayContaining" id="@wheatstalk/cdk-assert-state.ObjectTypeExpr.arrayContaining"></a>

```typescript
import { ObjectTypeExpr } from '@wheatstalk/cdk-assert-state'

ObjectTypeExpr.arrayContaining(items: string | number | boolean | object | Expr[])
```

###### `items`<sup>Required</sup> <a name="items" id="@wheatstalk/cdk-assert-state.ObjectTypeExpr.arrayContaining.parameter.items"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>[]

---

##### `arrayType` <a name="arrayType" id="@wheatstalk/cdk-assert-state.ObjectTypeExpr.arrayType"></a>

```typescript
import { ObjectTypeExpr } from '@wheatstalk/cdk-assert-state'

ObjectTypeExpr.arrayType(items: string | number | boolean | object | Expr[])
```

###### `items`<sup>Required</sup> <a name="items" id="@wheatstalk/cdk-assert-state.ObjectTypeExpr.arrayType.parameter.items"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>[]

---

##### `dynamicType` <a name="dynamicType" id="@wheatstalk/cdk-assert-state.ObjectTypeExpr.dynamicType"></a>

```typescript
import { ObjectTypeExpr } from '@wheatstalk/cdk-assert-state'

ObjectTypeExpr.dynamicType(value: string | number | boolean | object | Expr)
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-assert-state.ObjectTypeExpr.dynamicType.parameter.value"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>

---

##### `expect` <a name="expect" id="@wheatstalk/cdk-assert-state.ObjectTypeExpr.expect"></a>

```typescript
import { ObjectTypeExpr } from '@wheatstalk/cdk-assert-state'

ObjectTypeExpr.expect(expression: string | number | boolean | object | Expr)
```

###### `expression`<sup>Required</sup> <a name="expression" id="@wheatstalk/cdk-assert-state.ObjectTypeExpr.expect.parameter.expression"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>

---

##### `input` <a name="input" id="@wheatstalk/cdk-assert-state.ObjectTypeExpr.input"></a>

```typescript
import { ObjectTypeExpr } from '@wheatstalk/cdk-assert-state'

ObjectTypeExpr.input(path?: string)
```

###### `path`<sup>Optional</sup> <a name="path" id="@wheatstalk/cdk-assert-state.ObjectTypeExpr.input.parameter.path"></a>

- *Type:* string

---

##### `objectContaining` <a name="objectContaining" id="@wheatstalk/cdk-assert-state.ObjectTypeExpr.objectContaining"></a>

```typescript
import { ObjectTypeExpr } from '@wheatstalk/cdk-assert-state'

ObjectTypeExpr.objectContaining(record: {[ key: string ]: string | number | boolean | object | Expr})
```

###### `record`<sup>Required</sup> <a name="record" id="@wheatstalk/cdk-assert-state.ObjectTypeExpr.objectContaining.parameter.record"></a>

- *Type:* {[ key: string ]: string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>}

---

##### `objectType` <a name="objectType" id="@wheatstalk/cdk-assert-state.ObjectTypeExpr.objectType"></a>

```typescript
import { ObjectTypeExpr } from '@wheatstalk/cdk-assert-state'

ObjectTypeExpr.objectType(record: {[ key: string ]: string | number | boolean | object | Expr})
```

###### `record`<sup>Required</sup> <a name="record" id="@wheatstalk/cdk-assert-state.ObjectTypeExpr.objectType.parameter.record"></a>

- *Type:* {[ key: string ]: string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>}

---

##### `value` <a name="value" id="@wheatstalk/cdk-assert-state.ObjectTypeExpr.value"></a>

```typescript
import { ObjectTypeExpr } from '@wheatstalk/cdk-assert-state'

ObjectTypeExpr.value(value: string | number | boolean | object)
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-assert-state.ObjectTypeExpr.value.parameter.value"></a>

- *Type:* string | number | boolean | object

---



### SymbolExpression <a name="SymbolExpression" id="@wheatstalk/cdk-assert-state.SymbolExpression"></a>

#### Initializers <a name="Initializers" id="@wheatstalk/cdk-assert-state.SymbolExpression.Initializer"></a>

```typescript
import { SymbolExpression } from '@wheatstalk/cdk-assert-state'

new SymbolExpression(symbol: string, path?: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@wheatstalk/cdk-assert-state.SymbolExpression.Initializer.parameter.symbol">symbol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.SymbolExpression.Initializer.parameter.path">path</a></code> | <code>string</code> | *No description.* |

---

##### `symbol`<sup>Required</sup> <a name="symbol" id="@wheatstalk/cdk-assert-state.SymbolExpression.Initializer.parameter.symbol"></a>

- *Type:* string

---

##### `path`<sup>Optional</sup> <a name="path" id="@wheatstalk/cdk-assert-state.SymbolExpression.Initializer.parameter.path"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@wheatstalk/cdk-assert-state.SymbolExpression.renderCode">renderCode</a></code> | *No description.* |

---

##### `renderCode` <a name="renderCode" id="@wheatstalk/cdk-assert-state.SymbolExpression.renderCode"></a>

```typescript
public renderCode(): string
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@wheatstalk/cdk-assert-state.SymbolExpression.anything">anything</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.SymbolExpression.arrayContaining">arrayContaining</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.SymbolExpression.arrayType">arrayType</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.SymbolExpression.dynamicType">dynamicType</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.SymbolExpression.expect">expect</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.SymbolExpression.input">input</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.SymbolExpression.objectContaining">objectContaining</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.SymbolExpression.objectType">objectType</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.SymbolExpression.value">value</a></code> | *No description.* |

---

##### `anything` <a name="anything" id="@wheatstalk/cdk-assert-state.SymbolExpression.anything"></a>

```typescript
import { SymbolExpression } from '@wheatstalk/cdk-assert-state'

SymbolExpression.anything()
```

##### `arrayContaining` <a name="arrayContaining" id="@wheatstalk/cdk-assert-state.SymbolExpression.arrayContaining"></a>

```typescript
import { SymbolExpression } from '@wheatstalk/cdk-assert-state'

SymbolExpression.arrayContaining(items: string | number | boolean | object | Expr[])
```

###### `items`<sup>Required</sup> <a name="items" id="@wheatstalk/cdk-assert-state.SymbolExpression.arrayContaining.parameter.items"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>[]

---

##### `arrayType` <a name="arrayType" id="@wheatstalk/cdk-assert-state.SymbolExpression.arrayType"></a>

```typescript
import { SymbolExpression } from '@wheatstalk/cdk-assert-state'

SymbolExpression.arrayType(items: string | number | boolean | object | Expr[])
```

###### `items`<sup>Required</sup> <a name="items" id="@wheatstalk/cdk-assert-state.SymbolExpression.arrayType.parameter.items"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>[]

---

##### `dynamicType` <a name="dynamicType" id="@wheatstalk/cdk-assert-state.SymbolExpression.dynamicType"></a>

```typescript
import { SymbolExpression } from '@wheatstalk/cdk-assert-state'

SymbolExpression.dynamicType(value: string | number | boolean | object | Expr)
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-assert-state.SymbolExpression.dynamicType.parameter.value"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>

---

##### `expect` <a name="expect" id="@wheatstalk/cdk-assert-state.SymbolExpression.expect"></a>

```typescript
import { SymbolExpression } from '@wheatstalk/cdk-assert-state'

SymbolExpression.expect(expression: string | number | boolean | object | Expr)
```

###### `expression`<sup>Required</sup> <a name="expression" id="@wheatstalk/cdk-assert-state.SymbolExpression.expect.parameter.expression"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>

---

##### `input` <a name="input" id="@wheatstalk/cdk-assert-state.SymbolExpression.input"></a>

```typescript
import { SymbolExpression } from '@wheatstalk/cdk-assert-state'

SymbolExpression.input(path?: string)
```

###### `path`<sup>Optional</sup> <a name="path" id="@wheatstalk/cdk-assert-state.SymbolExpression.input.parameter.path"></a>

- *Type:* string

---

##### `objectContaining` <a name="objectContaining" id="@wheatstalk/cdk-assert-state.SymbolExpression.objectContaining"></a>

```typescript
import { SymbolExpression } from '@wheatstalk/cdk-assert-state'

SymbolExpression.objectContaining(record: {[ key: string ]: string | number | boolean | object | Expr})
```

###### `record`<sup>Required</sup> <a name="record" id="@wheatstalk/cdk-assert-state.SymbolExpression.objectContaining.parameter.record"></a>

- *Type:* {[ key: string ]: string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>}

---

##### `objectType` <a name="objectType" id="@wheatstalk/cdk-assert-state.SymbolExpression.objectType"></a>

```typescript
import { SymbolExpression } from '@wheatstalk/cdk-assert-state'

SymbolExpression.objectType(record: {[ key: string ]: string | number | boolean | object | Expr})
```

###### `record`<sup>Required</sup> <a name="record" id="@wheatstalk/cdk-assert-state.SymbolExpression.objectType.parameter.record"></a>

- *Type:* {[ key: string ]: string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>}

---

##### `value` <a name="value" id="@wheatstalk/cdk-assert-state.SymbolExpression.value"></a>

```typescript
import { SymbolExpression } from '@wheatstalk/cdk-assert-state'

SymbolExpression.value(value: string | number | boolean | object)
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-assert-state.SymbolExpression.value.parameter.value"></a>

- *Type:* string | number | boolean | object

---



### ValueExpr <a name="ValueExpr" id="@wheatstalk/cdk-assert-state.ValueExpr"></a>

#### Initializers <a name="Initializers" id="@wheatstalk/cdk-assert-state.ValueExpr.Initializer"></a>

```typescript
import { ValueExpr } from '@wheatstalk/cdk-assert-state'

new ValueExpr(value: string | number | boolean | object)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@wheatstalk/cdk-assert-state.ValueExpr.Initializer.parameter.value">value</a></code> | <code>string \| number \| boolean \| object</code> | *No description.* |

---

##### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-assert-state.ValueExpr.Initializer.parameter.value"></a>

- *Type:* string | number | boolean | object

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@wheatstalk/cdk-assert-state.ValueExpr.renderCode">renderCode</a></code> | *No description.* |

---

##### `renderCode` <a name="renderCode" id="@wheatstalk/cdk-assert-state.ValueExpr.renderCode"></a>

```typescript
public renderCode(): string
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@wheatstalk/cdk-assert-state.ValueExpr.anything">anything</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ValueExpr.arrayContaining">arrayContaining</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ValueExpr.arrayType">arrayType</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ValueExpr.dynamicType">dynamicType</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ValueExpr.expect">expect</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ValueExpr.input">input</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ValueExpr.objectContaining">objectContaining</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ValueExpr.objectType">objectType</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-assert-state.ValueExpr.value">value</a></code> | *No description.* |

---

##### `anything` <a name="anything" id="@wheatstalk/cdk-assert-state.ValueExpr.anything"></a>

```typescript
import { ValueExpr } from '@wheatstalk/cdk-assert-state'

ValueExpr.anything()
```

##### `arrayContaining` <a name="arrayContaining" id="@wheatstalk/cdk-assert-state.ValueExpr.arrayContaining"></a>

```typescript
import { ValueExpr } from '@wheatstalk/cdk-assert-state'

ValueExpr.arrayContaining(items: string | number | boolean | object | Expr[])
```

###### `items`<sup>Required</sup> <a name="items" id="@wheatstalk/cdk-assert-state.ValueExpr.arrayContaining.parameter.items"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>[]

---

##### `arrayType` <a name="arrayType" id="@wheatstalk/cdk-assert-state.ValueExpr.arrayType"></a>

```typescript
import { ValueExpr } from '@wheatstalk/cdk-assert-state'

ValueExpr.arrayType(items: string | number | boolean | object | Expr[])
```

###### `items`<sup>Required</sup> <a name="items" id="@wheatstalk/cdk-assert-state.ValueExpr.arrayType.parameter.items"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>[]

---

##### `dynamicType` <a name="dynamicType" id="@wheatstalk/cdk-assert-state.ValueExpr.dynamicType"></a>

```typescript
import { ValueExpr } from '@wheatstalk/cdk-assert-state'

ValueExpr.dynamicType(value: string | number | boolean | object | Expr)
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-assert-state.ValueExpr.dynamicType.parameter.value"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>

---

##### `expect` <a name="expect" id="@wheatstalk/cdk-assert-state.ValueExpr.expect"></a>

```typescript
import { ValueExpr } from '@wheatstalk/cdk-assert-state'

ValueExpr.expect(expression: string | number | boolean | object | Expr)
```

###### `expression`<sup>Required</sup> <a name="expression" id="@wheatstalk/cdk-assert-state.ValueExpr.expect.parameter.expression"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>

---

##### `input` <a name="input" id="@wheatstalk/cdk-assert-state.ValueExpr.input"></a>

```typescript
import { ValueExpr } from '@wheatstalk/cdk-assert-state'

ValueExpr.input(path?: string)
```

###### `path`<sup>Optional</sup> <a name="path" id="@wheatstalk/cdk-assert-state.ValueExpr.input.parameter.path"></a>

- *Type:* string

---

##### `objectContaining` <a name="objectContaining" id="@wheatstalk/cdk-assert-state.ValueExpr.objectContaining"></a>

```typescript
import { ValueExpr } from '@wheatstalk/cdk-assert-state'

ValueExpr.objectContaining(record: {[ key: string ]: string | number | boolean | object | Expr})
```

###### `record`<sup>Required</sup> <a name="record" id="@wheatstalk/cdk-assert-state.ValueExpr.objectContaining.parameter.record"></a>

- *Type:* {[ key: string ]: string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>}

---

##### `objectType` <a name="objectType" id="@wheatstalk/cdk-assert-state.ValueExpr.objectType"></a>

```typescript
import { ValueExpr } from '@wheatstalk/cdk-assert-state'

ValueExpr.objectType(record: {[ key: string ]: string | number | boolean | object | Expr})
```

###### `record`<sup>Required</sup> <a name="record" id="@wheatstalk/cdk-assert-state.ValueExpr.objectType.parameter.record"></a>

- *Type:* {[ key: string ]: string | number | boolean | object | <a href="#@wheatstalk/cdk-assert-state.Expr">Expr</a>}

---

##### `value` <a name="value" id="@wheatstalk/cdk-assert-state.ValueExpr.value"></a>

```typescript
import { ValueExpr } from '@wheatstalk/cdk-assert-state'

ValueExpr.value(value: string | number | boolean | object)
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-assert-state.ValueExpr.value.parameter.value"></a>

- *Type:* string | number | boolean | object

---




