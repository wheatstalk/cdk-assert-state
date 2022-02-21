# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ExpectState <a name="ExpectState" id="@wheatstalk/cdk-expect-state.ExpectState"></a>

#### Initializers <a name="Initializers" id="@wheatstalk/cdk-expect-state.ExpectState.Initializer"></a>

```typescript
import { ExpectState } from '@wheatstalk/cdk-expect-state'

new ExpectState(scope: Construct, id: string, props: ExpectStateProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectState.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectState.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectState.Initializer.parameter.props">props</a></code> | <code><a href="#@wheatstalk/cdk-expect-state.ExpectStateProps">ExpectStateProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@wheatstalk/cdk-expect-state.ExpectState.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@wheatstalk/cdk-expect-state.ExpectState.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@wheatstalk/cdk-expect-state.ExpectState.Initializer.parameter.props"></a>

- *Type:* <a href="#@wheatstalk/cdk-expect-state.ExpectStateProps">ExpectStateProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectState.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectState.next">next</a></code> | Continue normal execution with the given state. |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectState.prefixStates">prefixStates</a></code> | Prefix the IDs of all states in this state machine fragment. |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectState.toSingleState">toSingleState</a></code> | Wrap all states in this state machine fragment up into a single state. |

---

##### `toString` <a name="toString" id="@wheatstalk/cdk-expect-state.ExpectState.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `next` <a name="next" id="@wheatstalk/cdk-expect-state.ExpectState.next"></a>

```typescript
public next(next: IChainable): Chain
```

Continue normal execution with the given state.

###### `next`<sup>Required</sup> <a name="next" id="@wheatstalk/cdk-expect-state.ExpectState.next.parameter.next"></a>

- *Type:* aws-cdk-lib.aws_stepfunctions.IChainable

---

##### `prefixStates` <a name="prefixStates" id="@wheatstalk/cdk-expect-state.ExpectState.prefixStates"></a>

```typescript
public prefixStates(prefix?: string): StateMachineFragment
```

Prefix the IDs of all states in this state machine fragment.

Use this to avoid multiple copies of the state machine all having the same state IDs.

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@wheatstalk/cdk-expect-state.ExpectState.prefixStates.parameter.prefix"></a>

- *Type:* string

The prefix to add.

Will use construct ID by default.

---

##### `toSingleState` <a name="toSingleState" id="@wheatstalk/cdk-expect-state.ExpectState.toSingleState"></a>

```typescript
public toSingleState(options?: SingleStateOptions): Parallel
```

Wrap all states in this state machine fragment up into a single state.

This can be used to add retry or error handling onto this state machine fragment.  Be aware that this changes the result of the inner state machine to be an array with the result of the state machine in it. Adjust your paths accordingly. For example, change 'outputPath' to '$[0]'.

###### `options`<sup>Optional</sup> <a name="options" id="@wheatstalk/cdk-expect-state.ExpectState.toSingleState.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_stepfunctions.SingleStateOptions

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectState.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@wheatstalk/cdk-expect-state.ExpectState.isConstruct"></a>

```typescript
import { ExpectState } from '@wheatstalk/cdk-expect-state'

ExpectState.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@wheatstalk/cdk-expect-state.ExpectState.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectState.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectState.property.endStates">endStates</a></code> | <code>aws-cdk-lib.aws_stepfunctions.INextable[]</code> | The states to chain onto if this fragment is used. |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectState.property.id">id</a></code> | <code>string</code> | Descriptive identifier for this chainable. |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectState.property.startState">startState</a></code> | <code>aws-cdk-lib.aws_stepfunctions.State</code> | The start state of this state machine fragment. |

---

##### `node`<sup>Required</sup> <a name="node" id="@wheatstalk/cdk-expect-state.ExpectState.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `endStates`<sup>Required</sup> <a name="endStates" id="@wheatstalk/cdk-expect-state.ExpectState.property.endStates"></a>

```typescript
public readonly endStates: INextable[];
```

- *Type:* aws-cdk-lib.aws_stepfunctions.INextable[]

The states to chain onto if this fragment is used.

---

##### `id`<sup>Required</sup> <a name="id" id="@wheatstalk/cdk-expect-state.ExpectState.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Descriptive identifier for this chainable.

---

##### `startState`<sup>Required</sup> <a name="startState" id="@wheatstalk/cdk-expect-state.ExpectState.property.startState"></a>

```typescript
public readonly startState: State;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.State

The start state of this state machine fragment.

---


## Structs <a name="Structs" id="Structs"></a>

### ExpectStateProps <a name="ExpectStateProps" id="@wheatstalk/cdk-expect-state.ExpectStateProps"></a>

#### Initializer <a name="Initializer" id="@wheatstalk/cdk-expect-state.ExpectStateProps.Initializer"></a>

```typescript
import { ExpectStateProps } from '@wheatstalk/cdk-expect-state'

const expectStateProps: ExpectStateProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectStateProps.property.assert">assert</a></code> | <code><a href="#@wheatstalk/cdk-expect-state.Assert">Assert</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectStateProps.property.inputPath">inputPath</a></code> | <code>string</code> | *No description.* |

---

##### `assert`<sup>Required</sup> <a name="assert" id="@wheatstalk/cdk-expect-state.ExpectStateProps.property.assert"></a>

```typescript
public readonly assert: Assert;
```

- *Type:* <a href="#@wheatstalk/cdk-expect-state.Assert">Assert</a>

---

##### `inputPath`<sup>Optional</sup> <a name="inputPath" id="@wheatstalk/cdk-expect-state.ExpectStateProps.property.inputPath"></a>

```typescript
public readonly inputPath: string;
```

- *Type:* string

---

## Classes <a name="Classes" id="Classes"></a>

### ArrayTypeExpr <a name="ArrayTypeExpr" id="@wheatstalk/cdk-expect-state.ArrayTypeExpr"></a>

#### Initializers <a name="Initializers" id="@wheatstalk/cdk-expect-state.ArrayTypeExpr.Initializer"></a>

```typescript
import { ArrayTypeExpr } from '@wheatstalk/cdk-expect-state'

new ArrayTypeExpr(items: string | number | boolean | object | Expr[])
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@wheatstalk/cdk-expect-state.ArrayTypeExpr.Initializer.parameter.items">items</a></code> | <code>string \| number \| boolean \| object \| <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>[]</code> | *No description.* |

---

##### `items`<sup>Required</sup> <a name="items" id="@wheatstalk/cdk-expect-state.ArrayTypeExpr.Initializer.parameter.items"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>[]

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@wheatstalk/cdk-expect-state.ArrayTypeExpr.renderCode">renderCode</a></code> | *No description.* |

---

##### `renderCode` <a name="renderCode" id="@wheatstalk/cdk-expect-state.ArrayTypeExpr.renderCode"></a>

```typescript
public renderCode(): string
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@wheatstalk/cdk-expect-state.ArrayTypeExpr.anything">anything</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ArrayTypeExpr.arrayContaining">arrayContaining</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ArrayTypeExpr.arrayType">arrayType</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ArrayTypeExpr.dynamicType">dynamicType</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ArrayTypeExpr.expect">expect</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ArrayTypeExpr.input">input</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ArrayTypeExpr.objectContaining">objectContaining</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ArrayTypeExpr.objectType">objectType</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ArrayTypeExpr.value">value</a></code> | *No description.* |

---

##### `anything` <a name="anything" id="@wheatstalk/cdk-expect-state.ArrayTypeExpr.anything"></a>

```typescript
import { ArrayTypeExpr } from '@wheatstalk/cdk-expect-state'

ArrayTypeExpr.anything()
```

##### `arrayContaining` <a name="arrayContaining" id="@wheatstalk/cdk-expect-state.ArrayTypeExpr.arrayContaining"></a>

```typescript
import { ArrayTypeExpr } from '@wheatstalk/cdk-expect-state'

ArrayTypeExpr.arrayContaining(items: string | number | boolean | object | Expr[])
```

###### `items`<sup>Required</sup> <a name="items" id="@wheatstalk/cdk-expect-state.ArrayTypeExpr.arrayContaining.parameter.items"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>[]

---

##### `arrayType` <a name="arrayType" id="@wheatstalk/cdk-expect-state.ArrayTypeExpr.arrayType"></a>

```typescript
import { ArrayTypeExpr } from '@wheatstalk/cdk-expect-state'

ArrayTypeExpr.arrayType(items: string | number | boolean | object | Expr[])
```

###### `items`<sup>Required</sup> <a name="items" id="@wheatstalk/cdk-expect-state.ArrayTypeExpr.arrayType.parameter.items"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>[]

---

##### `dynamicType` <a name="dynamicType" id="@wheatstalk/cdk-expect-state.ArrayTypeExpr.dynamicType"></a>

```typescript
import { ArrayTypeExpr } from '@wheatstalk/cdk-expect-state'

ArrayTypeExpr.dynamicType(value: string | number | boolean | object | Expr)
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-expect-state.ArrayTypeExpr.dynamicType.parameter.value"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>

---

##### `expect` <a name="expect" id="@wheatstalk/cdk-expect-state.ArrayTypeExpr.expect"></a>

```typescript
import { ArrayTypeExpr } from '@wheatstalk/cdk-expect-state'

