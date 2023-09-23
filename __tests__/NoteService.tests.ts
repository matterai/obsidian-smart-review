import { describe, expect, jest, test } from "@jest/globals";
import { ObsidianApp } from "__mocks__/obsidian";
import { DEFAULT_WORKING_DIR, SortingKey } from "src/PluginConstants";
import NoteService from "src/processor/NoteService";

describe("Note Service", () => {
	test("Should return empty array", () => {
		expect(
			new NoteService(new ObsidianApp()).fetch(
				DEFAULT_WORKING_DIR,
				SortingKey.MTIME
			)
		).toEqual([]);
	});
});
