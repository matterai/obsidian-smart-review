import { describe, expect, test } from "@jest/globals";
import { HeadingCache, SectionCache } from "obsidian";
import BlockService from "src/processor/BlockService";

describe("block service", () => {
	test("should return empty array", () => {
		const input: [string, number, HeadingCache[], SectionCache[]] = [
			"",
			1,
			[],
			[],
		];

		expect(new BlockService().fetchBlocks(...input)).toEqual([]);
	});
});
