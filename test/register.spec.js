// importamos la funcion que vamos a testear
import { register } from '../src/components/register.js';

describe('register', () => {
  it('is a function', () => {
    document.body.append(register());
    expect(typeof register).toBe('function');
  });
});