ArrayTypeExpr.expect(expression: string | number | boolean | object | Expr)
```

###### `expression`<sup>Required</sup> <a name="expression" id="@wheatstalk/cdk-expect-state.ArrayTypeExpr.expect.parameter.expression"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>

---

##### `input` <a name="input" id="@wheatstalk/cdk-expect-state.ArrayTypeExpr.input"></a>

```typescript
import { ArrayTypeExpr } from '@wheatstalk/cdk-expect-state'

ArrayTypeExpr.input(path?: string)
```

###### `path`<sup>Optional</sup> <a name="path" id="@wheatstalk/cdk-expect-state.ArrayTypeExpr.input.parameter.path"></a>

- *Type:* string

---

##### `objectContaining` <a name="objectContaining" id="@wheatstalk/cdk-expect-state.ArrayTypeExpr.objectContaining"></a>

```typescript
import { ArrayTypeExpr } from '@wheatstalk/cdk-expect-state'

ArrayTypeExpr.objectContaining(record: {[ key: string ]: string | number | boolean | object | Expr})
```

###### `record`<sup>Required</sup> <a name="record" id="@wheatstalk/cdk-expect-state.ArrayTypeExpr.objectContaining.parameter.record"></a>

- *Type:* {[ key: string ]: string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>}

---

##### `objectType` <a name="objectType" id="@wheatstalk/cdk-expect-state.ArrayTypeExpr.objectType"></a>

```typescript
import { ArrayTypeExpr } from '@wheatstalk/cdk-expect-state'

ArrayTypeExpr.objectType(record: {[ key: string ]: string | number | boolean | object | Expr})
```

###### `record`<sup>Required</sup> <a name="record" id="@wheatstalk/cdk-expect-state.ArrayTypeExpr.objectType.parameter.record"></a>

- *Type:* {[ key: string ]: string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>}

---

##### `value` <a name="value" id="@wheatstalk/cdk-expect-state.ArrayTypeExpr.value"></a>

```typescript
import { ArrayTypeExpr } from '@wheatstalk/cdk-expect-state'

ArrayTypeExpr.value(value: string | number | boolean | object)
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-expect-state.ArrayTypeExpr.value.parameter.value"></a>

- *Type:* string | number | boolean | object

---



### Assert <a name="Assert" id="@wheatstalk/cdk-expect-state.Assert"></a>

#### Initializers <a name="Initializers" id="@wheatstalk/cdk-expect-state.Assert.Initializer"></a>

```typescript
import { Assert } from '@wheatstalk/cdk-expect-state'

new Assert()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@wheatstalk/cdk-expect-state.Assert.renderCode">renderCode</a></code> | *No description.* |

---

##### `renderCode` <a name="renderCode" id="@wheatstalk/cdk-expect-state.Assert.renderCode"></a>

```typescript
public renderCode(): string
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@wheatstalk/cdk-expect-state.Assert.expressions">expressions</a></code> | *No description.* |

---

##### `expressions` <a name="expressions" id="@wheatstalk/cdk-expect-state.Assert.expressions"></a>

```typescript
import { Assert } from '@wheatstalk/cdk-expect-state'

Assert.expressions(expressions: Expr[])
```

###### `expressions`<sup>Required</sup> <a name="expressions" id="@wheatstalk/cdk-expect-state.Assert.expressions.parameter.expressions"></a>

- *Type:* <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>[]

---



### ExpectExpr <a name="ExpectExpr" id="@wheatstalk/cdk-expect-state.ExpectExpr"></a>

#### Initializers <a name="Initializers" id="@wheatstalk/cdk-expect-state.ExpectExpr.Initializer"></a>

