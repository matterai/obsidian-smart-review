import { describe, expect, test } from "@jest/globals";
import { ObsidianTFile } from "__mocks__/obsidian";
import BlockService from "src/processor/BlockService";

describe("Block service", () => {
	test("Should return empty array", () => {
		expect(new BlockService().fetch(new ObsidianTFile())).toEqual([]);
	});
});
