# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ExpectState <a name="ExpectState" id="cdk-sfn-integ.ExpectState"></a>

#### Initializers <a name="Initializers" id="cdk-sfn-integ.ExpectState.Initializer"></a>

```typescript
import { ExpectState } from 'cdk-sfn-integ'

new ExpectState(scope: Construct, id: string, props: ExpectStateProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-sfn-integ.ExpectState.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectState.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectState.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-sfn-integ.ExpectStateProps">ExpectStateProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-sfn-integ.ExpectState.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-sfn-integ.ExpectState.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-sfn-integ.ExpectState.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-sfn-integ.ExpectStateProps">ExpectStateProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-sfn-integ.ExpectState.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-sfn-integ.ExpectState.next">next</a></code> | Continue normal execution with the given state. |
| <code><a href="#cdk-sfn-integ.ExpectState.prefixStates">prefixStates</a></code> | Prefix the IDs of all states in this state machine fragment. |
| <code><a href="#cdk-sfn-integ.ExpectState.toSingleState">toSingleState</a></code> | Wrap all states in this state machine fragment up into a single state. |

---

##### `toString` <a name="toString" id="cdk-sfn-integ.ExpectState.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `next` <a name="next" id="cdk-sfn-integ.ExpectState.next"></a>

```typescript
public next(next: IChainable): Chain
```

Continue normal execution with the given state.

###### `next`<sup>Required</sup> <a name="next" id="cdk-sfn-integ.ExpectState.next.parameter.next"></a>

- *Type:* aws-cdk-lib.aws_stepfunctions.IChainable

---

##### `prefixStates` <a name="prefixStates" id="cdk-sfn-integ.ExpectState.prefixStates"></a>

```typescript
public prefixStates(prefix?: string): StateMachineFragment
```

Prefix the IDs of all states in this state machine fragment.

Use this to avoid multiple copies of the state machine all having the same state IDs.

###### `prefix`<sup>Optional</sup> <a name="prefix" id="cdk-sfn-integ.ExpectState.prefixStates.parameter.prefix"></a>

- *Type:* string

The prefix to add.

Will use construct ID by default.

---

##### `toSingleState` <a name="toSingleState" id="cdk-sfn-integ.ExpectState.toSingleState"></a>

```typescript
public toSingleState(options?: SingleStateOptions): Parallel
```

Wrap all states in this state machine fragment up into a single state.

This can be used to add retry or error handling onto this state machine fragment.  Be aware that this changes the result of the inner state machine to be an array with the result of the state machine in it. Adjust your paths accordingly. For example, change 'outputPath' to '$[0]'.

###### `options`<sup>Optional</sup> <a name="options" id="cdk-sfn-integ.ExpectState.toSingleState.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_stepfunctions.SingleStateOptions

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-sfn-integ.ExpectState.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-sfn-integ.ExpectState.isConstruct"></a>

```typescript
import { ExpectState } from 'cdk-sfn-integ'

ExpectState.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-sfn-integ.ExpectState.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-sfn-integ.ExpectState.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-sfn-integ.ExpectState.property.endStates">endStates</a></code> | <code>aws-cdk-lib.aws_stepfunctions.INextable[]</code> | The states to chain onto if this fragment is used. |
| <code><a href="#cdk-sfn-integ.ExpectState.property.id">id</a></code> | <code>string</code> | Descriptive identifier for this chainable. |
| <code><a href="#cdk-sfn-integ.ExpectState.property.startState">startState</a></code> | <code>aws-cdk-lib.aws_stepfunctions.State</code> | The start state of this state machine fragment. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-sfn-integ.ExpectState.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `endStates`<sup>Required</sup> <a name="endStates" id="cdk-sfn-integ.ExpectState.property.endStates"></a>

```typescript
public readonly endStates: INextable[];
```

- *Type:* aws-cdk-lib.aws_stepfunctions.INextable[]

The states to chain onto if this fragment is used.

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-sfn-integ.ExpectState.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Descriptive identifier for this chainable.

---

##### `startState`<sup>Required</sup> <a name="startState" id="cdk-sfn-integ.ExpectState.property.startState"></a>

```typescript
public readonly startState: State;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.State

The start state of this state machine fragment.

---


## Structs <a name="Structs" id="Structs"></a>

### ExpectStateProps <a name="ExpectStateProps" id="cdk-sfn-integ.ExpectStateProps"></a>

#### Initializer <a name="Initializer" id="cdk-sfn-integ.ExpectStateProps.Initializer"></a>

```typescript
import { ExpectStateProps } from 'cdk-sfn-integ'

const expectStateProps: ExpectStateProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-sfn-integ.ExpectStateProps.property.assert">assert</a></code> | <code><a href="#cdk-sfn-integ.Assert">Assert</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectStateProps.property.inputPath">inputPath</a></code> | <code>string</code> | *No description.* |

---

##### `assert`<sup>Required</sup> <a name="assert" id="cdk-sfn-integ.ExpectStateProps.property.assert"></a>

```typescript
public readonly assert: Assert;
```

- *Type:* <a href="#cdk-sfn-integ.Assert">Assert</a>

---

##### `inputPath`<sup>Optional</sup> <a name="inputPath" id="cdk-sfn-integ.ExpectStateProps.property.inputPath"></a>

```typescript
public readonly inputPath: string;
```

- *Type:* string

---

## Classes <a name="Classes" id="Classes"></a>

### ArrayTypeExpr <a name="ArrayTypeExpr" id="cdk-sfn-integ.ArrayTypeExpr"></a>

#### Initializers <a name="Initializers" id="cdk-sfn-integ.ArrayTypeExpr.Initializer"></a>

```typescript
import { ArrayTypeExpr } from 'cdk-sfn-integ'

new ArrayTypeExpr(items: string | number | boolean | object | Expr[])
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-sfn-integ.ArrayTypeExpr.Initializer.parameter.items">items</a></code> | <code>string \| number \| boolean \| object \| <a href="#cdk-sfn-integ.Expr">Expr</a>[]</code> | *No description.* |

---

##### `items`<sup>Required</sup> <a name="items" id="cdk-sfn-integ.ArrayTypeExpr.Initializer.parameter.items"></a>

- *Type:* string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>[]

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-sfn-integ.ArrayTypeExpr.renderCode">renderCode</a></code> | *No description.* |

---

##### `renderCode` <a name="renderCode" id="cdk-sfn-integ.ArrayTypeExpr.renderCode"></a>

```typescript
public renderCode(): string
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-sfn-integ.ArrayTypeExpr.anything">anything</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ArrayTypeExpr.arrayContaining">arrayContaining</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ArrayTypeExpr.arrayType">arrayType</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ArrayTypeExpr.dynamicType">dynamicType</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ArrayTypeExpr.expect">expect</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ArrayTypeExpr.input">input</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ArrayTypeExpr.objectContaining">objectContaining</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ArrayTypeExpr.objectType">objectType</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ArrayTypeExpr.value">value</a></code> | *No description.* |

---

##### `anything` <a name="anything" id="cdk-sfn-integ.ArrayTypeExpr.anything"></a>

```typescript
import { ArrayTypeExpr } from 'cdk-sfn-integ'

ArrayTypeExpr.anything()
```

##### `arrayContaining` <a name="arrayContaining" id="cdk-sfn-integ.ArrayTypeExpr.arrayContaining"></a>

```typescript
import { ArrayTypeExpr } from 'cdk-sfn-integ'

ArrayTypeExpr.arrayContaining(items: string | number | boolean | object | Expr[])
```

###### `items`<sup>Required</sup> <a name="items" id="cdk-sfn-integ.ArrayTypeExpr.arrayContaining.parameter.items"></a>

- *Type:* string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>[]

---

##### `arrayType` <a name="arrayType" id="cdk-sfn-integ.ArrayTypeExpr.arrayType"></a>

```typescript
import { ArrayTypeExpr } from 'cdk-sfn-integ'

ArrayTypeExpr.arrayType(items: string | number | boolean | object | Expr[])
```

###### `items`<sup>Required</sup> <a name="items" id="cdk-sfn-integ.ArrayTypeExpr.arrayType.parameter.items"></a>

- *Type:* string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>[]

---

##### `dynamicType` <a name="dynamicType" id="cdk-sfn-integ.ArrayTypeExpr.dynamicType"></a>

```typescript
import { ArrayTypeExpr } from 'cdk-sfn-integ'

ArrayTypeExpr.dynamicType(value: string | number | boolean | object | Expr)
```

###### `value`<sup>Required</sup> <a name="value" id="cdk-sfn-integ.ArrayTypeExpr.dynamicType.parameter.value"></a>

- *Type:* string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>

---

##### `expect` <a name="expect" id="cdk-sfn-integ.ArrayTypeExpr.expect"></a>

```typescript
import { ArrayTypeExpr } from 'cdk-sfn-integ'

ArrayTypeExpr.expect(expression: string | number | boolean | object | Expr)
```

###### `expression`<sup>Required</sup> <a name="expression" id="cdk-sfn-integ.ArrayTypeExpr.expect.parameter.expression"></a>

- *Type:* string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>

---

##### `input` <a name="input" id="cdk-sfn-integ.ArrayTypeExpr.input"></a>

```typescript
import { ArrayTypeExpr } from 'cdk-sfn-integ'

ArrayTypeExpr.input(path?: string)
```

###### `path`<sup>Optional</sup> <a name="path" id="cdk-sfn-integ.ArrayTypeExpr.input.parameter.path"></a>

