import { Assert, Expr } from '../src';

describe('statements', () => {
  const exprs: [string, Expr, any][] = [
    [
      'expect(input).toEqual(1)',
      Expr.expect(Expr.input()).toEqual(1),
      1,
    ],
    [
      'expect(input).toEqual(1)',
      Expr.expect(Expr.input()).toEqual(Expr.value(1)),
      1,
    ],
    [
      'expect("burrito").not.toEqual("taco")',
      Expr.expect('burrito').not.toEqual('taco'),
      undefined,
    ],
    [
      'expect(input).toEqual(expect.arrayContaining([1,true,"string",{}]))',
      Expr.expect(Expr.input()).toEqual(
        Expr.arrayContaining([1, true, 'string', {}]),
      ),
      [1, true, 'string', {}],
    ],
    [
      'expect(input).toEqual(expect.objectContaining({"bool":true,"string":"string","obj":{}}))',
      Expr.expect(Expr.input()).toEqual(
        Expr.objectContaining({
          bool: true,
          string: 'string',
          obj: {},
        }),
      ),
      {
        bool: true,
        string: 'string',
        obj: {},
      },
    ],
    [
      'expect(input).toHaveLength(3)',
      Expr.expect(Expr.input()).toHaveLength(3),
      [0, 1, 2],
    ],
    [
      'expect(input).toBeDefined()',
      Expr.expect(Expr.input()).toBeDefined(),
      1,
    ],
    [
      'expect(input).toBeUndefined()',
      Expr.expect(Expr.input()).toBeUndefined(),
      undefined,
    ],
    [
      'expect(1).toBeTruthy()',
      Expr.expect(1).toBeTruthy(),
      undefined,
    ],
    [
      'expect(0).toBeFalsy()',
      Expr.expect(0).toBeFalsy(),
      undefined,
    ],
    [
      'expect(2).toBeGreaterThan(1)',
      Expr.expect(2).toBeGreaterThan(1),
      undefined,
    ],
    [
      'expect(1).toBeGreaterThanOrEqual(1)',
      Expr.expect(1).toBeGreaterThanOrEqual(1),
      undefined,
    ],
    [
      'expect(0).toBeLessThan(1)',
      Expr.expect(0).toBeLessThan(1),
      undefined,
    ],
    [
      'expect(1).toBeLessThanOrEqual(1)',
      Expr.expect(1).toBeLessThanOrEqual(1),
      undefined,
    ],
    [
      'expect(1).toBeCloseTo(1,10)',
      Expr.expect(1).toBeCloseTo(1, 10),
      undefined,
    ],
    [
      'expect({"deeply":{"nested":1}}).toHaveProperty("deeply.nested",expect.anything())',
      Expr.expect({ deeply: { nested: 1 } }).toHaveProperty('deeply.nested', Expr.anything()),
      undefined,
    ],
    [
      'expect(["a"]).toContain("a")',
      Expr.expect(['a']).toContain('a'),
      undefined,
    ],
    [
      'expect(["a"]).toContainEqual(expect.anything())',
      Expr.expect(['a']).toContainEqual(Expr.anything()),
      undefined,
    ],
  ];

  test.each(exprs)('%s', (expected, statement, input) => {
    // Check for the expected statement.
    expect(statement.renderCode()).toEqual(expected);
    // Test that the expect expression actually works
    const fn = eval(Assert.expressions([statement]).renderCode());
    fn(expect, input);
  });
});