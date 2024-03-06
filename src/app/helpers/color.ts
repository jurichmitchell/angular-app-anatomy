/**
 * @author Mitchell Jurich
 * 
 * TODO: Make TSDoc comments for class functions, particularly constructor/setColor functions
 */

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
	private isConstructed: boolean = false;

	constructor(param1:(number|string)=0, param2:number=0, param3:number=0, param4:number=1) {
		this.setColor(param1, param2, param3, param4);
		this.isConstructed = true;
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

	setColor(param1:(number|string)=0, param2:number=0, param3:number=0, param4:number=1): void {
		if (typeof param1 === "number") {
			this.setRed(param1);
			this.setGreen(param2);
			this.setBlue(param3);
			this.setAlpha(param4);
		}
		// If first parameter passed was a string, treat it as a hexadecimal
		else if (typeof param1 === "string") {
			let prefixStripped = param1.replace("#","").replace("0x","");
			// Confirm only hex-appropriate values are present (0-9, A-F)
			let invalidChars: RegExpMatchArray | null = prefixStripped.match(/[^0-9|A-F]+/g);
			if (invalidChars !== null)
				throw new HexCodeError(this.isConstructed
					? `Hex code provided as parameter to setColor() function of Color object (${param1}) contains invalid character(s): ${invalidChars}.`
					: `Hex code provided as parameter to new Color object (${param1}) contains invalid character(s): ${invalidChars}.`);
			let fullHex: string;
			// If shorthand hex code was used (or no Alpha value present), expand it to full hex code value
			if (prefixStripped.length === 3) // Shorthand for RGB
				fullHex = `${prefixStripped.charAt(0)}${prefixStripped.charAt(0)}`
					+ `${prefixStripped.charAt(1)}${prefixStripped.charAt(1)}`
					+ `${prefixStripped.charAt(2)}${prefixStripped.charAt(2)}`
					+ `FF`
			else if (prefixStripped.length === 4) // Shorthand for RGBA
				fullHex = `${prefixStripped.charAt(0)}${prefixStripped.charAt(0)}`
					+ `${prefixStripped.charAt(1)}${prefixStripped.charAt(1)}`
					+ `${prefixStripped.charAt(2)}${prefixStripped.charAt(2)}`
					+ `${prefixStripped.charAt(3)}${prefixStripped.charAt(3)}`
			else if (prefixStripped.length === 6) // No alpha specified
				fullHex = `${prefixStripped}FF`
			else if (prefixStripped.length === 8) // Full hex code provided including Alpha
				fullHex = prefixStripped;
			else // Too many digits provided
				throw new HexCodeError(this.isConstructed
						? `Hex code provided as parameter to setColor() function of Color object (${param1}) contains too many digits.`
						: `Hex code provided as parameter to new Color object (${param1}) contains too many digits.`);
			
				// If we reach this point, then we know that we have an 8 digit hex code available
			this.setRed(parseInt(fullHex.substring(0, 2), 16));
			this.setGreen(parseInt(fullHex.substring(2, 4), 16));
			this.setBlue(parseInt(fullHex.substring(4, 6), 16));
			this.setAlpha(parseInt(fullHex.substring(6, 8), 16)/255.0);
		}
	}

	getRed(): number { return this.r; }
	getGreen(): number { return this.g; }
	getBlue(): number { return this.b; }
	getAlpha(): number { return this.a; }

	toStringRGB() { return `rgb(${this.r},${this.g},${this.b})`; }
	toStringRGBA() { return `rgba(${this.r},${this.g},${this.b},${this.a})`; }
}

class HexCodeError extends Error {
	constructor(message: string) {
		super(message);
		this.name = "HexCodeError";
	}
}