- *Type:* string

---

##### `objectContaining` <a name="objectContaining" id="cdk-sfn-integ.ArrayTypeExpr.objectContaining"></a>

```typescript
import { ArrayTypeExpr } from 'cdk-sfn-integ'

ArrayTypeExpr.objectContaining(record: {[ key: string ]: string | number | boolean | object | Expr})
```

###### `record`<sup>Required</sup> <a name="record" id="cdk-sfn-integ.ArrayTypeExpr.objectContaining.parameter.record"></a>

- *Type:* {[ key: string ]: string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>}

---

##### `objectType` <a name="objectType" id="cdk-sfn-integ.ArrayTypeExpr.objectType"></a>

```typescript
import { ArrayTypeExpr } from 'cdk-sfn-integ'

ArrayTypeExpr.objectType(record: {[ key: string ]: string | number | boolean | object | Expr})
```

###### `record`<sup>Required</sup> <a name="record" id="cdk-sfn-integ.ArrayTypeExpr.objectType.parameter.record"></a>

- *Type:* {[ key: string ]: string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>}

---

##### `value` <a name="value" id="cdk-sfn-integ.ArrayTypeExpr.value"></a>

```typescript
import { ArrayTypeExpr } from 'cdk-sfn-integ'

ArrayTypeExpr.value(value: string | number | boolean | object)
```

###### `value`<sup>Required</sup> <a name="value" id="cdk-sfn-integ.ArrayTypeExpr.value.parameter.value"></a>

- *Type:* string | number | boolean | object

---



### Assert <a name="Assert" id="cdk-sfn-integ.Assert"></a>

#### Initializers <a name="Initializers" id="cdk-sfn-integ.Assert.Initializer"></a>

```typescript
import { Assert } from 'cdk-sfn-integ'

new Assert()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-sfn-integ.Assert.renderCode">renderCode</a></code> | *No description.* |

---

##### `renderCode` <a name="renderCode" id="cdk-sfn-integ.Assert.renderCode"></a>

```typescript
public renderCode(): string
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-sfn-integ.Assert.expressions">expressions</a></code> | *No description.* |

---

##### `expressions` <a name="expressions" id="cdk-sfn-integ.Assert.expressions"></a>

```typescript
import { Assert } from 'cdk-sfn-integ'

Assert.expressions(expressions: Expr[])
```

###### `expressions`<sup>Required</sup> <a name="expressions" id="cdk-sfn-integ.Assert.expressions.parameter.expressions"></a>

- *Type:* <a href="#cdk-sfn-integ.Expr">Expr</a>[]

---



### ExpectExpr <a name="ExpectExpr" id="cdk-sfn-integ.ExpectExpr"></a>

#### Initializers <a name="Initializers" id="cdk-sfn-integ.ExpectExpr.Initializer"></a>

