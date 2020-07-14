const { repair, succeed, fail } = require("./enhancer.js");
// test away!

describe("Enhancement", () => {
  it("should restore durability to 100", () => {
    // setup - Arrange
    const item1 = {
      name: "short sword",
      enhancement: 15,
      durability: 45
    };

    const item2 = {
      name: "long sword",
      enhancement: 5,
      durability: 75
    };

    // execution of SUT (Sytem Under Test) - Act
    const item1repaired = repair(item1);
    const item2repaired = repair(item2);

    // assertions - Assert
    expect(item1repaired.durability).toBe(100);
    expect(item2repaired.durability).toBe(100);
  });

  it("should have items with property name, durability and enhancement", () => {
    // setup - Arrange
    const item1 = {
      name: "short sword",
      enhancement: 15,
      durability: 45
    };

    const item2 = {
      name: "long sword",
      enhancement: 5,
      durability: 75
    };

    //assertions
    expect(item1).toHaveProperty("name");
    expect(item1).toHaveProperty("enhancement");
    expect(item1).toHaveProperty("durability");

    expect(item2).toHaveProperty("name");
    expect(item2).toHaveProperty("enhancement");
    expect(item2).toHaveProperty("durability");
  });

  it("should have item enhancement property be a number 0 to 20", () => {
    // setup - Arrange
    const item1 = {
      name: "short sword",
      enhancement: 15,
      durability: 45
    };

    const item2 = {
      name: "long sword",
      enhancement: 5,
      durability: 75
    };

    // assertions - Assert
    expect(item1.enhancement <= 20 && item1.enhancement >= 0).toBe(true);
    expect(item2.enhancement <= 20 && item2.enhancement >= 0).toBe(true);
  });

  it("should have item durability property be a number 0 to 100", () => {
    // setup - Arrange
    const item1 = {
      name: "short sword",
      enhancement: 15,
      durability: 45
    };

    const item2 = {
      name: "long sword",
      enhancement: 5,
      durability: 75
    };

    // assertions - Assert
    expect(item1.durability <= 100 && item1.durability >= 0).toBe(true);
    expect(item2.durability <= 100 && item2.durability >= 0).toBe(true);
  });

  it("should increase enhancement by 1 when succeeds", () => {
    // setup - Arrange
    const item1 = {
      name: "short sword",
      enhancement: 15,
      durability: 45
    };

    const item2 = {
      name: "long sword",
      enhancement: 5,
      durability: 75
    };

    // execution of SUT (Sytem Under Test) - Act
    const item1enhanced = succeed(item1);
    const item2enhanced = succeed(item2);

    // assertions - Assert
    expect(item1enhanced.enhancement).toBe(item1.enhancement + 1);
    expect(item2enhanced.enhancement).toBe(item2.enhancement + 1);
  });

  it("should not increase enhancement when it is 20", () => {
    // setup - Arrange
    const item1 = {
      name: "short sword",
      enhancement: 20,
      durability: 45
    };

    const item2 = {
      name: "long sword",
      enhancement: 20,
      durability: 75
    };

    // execution of SUT (Sytem Under Test) - Act
    const item1enhanced = succeed(item1);
    const item2enhanced = succeed(item2);

    // assertions - Assert
    expect(item1enhanced.enhancement).toBe(20);
    expect(item2enhanced.enhancement).toBe(20);
  });

  it("should not change durability when succeeds", () => {
    // setup - Arrange
    const item1 = {
      name: "short sword",
      enhancement: 15,
      durability: 45
    };

    const item2 = {
      name: "long sword",
      enhancement: 5,
      durability: 75
    };

    // execution of SUT (Sytem Under Test) - Act
    const item1enhanced = succeed(item1);
    const item2enhanced = succeed(item2);

    // assertions - Assert
    expect(item1enhanced.durability).toBe(item1.durability);
    expect(item2enhanced.durability).toBe(item2.durability);
  });

  it("should decrease durability by 5 on fail when item's enhancement is less than 15", () => {
    // setup - Arrange
    const item1 = {
      name: "short sword",
      enhancement: 14,
      durability: 45
    };

    const item2 = {
      name: "long sword",
      enhancement: 10,
      durability: 75
    };

    // execution of SUT (Sytem Under Test) - Act
    const item1failed = fail(item1);
    const item2failed = fail(item2);

    // assertions - Assert
    expect(item1failed.durability).toBe(item1.durability - 5);
    expect(item2failed.durability).toBe(item2.durability - 5);
  });

  it("should decrease durability by 10 on fail when item's enhancement is 15 or more", () => {
    // setup - Arrange
    const item1 = {
      name: "short sword",
      enhancement: 15,
      durability: 45
    };

    const item2 = {
      name: "long sword",
      enhancement: 17,
      durability: 75
    };

    // execution of SUT (Sytem Under Test) - Act
    const item1failed = fail(item1);
    const item2failed = fail(item2);

    // assertions - Assert
    expect(item1failed.durability).toBe(item1.durability - 10);
    expect(item2failed.durability).toBe(item2.durability - 10);
  });

  it("should decrease enhancement by 1 on fail when item's enhancement is greater than 16", () => {
    // setup - Arrange
    const item1 = {
      name: "short sword",
      enhancement: 18,
      durability: 45
    };

    const item2 = {
      name: "long sword",
      enhancement: 17,
      durability: 75
    };

    // execution of SUT (Sytem Under Test) - Act
    const item1failed = fail(item1);
    const item2failed = fail(item2);

    // assertions - Assert
    expect(item1failed.enhancement).toBe(item1.enhancement - 1);
    expect(item2failed.enhancement).toBe(item2.enhancement - 1);
  });
});
