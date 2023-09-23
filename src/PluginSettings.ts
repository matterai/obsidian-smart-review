import { SortingKey } from "./PluginConstants";

export interface PluginSettings {
	workDir: string;
	defaultSortingKey: string;
	pageSize: number;
}

export const DEFAULT_SETTINGS: PluginSettings = {
	workDir: "/",
	defaultSortingKey: SortingKey.MTIME,
	pageSize: 10,
};
