/**
*@ jest-environment jsdom
*/

import { register } from '../src/components/register.js';

jest.mock('./src/main.js');
jest.mock('./src/importsFromFirebase.js');

describe('Register', () => {
  it('should be a function', () => {
    expect(typeof register).toBe('function');
  });
});
