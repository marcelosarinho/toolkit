import isJSONString from "../../src/validation/isJSONString";

describe("isJSONString", () => {
  let logSpy: jest.Spied<typeof console.log>;

  beforeEach(() => {
    logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    logSpy.mockRestore();
  });

  it("should return true if value is a valid JSON string", () => {
    expect(isJSONString('{ "name": "Alice", "age": 30, "isStudent": false }')).toBe(true);
    expect(isJSONString('[ { "id": 1, "product": "Laptop", "price": 1200.50 }, { "id": 2, "product": "Mouse", "price": 25.00 } ]')).toBe(true);
    expect(isJSONString('{ "companyName": "Tech Solutions Inc.", "employees": [ { "firstName": "John", "lastName": "Doe", "department": "Engineering", "skills": ["Java", "Python", "SQL"] }, { "firstName": "Jane", "lastName": "Smith", "department": "Marketing", "skills": ["SEO", "Content Creation"] } ], "address": { "street": "123 Main St", "city": "Anytown", "zipCode": "12345" } }')).toBe(true);
  });

  it("should return false if value is undefined, null, or empty string", () => {
    expect(isJSONString(undefined as any)).toBe(false);
    expect(isJSONString(null as any)).toBe(false);
    expect(isJSONString('')).toBe(false);
  });

  it("should return false if value is not a valid JSON string", () => {
    expect(isJSONString('{name: "John"}')).toBe(false);
    expect(isJSONString(`{"name": 'John'}`)).toBe(false);
    expect(isJSONString('{"message": "Hello, world!}')).toBe(false);
    expect(isJSONString('{"item1": 1, "item2": 2,}')).toBe(false);
    expect(isJSONString('["apple", "banana",]')).toBe(false);
    expect(isJSONString('{"quote": "He said "Hello!""}')).toBe(false);
    expect(isJSONString('{"price": $10.00}')).toBe(false);
    expect(isJSONString('{"active": true, "status": False}')).toBe(false);
    expect(isJSONString('{"key": "value", , "anotherKey": "anotherValue"}')).toBe(false);
    expect(isJSONString('[1, 2, , 3]')).toBe(false);
    expect(isJSONString('{"name": "Joe", "age": }')).toBe(false);
    expect(isJSONString('{"name": "Joe", "age" null}')).toBe(false);
    expect(isJSONString('{"data": ["item1", "item2"}')).toBe(false);
  });

  it("should return true for valid JSON primitive values", () => {
    expect(isJSONString('"string"')).toBe(true);
    expect(isJSONString('123')).toBe(true);
    expect(isJSONString('true')).toBe(true);
    expect(isJSONString('false')).toBe(true);
    expect(isJSONString('null')).toBe(true);
  });

  it("should return true for empty JSON objects and arrays", () => {
    expect(isJSONString('{}')).toBe(true);
    expect(isJSONString('[]')).toBe(true);
  });
  
  it("should return true for JSON strings with spaces and newlines", () => {
    const json = `{
      "name": "Alice",
      "age": 30,
      "isStudent": false
    }`;

    expect(isJSONString(json)).toBe(true);
  });

  it("should return false for non-string inputs", () => {
    expect(isJSONString(123 as any)).toBe(false);
    expect(isJSONString(true as any)).toBe(false);
    expect(isJSONString({} as any)).toBe(false);
    expect(isJSONString([] as any)).toBe(false);
  });

  it("should return true for JSON strings with unicode and escaped characters", () => {
    expect(isJSONString('{"text": "Olá, mundo! \\u00A9"}')).toBe(true);
    expect(isJSONString('{"path": "C:\\\\Users\\\\Documents"}')).toBe(true);
  });

  it("should return true for JSON with numbers in different formats", () => {
    expect(isJSONString('{"negative": -10, "decimal": 0.123, "exp": 1e10}')).toBe(true);
  });
});