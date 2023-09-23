import { jest } from "@jest/globals";
import { App } from "obsidian";

export const ObsidianApp = jest.fn().mockImplementation(() => {
	return {
		vault: {
			getMarkdownFiles: jest.fn().mockImplementation(() => []),
		},
	};
}) as unknown as jest.Mocked<typeof App>;
