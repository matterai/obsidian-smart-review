import {
	DEFAULT_PAGE_SIZE,
	DEFAULT_WORKING_DIR,
	SortingKey,
} from "./PluginConstants";

export interface PluginSettings {
	workDir: string;
	defaultSortingKey: string;
	pageSize: number;
}

export const DEFAULT_SETTINGS: PluginSettings = {
	workDir: DEFAULT_WORKING_DIR,
	defaultSortingKey: SortingKey.MTIME,
	pageSize: DEFAULT_PAGE_SIZE,
};
