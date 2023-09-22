import { Notice, Plugin } from "obsidian";
import { SettingTab } from "./SettingTab";
import { Settings, DEFAULT_SETTINGS } from "./Settings";

export default class MyPlugin extends Plugin {
	settings: Settings;

	async onload() {
		await this.loadSettings();

		const ribbonIconEl = this.addRibbonIcon(
			"dice",
			"Sample Plugin",
			(evt: MouseEvent) => {
				new Notice("Hello world");
			}
		);

		// This adds a settings tab so the user can configure various aspects of the plugin
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
