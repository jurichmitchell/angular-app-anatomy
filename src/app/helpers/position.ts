/**
 * @author Mitchell Jurich
 * 
 * TODO: Make TSDoc comments
 */
export enum AbsolutePositionUnits {
	cm = "cm",
	mm = "mm",
	Q = "Q",
	in = "in",
	pc = "pc",
	pt = "pt",
	px = "px"
}

export enum RelativePositionUnits {
	em = "em",
	ex = "ex",
	ch = "ch",
	re = "re",
	lh = "lh",
	rlh = "rlh",
	vw = "vw",
	vh = "vh",
	vmin = "vmin",
	vmax = "vmax",
	vb = "vb",
	vi = "vi",
	svw = "svw",
	svh = "svh",
	lvw = "lvw",
	lvh = "lvh",
	dvw = "dvw",
	dvh = "dvh"
}

export class Position {
	private top: number = 0;
	private right: number = 0;
	private bottom: number = 0;
	private left: number = 0;
	private unit: AbsolutePositionUnits | RelativePositionUnits = AbsolutePositionUnits.px;

	constructor(top: number=0, right: number=0, bottom: number=0, left: number=0
			, unit: AbsolutePositionUnits | RelativePositionUnits = AbsolutePositionUnits.px) {
		this.top = top;
		this.right = right;
		this.bottom = bottom;
		this.left = left;
		this.unit = unit;
	}

	getTop(): number { return this.top; }
	getRight(): number { return this.right; }
	getBottom(): number { return this.bottom; }
	getLeft(): number { return this.left; }
	getUnit(): string { return this.unit; }

	setTop(val: number): void {
		this.top = val;
	}
	setRight(val: number): void {
		this.right = val;
	}
	setBottom(val: number): void {
		this.bottom = val;
	}
	setLeft(val: number): void {
		this.left = val;
	}
	setUnit(unit: AbsolutePositionUnits | RelativePositionUnits): void {
		this.unit = unit;
	}

	toStyleString() {
		return `top: ${this.top}${this.unit}; `
			+ `right: ${this.right}${this.unit}; `
			+ `bottom: ${this.bottom}${this.unit}; `
			+ `left: ${this.left}${this.unit};`
	}
}