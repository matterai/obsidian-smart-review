import { describe, expect, test } from "@jest/globals";
import Test from "../src/Test";

describe("sum module", () => {
	test("adds 1 + 2 to equal 3", () => {
		expect(new Test().sum(1, 2)).toBe(3);
	});
});
