import { App } from "obsidian";
import NoteService from "./NoteService";
import { PluginSettings } from "src/PluginSettings";
import { SortingKey } from "src/PluginConstants";
import BlockService from "./BlockService";
import Block from "./Block";

export default class ProducerService {
	private app: App;
	private settings: PluginSettings;

	constructor(app: App, settings: PluginSettings) {
		this.app = app;
		this.settings = settings;
	}

	produce(
		cursor: number = 0,
		pageSize: number | null = null,
		sortingKey: SortingKey | null = null
	) {
		const noteService = new NoteService(this.app);
		const sortedNotes = noteService.fetch(
			this.settings.workDir,
			sortingKey ?? this.settings.defaultSortingKey
		);

		const processingNotes = sortedNotes.slice(
			cursor,
			cursor + (pageSize ?? this.settings.pageSize)
		);

		const blocks: Block[] = [];
		processingNotes.forEach((note) => {
			const blockService = new BlockService();
			const noteBlocks = blockService.fetch(note);
			blocks.push(blockService.getRandom(noteBlocks));
		});
	}
}
