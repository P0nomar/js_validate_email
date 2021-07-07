'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('')).toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('Tara.s_budzha1k@yahoo.com')).toBeTruthy();
  });

  it(`should return 'false' if @ is missing`, () => {
    expect(validateEmail('Taras_budzhakyahoo.com')).toBeFalsy();
  });

  it(`should return 'false' if "." in the beginning of personal_info part`,
    () => {
      expect(validateEmail('.Taras_budzhak@yahoo.com')).toBeFalsy();
    });

  it(`should return 'false' if "." at the end of personal_info part`, () => {
    expect(validateEmail('Taras_budzhak.@yahoo.com')).toBeFalsy();
  });

  it(`should return 'false' if contains ".." in personal_info part`, () => {
    expect(validateEmail('Taras_b..udzhak@yahoo.com')).toBeFalsy();
  });

  it(`should return 'false' if Top LeveL domain starts with "."`, () => {
    expect(validateEmail('Taras_budzhak@.yahoo.com')).toBeFalsy();
  });

  it(`should return 'false' if email is without personal info`, () => {
    expect(validateEmail('@gmail.com')).toBeFalsy();
  });

  it(`should return 'false' if email is without domain`, () => {
    expect(validateEmail('taras12')).toBeFalsy();
  });

  it(`should return 'false' if email is without second level domain`, () => {
    expect(validateEmail('budzhak1-@.com')).toBeFalsy();
  });

  it(`should return 'false' if email is Top Level domain`, () => {
    expect(validateEmail('taras12!@mail')).toBeFalsy();
  });

  it(`should return 'true' if email has following format: personal_info@domain`,
    () => {
      expect(validateEmail('Tarasbudzhak@gmail.com')).toBeTruthy();
    });
});
