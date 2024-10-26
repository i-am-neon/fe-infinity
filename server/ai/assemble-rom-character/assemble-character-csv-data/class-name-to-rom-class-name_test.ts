import { assertEquals, assertThrows } from "@std/assert";
import classNameToRomClassName from "@/ai/assemble-rom-character/assemble-character-csv-data/class-name-to-rom-class-name.ts";

Deno.test("classNameToRomClassName - male and female common classes", () => {
  assertEquals(
    classNameToRomClassName({ className: "Cavalier", characterGender: "male" }),
    "Cavalier"
  );
  assertEquals(
    classNameToRomClassName({
      className: "Cavalier",
      characterGender: "female",
    }),
    "Cavalier_F"
  );

  assertEquals(
    classNameToRomClassName({ className: "Mage", characterGender: "male" }),
    "Mage"
  );
  assertEquals(
    classNameToRomClassName({ className: "Mage", characterGender: "female" }),
    "Mage_F"
  );
});

Deno.test("classNameToRomClassName - male only classes", () => {
  assertEquals(
    classNameToRomClassName({ className: "Priest", characterGender: "male" }),
    "Priest"
  );

  assertThrows(
    () =>
      classNameToRomClassName({
        className: "Priest",
        characterGender: "female",
      }),
    Error,
    'No ROM class name for female in class "Priest".'
  );

  assertEquals(
    classNameToRomClassName({ className: "Pirate", characterGender: "male" }),
    "Pirate"
  );

  assertThrows(
    () =>
      classNameToRomClassName({
        className: "Pirate",
        characterGender: "female",
      }),
    Error,
    'No ROM class name for female in class "Pirate".'
  );
});

Deno.test("classNameToRomClassName - female only classes", () => {
  assertEquals(
    classNameToRomClassName({ className: "Cleric", characterGender: "female" }),
    "Cleric"
  );

  assertThrows(
    () =>
      classNameToRomClassName({ className: "Cleric", characterGender: "male" }),
    Error,
    'No ROM class name for male in class "Cleric".'
  );

  assertEquals(
    classNameToRomClassName({
      className: "PegasusKnight",
      characterGender: "female",
    }),
    "PegasusKnight"
  );

  assertThrows(
    () =>
      classNameToRomClassName({
        className: "PegasusKnight",
        characterGender: "male",
      }),
    Error,
    'No ROM class name for male in class "PegasusKnight".'
  );
});

Deno.test("classNameToRomClassName - different suffixes", () => {
  assertEquals(
    classNameToRomClassName({ className: "Soldier", characterGender: "male" }),
    "Soldier"
  );
  assertEquals(
    classNameToRomClassName({
      className: "Soldier",
      characterGender: "female",
    }),
    "SoldierF2"
  );

  assertEquals(
    classNameToRomClassName({ className: "Monk", characterGender: "male" }),
    "Monk"
  );
  assertEquals(
    classNameToRomClassName({ className: "Monk", characterGender: "female" }),
    "MonkF2"
  );
});

Deno.test("classNameToRomClassName - invalid class name", () => {
  assertThrows(
    () =>
      classNameToRomClassName({
        className: "InvalidClass",
        characterGender: "male",
      }),
    Error,
    'Class name "InvalidClass" not found in ROM class mapping.'
  );
});
