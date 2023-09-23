import { jest } from "@jest/globals";
import { App, TFile } from "obsidian";

export const ObsidianApp = jest.fn().mockImplementation(() => {
	return {
		vault: {
			getMarkdownFiles: jest.fn().mockImplementation(() => []),
		},
	};
}) as unknown as jest.Mocked<typeof App>;

export const ObsidianTFile = jest.fn().mockImplementation(() => {
	return {
		path: "",
		basename: "",
		extension: "",
		stat: {
			ctime: 0,
		},
	};
}) as unknown as jest.Mocked<typeof TFile>;
