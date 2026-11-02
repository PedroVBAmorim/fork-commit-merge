// Vitest - Easy

import sum from "./sum";
import { describe, expect, it } from "vitest";

// TODO: Create the test required in the task

describe("#sum", () => {
  it("returns 0 with no numbers", () => {
    expect(sum()).toBe(0);
  });
});
