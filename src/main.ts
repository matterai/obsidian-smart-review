import { Plugin } from "obsidian";
import { SettingTab } from "./PluginSettingTab";
import { PluginSettings, DEFAULT_SETTINGS } from "./PluginSettings";

export default class SmartFeedPlugin extends Plugin {
	settings: PluginSettings;

	async onload() {
		await this.loadSettings();

		this.addSettingTab(new SettingTab(this.app, this));
	}

	onunload() {}

	async loadSettings() {
		this.settings = Object.assign(
			{},
			DEFAULT_SETTINGS,
			await this.loadData()
		);
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}
