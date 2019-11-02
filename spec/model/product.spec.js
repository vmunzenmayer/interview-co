const mocks = require("../mocks/product.mocks");
const Product = require("./../../src/model/product");

describe("Verify class Product", () => {
  test("Check method constructor", () => {
    const product = new Product();
    expect(product).toBeDefined();
    expect(Object.keys(product).length).toEqual(3);
  });
  test("Check method constructor with mocks", () => {
    const product = new Product(mocks[0].name, mocks[0].sellIn, mocks[0].price);
    expect(product).toBeDefined();
    expect(Object.keys(product).length).toEqual(3);
  });
});

describe("Verify model", () => {
  test("Check method with mocks[0]", () => {
    const product = new Product(mocks[0].name, mocks[0].sellIn, mocks[0].price);
    expect(product).toBeDefined();
    expect(product.name).toEqual(mocks[0].name);
    expect(product.price).toEqual(mocks[0].price);
    expect(product.sellIn).toEqual(mocks[0].sellIn);
  });
  test("Check method with mocks[1]", () => {
    const product = new Product(mocks[1].name, mocks[1].sellIn, mocks[1].price);
    expect(product).toBeDefined();
    expect(product.name).toEqual(mocks[1].name);
    expect(product.price).toEqual(mocks[1].price);
    expect(product.sellIn).toEqual(mocks[1].sellIn);
  });
  test("Check method with mocks[2]", () => {
    const product = new Product(mocks[2].name, mocks[2].sellIn, mocks[2].price);
    expect(product).toBeDefined();
    expect(product.name).toEqual(mocks[2].name);
    expect(product.price).toEqual(mocks[2].price);
    expect(product.sellIn).toEqual(mocks[2].sellIn);
  });
  test("Check method with mocks[3]", () => {
    const product = new Product(mocks[3].name, mocks[3].sellIn, mocks[3].price);
    expect(product).toBeDefined();
    expect(product.name).toEqual(mocks[3].name);
    expect(product.price).toEqual(mocks[3].price);
    expect(product.sellIn).toEqual(mocks[3].sellIn);
  });
  test("Check method with mocks[4]", () => {
    const product = new Product(mocks[4].name, mocks[4].sellIn, mocks[4].price);
    expect(product).toBeDefined();
    expect(product.name).toEqual(mocks[4].name);
    expect(product.price).toEqual(mocks[4].price);
    expect(product.sellIn).toEqual(mocks[4].sellIn);
  });
});

describe("Verify class attribute", () => {
  test("Check class with mocks[0]", () => {
    const product = new Product(mocks[0].name, mocks[0].sellIn, mocks[0].price);
    expect(product).toBeDefined();
    expect(typeof product.name).toEqual("string");
    expect(typeof product.price).toEqual("number");
    expect(typeof product.sellIn).toEqual("number");
  });
  test("Check class with mocks[1]", () => {
    const product = new Product(mocks[1].name, mocks[1].sellIn, mocks[1].price);
    expect(product).toBeDefined();
    expect(typeof product.name).toEqual("string");
    expect(typeof product.price).toEqual("number");
    expect(typeof product.sellIn).toEqual("number");
  });
  test("Check class with mocks[2]", () => {
    const product = new Product(mocks[2].name, mocks[2].sellIn, mocks[2].price);
    expect(product).toBeDefined();
    expect(typeof product.name).toEqual("object");
    expect(typeof product.price).toEqual("number");
    expect(typeof product.sellIn).toEqual("number");
  });
  test("Check class with mocks[3]", () => {
    const product = new Product(mocks[3].name, mocks[3].sellIn, mocks[3].price);
    expect(product).toBeDefined();
    expect(typeof product.name).toEqual("string");
    expect(typeof product.price).toEqual("object");
    expect(typeof product.sellIn).toEqual("number");
  });
  test("Check class with mocks[4]", () => {
    const product = new Product(mocks[4].name, mocks[4].sellIn, mocks[4].price);
    expect(product).toBeDefined();
    expect(typeof product.name).toEqual("string");
    expect(typeof product.price).toEqual("number");
    expect(typeof product.sellIn).toEqual("object");
  });
  test("Check class with empty", () => {
    const product = new Product();
    expect(product).toBeDefined();
    expect(typeof product.name).toEqual("undefined");
    expect(typeof product.price).toEqual("undefined");
    expect(typeof product.sellIn).toEqual("undefined");
  });
});
