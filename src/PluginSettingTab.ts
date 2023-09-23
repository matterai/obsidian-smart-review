import { App, PluginSettingTab, Setting } from "obsidian";
import SmartFeedPlugin from "./main";
import {} from "./PluginSettings";
import { SortingKey } from "./PluginConstants";

export class SettingTab extends PluginSettingTab {
	plugin: SmartFeedPlugin;

	constructor(app: App, plugin: SmartFeedPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const { containerEl } = this;

		containerEl.empty();

		new Setting(containerEl)
			.setName("Source notes location")
			.setDesc(
				"Files from this location will be used as source notes for AI based notes generation."
			)
			.addText((text) =>
				text
					.setPlaceholder("Example: folder 1/folder")
					.setValue(this.plugin.settings.workDir)
					.onChange(async (value) => {
						this.plugin.settings.workDir = value;
						await this.plugin.saveSettings();
					})
			);

		new Setting(containerEl)
			.setName("Default sorting key")
			.setDesc(
				"Notes will be sorted by this key by default before AI processing."
			)
			.addDropdown((dropdown) => {
				dropdown
					.addOption(SortingKey.BASENAME, "Alphabetically")
					.addOption(SortingKey.CTIME, "By creation date")
					.addOption(SortingKey.MTIME, "Last modified date")
					.setValue(this.plugin.settings.defaultSortingKey)
					.onChange(async (value) => {
						this.plugin.settings.defaultSortingKey = value;
						await this.plugin.saveSettings();
					});
			});

		new Setting(containerEl)
			.setName("Notes per page")
			.setDesc(
				"Number of notes that will be AI processed and displayed per page."
			)
			.addText((text) =>
				text
					.setPlaceholder("Example: 10")
					.setValue(this.plugin.settings.pageSize.toString())
					.onChange(async (value) => {
						this.plugin.settings.pageSize = parseInt(value);
						await this.plugin.saveSettings();
					})
			);
	}
}
