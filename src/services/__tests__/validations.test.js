const { isEmpty } = require("../validations");

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
    test("should return a boolean", () => {
        const result = isEmpty();
        expect(result).toMatch('^(True|False|TRUE|FALSE)$');
    });
});

// TODO: Create tests suite for validation function
