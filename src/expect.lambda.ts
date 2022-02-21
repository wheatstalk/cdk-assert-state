// eslint-disable-next-line @typescript-eslint/no-require-imports
const expect = require('expect');

export async function handler(event: any) {
  console.log('event =', event);

  const input = event.input;
  const fn = eval(event.expect);

  fn(expect, input);

  return {
    status: 'success',
  };
}