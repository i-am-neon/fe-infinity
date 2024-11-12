import { assertEquals } from "@std/assert/equals";
import chapterTitleToChapterId from "@/ai/utilities/chapter-title-to-chapter-id.ts";

Deno.test("Converts title with spaces to underscores", () => {
  const result = chapterTitleToChapterId("Chapter 1 The Beginning");
  assertEquals(result, "chapter_1_the_beginning");
});

Deno.test("Handles apostrophes and quotes", () => {
  const result = chapterTitleToChapterId("The Hero's 'Quest'");
  assertEquals(result, "the_hero_s_quest");
});

Deno.test("Removes special characters", () => {
  const result = chapterTitleToChapterId("Special @#$%^&*() Edition");
  assertEquals(result, "special_edition");
});

Deno.test("Collapses multiple underscores", () => {
  const result = chapterTitleToChapterId("Multiple   Spaces   Here");
  assertEquals(result, "multiple_spaces_here");
});

Deno.test("Trims leading and trailing underscores", () => {
  const result = chapterTitleToChapterId("  'Edge Case'   ");
  assertEquals(result, "edge_case");
});

Deno.test("Handles empty string input", () => {
  const result = chapterTitleToChapterId("");
  assertEquals(result, "");
});