```typescript
import { ExpectExpr } from 'cdk-sfn-integ'

new ExpectExpr(expression: Expr)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-sfn-integ.ExpectExpr.Initializer.parameter.expression">expression</a></code> | <code><a href="#cdk-sfn-integ.Expr">Expr</a></code> | *No description.* |

---

##### `expression`<sup>Required</sup> <a name="expression" id="cdk-sfn-integ.ExpectExpr.Initializer.parameter.expression"></a>

- *Type:* <a href="#cdk-sfn-integ.Expr">Expr</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-sfn-integ.ExpectExpr.renderCode">renderCode</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectExpr.toBeCloseTo">toBeCloseTo</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectExpr.toBeDefined">toBeDefined</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectExpr.toBeFalsy">toBeFalsy</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectExpr.toBeGreaterThan">toBeGreaterThan</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectExpr.toBeGreaterThanOrEqual">toBeGreaterThanOrEqual</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectExpr.toBeLessThan">toBeLessThan</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectExpr.toBeLessThanOrEqual">toBeLessThanOrEqual</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectExpr.toBeTruthy">toBeTruthy</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectExpr.toBeUndefined">toBeUndefined</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectExpr.toContain">toContain</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectExpr.toContainEqual">toContainEqual</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectExpr.toEqual">toEqual</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectExpr.toHaveLength">toHaveLength</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectExpr.toHaveProperty">toHaveProperty</a></code> | *No description.* |

---

##### `renderCode` <a name="renderCode" id="cdk-sfn-integ.ExpectExpr.renderCode"></a>

```typescript
public renderCode(): string
```

##### `toBeCloseTo` <a name="toBeCloseTo" id="cdk-sfn-integ.ExpectExpr.toBeCloseTo"></a>

```typescript
public toBeCloseTo(value: number | Expr, digits?: number | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="cdk-sfn-integ.ExpectExpr.toBeCloseTo.parameter.value"></a>

- *Type:* number | <a href="#cdk-sfn-integ.Expr">Expr</a>

---

###### `digits`<sup>Optional</sup> <a name="digits" id="cdk-sfn-integ.ExpectExpr.toBeCloseTo.parameter.digits"></a>

- *Type:* number | <a href="#cdk-sfn-integ.Expr">Expr</a>

---

##### `toBeDefined` <a name="toBeDefined" id="cdk-sfn-integ.ExpectExpr.toBeDefined"></a>

```typescript
public toBeDefined(): Expr
```

##### `toBeFalsy` <a name="toBeFalsy" id="cdk-sfn-integ.ExpectExpr.toBeFalsy"></a>

```typescript
public toBeFalsy(): Expr
```

##### `toBeGreaterThan` <a name="toBeGreaterThan" id="cdk-sfn-integ.ExpectExpr.toBeGreaterThan"></a>

```typescript
public toBeGreaterThan(value: number | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="cdk-sfn-integ.ExpectExpr.toBeGreaterThan.parameter.value"></a>

- *Type:* number | <a href="#cdk-sfn-integ.Expr">Expr</a>

---

##### `toBeGreaterThanOrEqual` <a name="toBeGreaterThanOrEqual" id="cdk-sfn-integ.ExpectExpr.toBeGreaterThanOrEqual"></a>

```typescript
public toBeGreaterThanOrEqual(value: number | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="cdk-sfn-integ.ExpectExpr.toBeGreaterThanOrEqual.parameter.value"></a>

- *Type:* number | <a href="#cdk-sfn-integ.Expr">Expr</a>

---

##### `toBeLessThan` <a name="toBeLessThan" id="cdk-sfn-integ.ExpectExpr.toBeLessThan"></a>

```typescript
public toBeLessThan(value: number | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="cdk-sfn-integ.ExpectExpr.toBeLessThan.parameter.value"></a>

- *Type:* number | <a href="#cdk-sfn-integ.Expr">Expr</a>

---

##### `toBeLessThanOrEqual` <a name="toBeLessThanOrEqual" id="cdk-sfn-integ.ExpectExpr.toBeLessThanOrEqual"></a>

```typescript
public toBeLessThanOrEqual(value: number | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="cdk-sfn-integ.ExpectExpr.toBeLessThanOrEqual.parameter.value"></a>

- *Type:* number | <a href="#cdk-sfn-integ.Expr">Expr</a>

---

##### `toBeTruthy` <a name="toBeTruthy" id="cdk-sfn-integ.ExpectExpr.toBeTruthy"></a>

```typescript
public toBeTruthy(): Expr
```

##### `toBeUndefined` <a name="toBeUndefined" id="cdk-sfn-integ.ExpectExpr.toBeUndefined"></a>

```typescript
public toBeUndefined(): Expr
```

##### `toContain` <a name="toContain" id="cdk-sfn-integ.ExpectExpr.toContain"></a>

```typescript
public toContain(value: string | number | boolean | object): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="cdk-sfn-integ.ExpectExpr.toContain.parameter.value"></a>

- *Type:* string | number | boolean | object

---

##### `toContainEqual` <a name="toContainEqual" id="cdk-sfn-integ.ExpectExpr.toContainEqual"></a>

```typescript
public toContainEqual(value: string | number | boolean | object | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="cdk-sfn-integ.ExpectExpr.toContainEqual.parameter.value"></a>

- *Type:* string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>

---

##### `toEqual` <a name="toEqual" id="cdk-sfn-integ.ExpectExpr.toEqual"></a>

```typescript
public toEqual(value: string | number | boolean | object | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="cdk-sfn-integ.ExpectExpr.toEqual.parameter.value"></a>

- *Type:* string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>

---

##### `toHaveLength` <a name="toHaveLength" id="cdk-sfn-integ.ExpectExpr.toHaveLength"></a>

```typescript
public toHaveLength(length: number | Expr): Expr
```

###### `length`<sup>Required</sup> <a name="length" id="cdk-sfn-integ.ExpectExpr.toHaveLength.parameter.length"></a>

- *Type:* number | <a href="#cdk-sfn-integ.Expr">Expr</a>

---

##### `toHaveProperty` <a name="toHaveProperty" id="cdk-sfn-integ.ExpectExpr.toHaveProperty"></a>

```typescript
public toHaveProperty(property: string | Expr, value?: string | number | boolean | object | Expr): Expr
```

###### `property`<sup>Required</sup> <a name="property" id="cdk-sfn-integ.ExpectExpr.toHaveProperty.parameter.property"></a>

- *Type:* string | <a href="#cdk-sfn-integ.Expr">Expr</a>

---

###### `value`<sup>Optional</sup> <a name="value" id="cdk-sfn-integ.ExpectExpr.toHaveProperty.parameter.value"></a>

- *Type:* string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-sfn-integ.ExpectExpr.anything">anything</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectExpr.arrayContaining">arrayContaining</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectExpr.arrayType">arrayType</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectExpr.dynamicType">dynamicType</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectExpr.expect">expect</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectExpr.input">input</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectExpr.objectContaining">objectContaining</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectExpr.objectType">objectType</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectExpr.value">value</a></code> | *No description.* |

---

##### `anything` <a name="anything" id="cdk-sfn-integ.ExpectExpr.anything"></a>

```typescript
import { ExpectExpr } from 'cdk-sfn-integ'

ExpectExpr.anything()
```

##### `arrayContaining` <a name="arrayContaining" id="cdk-sfn-integ.ExpectExpr.arrayContaining"></a>

```typescript
import { ExpectExpr } from 'cdk-sfn-integ'

ExpectExpr.arrayContaining(items: string | number | boolean | object | Expr[])
```

###### `items`<sup>Required</sup> <a name="items" id="cdk-sfn-integ.ExpectExpr.arrayContaining.parameter.items"></a>

- *Type:* string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>[]

---

##### `arrayType` <a name="arrayType" id="cdk-sfn-integ.ExpectExpr.arrayType"></a>

```typescript
import { ExpectExpr } from 'cdk-sfn-integ'

ExpectExpr.arrayType(items: string | number | boolean | object | Expr[])
```

###### `items`<sup>Required</sup> <a name="items" id="cdk-sfn-integ.ExpectExpr.arrayType.parameter.items"></a>

- *Type:* string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>[]

---

##### `dynamicType` <a name="dynamicType" id="cdk-sfn-integ.ExpectExpr.dynamicType"></a>

```typescript
import { ExpectExpr } from 'cdk-sfn-integ'

ExpectExpr.dynamicType(value: string | number | boolean | object | Expr)
```

###### `value`<sup>Required</sup> <a name="value" id="cdk-sfn-integ.ExpectExpr.dynamicType.parameter.value"></a>

- *Type:* string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>

---

##### `expect` <a name="expect" id="cdk-sfn-integ.ExpectExpr.expect"></a>

```typescript
import { ExpectExpr } from 'cdk-sfn-integ'

ExpectExpr.expect(expression: string | number | boolean | object | Expr)
```

###### `expression`<sup>Required</sup> <a name="expression" id="cdk-sfn-integ.ExpectExpr.expect.parameter.expression"></a>

- *Type:* string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>

---

##### `input` <a name="input" id="cdk-sfn-integ.ExpectExpr.input"></a>

```typescript
import { ExpectExpr } from 'cdk-sfn-integ'

ExpectExpr.input(path?: string)
```

###### `path`<sup>Optional</sup> <a name="path" id="cdk-sfn-integ.ExpectExpr.input.parameter.path"></a>

- *Type:* string

---

##### `objectContaining` <a name="objectContaining" id="cdk-sfn-integ.ExpectExpr.objectContaining"></a>

```typescript
import { ExpectExpr } from 'cdk-sfn-integ'

ExpectExpr.objectContaining(record: {[ key: string ]: string | number | boolean | object | Expr})
```

###### `record`<sup>Required</sup> <a name="record" id="cdk-sfn-integ.ExpectExpr.objectContaining.parameter.record"></a>

- *Type:* {[ key: string ]: string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>}

---

##### `objectType` <a name="objectType" id="cdk-sfn-integ.ExpectExpr.objectType"></a>

```typescript
import { ExpectExpr } from 'cdk-sfn-integ'

ExpectExpr.objectType(record: {[ key: string ]: string | number | boolean | object | Expr})
```

###### `record`<sup>Required</sup> <a name="record" id="cdk-sfn-integ.ExpectExpr.objectType.parameter.record"></a>

- *Type:* {[ key: string ]: string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>}

---

##### `value` <a name="value" id="cdk-sfn-integ.ExpectExpr.value"></a>

```typescript
import { ExpectExpr } from 'cdk-sfn-integ'

ExpectExpr.value(value: string | number | boolean | object)
```

###### `value`<sup>Required</sup> <a name="value" id="cdk-sfn-integ.ExpectExpr.value.parameter.value"></a>

- *Type:* string | number | boolean | object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-sfn-integ.ExpectExpr.property.not">not</a></code> | <code><a href="#cdk-sfn-integ.ExpectNotExpr">ExpectNotExpr</a></code> | *No description.* |

---

##### `not`<sup>Required</sup> <a name="not" id="cdk-sfn-integ.ExpectExpr.property.not"></a>

```typescript
public readonly not: ExpectNotExpr;
```

- *Type:* <a href="#cdk-sfn-integ.ExpectNotExpr">ExpectNotExpr</a>

---


### ExpectExprBase <a name="ExpectExprBase" id="cdk-sfn-integ.ExpectExprBase"></a>

#### Initializers <a name="Initializers" id="cdk-sfn-integ.ExpectExprBase.Initializer"></a>

```typescript
import { ExpectExprBase } from 'cdk-sfn-integ'

new ExpectExprBase()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-sfn-integ.ExpectExprBase.renderCode">renderCode</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectExprBase.toBeCloseTo">toBeCloseTo</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectExprBase.toBeDefined">toBeDefined</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectExprBase.toBeFalsy">toBeFalsy</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectExprBase.toBeGreaterThan">toBeGreaterThan</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectExprBase.toBeGreaterThanOrEqual">toBeGreaterThanOrEqual</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectExprBase.toBeLessThan">toBeLessThan</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectExprBase.toBeLessThanOrEqual">toBeLessThanOrEqual</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectExprBase.toBeTruthy">toBeTruthy</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectExprBase.toBeUndefined">toBeUndefined</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectExprBase.toContain">toContain</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectExprBase.toContainEqual">toContainEqual</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectExprBase.toEqual">toEqual</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectExprBase.toHaveLength">toHaveLength</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectExprBase.toHaveProperty">toHaveProperty</a></code> | *No description.* |

---

##### `renderCode` <a name="renderCode" id="cdk-sfn-integ.ExpectExprBase.renderCode"></a>

```typescript
public renderCode(): string
```

##### `toBeCloseTo` <a name="toBeCloseTo" id="cdk-sfn-integ.ExpectExprBase.toBeCloseTo"></a>

```typescript
public toBeCloseTo(value: number | Expr, digits?: number | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="cdk-sfn-integ.ExpectExprBase.toBeCloseTo.parameter.value"></a>

- *Type:* number | <a href="#cdk-sfn-integ.Expr">Expr</a>

---

###### `digits`<sup>Optional</sup> <a name="digits" id="cdk-sfn-integ.ExpectExprBase.toBeCloseTo.parameter.digits"></a>

- *Type:* number | <a href="#cdk-sfn-integ.Expr">Expr</a>

---

##### `toBeDefined` <a name="toBeDefined" id="cdk-sfn-integ.ExpectExprBase.toBeDefined"></a>

```typescript
public toBeDefined(): Expr
```

##### `toBeFalsy` <a name="toBeFalsy" id="cdk-sfn-integ.ExpectExprBase.toBeFalsy"></a>

```typescript
public toBeFalsy(): Expr
```

##### `toBeGreaterThan` <a name="toBeGreaterThan" id="cdk-sfn-integ.ExpectExprBase.toBeGreaterThan"></a>

```typescript
public toBeGreaterThan(value: number | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="cdk-sfn-integ.ExpectExprBase.toBeGreaterThan.parameter.value"></a>

- *Type:* number | <a href="#cdk-sfn-integ.Expr">Expr</a>

---

##### `toBeGreaterThanOrEqual` <a name="toBeGreaterThanOrEqual" id="cdk-sfn-integ.ExpectExprBase.toBeGreaterThanOrEqual"></a>

```typescript
public toBeGreaterThanOrEqual(value: number | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="cdk-sfn-integ.ExpectExprBase.toBeGreaterThanOrEqual.parameter.value"></a>

- *Type:* number | <a href="#cdk-sfn-integ.Expr">Expr</a>

---

##### `toBeLessThan` <a name="toBeLessThan" id="cdk-sfn-integ.ExpectExprBase.toBeLessThan"></a>

```typescript
public toBeLessThan(value: number | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="cdk-sfn-integ.ExpectExprBase.toBeLessThan.parameter.value"></a>

- *Type:* number | <a href="#cdk-sfn-integ.Expr">Expr</a>

---

##### `toBeLessThanOrEqual` <a name="toBeLessThanOrEqual" id="cdk-sfn-integ.ExpectExprBase.toBeLessThanOrEqual"></a>

```typescript
public toBeLessThanOrEqual(value: number | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="cdk-sfn-integ.ExpectExprBase.toBeLessThanOrEqual.parameter.value"></a>

- *Type:* number | <a href="#cdk-sfn-integ.Expr">Expr</a>

---

##### `toBeTruthy` <a name="toBeTruthy" id="cdk-sfn-integ.ExpectExprBase.toBeTruthy"></a>

```typescript
public toBeTruthy(): Expr
```

##### `toBeUndefined` <a name="toBeUndefined" id="cdk-sfn-integ.ExpectExprBase.toBeUndefined"></a>

```typescript
public toBeUndefined(): Expr
```

##### `toContain` <a name="toContain" id="cdk-sfn-integ.ExpectExprBase.toContain"></a>

```typescript
public toContain(value: string | number | boolean | object): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="cdk-sfn-integ.ExpectExprBase.toContain.parameter.value"></a>

- *Type:* string | number | boolean | object

---

##### `toContainEqual` <a name="toContainEqual" id="cdk-sfn-integ.ExpectExprBase.toContainEqual"></a>

```typescript
public toContainEqual(value: string | number | boolean | object | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="cdk-sfn-integ.ExpectExprBase.toContainEqual.parameter.value"></a>

- *Type:* string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>

---

##### `toEqual` <a name="toEqual" id="cdk-sfn-integ.ExpectExprBase.toEqual"></a>

```typescript
public toEqual(value: string | number | boolean | object | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="cdk-sfn-integ.ExpectExprBase.toEqual.parameter.value"></a>

- *Type:* string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>

---

##### `toHaveLength` <a name="toHaveLength" id="cdk-sfn-integ.ExpectExprBase.toHaveLength"></a>

```typescript
public toHaveLength(length: number | Expr): Expr
```

###### `length`<sup>Required</sup> <a name="length" id="cdk-sfn-integ.ExpectExprBase.toHaveLength.parameter.length"></a>

- *Type:* number | <a href="#cdk-sfn-integ.Expr">Expr</a>

---

##### `toHaveProperty` <a name="toHaveProperty" id="cdk-sfn-integ.ExpectExprBase.toHaveProperty"></a>

```typescript
public toHaveProperty(property: string | Expr, value?: string | number | boolean | object | Expr): Expr
```

###### `property`<sup>Required</sup> <a name="property" id="cdk-sfn-integ.ExpectExprBase.toHaveProperty.parameter.property"></a>

- *Type:* string | <a href="#cdk-sfn-integ.Expr">Expr</a>

---

###### `value`<sup>Optional</sup> <a name="value" id="cdk-sfn-integ.ExpectExprBase.toHaveProperty.parameter.value"></a>

- *Type:* string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-sfn-integ.ExpectExprBase.anything">anything</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectExprBase.arrayContaining">arrayContaining</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectExprBase.arrayType">arrayType</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectExprBase.dynamicType">dynamicType</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectExprBase.expect">expect</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectExprBase.input">input</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectExprBase.objectContaining">objectContaining</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectExprBase.objectType">objectType</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectExprBase.value">value</a></code> | *No description.* |

---

##### `anything` <a name="anything" id="cdk-sfn-integ.ExpectExprBase.anything"></a>

```typescript
import { ExpectExprBase } from 'cdk-sfn-integ'

ExpectExprBase.anything()
```

##### `arrayContaining` <a name="arrayContaining" id="cdk-sfn-integ.ExpectExprBase.arrayContaining"></a>

```typescript
import { ExpectExprBase } from 'cdk-sfn-integ'

ExpectExprBase.arrayContaining(items: string | number | boolean | object | Expr[])
```

###### `items`<sup>Required</sup> <a name="items" id="cdk-sfn-integ.ExpectExprBase.arrayContaining.parameter.items"></a>

- *Type:* string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>[]

---

##### `arrayType` <a name="arrayType" id="cdk-sfn-integ.ExpectExprBase.arrayType"></a>

```typescript
import { ExpectExprBase } from 'cdk-sfn-integ'

ExpectExprBase.arrayType(items: string | number | boolean | object | Expr[])
```

###### `items`<sup>Required</sup> <a name="items" id="cdk-sfn-integ.ExpectExprBase.arrayType.parameter.items"></a>

- *Type:* string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>[]

---

##### `dynamicType` <a name="dynamicType" id="cdk-sfn-integ.ExpectExprBase.dynamicType"></a>

```typescript
import { ExpectExprBase } from 'cdk-sfn-integ'

ExpectExprBase.dynamicType(value: string | number | boolean | object | Expr)
```

###### `value`<sup>Required</sup> <a name="value" id="cdk-sfn-integ.ExpectExprBase.dynamicType.parameter.value"></a>

- *Type:* string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>

---

##### `expect` <a name="expect" id="cdk-sfn-integ.ExpectExprBase.expect"></a>

```typescript
import { ExpectExprBase } from 'cdk-sfn-integ'

ExpectExprBase.expect(expression: string | number | boolean | object | Expr)
```

###### `expression`<sup>Required</sup> <a name="expression" id="cdk-sfn-integ.ExpectExprBase.expect.parameter.expression"></a>

- *Type:* string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>

---

##### `input` <a name="input" id="cdk-sfn-integ.ExpectExprBase.input"></a>

```typescript
import { ExpectExprBase } from 'cdk-sfn-integ'

ExpectExprBase.input(path?: string)
```

###### `path`<sup>Optional</sup> <a name="path" id="cdk-sfn-integ.ExpectExprBase.input.parameter.path"></a>

- *Type:* string

---

##### `objectContaining` <a name="objectContaining" id="cdk-sfn-integ.ExpectExprBase.objectContaining"></a>

```typescript
import { ExpectExprBase } from 'cdk-sfn-integ'

ExpectExprBase.objectContaining(record: {[ key: string ]: string | number | boolean | object | Expr})
```

###### `record`<sup>Required</sup> <a name="record" id="cdk-sfn-integ.ExpectExprBase.objectContaining.parameter.record"></a>

- *Type:* {[ key: string ]: string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>}

---

##### `objectType` <a name="objectType" id="cdk-sfn-integ.ExpectExprBase.objectType"></a>

```typescript
import { ExpectExprBase } from 'cdk-sfn-integ'

ExpectExprBase.objectType(record: {[ key: string ]: string | number | boolean | object | Expr})
```

###### `record`<sup>Required</sup> <a name="record" id="cdk-sfn-integ.ExpectExprBase.objectType.parameter.record"></a>

- *Type:* {[ key: string ]: string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>}

---

##### `value` <a name="value" id="cdk-sfn-integ.ExpectExprBase.value"></a>

```typescript
import { ExpectExprBase } from 'cdk-sfn-integ'

ExpectExprBase.value(value: string | number | boolean | object)
```

###### `value`<sup>Required</sup> <a name="value" id="cdk-sfn-integ.ExpectExprBase.value.parameter.value"></a>

- *Type:* string | number | boolean | object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-sfn-integ.ExpectExprBase.property.not">not</a></code> | <code><a href="#cdk-sfn-integ.ExpectNotExpr">ExpectNotExpr</a></code> | *No description.* |

---

##### `not`<sup>Required</sup> <a name="not" id="cdk-sfn-integ.ExpectExprBase.property.not"></a>

```typescript
public readonly not: ExpectNotExpr;
```

- *Type:* <a href="#cdk-sfn-integ.ExpectNotExpr">ExpectNotExpr</a>

---


### ExpectNotExpr <a name="ExpectNotExpr" id="cdk-sfn-integ.ExpectNotExpr"></a>

#### Initializers <a name="Initializers" id="cdk-sfn-integ.ExpectNotExpr.Initializer"></a>

```typescript
import { ExpectNotExpr } from 'cdk-sfn-integ'

new ExpectNotExpr(parent: Expr)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-sfn-integ.ExpectNotExpr.Initializer.parameter.parent">parent</a></code> | <code><a href="#cdk-sfn-integ.Expr">Expr</a></code> | *No description.* |

---

##### `parent`<sup>Required</sup> <a name="parent" id="cdk-sfn-integ.ExpectNotExpr.Initializer.parameter.parent"></a>

- *Type:* <a href="#cdk-sfn-integ.Expr">Expr</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-sfn-integ.ExpectNotExpr.renderCode">renderCode</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectNotExpr.toBeCloseTo">toBeCloseTo</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectNotExpr.toBeDefined">toBeDefined</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectNotExpr.toBeFalsy">toBeFalsy</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectNotExpr.toBeGreaterThan">toBeGreaterThan</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectNotExpr.toBeGreaterThanOrEqual">toBeGreaterThanOrEqual</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectNotExpr.toBeLessThan">toBeLessThan</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectNotExpr.toBeLessThanOrEqual">toBeLessThanOrEqual</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectNotExpr.toBeTruthy">toBeTruthy</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectNotExpr.toBeUndefined">toBeUndefined</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectNotExpr.toContain">toContain</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectNotExpr.toContainEqual">toContainEqual</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectNotExpr.toEqual">toEqual</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectNotExpr.toHaveLength">toHaveLength</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectNotExpr.toHaveProperty">toHaveProperty</a></code> | *No description.* |

---

##### `renderCode` <a name="renderCode" id="cdk-sfn-integ.ExpectNotExpr.renderCode"></a>

```typescript
public renderCode(): string
```

##### `toBeCloseTo` <a name="toBeCloseTo" id="cdk-sfn-integ.ExpectNotExpr.toBeCloseTo"></a>

```typescript
public toBeCloseTo(value: number | Expr, digits?: number | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="cdk-sfn-integ.ExpectNotExpr.toBeCloseTo.parameter.value"></a>

- *Type:* number | <a href="#cdk-sfn-integ.Expr">Expr</a>

---

###### `digits`<sup>Optional</sup> <a name="digits" id="cdk-sfn-integ.ExpectNotExpr.toBeCloseTo.parameter.digits"></a>

- *Type:* number | <a href="#cdk-sfn-integ.Expr">Expr</a>

---

##### `toBeDefined` <a name="toBeDefined" id="cdk-sfn-integ.ExpectNotExpr.toBeDefined"></a>

```typescript
public toBeDefined(): Expr
```

##### `toBeFalsy` <a name="toBeFalsy" id="cdk-sfn-integ.ExpectNotExpr.toBeFalsy"></a>

```typescript
public toBeFalsy(): Expr
```

##### `toBeGreaterThan` <a name="toBeGreaterThan" id="cdk-sfn-integ.ExpectNotExpr.toBeGreaterThan"></a>

```typescript
public toBeGreaterThan(value: number | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="cdk-sfn-integ.ExpectNotExpr.toBeGreaterThan.parameter.value"></a>

- *Type:* number | <a href="#cdk-sfn-integ.Expr">Expr</a>

---

##### `toBeGreaterThanOrEqual` <a name="toBeGreaterThanOrEqual" id="cdk-sfn-integ.ExpectNotExpr.toBeGreaterThanOrEqual"></a>

```typescript
public toBeGreaterThanOrEqual(value: number | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="cdk-sfn-integ.ExpectNotExpr.toBeGreaterThanOrEqual.parameter.value"></a>

- *Type:* number | <a href="#cdk-sfn-integ.Expr">Expr</a>

---

##### `toBeLessThan` <a name="toBeLessThan" id="cdk-sfn-integ.ExpectNotExpr.toBeLessThan"></a>

```typescript
public toBeLessThan(value: number | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="cdk-sfn-integ.ExpectNotExpr.toBeLessThan.parameter.value"></a>

- *Type:* number | <a href="#cdk-sfn-integ.Expr">Expr</a>

---

##### `toBeLessThanOrEqual` <a name="toBeLessThanOrEqual" id="cdk-sfn-integ.ExpectNotExpr.toBeLessThanOrEqual"></a>

```typescript
public toBeLessThanOrEqual(value: number | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="cdk-sfn-integ.ExpectNotExpr.toBeLessThanOrEqual.parameter.value"></a>

- *Type:* number | <a href="#cdk-sfn-integ.Expr">Expr</a>

---

##### `toBeTruthy` <a name="toBeTruthy" id="cdk-sfn-integ.ExpectNotExpr.toBeTruthy"></a>

```typescript
public toBeTruthy(): Expr
```

##### `toBeUndefined` <a name="toBeUndefined" id="cdk-sfn-integ.ExpectNotExpr.toBeUndefined"></a>

```typescript
public toBeUndefined(): Expr
```

##### `toContain` <a name="toContain" id="cdk-sfn-integ.ExpectNotExpr.toContain"></a>

```typescript
public toContain(value: string | number | boolean | object): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="cdk-sfn-integ.ExpectNotExpr.toContain.parameter.value"></a>

- *Type:* string | number | boolean | object

---

##### `toContainEqual` <a name="toContainEqual" id="cdk-sfn-integ.ExpectNotExpr.toContainEqual"></a>

```typescript
public toContainEqual(value: string | number | boolean | object | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="cdk-sfn-integ.ExpectNotExpr.toContainEqual.parameter.value"></a>

- *Type:* string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>

---

##### `toEqual` <a name="toEqual" id="cdk-sfn-integ.ExpectNotExpr.toEqual"></a>

```typescript
public toEqual(value: string | number | boolean | object | Expr): Expr
```

###### `value`<sup>Required</sup> <a name="value" id="cdk-sfn-integ.ExpectNotExpr.toEqual.parameter.value"></a>

- *Type:* string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>

---

##### `toHaveLength` <a name="toHaveLength" id="cdk-sfn-integ.ExpectNotExpr.toHaveLength"></a>

```typescript
public toHaveLength(length: number | Expr): Expr
```

###### `length`<sup>Required</sup> <a name="length" id="cdk-sfn-integ.ExpectNotExpr.toHaveLength.parameter.length"></a>

- *Type:* number | <a href="#cdk-sfn-integ.Expr">Expr</a>

---

##### `toHaveProperty` <a name="toHaveProperty" id="cdk-sfn-integ.ExpectNotExpr.toHaveProperty"></a>

```typescript
public toHaveProperty(property: string | Expr, value?: string | number | boolean | object | Expr): Expr
```

###### `property`<sup>Required</sup> <a name="property" id="cdk-sfn-integ.ExpectNotExpr.toHaveProperty.parameter.property"></a>

- *Type:* string | <a href="#cdk-sfn-integ.Expr">Expr</a>

---

###### `value`<sup>Optional</sup> <a name="value" id="cdk-sfn-integ.ExpectNotExpr.toHaveProperty.parameter.value"></a>

- *Type:* string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-sfn-integ.ExpectNotExpr.anything">anything</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectNotExpr.arrayContaining">arrayContaining</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectNotExpr.arrayType">arrayType</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectNotExpr.dynamicType">dynamicType</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectNotExpr.expect">expect</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectNotExpr.input">input</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectNotExpr.objectContaining">objectContaining</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectNotExpr.objectType">objectType</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ExpectNotExpr.value">value</a></code> | *No description.* |

---

##### `anything` <a name="anything" id="cdk-sfn-integ.ExpectNotExpr.anything"></a>

```typescript
import { ExpectNotExpr } from 'cdk-sfn-integ'

ExpectNotExpr.anything()
```

##### `arrayContaining` <a name="arrayContaining" id="cdk-sfn-integ.ExpectNotExpr.arrayContaining"></a>

```typescript
import { ExpectNotExpr } from 'cdk-sfn-integ'

ExpectNotExpr.arrayContaining(items: string | number | boolean | object | Expr[])
```

###### `items`<sup>Required</sup> <a name="items" id="cdk-sfn-integ.ExpectNotExpr.arrayContaining.parameter.items"></a>

- *Type:* string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>[]

---

##### `arrayType` <a name="arrayType" id="cdk-sfn-integ.ExpectNotExpr.arrayType"></a>

```typescript
import { ExpectNotExpr } from 'cdk-sfn-integ'

ExpectNotExpr.arrayType(items: string | number | boolean | object | Expr[])
```

###### `items`<sup>Required</sup> <a name="items" id="cdk-sfn-integ.ExpectNotExpr.arrayType.parameter.items"></a>

- *Type:* string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>[]

---

##### `dynamicType` <a name="dynamicType" id="cdk-sfn-integ.ExpectNotExpr.dynamicType"></a>

```typescript
import { ExpectNotExpr } from 'cdk-sfn-integ'

ExpectNotExpr.dynamicType(value: string | number | boolean | object | Expr)
```

###### `value`<sup>Required</sup> <a name="value" id="cdk-sfn-integ.ExpectNotExpr.dynamicType.parameter.value"></a>

- *Type:* string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>

---

##### `expect` <a name="expect" id="cdk-sfn-integ.ExpectNotExpr.expect"></a>

```typescript
import { ExpectNotExpr } from 'cdk-sfn-integ'

ExpectNotExpr.expect(expression: string | number | boolean | object | Expr)
```

###### `expression`<sup>Required</sup> <a name="expression" id="cdk-sfn-integ.ExpectNotExpr.expect.parameter.expression"></a>

- *Type:* string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>

---

##### `input` <a name="input" id="cdk-sfn-integ.ExpectNotExpr.input"></a>

```typescript
import { ExpectNotExpr } from 'cdk-sfn-integ'

ExpectNotExpr.input(path?: string)
```

###### `path`<sup>Optional</sup> <a name="path" id="cdk-sfn-integ.ExpectNotExpr.input.parameter.path"></a>

- *Type:* string

---

##### `objectContaining` <a name="objectContaining" id="cdk-sfn-integ.ExpectNotExpr.objectContaining"></a>

```typescript
import { ExpectNotExpr } from 'cdk-sfn-integ'

ExpectNotExpr.objectContaining(record: {[ key: string ]: string | number | boolean | object | Expr})
```

###### `record`<sup>Required</sup> <a name="record" id="cdk-sfn-integ.ExpectNotExpr.objectContaining.parameter.record"></a>

- *Type:* {[ key: string ]: string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>}

---

##### `objectType` <a name="objectType" id="cdk-sfn-integ.ExpectNotExpr.objectType"></a>

```typescript
import { ExpectNotExpr } from 'cdk-sfn-integ'

ExpectNotExpr.objectType(record: {[ key: string ]: string | number | boolean | object | Expr})
```

###### `record`<sup>Required</sup> <a name="record" id="cdk-sfn-integ.ExpectNotExpr.objectType.parameter.record"></a>

- *Type:* {[ key: string ]: string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>}

---

##### `value` <a name="value" id="cdk-sfn-integ.ExpectNotExpr.value"></a>

```typescript
import { ExpectNotExpr } from 'cdk-sfn-integ'

ExpectNotExpr.value(value: string | number | boolean | object)
```

###### `value`<sup>Required</sup> <a name="value" id="cdk-sfn-integ.ExpectNotExpr.value.parameter.value"></a>

- *Type:* string | number | boolean | object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-sfn-integ.ExpectNotExpr.property.not">not</a></code> | <code><a href="#cdk-sfn-integ.ExpectNotExpr">ExpectNotExpr</a></code> | *No description.* |

---

##### `not`<sup>Required</sup> <a name="not" id="cdk-sfn-integ.ExpectNotExpr.property.not"></a>

```typescript
public readonly not: ExpectNotExpr;
```

- *Type:* <a href="#cdk-sfn-integ.ExpectNotExpr">ExpectNotExpr</a>

---


### Expr <a name="Expr" id="cdk-sfn-integ.Expr"></a>

#### Initializers <a name="Initializers" id="cdk-sfn-integ.Expr.Initializer"></a>

```typescript
import { Expr } from 'cdk-sfn-integ'

new Expr()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-sfn-integ.Expr.renderCode">renderCode</a></code> | *No description.* |

---

##### `renderCode` <a name="renderCode" id="cdk-sfn-integ.Expr.renderCode"></a>

```typescript
public renderCode(): string
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-sfn-integ.Expr.anything">anything</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.Expr.arrayContaining">arrayContaining</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.Expr.arrayType">arrayType</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.Expr.dynamicType">dynamicType</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.Expr.expect">expect</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.Expr.input">input</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.Expr.objectContaining">objectContaining</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.Expr.objectType">objectType</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.Expr.value">value</a></code> | *No description.* |

---

##### `anything` <a name="anything" id="cdk-sfn-integ.Expr.anything"></a>

```typescript
import { Expr } from 'cdk-sfn-integ'

Expr.anything()
```

##### `arrayContaining` <a name="arrayContaining" id="cdk-sfn-integ.Expr.arrayContaining"></a>

```typescript
import { Expr } from 'cdk-sfn-integ'

Expr.arrayContaining(items: string | number | boolean | object | Expr[])
```

###### `items`<sup>Required</sup> <a name="items" id="cdk-sfn-integ.Expr.arrayContaining.parameter.items"></a>

- *Type:* string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>[]

---

##### `arrayType` <a name="arrayType" id="cdk-sfn-integ.Expr.arrayType"></a>

```typescript
import { Expr } from 'cdk-sfn-integ'

Expr.arrayType(items: string | number | boolean | object | Expr[])
```

###### `items`<sup>Required</sup> <a name="items" id="cdk-sfn-integ.Expr.arrayType.parameter.items"></a>

- *Type:* string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>[]

---

##### `dynamicType` <a name="dynamicType" id="cdk-sfn-integ.Expr.dynamicType"></a>

```typescript
import { Expr } from 'cdk-sfn-integ'

Expr.dynamicType(value: string | number | boolean | object | Expr)
```

###### `value`<sup>Required</sup> <a name="value" id="cdk-sfn-integ.Expr.dynamicType.parameter.value"></a>

- *Type:* string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>

---

##### `expect` <a name="expect" id="cdk-sfn-integ.Expr.expect"></a>

```typescript
import { Expr } from 'cdk-sfn-integ'

Expr.expect(expression: string | number | boolean | object | Expr)
```

###### `expression`<sup>Required</sup> <a name="expression" id="cdk-sfn-integ.Expr.expect.parameter.expression"></a>

- *Type:* string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>

---

##### `input` <a name="input" id="cdk-sfn-integ.Expr.input"></a>

```typescript
import { Expr } from 'cdk-sfn-integ'

Expr.input(path?: string)
```

###### `path`<sup>Optional</sup> <a name="path" id="cdk-sfn-integ.Expr.input.parameter.path"></a>

- *Type:* string

---

##### `objectContaining` <a name="objectContaining" id="cdk-sfn-integ.Expr.objectContaining"></a>

```typescript
import { Expr } from 'cdk-sfn-integ'

Expr.objectContaining(record: {[ key: string ]: string | number | boolean | object | Expr})
```

###### `record`<sup>Required</sup> <a name="record" id="cdk-sfn-integ.Expr.objectContaining.parameter.record"></a>

- *Type:* {[ key: string ]: string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>}

---

##### `objectType` <a name="objectType" id="cdk-sfn-integ.Expr.objectType"></a>

```typescript
import { Expr } from 'cdk-sfn-integ'

Expr.objectType(record: {[ key: string ]: string | number | boolean | object | Expr})
```

###### `record`<sup>Required</sup> <a name="record" id="cdk-sfn-integ.Expr.objectType.parameter.record"></a>

- *Type:* {[ key: string ]: string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>}

---

##### `value` <a name="value" id="cdk-sfn-integ.Expr.value"></a>

```typescript
import { Expr } from 'cdk-sfn-integ'

Expr.value(value: string | number | boolean | object)
```

###### `value`<sup>Required</sup> <a name="value" id="cdk-sfn-integ.Expr.value.parameter.value"></a>

- *Type:* string | number | boolean | object

---



### ExpressionAssertion <a name="ExpressionAssertion" id="cdk-sfn-integ.ExpressionAssertion"></a>

#### Initializers <a name="Initializers" id="cdk-sfn-integ.ExpressionAssertion.Initializer"></a>

```typescript
import { ExpressionAssertion } from 'cdk-sfn-integ'

new ExpressionAssertion(statements: Expr[])
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-sfn-integ.ExpressionAssertion.Initializer.parameter.statements">statements</a></code> | <code><a href="#cdk-sfn-integ.Expr">Expr</a>[]</code> | *No description.* |

---

##### `statements`<sup>Required</sup> <a name="statements" id="cdk-sfn-integ.ExpressionAssertion.Initializer.parameter.statements"></a>

- *Type:* <a href="#cdk-sfn-integ.Expr">Expr</a>[]

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-sfn-integ.ExpressionAssertion.renderCode">renderCode</a></code> | *No description.* |

---

##### `renderCode` <a name="renderCode" id="cdk-sfn-integ.ExpressionAssertion.renderCode"></a>

```typescript
public renderCode(): string
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-sfn-integ.ExpressionAssertion.expressions">expressions</a></code> | *No description.* |

---

##### `expressions` <a name="expressions" id="cdk-sfn-integ.ExpressionAssertion.expressions"></a>

```typescript
import { ExpressionAssertion } from 'cdk-sfn-integ'

ExpressionAssertion.expressions(expressions: Expr[])
```

###### `expressions`<sup>Required</sup> <a name="expressions" id="cdk-sfn-integ.ExpressionAssertion.expressions.parameter.expressions"></a>

- *Type:* <a href="#cdk-sfn-integ.Expr">Expr</a>[]

---



### MemberCallExpr <a name="MemberCallExpr" id="cdk-sfn-integ.MemberCallExpr"></a>

#### Initializers <a name="Initializers" id="cdk-sfn-integ.MemberCallExpr.Initializer"></a>

```typescript
import { MemberCallExpr } from 'cdk-sfn-integ'

new MemberCallExpr(parent: Expr, member: string, args: Expr[])
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-sfn-integ.MemberCallExpr.Initializer.parameter.parent">parent</a></code> | <code><a href="#cdk-sfn-integ.Expr">Expr</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.MemberCallExpr.Initializer.parameter.member">member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-sfn-integ.MemberCallExpr.Initializer.parameter.args">args</a></code> | <code><a href="#cdk-sfn-integ.Expr">Expr</a>[]</code> | *No description.* |

---

##### `parent`<sup>Required</sup> <a name="parent" id="cdk-sfn-integ.MemberCallExpr.Initializer.parameter.parent"></a>

- *Type:* <a href="#cdk-sfn-integ.Expr">Expr</a>

---

##### `member`<sup>Required</sup> <a name="member" id="cdk-sfn-integ.MemberCallExpr.Initializer.parameter.member"></a>

- *Type:* string

---

##### `args`<sup>Required</sup> <a name="args" id="cdk-sfn-integ.MemberCallExpr.Initializer.parameter.args"></a>

- *Type:* <a href="#cdk-sfn-integ.Expr">Expr</a>[]

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-sfn-integ.MemberCallExpr.renderCode">renderCode</a></code> | *No description.* |

---

##### `renderCode` <a name="renderCode" id="cdk-sfn-integ.MemberCallExpr.renderCode"></a>

```typescript
public renderCode(): string
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-sfn-integ.MemberCallExpr.anything">anything</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.MemberCallExpr.arrayContaining">arrayContaining</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.MemberCallExpr.arrayType">arrayType</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.MemberCallExpr.dynamicType">dynamicType</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.MemberCallExpr.expect">expect</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.MemberCallExpr.input">input</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.MemberCallExpr.objectContaining">objectContaining</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.MemberCallExpr.objectType">objectType</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.MemberCallExpr.value">value</a></code> | *No description.* |

---

##### `anything` <a name="anything" id="cdk-sfn-integ.MemberCallExpr.anything"></a>

```typescript
import { MemberCallExpr } from 'cdk-sfn-integ'

MemberCallExpr.anything()
```

##### `arrayContaining` <a name="arrayContaining" id="cdk-sfn-integ.MemberCallExpr.arrayContaining"></a>

```typescript
import { MemberCallExpr } from 'cdk-sfn-integ'

MemberCallExpr.arrayContaining(items: string | number | boolean | object | Expr[])
```

###### `items`<sup>Required</sup> <a name="items" id="cdk-sfn-integ.MemberCallExpr.arrayContaining.parameter.items"></a>

- *Type:* string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>[]

---

##### `arrayType` <a name="arrayType" id="cdk-sfn-integ.MemberCallExpr.arrayType"></a>

```typescript
import { MemberCallExpr } from 'cdk-sfn-integ'

MemberCallExpr.arrayType(items: string | number | boolean | object | Expr[])
```

###### `items`<sup>Required</sup> <a name="items" id="cdk-sfn-integ.MemberCallExpr.arrayType.parameter.items"></a>

- *Type:* string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>[]

---

##### `dynamicType` <a name="dynamicType" id="cdk-sfn-integ.MemberCallExpr.dynamicType"></a>

```typescript
import { MemberCallExpr } from 'cdk-sfn-integ'

MemberCallExpr.dynamicType(value: string | number | boolean | object | Expr)
```

###### `value`<sup>Required</sup> <a name="value" id="cdk-sfn-integ.MemberCallExpr.dynamicType.parameter.value"></a>

- *Type:* string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>

---

##### `expect` <a name="expect" id="cdk-sfn-integ.MemberCallExpr.expect"></a>

```typescript
import { MemberCallExpr } from 'cdk-sfn-integ'

MemberCallExpr.expect(expression: string | number | boolean | object | Expr)
```

###### `expression`<sup>Required</sup> <a name="expression" id="cdk-sfn-integ.MemberCallExpr.expect.parameter.expression"></a>

- *Type:* string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>

---

##### `input` <a name="input" id="cdk-sfn-integ.MemberCallExpr.input"></a>

```typescript
import { MemberCallExpr } from 'cdk-sfn-integ'

MemberCallExpr.input(path?: string)
```

###### `path`<sup>Optional</sup> <a name="path" id="cdk-sfn-integ.MemberCallExpr.input.parameter.path"></a>

- *Type:* string

---

##### `objectContaining` <a name="objectContaining" id="cdk-sfn-integ.MemberCallExpr.objectContaining"></a>

```typescript
import { MemberCallExpr } from 'cdk-sfn-integ'

MemberCallExpr.objectContaining(record: {[ key: string ]: string | number | boolean | object | Expr})
```

###### `record`<sup>Required</sup> <a name="record" id="cdk-sfn-integ.MemberCallExpr.objectContaining.parameter.record"></a>

- *Type:* {[ key: string ]: string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>}

---

##### `objectType` <a name="objectType" id="cdk-sfn-integ.MemberCallExpr.objectType"></a>

```typescript
import { MemberCallExpr } from 'cdk-sfn-integ'

MemberCallExpr.objectType(record: {[ key: string ]: string | number | boolean | object | Expr})
```

###### `record`<sup>Required</sup> <a name="record" id="cdk-sfn-integ.MemberCallExpr.objectType.parameter.record"></a>

- *Type:* {[ key: string ]: string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>}

---

##### `value` <a name="value" id="cdk-sfn-integ.MemberCallExpr.value"></a>

```typescript
import { MemberCallExpr } from 'cdk-sfn-integ'

MemberCallExpr.value(value: string | number | boolean | object)
```

###### `value`<sup>Required</sup> <a name="value" id="cdk-sfn-integ.MemberCallExpr.value.parameter.value"></a>

- *Type:* string | number | boolean | object

---



### ObjectTypeExpr <a name="ObjectTypeExpr" id="cdk-sfn-integ.ObjectTypeExpr"></a>

#### Initializers <a name="Initializers" id="cdk-sfn-integ.ObjectTypeExpr.Initializer"></a>

```typescript
import { ObjectTypeExpr } from 'cdk-sfn-integ'

new ObjectTypeExpr(record: {[ key: string ]: string | number | boolean | object | Expr})
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-sfn-integ.ObjectTypeExpr.Initializer.parameter.record">record</a></code> | <code>{[ key: string ]: string \| number \| boolean \| object \| <a href="#cdk-sfn-integ.Expr">Expr</a>}</code> | *No description.* |

---

##### `record`<sup>Required</sup> <a name="record" id="cdk-sfn-integ.ObjectTypeExpr.Initializer.parameter.record"></a>

- *Type:* {[ key: string ]: string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-sfn-integ.ObjectTypeExpr.renderCode">renderCode</a></code> | *No description.* |

---

##### `renderCode` <a name="renderCode" id="cdk-sfn-integ.ObjectTypeExpr.renderCode"></a>

```typescript
public renderCode(): string
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-sfn-integ.ObjectTypeExpr.anything">anything</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ObjectTypeExpr.arrayContaining">arrayContaining</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ObjectTypeExpr.arrayType">arrayType</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ObjectTypeExpr.dynamicType">dynamicType</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ObjectTypeExpr.expect">expect</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ObjectTypeExpr.input">input</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ObjectTypeExpr.objectContaining">objectContaining</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ObjectTypeExpr.objectType">objectType</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ObjectTypeExpr.value">value</a></code> | *No description.* |

---

##### `anything` <a name="anything" id="cdk-sfn-integ.ObjectTypeExpr.anything"></a>

```typescript
import { ObjectTypeExpr } from 'cdk-sfn-integ'

ObjectTypeExpr.anything()
```

##### `arrayContaining` <a name="arrayContaining" id="cdk-sfn-integ.ObjectTypeExpr.arrayContaining"></a>

```typescript
import { ObjectTypeExpr } from 'cdk-sfn-integ'

ObjectTypeExpr.arrayContaining(items: string | number | boolean | object | Expr[])
```

###### `items`<sup>Required</sup> <a name="items" id="cdk-sfn-integ.ObjectTypeExpr.arrayContaining.parameter.items"></a>

- *Type:* string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>[]

---

##### `arrayType` <a name="arrayType" id="cdk-sfn-integ.ObjectTypeExpr.arrayType"></a>

```typescript
import { ObjectTypeExpr } from 'cdk-sfn-integ'

ObjectTypeExpr.arrayType(items: string | number | boolean | object | Expr[])
```

###### `items`<sup>Required</sup> <a name="items" id="cdk-sfn-integ.ObjectTypeExpr.arrayType.parameter.items"></a>

- *Type:* string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>[]

---

##### `dynamicType` <a name="dynamicType" id="cdk-sfn-integ.ObjectTypeExpr.dynamicType"></a>

```typescript
import { ObjectTypeExpr } from 'cdk-sfn-integ'

ObjectTypeExpr.dynamicType(value: string | number | boolean | object | Expr)
```

###### `value`<sup>Required</sup> <a name="value" id="cdk-sfn-integ.ObjectTypeExpr.dynamicType.parameter.value"></a>

- *Type:* string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>

---

##### `expect` <a name="expect" id="cdk-sfn-integ.ObjectTypeExpr.expect"></a>

```typescript
import { ObjectTypeExpr } from 'cdk-sfn-integ'

ObjectTypeExpr.expect(expression: string | number | boolean | object | Expr)
```

###### `expression`<sup>Required</sup> <a name="expression" id="cdk-sfn-integ.ObjectTypeExpr.expect.parameter.expression"></a>

- *Type:* string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>

---

##### `input` <a name="input" id="cdk-sfn-integ.ObjectTypeExpr.input"></a>

```typescript
import { ObjectTypeExpr } from 'cdk-sfn-integ'

ObjectTypeExpr.input(path?: string)
```

###### `path`<sup>Optional</sup> <a name="path" id="cdk-sfn-integ.ObjectTypeExpr.input.parameter.path"></a>

- *Type:* string

---

##### `objectContaining` <a name="objectContaining" id="cdk-sfn-integ.ObjectTypeExpr.objectContaining"></a>

```typescript
import { ObjectTypeExpr } from 'cdk-sfn-integ'

ObjectTypeExpr.objectContaining(record: {[ key: string ]: string | number | boolean | object | Expr})
```

###### `record`<sup>Required</sup> <a name="record" id="cdk-sfn-integ.ObjectTypeExpr.objectContaining.parameter.record"></a>

- *Type:* {[ key: string ]: string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>}

---

##### `objectType` <a name="objectType" id="cdk-sfn-integ.ObjectTypeExpr.objectType"></a>

```typescript
import { ObjectTypeExpr } from 'cdk-sfn-integ'

ObjectTypeExpr.objectType(record: {[ key: string ]: string | number | boolean | object | Expr})
```

###### `record`<sup>Required</sup> <a name="record" id="cdk-sfn-integ.ObjectTypeExpr.objectType.parameter.record"></a>

- *Type:* {[ key: string ]: string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>}

---

##### `value` <a name="value" id="cdk-sfn-integ.ObjectTypeExpr.value"></a>

```typescript
import { ObjectTypeExpr } from 'cdk-sfn-integ'

ObjectTypeExpr.value(value: string | number | boolean | object)
```

###### `value`<sup>Required</sup> <a name="value" id="cdk-sfn-integ.ObjectTypeExpr.value.parameter.value"></a>

- *Type:* string | number | boolean | object

---



### SymbolExpression <a name="SymbolExpression" id="cdk-sfn-integ.SymbolExpression"></a>

#### Initializers <a name="Initializers" id="cdk-sfn-integ.SymbolExpression.Initializer"></a>

```typescript
import { SymbolExpression } from 'cdk-sfn-integ'

new SymbolExpression(symbol: string, path?: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-sfn-integ.SymbolExpression.Initializer.parameter.symbol">symbol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-sfn-integ.SymbolExpression.Initializer.parameter.path">path</a></code> | <code>string</code> | *No description.* |

---

##### `symbol`<sup>Required</sup> <a name="symbol" id="cdk-sfn-integ.SymbolExpression.Initializer.parameter.symbol"></a>

- *Type:* string

---

##### `path`<sup>Optional</sup> <a name="path" id="cdk-sfn-integ.SymbolExpression.Initializer.parameter.path"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-sfn-integ.SymbolExpression.renderCode">renderCode</a></code> | *No description.* |

---

##### `renderCode` <a name="renderCode" id="cdk-sfn-integ.SymbolExpression.renderCode"></a>

```typescript
public renderCode(): string
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-sfn-integ.SymbolExpression.anything">anything</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.SymbolExpression.arrayContaining">arrayContaining</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.SymbolExpression.arrayType">arrayType</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.SymbolExpression.dynamicType">dynamicType</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.SymbolExpression.expect">expect</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.SymbolExpression.input">input</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.SymbolExpression.objectContaining">objectContaining</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.SymbolExpression.objectType">objectType</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.SymbolExpression.value">value</a></code> | *No description.* |

---

##### `anything` <a name="anything" id="cdk-sfn-integ.SymbolExpression.anything"></a>

```typescript
import { SymbolExpression } from 'cdk-sfn-integ'

SymbolExpression.anything()
```

##### `arrayContaining` <a name="arrayContaining" id="cdk-sfn-integ.SymbolExpression.arrayContaining"></a>

```typescript
import { SymbolExpression } from 'cdk-sfn-integ'

SymbolExpression.arrayContaining(items: string | number | boolean | object | Expr[])
```

###### `items`<sup>Required</sup> <a name="items" id="cdk-sfn-integ.SymbolExpression.arrayContaining.parameter.items"></a>

- *Type:* string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>[]

---

##### `arrayType` <a name="arrayType" id="cdk-sfn-integ.SymbolExpression.arrayType"></a>

```typescript
import { SymbolExpression } from 'cdk-sfn-integ'

SymbolExpression.arrayType(items: string | number | boolean | object | Expr[])
```

###### `items`<sup>Required</sup> <a name="items" id="cdk-sfn-integ.SymbolExpression.arrayType.parameter.items"></a>

- *Type:* string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>[]

---

##### `dynamicType` <a name="dynamicType" id="cdk-sfn-integ.SymbolExpression.dynamicType"></a>

```typescript
import { SymbolExpression } from 'cdk-sfn-integ'

SymbolExpression.dynamicType(value: string | number | boolean | object | Expr)
```

###### `value`<sup>Required</sup> <a name="value" id="cdk-sfn-integ.SymbolExpression.dynamicType.parameter.value"></a>

- *Type:* string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>

---

##### `expect` <a name="expect" id="cdk-sfn-integ.SymbolExpression.expect"></a>

```typescript
import { SymbolExpression } from 'cdk-sfn-integ'

SymbolExpression.expect(expression: string | number | boolean | object | Expr)
```

###### `expression`<sup>Required</sup> <a name="expression" id="cdk-sfn-integ.SymbolExpression.expect.parameter.expression"></a>

- *Type:* string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>

---

##### `input` <a name="input" id="cdk-sfn-integ.SymbolExpression.input"></a>

```typescript
import { SymbolExpression } from 'cdk-sfn-integ'

SymbolExpression.input(path?: string)
```

###### `path`<sup>Optional</sup> <a name="path" id="cdk-sfn-integ.SymbolExpression.input.parameter.path"></a>

- *Type:* string

---

##### `objectContaining` <a name="objectContaining" id="cdk-sfn-integ.SymbolExpression.objectContaining"></a>

```typescript
import { SymbolExpression } from 'cdk-sfn-integ'

SymbolExpression.objectContaining(record: {[ key: string ]: string | number | boolean | object | Expr})
```

###### `record`<sup>Required</sup> <a name="record" id="cdk-sfn-integ.SymbolExpression.objectContaining.parameter.record"></a>

- *Type:* {[ key: string ]: string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>}

---

##### `objectType` <a name="objectType" id="cdk-sfn-integ.SymbolExpression.objectType"></a>

```typescript
import { SymbolExpression } from 'cdk-sfn-integ'

SymbolExpression.objectType(record: {[ key: string ]: string | number | boolean | object | Expr})
```

###### `record`<sup>Required</sup> <a name="record" id="cdk-sfn-integ.SymbolExpression.objectType.parameter.record"></a>

- *Type:* {[ key: string ]: string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>}

---

##### `value` <a name="value" id="cdk-sfn-integ.SymbolExpression.value"></a>

```typescript
import { SymbolExpression } from 'cdk-sfn-integ'

SymbolExpression.value(value: string | number | boolean | object)
```

###### `value`<sup>Required</sup> <a name="value" id="cdk-sfn-integ.SymbolExpression.value.parameter.value"></a>

- *Type:* string | number | boolean | object

---



### ValueExpr <a name="ValueExpr" id="cdk-sfn-integ.ValueExpr"></a>

#### Initializers <a name="Initializers" id="cdk-sfn-integ.ValueExpr.Initializer"></a>

```typescript
import { ValueExpr } from 'cdk-sfn-integ'

new ValueExpr(value: string | number | boolean | object)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-sfn-integ.ValueExpr.Initializer.parameter.value">value</a></code> | <code>string \| number \| boolean \| object</code> | *No description.* |

---

##### `value`<sup>Required</sup> <a name="value" id="cdk-sfn-integ.ValueExpr.Initializer.parameter.value"></a>

- *Type:* string | number | boolean | object

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-sfn-integ.ValueExpr.renderCode">renderCode</a></code> | *No description.* |

---

##### `renderCode` <a name="renderCode" id="cdk-sfn-integ.ValueExpr.renderCode"></a>

```typescript
public renderCode(): string
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-sfn-integ.ValueExpr.anything">anything</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ValueExpr.arrayContaining">arrayContaining</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ValueExpr.arrayType">arrayType</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ValueExpr.dynamicType">dynamicType</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ValueExpr.expect">expect</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ValueExpr.input">input</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ValueExpr.objectContaining">objectContaining</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ValueExpr.objectType">objectType</a></code> | *No description.* |
| <code><a href="#cdk-sfn-integ.ValueExpr.value">value</a></code> | *No description.* |

---

##### `anything` <a name="anything" id="cdk-sfn-integ.ValueExpr.anything"></a>

```typescript
import { ValueExpr } from 'cdk-sfn-integ'

ValueExpr.anything()
```

##### `arrayContaining` <a name="arrayContaining" id="cdk-sfn-integ.ValueExpr.arrayContaining"></a>

```typescript
import { ValueExpr } from 'cdk-sfn-integ'

ValueExpr.arrayContaining(items: string | number | boolean | object | Expr[])
```

###### `items`<sup>Required</sup> <a name="items" id="cdk-sfn-integ.ValueExpr.arrayContaining.parameter.items"></a>

- *Type:* string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>[]

---

##### `arrayType` <a name="arrayType" id="cdk-sfn-integ.ValueExpr.arrayType"></a>

```typescript
import { ValueExpr } from 'cdk-sfn-integ'

ValueExpr.arrayType(items: string | number | boolean | object | Expr[])
```

###### `items`<sup>Required</sup> <a name="items" id="cdk-sfn-integ.ValueExpr.arrayType.parameter.items"></a>

- *Type:* string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>[]

---

##### `dynamicType` <a name="dynamicType" id="cdk-sfn-integ.ValueExpr.dynamicType"></a>

```typescript
import { ValueExpr } from 'cdk-sfn-integ'

ValueExpr.dynamicType(value: string | number | boolean | object | Expr)
```

###### `value`<sup>Required</sup> <a name="value" id="cdk-sfn-integ.ValueExpr.dynamicType.parameter.value"></a>

- *Type:* string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>

---

##### `expect` <a name="expect" id="cdk-sfn-integ.ValueExpr.expect"></a>

```typescript
import { ValueExpr } from 'cdk-sfn-integ'

ValueExpr.expect(expression: string | number | boolean | object | Expr)
```

###### `expression`<sup>Required</sup> <a name="expression" id="cdk-sfn-integ.ValueExpr.expect.parameter.expression"></a>

- *Type:* string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>

---

##### `input` <a name="input" id="cdk-sfn-integ.ValueExpr.input"></a>

```typescript
import { ValueExpr } from 'cdk-sfn-integ'

ValueExpr.input(path?: string)
```

###### `path`<sup>Optional</sup> <a name="path" id="cdk-sfn-integ.ValueExpr.input.parameter.path"></a>

- *Type:* string

---

##### `objectContaining` <a name="objectContaining" id="cdk-sfn-integ.ValueExpr.objectContaining"></a>

```typescript
import { ValueExpr } from 'cdk-sfn-integ'

ValueExpr.objectContaining(record: {[ key: string ]: string | number | boolean | object | Expr})
```

###### `record`<sup>Required</sup> <a name="record" id="cdk-sfn-integ.ValueExpr.objectContaining.parameter.record"></a>

- *Type:* {[ key: string ]: string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>}

---

##### `objectType` <a name="objectType" id="cdk-sfn-integ.ValueExpr.objectType"></a>

```typescript
import { ValueExpr } from 'cdk-sfn-integ'

ValueExpr.objectType(record: {[ key: string ]: string | number | boolean | object | Expr})
```

###### `record`<sup>Required</sup> <a name="record" id="cdk-sfn-integ.ValueExpr.objectType.parameter.record"></a>

- *Type:* {[ key: string ]: string | number | boolean | object | <a href="#cdk-sfn-integ.Expr">Expr</a>}

---

##### `value` <a name="value" id="cdk-sfn-integ.ValueExpr.value"></a>

```typescript
import { ValueExpr } from 'cdk-sfn-integ'

ValueExpr.value(value: string | number | boolean | object)
```

###### `value`<sup>Required</sup> <a name="value" id="cdk-sfn-integ.ValueExpr.value.parameter.value"></a>

- *Type:* string | number | boolean | object

---




