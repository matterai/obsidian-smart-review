import { describe, expect, test } from "@jest/globals";
import { ObsidianApp, ObsidianTFile } from "__mocks__/obsidian";
import BlockService from "src/processor/BlockService";

describe("Block service", () => {
	test("Should return empty array", () => {
		expect(
			new BlockService(new ObsidianApp()).fetch(new ObsidianTFile())
		).toEqual([]);
	});
});
