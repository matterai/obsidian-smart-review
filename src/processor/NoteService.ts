import { App, TFile } from "obsidian";

export default class NoteService {
	private app: App;
	constructor(app: App) {
		this.app = app;
	}

	fetch(workDir: string, sortingKey: string): TFile[] {
		return this.app.vault
			.getMarkdownFiles()
			.filter((file) => file.path.startsWith(workDir))
			.sort((a: TFile, b: TFile) => {
				switch (sortingKey) {
					default:
						return a.stat.ctime - b.stat.ctime;
				}
			});
	}
}
