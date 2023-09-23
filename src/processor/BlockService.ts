import { TFile } from "obsidian";
import Block from "./Block";

export default class BlockService {
	constructor() {}

	fetch(note: TFile): Block[] {
		return [];
	}

	getRandom(Blocks: Block[]): Block {
		return Blocks[Math.floor(Math.random() * Blocks.length)];
	}
}
