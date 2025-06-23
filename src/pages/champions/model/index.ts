export interface Champion {
	version: string;
	id: string;
	key: string;
	name: string;
	title: string;
	blurb: string;
	info: {
		attack: number;
		defense: number;
		magic: number;
		difficulty: number;
	};
	image: {
		full: string;
		sprite: string;
		group: string;
	};
	tags: string[];
}

export interface ChampData {
	type: string;
	format: string;
	version: string;
	data: {
		[key: string]: Champion;
	};
}
