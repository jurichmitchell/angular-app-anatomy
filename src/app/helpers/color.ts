export class Color {
	// Static variables for all CSS3 basic color keywords
	static black = new Color(0,0,0);
	static silver = new Color(192,192,192);
	static gray = new Color(128,128,128);
	static white = new Color(255,255,255);
	static maroon = new Color(128,0,0);
	static red = new Color(255,0,0);
	static purple = new Color(128,0,128);
	static fuchsia = new Color(255,0,255);
	static green = new Color(0,128,0);
	static lime = new Color(0,255,0);
	static olive = new Color(128,128,0);
	static yellow = new Color(255,255,0);
	static navy = new Color(0,0,128);
	static blue = new Color(0,0,255);
	static teal = new Color(0,128,128);
	static aqua = new Color(0,255,255);

	private r: number = 0;
	private g: number = 0;
	private b: number = 0;
	private a: number = 1;

	constructor(r:number, g:number, b:number, a:number=1) {
		this.setRed(r);
		this.setGreen(g);
		this.setBlue(b);
		this.setAlpha(a);
	}

	setRed(val: number) {
		// Clamp the value to the range 0-255 and remove any decimal points
		this.r = val < 0 ? 0 : val > 255 ? 255 : Math.trunc(val);
	}
	setGreen(val: number) {
		this.g = val < 0 ? 0 : val > 255 ? 255 : Math.trunc(val);
	}
	setBlue(val: number) {
		this.b = val < 0 ? 0 : val > 255 ? 255 : Math.trunc(val);
	}
	setAlpha(val: number) {
		// Clamp the value to the range 0-1
		this.a = val < 0 ? 0 : val > 1 ? 1 : val;
	}

	getRed(): number { return this.r; }
	getGreen(): number { return this.g; }
	getBlue(): number { return this.b; }
	getAlpha(): number { return this.a; }

	toStringRGB() { return `rgb(${this.r},${this.g},${this.b})`; }
	toStringRGBA() { return `rgba(${this.r},${this.g},${this.b},${this.a})`; }
}