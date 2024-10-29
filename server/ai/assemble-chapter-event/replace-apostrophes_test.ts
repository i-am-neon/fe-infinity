import replaceApostrophes from "@/ai/assemble-chapter-event/replace-apostrophes.ts";

Deno.test(
  "replaces a single right single quotation mark with an apostrophe",
  () => {
    const input = "It’s a sunny day";
    const expectedOutput = "It's a sunny day";
    if (replaceApostrophes(input) !== expectedOutput) {
      throw new Error(
        `Expected "${expectedOutput}", got "${replaceApostrophes(input)}"`
      );
    }
  }
);

Deno.test(
  "replaces multiple right single quotation marks with apostrophes",
  () => {
    const input = "It’s a sunny day, and she’s going to enjoy it";
    const expectedOutput = "It's a sunny day, and she's going to enjoy it";
    if (replaceApostrophes(input) !== expectedOutput) {
      throw new Error(
        `Expected "${expectedOutput}", got "${replaceApostrophes(input)}"`
      );
    }
  }
);

Deno.test(
  "returns the same string if no right single quotation marks are present",
  () => {
    const input = "It's a sunny day";
    const expectedOutput = "It's a sunny day";
    if (replaceApostrophes(input) !== expectedOutput) {
      throw new Error(
        `Expected "${expectedOutput}", got "${replaceApostrophes(input)}"`
      );
    }
  }
);

Deno.test("handles empty string input", () => {
  const input = "";
  const expectedOutput = "";
  if (replaceApostrophes(input) !== expectedOutput) {
    throw new Error(
      `Expected "${expectedOutput}", got "${replaceApostrophes(input)}"`
    );
  }
});
