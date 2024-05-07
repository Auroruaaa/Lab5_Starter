// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// isPhoneNumber
test('isPhoneNumber true case 1', () => {
  expect(isPhoneNumber("123-321-1234")).toBe(true);
});
test('isPhoneNumber true case 2', () => {
  expect(isPhoneNumber("(123)321-1234")).toBe(true);
});
test('isPhoneNumber false case 1', () => {
  expect(isPhoneNumber("123 321 1234")).toBe(false);
});
test('isPhoneNumber false case 2', () => {
  expect(isPhoneNumber("1233211234")).toBe(false);
});

// isEmail
test('isEmail true case 1', () => {
  expect(isEmail("user@exapmle.com")).toBe(true);
});
test('isEmail true case 2', () => {
  expect(isEmail("123example@hotmail.com")).toBe(true);
});
test('isEmail false case 1', () => {
  expect(isEmail("user@no_number123.com")).toBe(false);
});
test('isEmail false case 2', () => {
  expect(isEmail("user@exapmle.toolong")).toBe(false);
});

// isStrongPassword
test('isStrongPassword true case 1', () => {
  expect(isStrongPassword("Abc123")).toBe(true);
});
test('isStrongPassword true case 2', () => {
  expect(isStrongPassword("special_")).toBe(true);
});
test('isStrongPassword false case 1', () => {
  expect(isStrongPassword("passwordtoooolong")).toBe(false);
});
test('isStrongPassword false case 2', () => {
  expect(isStrongPassword("aaa")).toBe(false);
});

// isDate
test('isDate true case 1', () => {
  expect(isDate("01/01/2001")).toBe(true);
});
test('isDate true case 2', () => {
  expect(isDate("1/1/2001")).toBe(true);
});
test('isDate false case 1', () => {
  expect(isDate("01.01.2001")).toBe(false);
});
test('isDate false case 2', () => {
  expect(isDate("01012001")).toBe(false);
});

// isHexColor
test('isHexColor true case 1', () => {
  expect(isHexColor("F00000")).toBe(true);
});
test('isHexColor true case 2', () => {
  expect(isHexColor("#123")).toBe(true);
});
test('isHexColor false case 1', () => {
  expect(isHexColor("ghijkl")).toBe(false);
});
test('isHexColor false case 2', () => {
  expect(isHexColor("f1234")).toBe(false);
});