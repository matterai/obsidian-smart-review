import { HeadingCache, SectionCache, TFile } from "obsidian";
import Block from "./Block";

export default class BlockService {
	constructor() {}

	fetchBlocks(
		markdown: string,
		headingLevel: number,
		headings: HeadingCache[],
		sections: SectionCache[]
	): Block[] {
		return [];
	}
}
