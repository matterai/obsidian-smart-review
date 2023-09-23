import { Plugin } from "obsidian";
import { SettingTab } from "./PluginSettingTab";
import { PluginSettings, DEFAULT_SETTINGS } from "./PluginSettings";
import ProducerService from "./processor/ProducerService";
import { SortingKey } from "./PluginConstants";

export default class SmartFeedPlugin extends Plugin {
	settings: PluginSettings;

	async onload() {
		await this.loadSettings();
		this.addSettingTab(new SettingTab(this.app, this));

		const producer = new ProducerService(this.app, this.settings);
		producer.produce(0, 5, SortingKey.BASENAME);
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
