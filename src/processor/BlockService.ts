import { App, TFile } from "obsidian";
import Block from "./Block";

export default class BlockService {
	private readonly app: App;
	constructor(app: App) {
		this.app = app;
	}

	async fetch(note: TFile): Promise<Block[]> {
		const content = await this.app.vault.cachedRead(note);
		const cache = this.app.metadataCache.getFileCache(note);

		const blocks: Block[] = [];
		if (cache && cache.sections) {
			let block: Block | null = null;

			for (let i = 0; i < cache.sections.length; i++) {
				if (cache.sections[i].type === "paragraph") {
					if (i > 0 && cache.sections[i - 1].type === "heading") {
						if (block !== null) blocks.push(block);

						block = new Block();
						block.source = note.name;

						const heading = content.substring(
							cache.sections[i - 1].position.start.offset,
							cache.sections[i - 1].position.end.offset
						);

						block.heading = heading.replace(/#/g, "").trim();
					}

					const paragraph = content.substring(
						cache.sections[i].position.start.offset,
						cache.sections[i].position.end.offset
					);

					if (block === null) {
						block = new Block();
						block.source = note.name;
						block.heading = "";
					}

					block.paragraphs.push(paragraph);

					if (cache.sections[i + 1] === undefined) {
						blocks.push(block);
					}
				}
			}
		}

		return blocks;
	}

	getRandom(Blocks: Block[]): Block {
		return Blocks[Math.floor(Math.random() * Blocks.length)];
	}
}