```typescript
import { ExpectExpr } from '@wheatstalk/cdk-expect-state'

new ExpectExpr(expression: Expr)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectExpr.Initializer.parameter.expression">expression</a></code> | <code><a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a></code> | *No description.* |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@wheatstalk/cdk-expect-state.ExpectExpr.Initializer.parameter.expression"></a>

- *Type:* <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectExpr.renderCode">renderCode</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectExpr.toBeCloseTo">toBeCloseTo</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectExpr.toBeDefined">toBeDefined</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectExpr.toBeFalsy">toBeFalsy</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectExpr.toBeGreaterThan">toBeGreaterThan</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectExpr.toBeGreaterThanOrEqual">toBeGreaterThanOrEqual</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectExpr.toBeLessThan">toBeLessThan</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectExpr.toBeLessThanOrEqual">toBeLessThanOrEqual</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectExpr.toBeTruthy">toBeTruthy</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectExpr.toBeUndefined">toBeUndefined</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectExpr.toContain">toContain</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectExpr.toContainEqual">toContainEqual</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectExpr.toEqual">toEqual</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectExpr.toHaveLength">toHaveLength</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectExpr.toHaveProperty">toHaveProperty</a></code> | *No description.* |

---

##### `renderCode` <a name="renderCode" id="@wheatstalk/cdk-expect-state.ExpectExpr.renderCode"></a>

```typescript
public renderCode(): string
```

##### `toBeCloseTo` <a name="toBeCloseTo" id="@wheatstalk/cdk-expect-state.ExpectExpr.toBeCloseTo"></a>

```typescript
public toBeCloseTo(value: number | Expr, digits?: number | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-expect-state.ExpectExpr.toBeCloseTo.parameter.value"></a>

- *Type:* number | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>

---

###### `digits`<sup>Optional</sup> <a name="digits" id="@wheatstalk/cdk-expect-state.ExpectExpr.toBeCloseTo.parameter.digits"></a>

- *Type:* number | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>

---

##### `toBeDefined` <a name="toBeDefined" id="@wheatstalk/cdk-expect-state.ExpectExpr.toBeDefined"></a>

```typescript
public toBeDefined(): Expr
```

##### `toBeFalsy` <a name="toBeFalsy" id="@wheatstalk/cdk-expect-state.ExpectExpr.toBeFalsy"></a>

```typescript
public toBeFalsy(): Expr
```

##### `toBeGreaterThan` <a name="toBeGreaterThan" id="@wheatstalk/cdk-expect-state.ExpectExpr.toBeGreaterThan"></a>

```typescript
public toBeGreaterThan(value: number | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-expect-state.ExpectExpr.toBeGreaterThan.parameter.value"></a>

- *Type:* number | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>

---

##### `toBeGreaterThanOrEqual` <a name="toBeGreaterThanOrEqual" id="@wheatstalk/cdk-expect-state.ExpectExpr.toBeGreaterThanOrEqual"></a>

```typescript
public toBeGreaterThanOrEqual(value: number | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-expect-state.ExpectExpr.toBeGreaterThanOrEqual.parameter.value"></a>

- *Type:* number | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>

---

##### `toBeLessThan` <a name="toBeLessThan" id="@wheatstalk/cdk-expect-state.ExpectExpr.toBeLessThan"></a>

```typescript
public toBeLessThan(value: number | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-expect-state.ExpectExpr.toBeLessThan.parameter.value"></a>

- *Type:* number | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>

---

##### `toBeLessThanOrEqual` <a name="toBeLessThanOrEqual" id="@wheatstalk/cdk-expect-state.ExpectExpr.toBeLessThanOrEqual"></a>

```typescript
public toBeLessThanOrEqual(value: number | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-expect-state.ExpectExpr.toBeLessThanOrEqual.parameter.value"></a>

- *Type:* number | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>

---

##### `toBeTruthy` <a name="toBeTruthy" id="@wheatstalk/cdk-expect-state.ExpectExpr.toBeTruthy"></a>

```typescript
public toBeTruthy(): Expr
```

##### `toBeUndefined` <a name="toBeUndefined" id="@wheatstalk/cdk-expect-state.ExpectExpr.toBeUndefined"></a>

```typescript
public toBeUndefined(): Expr
```

##### `toContain` <a name="toContain" id="@wheatstalk/cdk-expect-state.ExpectExpr.toContain"></a>

```typescript
public toContain(value: string | number | boolean | object): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-expect-state.ExpectExpr.toContain.parameter.value"></a>

- *Type:* string | number | boolean | object

---

##### `toContainEqual` <a name="toContainEqual" id="@wheatstalk/cdk-expect-state.ExpectExpr.toContainEqual"></a>

```typescript
public toContainEqual(value: string | number | boolean | object | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-expect-state.ExpectExpr.toContainEqual.parameter.value"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>

---

##### `toEqual` <a name="toEqual" id="@wheatstalk/cdk-expect-state.ExpectExpr.toEqual"></a>

```typescript
public toEqual(value: string | number | boolean | object | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-expect-state.ExpectExpr.toEqual.parameter.value"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>

---

##### `toHaveLength` <a name="toHaveLength" id="@wheatstalk/cdk-expect-state.ExpectExpr.toHaveLength"></a>

```typescript
public toHaveLength(length: number | Expr): Expr
```

###### `length`<sup>Required</sup> <a name="length" id="@wheatstalk/cdk-expect-state.ExpectExpr.toHaveLength.parameter.length"></a>

- *Type:* number | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>

---

##### `toHaveProperty` <a name="toHaveProperty" id="@wheatstalk/cdk-expect-state.ExpectExpr.toHaveProperty"></a>

```typescript
public toHaveProperty(property: string | Expr, value?: string | number | boolean | object | Expr): Expr
```

###### `property`<sup>Required</sup> <a name="property" id="@wheatstalk/cdk-expect-state.ExpectExpr.toHaveProperty.parameter.property"></a>

- *Type:* string | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>

---

###### `value`<sup>Optional</sup> <a name="value" id="@wheatstalk/cdk-expect-state.ExpectExpr.toHaveProperty.parameter.value"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectExpr.anything">anything</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectExpr.arrayContaining">arrayContaining</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectExpr.arrayType">arrayType</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectExpr.dynamicType">dynamicType</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectExpr.expect">expect</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectExpr.input">input</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectExpr.objectContaining">objectContaining</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectExpr.objectType">objectType</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectExpr.value">value</a></code> | *No description.* |

---

##### `anything` <a name="anything" id="@wheatstalk/cdk-expect-state.ExpectExpr.anything"></a>

```typescript
import { ExpectExpr } from '@wheatstalk/cdk-expect-state'

ExpectExpr.anything()
```

##### `arrayContaining` <a name="arrayContaining" id="@wheatstalk/cdk-expect-state.ExpectExpr.arrayContaining"></a>

```typescript
import { ExpectExpr } from '@wheatstalk/cdk-expect-state'

ExpectExpr.arrayContaining(items: string | number | boolean | object | Expr[])
```

###### `items`<sup>Required</sup> <a name="items" id="@wheatstalk/cdk-expect-state.ExpectExpr.arrayContaining.parameter.items"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>[]

---

##### `arrayType` <a name="arrayType" id="@wheatstalk/cdk-expect-state.ExpectExpr.arrayType"></a>

```typescript
import { ExpectExpr } from '@wheatstalk/cdk-expect-state'

ExpectExpr.arrayType(items: string | number | boolean | object | Expr[])
```

###### `items`<sup>Required</sup> <a name="items" id="@wheatstalk/cdk-expect-state.ExpectExpr.arrayType.parameter.items"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>[]

---

##### `dynamicType` <a name="dynamicType" id="@wheatstalk/cdk-expect-state.ExpectExpr.dynamicType"></a>

```typescript
import { ExpectExpr } from '@wheatstalk/cdk-expect-state'

ExpectExpr.dynamicType(value: string | number | boolean | object | Expr)
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-expect-state.ExpectExpr.dynamicType.parameter.value"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>

---

##### `expect` <a name="expect" id="@wheatstalk/cdk-expect-state.ExpectExpr.expect"></a>

```typescript
import { ExpectExpr } from '@wheatstalk/cdk-expect-state'

ExpectExpr.expect(expression: string | number | boolean | object | Expr)
```

###### `expression`<sup>Required</sup> <a name="expression" id="@wheatstalk/cdk-expect-state.ExpectExpr.expect.parameter.expression"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>

---

##### `input` <a name="input" id="@wheatstalk/cdk-expect-state.ExpectExpr.input"></a>

```typescript
import { ExpectExpr } from '@wheatstalk/cdk-expect-state'

ExpectExpr.input(path?: string)
```

###### `path`<sup>Optional</sup> <a name="path" id="@wheatstalk/cdk-expect-state.ExpectExpr.input.parameter.path"></a>

- *Type:* string

---

##### `objectContaining` <a name="objectContaining" id="@wheatstalk/cdk-expect-state.ExpectExpr.objectContaining"></a>

```typescript
import { ExpectExpr } from '@wheatstalk/cdk-expect-state'

ExpectExpr.objectContaining(record: {[ key: string ]: string | number | boolean | object | Expr})
```

###### `record`<sup>Required</sup> <a name="record" id="@wheatstalk/cdk-expect-state.ExpectExpr.objectContaining.parameter.record"></a>

- *Type:* {[ key: string ]: string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>}

---

##### `objectType` <a name="objectType" id="@wheatstalk/cdk-expect-state.ExpectExpr.objectType"></a>

```typescript
import { ExpectExpr } from '@wheatstalk/cdk-expect-state'

ExpectExpr.objectType(record: {[ key: string ]: string | number | boolean | object | Expr})
```

###### `record`<sup>Required</sup> <a name="record" id="@wheatstalk/cdk-expect-state.ExpectExpr.objectType.parameter.record"></a>

- *Type:* {[ key: string ]: string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>}

---

##### `value` <a name="value" id="@wheatstalk/cdk-expect-state.ExpectExpr.value"></a>

```typescript
import { ExpectExpr } from '@wheatstalk/cdk-expect-state'

ExpectExpr.value(value: string | number | boolean | object)
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-expect-state.ExpectExpr.value.parameter.value"></a>

- *Type:* string | number | boolean | object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectExpr.property.not">not</a></code> | <code><a href="#@wheatstalk/cdk-expect-state.ExpectNotExpr">ExpectNotExpr</a></code> | *No description.* |

---

##### `not`<sup>Required</sup> <a name="not" id="@wheatstalk/cdk-expect-state.ExpectExpr.property.not"></a>

```typescript
public readonly not: ExpectNotExpr;
```

- *Type:* <a href="#@wheatstalk/cdk-expect-state.ExpectNotExpr">ExpectNotExpr</a>

---


### ExpectExprBase <a name="ExpectExprBase" id="@wheatstalk/cdk-expect-state.ExpectExprBase"></a>

#### Initializers <a name="Initializers" id="@wheatstalk/cdk-expect-state.ExpectExprBase.Initializer"></a>

```typescript
import { ExpectExprBase } from '@wheatstalk/cdk-expect-state'

new ExpectExprBase()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectExprBase.renderCode">renderCode</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectExprBase.toBeCloseTo">toBeCloseTo</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectExprBase.toBeDefined">toBeDefined</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectExprBase.toBeFalsy">toBeFalsy</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectExprBase.toBeGreaterThan">toBeGreaterThan</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectExprBase.toBeGreaterThanOrEqual">toBeGreaterThanOrEqual</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectExprBase.toBeLessThan">toBeLessThan</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectExprBase.toBeLessThanOrEqual">toBeLessThanOrEqual</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectExprBase.toBeTruthy">toBeTruthy</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectExprBase.toBeUndefined">toBeUndefined</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectExprBase.toContain">toContain</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectExprBase.toContainEqual">toContainEqual</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectExprBase.toEqual">toEqual</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectExprBase.toHaveLength">toHaveLength</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectExprBase.toHaveProperty">toHaveProperty</a></code> | *No description.* |

---

##### `renderCode` <a name="renderCode" id="@wheatstalk/cdk-expect-state.ExpectExprBase.renderCode"></a>

```typescript
public renderCode(): string
```

##### `toBeCloseTo` <a name="toBeCloseTo" id="@wheatstalk/cdk-expect-state.ExpectExprBase.toBeCloseTo"></a>

```typescript
public toBeCloseTo(value: number | Expr, digits?: number | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-expect-state.ExpectExprBase.toBeCloseTo.parameter.value"></a>

- *Type:* number | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>

---

###### `digits`<sup>Optional</sup> <a name="digits" id="@wheatstalk/cdk-expect-state.ExpectExprBase.toBeCloseTo.parameter.digits"></a>

- *Type:* number | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>

---

##### `toBeDefined` <a name="toBeDefined" id="@wheatstalk/cdk-expect-state.ExpectExprBase.toBeDefined"></a>

```typescript
public toBeDefined(): Expr
```

##### `toBeFalsy` <a name="toBeFalsy" id="@wheatstalk/cdk-expect-state.ExpectExprBase.toBeFalsy"></a>

```typescript
public toBeFalsy(): Expr
```

##### `toBeGreaterThan` <a name="toBeGreaterThan" id="@wheatstalk/cdk-expect-state.ExpectExprBase.toBeGreaterThan"></a>

```typescript
public toBeGreaterThan(value: number | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-expect-state.ExpectExprBase.toBeGreaterThan.parameter.value"></a>

- *Type:* number | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>

---

##### `toBeGreaterThanOrEqual` <a name="toBeGreaterThanOrEqual" id="@wheatstalk/cdk-expect-state.ExpectExprBase.toBeGreaterThanOrEqual"></a>

```typescript
public toBeGreaterThanOrEqual(value: number | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-expect-state.ExpectExprBase.toBeGreaterThanOrEqual.parameter.value"></a>

- *Type:* number | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>

---

##### `toBeLessThan` <a name="toBeLessThan" id="@wheatstalk/cdk-expect-state.ExpectExprBase.toBeLessThan"></a>

```typescript
public toBeLessThan(value: number | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-expect-state.ExpectExprBase.toBeLessThan.parameter.value"></a>

- *Type:* number | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>

---

##### `toBeLessThanOrEqual` <a name="toBeLessThanOrEqual" id="@wheatstalk/cdk-expect-state.ExpectExprBase.toBeLessThanOrEqual"></a>

```typescript
public toBeLessThanOrEqual(value: number | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-expect-state.ExpectExprBase.toBeLessThanOrEqual.parameter.value"></a>

- *Type:* number | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>

---

##### `toBeTruthy` <a name="toBeTruthy" id="@wheatstalk/cdk-expect-state.ExpectExprBase.toBeTruthy"></a>

```typescript
public toBeTruthy(): Expr
```

##### `toBeUndefined` <a name="toBeUndefined" id="@wheatstalk/cdk-expect-state.ExpectExprBase.toBeUndefined"></a>

```typescript
public toBeUndefined(): Expr
```

##### `toContain` <a name="toContain" id="@wheatstalk/cdk-expect-state.ExpectExprBase.toContain"></a>

```typescript
public toContain(value: string | number | boolean | object): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-expect-state.ExpectExprBase.toContain.parameter.value"></a>

- *Type:* string | number | boolean | object

---

##### `toContainEqual` <a name="toContainEqual" id="@wheatstalk/cdk-expect-state.ExpectExprBase.toContainEqual"></a>

```typescript
public toContainEqual(value: string | number | boolean | object | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-expect-state.ExpectExprBase.toContainEqual.parameter.value"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>

---

##### `toEqual` <a name="toEqual" id="@wheatstalk/cdk-expect-state.ExpectExprBase.toEqual"></a>

```typescript
public toEqual(value: string | number | boolean | object | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-expect-state.ExpectExprBase.toEqual.parameter.value"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>

---

##### `toHaveLength` <a name="toHaveLength" id="@wheatstalk/cdk-expect-state.ExpectExprBase.toHaveLength"></a>

```typescript
public toHaveLength(length: number | Expr): Expr
```

###### `length`<sup>Required</sup> <a name="length" id="@wheatstalk/cdk-expect-state.ExpectExprBase.toHaveLength.parameter.length"></a>

- *Type:* number | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>

---

##### `toHaveProperty` <a name="toHaveProperty" id="@wheatstalk/cdk-expect-state.ExpectExprBase.toHaveProperty"></a>

```typescript
public toHaveProperty(property: string | Expr, value?: string | number | boolean | object | Expr): Expr
```

###### `property`<sup>Required</sup> <a name="property" id="@wheatstalk/cdk-expect-state.ExpectExprBase.toHaveProperty.parameter.property"></a>

- *Type:* string | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>

---

###### `value`<sup>Optional</sup> <a name="value" id="@wheatstalk/cdk-expect-state.ExpectExprBase.toHaveProperty.parameter.value"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectExprBase.anything">anything</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectExprBase.arrayContaining">arrayContaining</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectExprBase.arrayType">arrayType</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectExprBase.dynamicType">dynamicType</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectExprBase.expect">expect</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectExprBase.input">input</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectExprBase.objectContaining">objectContaining</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectExprBase.objectType">objectType</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectExprBase.value">value</a></code> | *No description.* |

---

##### `anything` <a name="anything" id="@wheatstalk/cdk-expect-state.ExpectExprBase.anything"></a>

```typescript
import { ExpectExprBase } from '@wheatstalk/cdk-expect-state'

ExpectExprBase.anything()
```

##### `arrayContaining` <a name="arrayContaining" id="@wheatstalk/cdk-expect-state.ExpectExprBase.arrayContaining"></a>

```typescript
import { ExpectExprBase } from '@wheatstalk/cdk-expect-state'

ExpectExprBase.arrayContaining(items: string | number | boolean | object | Expr[])
```

###### `items`<sup>Required</sup> <a name="items" id="@wheatstalk/cdk-expect-state.ExpectExprBase.arrayContaining.parameter.items"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>[]

---

##### `arrayType` <a name="arrayType" id="@wheatstalk/cdk-expect-state.ExpectExprBase.arrayType"></a>

```typescript
import { ExpectExprBase } from '@wheatstalk/cdk-expect-state'

ExpectExprBase.arrayType(items: string | number | boolean | object | Expr[])
```

###### `items`<sup>Required</sup> <a name="items" id="@wheatstalk/cdk-expect-state.ExpectExprBase.arrayType.parameter.items"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>[]

---

##### `dynamicType` <a name="dynamicType" id="@wheatstalk/cdk-expect-state.ExpectExprBase.dynamicType"></a>

```typescript
import { ExpectExprBase } from '@wheatstalk/cdk-expect-state'

ExpectExprBase.dynamicType(value: string | number | boolean | object | Expr)
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-expect-state.ExpectExprBase.dynamicType.parameter.value"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>

---

##### `expect` <a name="expect" id="@wheatstalk/cdk-expect-state.ExpectExprBase.expect"></a>

```typescript
import { ExpectExprBase } from '@wheatstalk/cdk-expect-state'

ExpectExprBase.expect(expression: string | number | boolean | object | Expr)
```

###### `expression`<sup>Required</sup> <a name="expression" id="@wheatstalk/cdk-expect-state.ExpectExprBase.expect.parameter.expression"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>

---

##### `input` <a name="input" id="@wheatstalk/cdk-expect-state.ExpectExprBase.input"></a>

```typescript
import { ExpectExprBase } from '@wheatstalk/cdk-expect-state'

ExpectExprBase.input(path?: string)
```

###### `path`<sup>Optional</sup> <a name="path" id="@wheatstalk/cdk-expect-state.ExpectExprBase.input.parameter.path"></a>

- *Type:* string

---

##### `objectContaining` <a name="objectContaining" id="@wheatstalk/cdk-expect-state.ExpectExprBase.objectContaining"></a>

```typescript
import { ExpectExprBase } from '@wheatstalk/cdk-expect-state'

ExpectExprBase.objectContaining(record: {[ key: string ]: string | number | boolean | object | Expr})
```

###### `record`<sup>Required</sup> <a name="record" id="@wheatstalk/cdk-expect-state.ExpectExprBase.objectContaining.parameter.record"></a>

- *Type:* {[ key: string ]: string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>}

---

##### `objectType` <a name="objectType" id="@wheatstalk/cdk-expect-state.ExpectExprBase.objectType"></a>

```typescript
import { ExpectExprBase } from '@wheatstalk/cdk-expect-state'

ExpectExprBase.objectType(record: {[ key: string ]: string | number | boolean | object | Expr})
```

###### `record`<sup>Required</sup> <a name="record" id="@wheatstalk/cdk-expect-state.ExpectExprBase.objectType.parameter.record"></a>

- *Type:* {[ key: string ]: string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>}

---

##### `value` <a name="value" id="@wheatstalk/cdk-expect-state.ExpectExprBase.value"></a>

```typescript
import { ExpectExprBase } from '@wheatstalk/cdk-expect-state'

ExpectExprBase.value(value: string | number | boolean | object)
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-expect-state.ExpectExprBase.value.parameter.value"></a>

- *Type:* string | number | boolean | object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectExprBase.property.not">not</a></code> | <code><a href="#@wheatstalk/cdk-expect-state.ExpectNotExpr">ExpectNotExpr</a></code> | *No description.* |

---

##### `not`<sup>Required</sup> <a name="not" id="@wheatstalk/cdk-expect-state.ExpectExprBase.property.not"></a>

```typescript
public readonly not: ExpectNotExpr;
```

- *Type:* <a href="#@wheatstalk/cdk-expect-state.ExpectNotExpr">ExpectNotExpr</a>

---


### ExpectNotExpr <a name="ExpectNotExpr" id="@wheatstalk/cdk-expect-state.ExpectNotExpr"></a>

#### Initializers <a name="Initializers" id="@wheatstalk/cdk-expect-state.ExpectNotExpr.Initializer"></a>

```typescript
import { ExpectNotExpr } from '@wheatstalk/cdk-expect-state'

new ExpectNotExpr(parent: Expr)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectNotExpr.Initializer.parameter.parent">parent</a></code> | <code><a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a></code> | *No description.* |

---

##### `parent`<sup>Required</sup> <a name="parent" id="@wheatstalk/cdk-expect-state.ExpectNotExpr.Initializer.parameter.parent"></a>

- *Type:* <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectNotExpr.renderCode">renderCode</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectNotExpr.toBeCloseTo">toBeCloseTo</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectNotExpr.toBeDefined">toBeDefined</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectNotExpr.toBeFalsy">toBeFalsy</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectNotExpr.toBeGreaterThan">toBeGreaterThan</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectNotExpr.toBeGreaterThanOrEqual">toBeGreaterThanOrEqual</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectNotExpr.toBeLessThan">toBeLessThan</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectNotExpr.toBeLessThanOrEqual">toBeLessThanOrEqual</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectNotExpr.toBeTruthy">toBeTruthy</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectNotExpr.toBeUndefined">toBeUndefined</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectNotExpr.toContain">toContain</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectNotExpr.toContainEqual">toContainEqual</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectNotExpr.toEqual">toEqual</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectNotExpr.toHaveLength">toHaveLength</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectNotExpr.toHaveProperty">toHaveProperty</a></code> | *No description.* |

---

##### `renderCode` <a name="renderCode" id="@wheatstalk/cdk-expect-state.ExpectNotExpr.renderCode"></a>

```typescript
public renderCode(): string
```

##### `toBeCloseTo` <a name="toBeCloseTo" id="@wheatstalk/cdk-expect-state.ExpectNotExpr.toBeCloseTo"></a>

```typescript
public toBeCloseTo(value: number | Expr, digits?: number | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-expect-state.ExpectNotExpr.toBeCloseTo.parameter.value"></a>

- *Type:* number | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>

---

###### `digits`<sup>Optional</sup> <a name="digits" id="@wheatstalk/cdk-expect-state.ExpectNotExpr.toBeCloseTo.parameter.digits"></a>

- *Type:* number | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>

---

##### `toBeDefined` <a name="toBeDefined" id="@wheatstalk/cdk-expect-state.ExpectNotExpr.toBeDefined"></a>

```typescript
public toBeDefined(): Expr
```

##### `toBeFalsy` <a name="toBeFalsy" id="@wheatstalk/cdk-expect-state.ExpectNotExpr.toBeFalsy"></a>

```typescript
public toBeFalsy(): Expr
```

##### `toBeGreaterThan` <a name="toBeGreaterThan" id="@wheatstalk/cdk-expect-state.ExpectNotExpr.toBeGreaterThan"></a>

```typescript
public toBeGreaterThan(value: number | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-expect-state.ExpectNotExpr.toBeGreaterThan.parameter.value"></a>

- *Type:* number | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>

---

##### `toBeGreaterThanOrEqual` <a name="toBeGreaterThanOrEqual" id="@wheatstalk/cdk-expect-state.ExpectNotExpr.toBeGreaterThanOrEqual"></a>

```typescript
public toBeGreaterThanOrEqual(value: number | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-expect-state.ExpectNotExpr.toBeGreaterThanOrEqual.parameter.value"></a>

- *Type:* number | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>

---

##### `toBeLessThan` <a name="toBeLessThan" id="@wheatstalk/cdk-expect-state.ExpectNotExpr.toBeLessThan"></a>

```typescript
public toBeLessThan(value: number | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-expect-state.ExpectNotExpr.toBeLessThan.parameter.value"></a>

- *Type:* number | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>

---

##### `toBeLessThanOrEqual` <a name="toBeLessThanOrEqual" id="@wheatstalk/cdk-expect-state.ExpectNotExpr.toBeLessThanOrEqual"></a>

```typescript
public toBeLessThanOrEqual(value: number | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-expect-state.ExpectNotExpr.toBeLessThanOrEqual.parameter.value"></a>

- *Type:* number | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>

---

##### `toBeTruthy` <a name="toBeTruthy" id="@wheatstalk/cdk-expect-state.ExpectNotExpr.toBeTruthy"></a>

```typescript
public toBeTruthy(): Expr
```

##### `toBeUndefined` <a name="toBeUndefined" id="@wheatstalk/cdk-expect-state.ExpectNotExpr.toBeUndefined"></a>

```typescript
public toBeUndefined(): Expr
```

##### `toContain` <a name="toContain" id="@wheatstalk/cdk-expect-state.ExpectNotExpr.toContain"></a>

```typescript
public toContain(value: string | number | boolean | object): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-expect-state.ExpectNotExpr.toContain.parameter.value"></a>

- *Type:* string | number | boolean | object

---

##### `toContainEqual` <a name="toContainEqual" id="@wheatstalk/cdk-expect-state.ExpectNotExpr.toContainEqual"></a>

```typescript
public toContainEqual(value: string | number | boolean | object | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-expect-state.ExpectNotExpr.toContainEqual.parameter.value"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>

---

##### `toEqual` <a name="toEqual" id="@wheatstalk/cdk-expect-state.ExpectNotExpr.toEqual"></a>

```typescript
public toEqual(value: string | number | boolean | object | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-expect-state.ExpectNotExpr.toEqual.parameter.value"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>

---

##### `toHaveLength` <a name="toHaveLength" id="@wheatstalk/cdk-expect-state.ExpectNotExpr.toHaveLength"></a>

```typescript
public toHaveLength(length: number | Expr): Expr
```

###### `length`<sup>Required</sup> <a name="length" id="@wheatstalk/cdk-expect-state.ExpectNotExpr.toHaveLength.parameter.length"></a>

- *Type:* number | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>

---

##### `toHaveProperty` <a name="toHaveProperty" id="@wheatstalk/cdk-expect-state.ExpectNotExpr.toHaveProperty"></a>

```typescript
public toHaveProperty(property: string | Expr, value?: string | number | boolean | object | Expr): Expr
```

###### `property`<sup>Required</sup> <a name="property" id="@wheatstalk/cdk-expect-state.ExpectNotExpr.toHaveProperty.parameter.property"></a>

- *Type:* string | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>

---

###### `value`<sup>Optional</sup> <a name="value" id="@wheatstalk/cdk-expect-state.ExpectNotExpr.toHaveProperty.parameter.value"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectNotExpr.anything">anything</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectNotExpr.arrayContaining">arrayContaining</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectNotExpr.arrayType">arrayType</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectNotExpr.dynamicType">dynamicType</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectNotExpr.expect">expect</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectNotExpr.input">input</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectNotExpr.objectContaining">objectContaining</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectNotExpr.objectType">objectType</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectNotExpr.value">value</a></code> | *No description.* |

---

##### `anything` <a name="anything" id="@wheatstalk/cdk-expect-state.ExpectNotExpr.anything"></a>

```typescript
import { ExpectNotExpr } from '@wheatstalk/cdk-expect-state'

ExpectNotExpr.anything()
```

##### `arrayContaining` <a name="arrayContaining" id="@wheatstalk/cdk-expect-state.ExpectNotExpr.arrayContaining"></a>

```typescript
import { ExpectNotExpr } from '@wheatstalk/cdk-expect-state'

ExpectNotExpr.arrayContaining(items: string | number | boolean | object | Expr[])
```

###### `items`<sup>Required</sup> <a name="items" id="@wheatstalk/cdk-expect-state.ExpectNotExpr.arrayContaining.parameter.items"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>[]

---

##### `arrayType` <a name="arrayType" id="@wheatstalk/cdk-expect-state.ExpectNotExpr.arrayType"></a>

```typescript
import { ExpectNotExpr } from '@wheatstalk/cdk-expect-state'

ExpectNotExpr.arrayType(items: string | number | boolean | object | Expr[])
```

###### `items`<sup>Required</sup> <a name="items" id="@wheatstalk/cdk-expect-state.ExpectNotExpr.arrayType.parameter.items"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>[]

---

##### `dynamicType` <a name="dynamicType" id="@wheatstalk/cdk-expect-state.ExpectNotExpr.dynamicType"></a>

```typescript
import { ExpectNotExpr } from '@wheatstalk/cdk-expect-state'

ExpectNotExpr.dynamicType(value: string | number | boolean | object | Expr)
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-expect-state.ExpectNotExpr.dynamicType.parameter.value"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>

---

##### `expect` <a name="expect" id="@wheatstalk/cdk-expect-state.ExpectNotExpr.expect"></a>

```typescript
import { ExpectNotExpr } from '@wheatstalk/cdk-expect-state'

ExpectNotExpr.expect(expression: string | number | boolean | object | Expr)
```

###### `expression`<sup>Required</sup> <a name="expression" id="@wheatstalk/cdk-expect-state.ExpectNotExpr.expect.parameter.expression"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>

---

##### `input` <a name="input" id="@wheatstalk/cdk-expect-state.ExpectNotExpr.input"></a>

```typescript
import { ExpectNotExpr } from '@wheatstalk/cdk-expect-state'

ExpectNotExpr.input(path?: string)
```

###### `path`<sup>Optional</sup> <a name="path" id="@wheatstalk/cdk-expect-state.ExpectNotExpr.input.parameter.path"></a>

- *Type:* string

---

##### `objectContaining` <a name="objectContaining" id="@wheatstalk/cdk-expect-state.ExpectNotExpr.objectContaining"></a>

```typescript
import { ExpectNotExpr } from '@wheatstalk/cdk-expect-state'

ExpectNotExpr.objectContaining(record: {[ key: string ]: string | number | boolean | object | Expr})
```

###### `record`<sup>Required</sup> <a name="record" id="@wheatstalk/cdk-expect-state.ExpectNotExpr.objectContaining.parameter.record"></a>

- *Type:* {[ key: string ]: string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>}

---

##### `objectType` <a name="objectType" id="@wheatstalk/cdk-expect-state.ExpectNotExpr.objectType"></a>

```typescript
import { ExpectNotExpr } from '@wheatstalk/cdk-expect-state'

ExpectNotExpr.objectType(record: {[ key: string ]: string | number | boolean | object | Expr})
```

###### `record`<sup>Required</sup> <a name="record" id="@wheatstalk/cdk-expect-state.ExpectNotExpr.objectType.parameter.record"></a>

- *Type:* {[ key: string ]: string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>}

---

##### `value` <a name="value" id="@wheatstalk/cdk-expect-state.ExpectNotExpr.value"></a>

```typescript
import { ExpectNotExpr } from '@wheatstalk/cdk-expect-state'

ExpectNotExpr.value(value: string | number | boolean | object)
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-expect-state.ExpectNotExpr.value.parameter.value"></a>

- *Type:* string | number | boolean | object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpectNotExpr.property.not">not</a></code> | <code><a href="#@wheatstalk/cdk-expect-state.ExpectNotExpr">ExpectNotExpr</a></code> | *No description.* |

---

##### `not`<sup>Required</sup> <a name="not" id="@wheatstalk/cdk-expect-state.ExpectNotExpr.property.not"></a>

```typescript
public readonly not: ExpectNotExpr;
```

- *Type:* <a href="#@wheatstalk/cdk-expect-state.ExpectNotExpr">ExpectNotExpr</a>

---


### Expr <a name="Expr" id="@wheatstalk/cdk-expect-state.Expr"></a>

#### Initializers <a name="Initializers" id="@wheatstalk/cdk-expect-state.Expr.Initializer"></a>

```typescript
import { Expr } from '@wheatstalk/cdk-expect-state'

new Expr()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@wheatstalk/cdk-expect-state.Expr.renderCode">renderCode</a></code> | *No description.* |

---

##### `renderCode` <a name="renderCode" id="@wheatstalk/cdk-expect-state.Expr.renderCode"></a>

```typescript
public renderCode(): string
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@wheatstalk/cdk-expect-state.Expr.anything">anything</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.Expr.arrayContaining">arrayContaining</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.Expr.arrayType">arrayType</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.Expr.dynamicType">dynamicType</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.Expr.expect">expect</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.Expr.input">input</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.Expr.objectContaining">objectContaining</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.Expr.objectType">objectType</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.Expr.value">value</a></code> | *No description.* |

---

##### `anything` <a name="anything" id="@wheatstalk/cdk-expect-state.Expr.anything"></a>

```typescript
import { Expr } from '@wheatstalk/cdk-expect-state'

Expr.anything()
```

##### `arrayContaining` <a name="arrayContaining" id="@wheatstalk/cdk-expect-state.Expr.arrayContaining"></a>

```typescript
import { Expr } from '@wheatstalk/cdk-expect-state'

Expr.arrayContaining(items: string | number | boolean | object | Expr[])
```

###### `items`<sup>Required</sup> <a name="items" id="@wheatstalk/cdk-expect-state.Expr.arrayContaining.parameter.items"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>[]

---

##### `arrayType` <a name="arrayType" id="@wheatstalk/cdk-expect-state.Expr.arrayType"></a>

```typescript
import { Expr } from '@wheatstalk/cdk-expect-state'

Expr.arrayType(items: string | number | boolean | object | Expr[])
```

###### `items`<sup>Required</sup> <a name="items" id="@wheatstalk/cdk-expect-state.Expr.arrayType.parameter.items"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>[]

---

##### `dynamicType` <a name="dynamicType" id="@wheatstalk/cdk-expect-state.Expr.dynamicType"></a>

```typescript
import { Expr } from '@wheatstalk/cdk-expect-state'

Expr.dynamicType(value: string | number | boolean | object | Expr)
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-expect-state.Expr.dynamicType.parameter.value"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>

---

##### `expect` <a name="expect" id="@wheatstalk/cdk-expect-state.Expr.expect"></a>

```typescript
import { Expr } from '@wheatstalk/cdk-expect-state'

Expr.expect(expression: string | number | boolean | object | Expr)
```

###### `expression`<sup>Required</sup> <a name="expression" id="@wheatstalk/cdk-expect-state.Expr.expect.parameter.expression"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>

---

##### `input` <a name="input" id="@wheatstalk/cdk-expect-state.Expr.input"></a>

```typescript
import { Expr } from '@wheatstalk/cdk-expect-state'

Expr.input(path?: string)
```

###### `path`<sup>Optional</sup> <a name="path" id="@wheatstalk/cdk-expect-state.Expr.input.parameter.path"></a>

- *Type:* string

---

##### `objectContaining` <a name="objectContaining" id="@wheatstalk/cdk-expect-state.Expr.objectContaining"></a>

```typescript
import { Expr } from '@wheatstalk/cdk-expect-state'

Expr.objectContaining(record: {[ key: string ]: string | number | boolean | object | Expr})
```

###### `record`<sup>Required</sup> <a name="record" id="@wheatstalk/cdk-expect-state.Expr.objectContaining.parameter.record"></a>

- *Type:* {[ key: string ]: string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>}

---

##### `objectType` <a name="objectType" id="@wheatstalk/cdk-expect-state.Expr.objectType"></a>

```typescript
import { Expr } from '@wheatstalk/cdk-expect-state'

Expr.objectType(record: {[ key: string ]: string | number | boolean | object | Expr})
```

###### `record`<sup>Required</sup> <a name="record" id="@wheatstalk/cdk-expect-state.Expr.objectType.parameter.record"></a>

- *Type:* {[ key: string ]: string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>}

---

##### `value` <a name="value" id="@wheatstalk/cdk-expect-state.Expr.value"></a>

```typescript
import { Expr } from '@wheatstalk/cdk-expect-state'

Expr.value(value: string | number | boolean | object)
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-expect-state.Expr.value.parameter.value"></a>

- *Type:* string | number | boolean | object

---



### ExpressionAssertion <a name="ExpressionAssertion" id="@wheatstalk/cdk-expect-state.ExpressionAssertion"></a>

#### Initializers <a name="Initializers" id="@wheatstalk/cdk-expect-state.ExpressionAssertion.Initializer"></a>

```typescript
import { ExpressionAssertion } from '@wheatstalk/cdk-expect-state'

new ExpressionAssertion(statements: Expr[])
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpressionAssertion.Initializer.parameter.statements">statements</a></code> | <code><a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>[]</code> | *No description.* |

---

##### `statements`<sup>Required</sup> <a name="statements" id="@wheatstalk/cdk-expect-state.ExpressionAssertion.Initializer.parameter.statements"></a>

- *Type:* <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>[]

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpressionAssertion.renderCode">renderCode</a></code> | *No description.* |

---

##### `renderCode` <a name="renderCode" id="@wheatstalk/cdk-expect-state.ExpressionAssertion.renderCode"></a>

```typescript
public renderCode(): string
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@wheatstalk/cdk-expect-state.ExpressionAssertion.expressions">expressions</a></code> | *No description.* |

---

##### `expressions` <a name="expressions" id="@wheatstalk/cdk-expect-state.ExpressionAssertion.expressions"></a>

```typescript
import { ExpressionAssertion } from '@wheatstalk/cdk-expect-state'

ExpressionAssertion.expressions(expressions: Expr[])
```

###### `expressions`<sup>Required</sup> <a name="expressions" id="@wheatstalk/cdk-expect-state.ExpressionAssertion.expressions.parameter.expressions"></a>

- *Type:* <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>[]

---



### MemberCallExpr <a name="MemberCallExpr" id="@wheatstalk/cdk-expect-state.MemberCallExpr"></a>

#### Initializers <a name="Initializers" id="@wheatstalk/cdk-expect-state.MemberCallExpr.Initializer"></a>

```typescript
import { MemberCallExpr } from '@wheatstalk/cdk-expect-state'

new MemberCallExpr(parent: Expr, member: string, args: Expr[])
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@wheatstalk/cdk-expect-state.MemberCallExpr.Initializer.parameter.parent">parent</a></code> | <code><a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.MemberCallExpr.Initializer.parameter.member">member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.MemberCallExpr.Initializer.parameter.args">args</a></code> | <code><a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>[]</code> | *No description.* |

---

##### `parent`<sup>Required</sup> <a name="parent" id="@wheatstalk/cdk-expect-state.MemberCallExpr.Initializer.parameter.parent"></a>

- *Type:* <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>

---

##### `member`<sup>Required</sup> <a name="member" id="@wheatstalk/cdk-expect-state.MemberCallExpr.Initializer.parameter.member"></a>

- *Type:* string

---

##### `args`<sup>Required</sup> <a name="args" id="@wheatstalk/cdk-expect-state.MemberCallExpr.Initializer.parameter.args"></a>

- *Type:* <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>[]

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@wheatstalk/cdk-expect-state.MemberCallExpr.renderCode">renderCode</a></code> | *No description.* |

---

##### `renderCode` <a name="renderCode" id="@wheatstalk/cdk-expect-state.MemberCallExpr.renderCode"></a>

```typescript
public renderCode(): string
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@wheatstalk/cdk-expect-state.MemberCallExpr.anything">anything</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.MemberCallExpr.arrayContaining">arrayContaining</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.MemberCallExpr.arrayType">arrayType</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.MemberCallExpr.dynamicType">dynamicType</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.MemberCallExpr.expect">expect</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.MemberCallExpr.input">input</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.MemberCallExpr.objectContaining">objectContaining</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.MemberCallExpr.objectType">objectType</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.MemberCallExpr.value">value</a></code> | *No description.* |

---

##### `anything` <a name="anything" id="@wheatstalk/cdk-expect-state.MemberCallExpr.anything"></a>

```typescript
import { MemberCallExpr } from '@wheatstalk/cdk-expect-state'

MemberCallExpr.anything()
```

##### `arrayContaining` <a name="arrayContaining" id="@wheatstalk/cdk-expect-state.MemberCallExpr.arrayContaining"></a>

```typescript
import { MemberCallExpr } from '@wheatstalk/cdk-expect-state'

MemberCallExpr.arrayContaining(items: string | number | boolean | object | Expr[])
```

###### `items`<sup>Required</sup> <a name="items" id="@wheatstalk/cdk-expect-state.MemberCallExpr.arrayContaining.parameter.items"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>[]

---

##### `arrayType` <a name="arrayType" id="@wheatstalk/cdk-expect-state.MemberCallExpr.arrayType"></a>

```typescript
import { MemberCallExpr } from '@wheatstalk/cdk-expect-state'

MemberCallExpr.arrayType(items: string | number | boolean | object | Expr[])
```

###### `items`<sup>Required</sup> <a name="items" id="@wheatstalk/cdk-expect-state.MemberCallExpr.arrayType.parameter.items"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>[]

---

##### `dynamicType` <a name="dynamicType" id="@wheatstalk/cdk-expect-state.MemberCallExpr.dynamicType"></a>

```typescript
import { MemberCallExpr } from '@wheatstalk/cdk-expect-state'

MemberCallExpr.dynamicType(value: string | number | boolean | object | Expr)
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-expect-state.MemberCallExpr.dynamicType.parameter.value"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>

---

##### `expect` <a name="expect" id="@wheatstalk/cdk-expect-state.MemberCallExpr.expect"></a>

```typescript
import { MemberCallExpr } from '@wheatstalk/cdk-expect-state'

MemberCallExpr.expect(expression: string | number | boolean | object | Expr)
```

###### `expression`<sup>Required</sup> <a name="expression" id="@wheatstalk/cdk-expect-state.MemberCallExpr.expect.parameter.expression"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>

---

##### `input` <a name="input" id="@wheatstalk/cdk-expect-state.MemberCallExpr.input"></a>

```typescript
import { MemberCallExpr } from '@wheatstalk/cdk-expect-state'

MemberCallExpr.input(path?: string)
```

###### `path`<sup>Optional</sup> <a name="path" id="@wheatstalk/cdk-expect-state.MemberCallExpr.input.parameter.path"></a>

- *Type:* string

---

##### `objectContaining` <a name="objectContaining" id="@wheatstalk/cdk-expect-state.MemberCallExpr.objectContaining"></a>

```typescript
import { MemberCallExpr } from '@wheatstalk/cdk-expect-state'

MemberCallExpr.objectContaining(record: {[ key: string ]: string | number | boolean | object | Expr})
```

###### `record`<sup>Required</sup> <a name="record" id="@wheatstalk/cdk-expect-state.MemberCallExpr.objectContaining.parameter.record"></a>

- *Type:* {[ key: string ]: string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>}

---

##### `objectType` <a name="objectType" id="@wheatstalk/cdk-expect-state.MemberCallExpr.objectType"></a>

```typescript
import { MemberCallExpr } from '@wheatstalk/cdk-expect-state'

MemberCallExpr.objectType(record: {[ key: string ]: string | number | boolean | object | Expr})
```

###### `record`<sup>Required</sup> <a name="record" id="@wheatstalk/cdk-expect-state.MemberCallExpr.objectType.parameter.record"></a>

- *Type:* {[ key: string ]: string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>}

---

##### `value` <a name="value" id="@wheatstalk/cdk-expect-state.MemberCallExpr.value"></a>

```typescript
import { MemberCallExpr } from '@wheatstalk/cdk-expect-state'

MemberCallExpr.value(value: string | number | boolean | object)
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-expect-state.MemberCallExpr.value.parameter.value"></a>

- *Type:* string | number | boolean | object

---



### ObjectTypeExpr <a name="ObjectTypeExpr" id="@wheatstalk/cdk-expect-state.ObjectTypeExpr"></a>

#### Initializers <a name="Initializers" id="@wheatstalk/cdk-expect-state.ObjectTypeExpr.Initializer"></a>

```typescript
import { ObjectTypeExpr } from '@wheatstalk/cdk-expect-state'

new ObjectTypeExpr(record: {[ key: string ]: string | number | boolean | object | Expr})
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@wheatstalk/cdk-expect-state.ObjectTypeExpr.Initializer.parameter.record">record</a></code> | <code>{[ key: string ]: string \| number \| boolean \| object \| <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>}</code> | *No description.* |

---

##### `record`<sup>Required</sup> <a name="record" id="@wheatstalk/cdk-expect-state.ObjectTypeExpr.Initializer.parameter.record"></a>

- *Type:* {[ key: string ]: string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@wheatstalk/cdk-expect-state.ObjectTypeExpr.renderCode">renderCode</a></code> | *No description.* |

---

##### `renderCode` <a name="renderCode" id="@wheatstalk/cdk-expect-state.ObjectTypeExpr.renderCode"></a>

```typescript
public renderCode(): string
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@wheatstalk/cdk-expect-state.ObjectTypeExpr.anything">anything</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ObjectTypeExpr.arrayContaining">arrayContaining</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ObjectTypeExpr.arrayType">arrayType</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ObjectTypeExpr.dynamicType">dynamicType</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ObjectTypeExpr.expect">expect</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ObjectTypeExpr.input">input</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ObjectTypeExpr.objectContaining">objectContaining</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ObjectTypeExpr.objectType">objectType</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ObjectTypeExpr.value">value</a></code> | *No description.* |

---

##### `anything` <a name="anything" id="@wheatstalk/cdk-expect-state.ObjectTypeExpr.anything"></a>

```typescript
import { ObjectTypeExpr } from '@wheatstalk/cdk-expect-state'

ObjectTypeExpr.anything()
```

##### `arrayContaining` <a name="arrayContaining" id="@wheatstalk/cdk-expect-state.ObjectTypeExpr.arrayContaining"></a>

```typescript
import { ObjectTypeExpr } from '@wheatstalk/cdk-expect-state'

ObjectTypeExpr.arrayContaining(items: string | number | boolean | object | Expr[])
```

###### `items`<sup>Required</sup> <a name="items" id="@wheatstalk/cdk-expect-state.ObjectTypeExpr.arrayContaining.parameter.items"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>[]

---

##### `arrayType` <a name="arrayType" id="@wheatstalk/cdk-expect-state.ObjectTypeExpr.arrayType"></a>

```typescript
import { ObjectTypeExpr } from '@wheatstalk/cdk-expect-state'

ObjectTypeExpr.arrayType(items: string | number | boolean | object | Expr[])
```

###### `items`<sup>Required</sup> <a name="items" id="@wheatstalk/cdk-expect-state.ObjectTypeExpr.arrayType.parameter.items"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>[]

---

##### `dynamicType` <a name="dynamicType" id="@wheatstalk/cdk-expect-state.ObjectTypeExpr.dynamicType"></a>

```typescript
import { ObjectTypeExpr } from '@wheatstalk/cdk-expect-state'

ObjectTypeExpr.dynamicType(value: string | number | boolean | object | Expr)
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-expect-state.ObjectTypeExpr.dynamicType.parameter.value"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>

---

##### `expect` <a name="expect" id="@wheatstalk/cdk-expect-state.ObjectTypeExpr.expect"></a>

```typescript
import { ObjectTypeExpr } from '@wheatstalk/cdk-expect-state'

ObjectTypeExpr.expect(expression: string | number | boolean | object | Expr)
```

###### `expression`<sup>Required</sup> <a name="expression" id="@wheatstalk/cdk-expect-state.ObjectTypeExpr.expect.parameter.expression"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>

---

##### `input` <a name="input" id="@wheatstalk/cdk-expect-state.ObjectTypeExpr.input"></a>

```typescript
import { ObjectTypeExpr } from '@wheatstalk/cdk-expect-state'

ObjectTypeExpr.input(path?: string)
```

###### `path`<sup>Optional</sup> <a name="path" id="@wheatstalk/cdk-expect-state.ObjectTypeExpr.input.parameter.path"></a>

- *Type:* string

---

##### `objectContaining` <a name="objectContaining" id="@wheatstalk/cdk-expect-state.ObjectTypeExpr.objectContaining"></a>

```typescript
import { ObjectTypeExpr } from '@wheatstalk/cdk-expect-state'

ObjectTypeExpr.objectContaining(record: {[ key: string ]: string | number | boolean | object | Expr})
```

###### `record`<sup>Required</sup> <a name="record" id="@wheatstalk/cdk-expect-state.ObjectTypeExpr.objectContaining.parameter.record"></a>

- *Type:* {[ key: string ]: string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>}

---

##### `objectType` <a name="objectType" id="@wheatstalk/cdk-expect-state.ObjectTypeExpr.objectType"></a>

```typescript
import { ObjectTypeExpr } from '@wheatstalk/cdk-expect-state'

ObjectTypeExpr.objectType(record: {[ key: string ]: string | number | boolean | object | Expr})
```

###### `record`<sup>Required</sup> <a name="record" id="@wheatstalk/cdk-expect-state.ObjectTypeExpr.objectType.parameter.record"></a>

- *Type:* {[ key: string ]: string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>}

---

##### `value` <a name="value" id="@wheatstalk/cdk-expect-state.ObjectTypeExpr.value"></a>

```typescript
import { ObjectTypeExpr } from '@wheatstalk/cdk-expect-state'

ObjectTypeExpr.value(value: string | number | boolean | object)
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-expect-state.ObjectTypeExpr.value.parameter.value"></a>

- *Type:* string | number | boolean | object

---



### SymbolExpression <a name="SymbolExpression" id="@wheatstalk/cdk-expect-state.SymbolExpression"></a>

#### Initializers <a name="Initializers" id="@wheatstalk/cdk-expect-state.SymbolExpression.Initializer"></a>

```typescript
import { SymbolExpression } from '@wheatstalk/cdk-expect-state'

new SymbolExpression(symbol: string, path?: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@wheatstalk/cdk-expect-state.SymbolExpression.Initializer.parameter.symbol">symbol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.SymbolExpression.Initializer.parameter.path">path</a></code> | <code>string</code> | *No description.* |

---

##### `symbol`<sup>Required</sup> <a name="symbol" id="@wheatstalk/cdk-expect-state.SymbolExpression.Initializer.parameter.symbol"></a>

- *Type:* string

---

##### `path`<sup>Optional</sup> <a name="path" id="@wheatstalk/cdk-expect-state.SymbolExpression.Initializer.parameter.path"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@wheatstalk/cdk-expect-state.SymbolExpression.renderCode">renderCode</a></code> | *No description.* |

---

##### `renderCode` <a name="renderCode" id="@wheatstalk/cdk-expect-state.SymbolExpression.renderCode"></a>

```typescript
public renderCode(): string
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@wheatstalk/cdk-expect-state.SymbolExpression.anything">anything</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.SymbolExpression.arrayContaining">arrayContaining</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.SymbolExpression.arrayType">arrayType</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.SymbolExpression.dynamicType">dynamicType</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.SymbolExpression.expect">expect</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.SymbolExpression.input">input</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.SymbolExpression.objectContaining">objectContaining</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.SymbolExpression.objectType">objectType</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.SymbolExpression.value">value</a></code> | *No description.* |

---

##### `anything` <a name="anything" id="@wheatstalk/cdk-expect-state.SymbolExpression.anything"></a>

```typescript
import { SymbolExpression } from '@wheatstalk/cdk-expect-state'

SymbolExpression.anything()
```

##### `arrayContaining` <a name="arrayContaining" id="@wheatstalk/cdk-expect-state.SymbolExpression.arrayContaining"></a>

```typescript
import { SymbolExpression } from '@wheatstalk/cdk-expect-state'

SymbolExpression.arrayContaining(items: string | number | boolean | object | Expr[])
```

###### `items`<sup>Required</sup> <a name="items" id="@wheatstalk/cdk-expect-state.SymbolExpression.arrayContaining.parameter.items"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>[]

---

##### `arrayType` <a name="arrayType" id="@wheatstalk/cdk-expect-state.SymbolExpression.arrayType"></a>

```typescript
import { SymbolExpression } from '@wheatstalk/cdk-expect-state'

SymbolExpression.arrayType(items: string | number | boolean | object | Expr[])
```

###### `items`<sup>Required</sup> <a name="items" id="@wheatstalk/cdk-expect-state.SymbolExpression.arrayType.parameter.items"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>[]

---

##### `dynamicType` <a name="dynamicType" id="@wheatstalk/cdk-expect-state.SymbolExpression.dynamicType"></a>

```typescript
import { SymbolExpression } from '@wheatstalk/cdk-expect-state'

SymbolExpression.dynamicType(value: string | number | boolean | object | Expr)
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-expect-state.SymbolExpression.dynamicType.parameter.value"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>

---

##### `expect` <a name="expect" id="@wheatstalk/cdk-expect-state.SymbolExpression.expect"></a>

```typescript
import { SymbolExpression } from '@wheatstalk/cdk-expect-state'

SymbolExpression.expect(expression: string | number | boolean | object | Expr)
```

###### `expression`<sup>Required</sup> <a name="expression" id="@wheatstalk/cdk-expect-state.SymbolExpression.expect.parameter.expression"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>

---

##### `input` <a name="input" id="@wheatstalk/cdk-expect-state.SymbolExpression.input"></a>

```typescript
import { SymbolExpression } from '@wheatstalk/cdk-expect-state'

SymbolExpression.input(path?: string)
```

###### `path`<sup>Optional</sup> <a name="path" id="@wheatstalk/cdk-expect-state.SymbolExpression.input.parameter.path"></a>

- *Type:* string

---

##### `objectContaining` <a name="objectContaining" id="@wheatstalk/cdk-expect-state.SymbolExpression.objectContaining"></a>

```typescript
import { SymbolExpression } from '@wheatstalk/cdk-expect-state'

SymbolExpression.objectContaining(record: {[ key: string ]: string | number | boolean | object | Expr})
```

###### `record`<sup>Required</sup> <a name="record" id="@wheatstalk/cdk-expect-state.SymbolExpression.objectContaining.parameter.record"></a>

- *Type:* {[ key: string ]: string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>}

---

##### `objectType` <a name="objectType" id="@wheatstalk/cdk-expect-state.SymbolExpression.objectType"></a>

```typescript
import { SymbolExpression } from '@wheatstalk/cdk-expect-state'

SymbolExpression.objectType(record: {[ key: string ]: string | number | boolean | object | Expr})
```

###### `record`<sup>Required</sup> <a name="record" id="@wheatstalk/cdk-expect-state.SymbolExpression.objectType.parameter.record"></a>

- *Type:* {[ key: string ]: string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>}

---

##### `value` <a name="value" id="@wheatstalk/cdk-expect-state.SymbolExpression.value"></a>

```typescript
import { SymbolExpression } from '@wheatstalk/cdk-expect-state'

SymbolExpression.value(value: string | number | boolean | object)
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-expect-state.SymbolExpression.value.parameter.value"></a>

- *Type:* string | number | boolean | object

---



### ValueExpr <a name="ValueExpr" id="@wheatstalk/cdk-expect-state.ValueExpr"></a>

#### Initializers <a name="Initializers" id="@wheatstalk/cdk-expect-state.ValueExpr.Initializer"></a>

```typescript
import { ValueExpr } from '@wheatstalk/cdk-expect-state'

new ValueExpr(value: string | number | boolean | object)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@wheatstalk/cdk-expect-state.ValueExpr.Initializer.parameter.value">value</a></code> | <code>string \| number \| boolean \| object</code> | *No description.* |

---

##### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-expect-state.ValueExpr.Initializer.parameter.value"></a>

- *Type:* string | number | boolean | object

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@wheatstalk/cdk-expect-state.ValueExpr.renderCode">renderCode</a></code> | *No description.* |

---

##### `renderCode` <a name="renderCode" id="@wheatstalk/cdk-expect-state.ValueExpr.renderCode"></a>

```typescript
public renderCode(): string
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@wheatstalk/cdk-expect-state.ValueExpr.anything">anything</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ValueExpr.arrayContaining">arrayContaining</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ValueExpr.arrayType">arrayType</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ValueExpr.dynamicType">dynamicType</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ValueExpr.expect">expect</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ValueExpr.input">input</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ValueExpr.objectContaining">objectContaining</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ValueExpr.objectType">objectType</a></code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-expect-state.ValueExpr.value">value</a></code> | *No description.* |

---

##### `anything` <a name="anything" id="@wheatstalk/cdk-expect-state.ValueExpr.anything"></a>

```typescript
import { ValueExpr } from '@wheatstalk/cdk-expect-state'

ValueExpr.anything()
```

##### `arrayContaining` <a name="arrayContaining" id="@wheatstalk/cdk-expect-state.ValueExpr.arrayContaining"></a>

```typescript
import { ValueExpr } from '@wheatstalk/cdk-expect-state'

ValueExpr.arrayContaining(items: string | number | boolean | object | Expr[])
```

###### `items`<sup>Required</sup> <a name="items" id="@wheatstalk/cdk-expect-state.ValueExpr.arrayContaining.parameter.items"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>[]

---

##### `arrayType` <a name="arrayType" id="@wheatstalk/cdk-expect-state.ValueExpr.arrayType"></a>

```typescript
import { ValueExpr } from '@wheatstalk/cdk-expect-state'

ValueExpr.arrayType(items: string | number | boolean | object | Expr[])
```

###### `items`<sup>Required</sup> <a name="items" id="@wheatstalk/cdk-expect-state.ValueExpr.arrayType.parameter.items"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>[]

---

##### `dynamicType` <a name="dynamicType" id="@wheatstalk/cdk-expect-state.ValueExpr.dynamicType"></a>

```typescript
import { ValueExpr } from '@wheatstalk/cdk-expect-state'

ValueExpr.dynamicType(value: string | number | boolean | object | Expr)
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-expect-state.ValueExpr.dynamicType.parameter.value"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>

---

##### `expect` <a name="expect" id="@wheatstalk/cdk-expect-state.ValueExpr.expect"></a>

```typescript
import { ValueExpr } from '@wheatstalk/cdk-expect-state'

ValueExpr.expect(expression: string | number | boolean | object | Expr)
```

###### `expression`<sup>Required</sup> <a name="expression" id="@wheatstalk/cdk-expect-state.ValueExpr.expect.parameter.expression"></a>

- *Type:* string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>

---

##### `input` <a name="input" id="@wheatstalk/cdk-expect-state.ValueExpr.input"></a>

```typescript
import { ValueExpr } from '@wheatstalk/cdk-expect-state'

ValueExpr.input(path?: string)
```

###### `path`<sup>Optional</sup> <a name="path" id="@wheatstalk/cdk-expect-state.ValueExpr.input.parameter.path"></a>

- *Type:* string

---

##### `objectContaining` <a name="objectContaining" id="@wheatstalk/cdk-expect-state.ValueExpr.objectContaining"></a>

```typescript
import { ValueExpr } from '@wheatstalk/cdk-expect-state'

ValueExpr.objectContaining(record: {[ key: string ]: string | number | boolean | object | Expr})
```

###### `record`<sup>Required</sup> <a name="record" id="@wheatstalk/cdk-expect-state.ValueExpr.objectContaining.parameter.record"></a>

- *Type:* {[ key: string ]: string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>}

---

##### `objectType` <a name="objectType" id="@wheatstalk/cdk-expect-state.ValueExpr.objectType"></a>

```typescript
import { ValueExpr } from '@wheatstalk/cdk-expect-state'

ValueExpr.objectType(record: {[ key: string ]: string | number | boolean | object | Expr})
```

###### `record`<sup>Required</sup> <a name="record" id="@wheatstalk/cdk-expect-state.ValueExpr.objectType.parameter.record"></a>

- *Type:* {[ key: string ]: string | number | boolean | object | <a href="#@wheatstalk/cdk-expect-state.Expr">Expr</a>}

---

##### `value` <a name="value" id="@wheatstalk/cdk-expect-state.ValueExpr.value"></a>

```typescript
import { ValueExpr } from '@wheatstalk/cdk-expect-state'

ValueExpr.value(value: string | number | boolean | object)
```

###### `value`<sup>Required</sup> <a name="value" id="@wheatstalk/cdk-expect-state.ValueExpr.value.parameter.value"></a>

- *Type:* string | number | boolean | object

---




