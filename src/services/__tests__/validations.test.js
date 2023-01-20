const { isEmpty, checkGamerTag } = require("../validations");

describe("validations tests suites - isEmpty", () => {
    test("should return true as the label is undefined", () => {
        const result = isEmpty();
        expect(result).toBe(true);
    });

    test("should return true as the label is empty", () => {
        const result = isEmpty("");
        expect(result).toBe(true);
    });

    test("should return false as the label is empty", () => {
        const result = isEmpty("Label");
        expect(result).toBe(false);
    });
});

describe("check whether the gamerTag is valide or not - checkGamerTag", () => {
    test("should return false as length < 8", () => {
        const result = checkGamerTag('ggdfg');
        expect(result).toBe(false);
    });

    test("should return true as length >= 8", () => {
        const result = checkGamerTag('ggdfgfdsfsfsdf!9');
        expect(result).toBe(true);
    });

    test("should return false as gamerTag doesnt contain special char", () => {
        const result = checkGamerTag('ggdfgfdsfsfsdf');
        expect(result).toBe(false);
    });

    test("should return true as gamerTag does contain special char", () => {
        const result = checkGamerTag('ggdfgfdsfsfsdf!9');
        expect(result).toBe(true);
    });

    test("should return false as gamerTag doesnt contain a number", () => {
        const result = checkGamerTag('ggdfgfdsfsfsdf!');
        expect(result).toBe(false);
    });

    test("should return true as gamerTag does contain aa number", () => {
        const result = checkGamerTag('ggdfgfdsfsfsdf!9');
        expect(result).toBe(true);
    });

});

// TODO: Create tests suite for validation function
