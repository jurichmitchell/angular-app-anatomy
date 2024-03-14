/**
 * @author Mitchell Jurich
 * 
 * TODO: Create functionality that auto generates alt text based on the properties of the word art
 * TODO: (see if it is possible to tell whether the word art is foreground/background based on parent elements)
 * TODO: ((could also just have that be a parameter that the creator can manually set))
 * TODO: Another idea is to have the alt text specify the amount of the page the piece takes up "A large piece of stylized text with..."
 */

import { Component, Input, ViewChild } from '@angular/core';
import { NgIf } from '@angular/common';

import { Color } from '../../../helpers/color';
import { Position } from '../../../helpers/position';
import { HTMLSanitizer } from '../../../pipes/html-sanitizer';

@Component({
  selector: 'app-word-art',
  standalone: true,
  imports: [
		HTMLSanitizer
		, NgIf
	],
  template: `
		<div>
			<span *ngIf="layer1" [style]="'position: relative; user-select: none; ' + layer1.toStyleString() | htmlSanitizer">{{ layer1.getText() }}
				<span *ngIf="layer2" [style]="'position: absolute; z-index:-1; user-select: none; ' + layer2.toStyleString() | htmlSanitizer">{{ layer2.getText() }}</span>
				<span *ngIf="layer3" [style]="'position: absolute; z-index:-2; user-select: none; ' + layer3.toStyleString() | htmlSanitizer">{{ layer3.getText() }}</span>
				<span *ngIf="layer4" [style]="'position: absolute; z-index:-3; user-select: none; ' + layer4.toStyleString() | htmlSanitizer">{{ layer4.getText() }}</span>
				<span *ngIf="layer5" [style]="'position: absolute; z-index:-4; user-select: none; ' + layer5.toStyleString() | htmlSanitizer">{{ layer5.getText() }}</span>
			</span>
		</div>
  `,
  styleUrl: './word-art.component.css'
})
export class WordArtComponent {
	@Input() layer1!: WordArtLayer;
	@Input() layer2!: WordArtLayer;
	@Input() layer3!: WordArtLayer;
	@Input() layer4!: WordArtLayer;
	@Input() layer5!: WordArtLayer;
}

export enum E_FontFamily {
	Serif = "serif",
	SansSerif = "sans-serif",
	Monospace = "monospace",
	Cursive = "cursive",
	Fantasy = "fantasy"
}

export enum E_FontStyle {
	Normal = "normal",
	Italic = "italic",
	Oblique = "oblique"
}

export enum E_FontWeight {
	Normal = "normal",
	Bold = "bold"
}

export enum E_FontVariant {
	Normal = "normal",
	SmallCaps = "small-caps"
}

export class WordArtLayer {
	private text: string = "";
	private family: E_FontFamily = E_FontFamily.Serif;
	private style: E_FontStyle = E_FontStyle.Normal;
	private weight: E_FontWeight = E_FontWeight.Normal;
	private variant: E_FontVariant = E_FontVariant.Normal;
	private size: number = 0;
	private color: Color;
	private position: Position;
	private modifyFlow: boolean = true; //TODO: implement the ability to calculate the wordart component's size in dom including absolutely positioned elements

	constructor(text?: string, family?: E_FontFamily, style?: E_FontStyle, weight?: E_FontWeight, variant?: E_FontVariant, size?: number, color?: Color, position?: Position) {
		this.text = text ?? "";
		this.family = family ?? E_FontFamily.Serif;
		this.style = style ?? E_FontStyle.Normal;
		this.weight = weight ?? E_FontWeight.Normal;
		this.variant = variant ?? E_FontVariant.Normal;
		this.size = size ?? Number(WordArtLayer.getDefaultFontSize(true, false));
		this.color = color ?? new Color(0,0,0,1);
		this.position = position ?? new Position();
	}

	getText(): string { return this.text; }
	getFamily(): E_FontFamily { return this.family; }
	getStyle(): E_FontStyle { return this.style; }
	getWeight(): E_FontWeight { return this.weight; }
	getVariant(): E_FontVariant { return this.variant; }
	getSize(): number { return this.size; }
	getColor(): Color { return this.color; }
	getPosition(): Position { return this.position; }

	setText(text: string): void { this.text = text; }
	setFamily(family: E_FontFamily): void { this.family = family;}
	setStyle(style: E_FontStyle): void { this.style = style; }
	setWeight(weight: E_FontWeight): void { this.weight = weight; }
	setVariant(variant: E_FontVariant): void { this.variant = variant; }
	setSize(size: number): void { this.size = size; }
	setColor(color: Color): void { this.color = new Color(color.getRed(), color.getGreen(), color.getBlue(), color.getAlpha()) }
	setPosition(position: Position): void { this.position = position; }

	toStyleString(): string {
		let styleString: string = `font-family:${this.family}; `
			+ `font-style:${this.style}; `
			+ `font-weight:${this.weight}; `
			+ `font-variant:${this.variant}; `
			+ `font-size:${this.size}px; `
			+ `color:${this.color.toStringRGBA()}; `;

		if (0!==this.position.getTop() || 0!==this.position.getRight() || 0!==this.position.getBottom() || 0!==this.position.getLeft())
			styleString = styleString + this.position.toStyleString();
		
		return styleString;
	}

	static getDefaultFontSize(includeNumber: boolean = true, includeUnit: boolean = true): string {
		const regexNumber = /^\d+/g;
		const regexUnit = /(?<=\d)([A-Z]|[a-z])+$/g;
		let bodyFontSize: string = window.getComputedStyle(document.body).getPropertyValue('font-size');
		
		if (includeNumber && includeUnit)
			return bodyFontSize;
		if (includeNumber && !includeUnit) {
			let matchNumber = bodyFontSize.match(regexNumber);
			let number = matchNumber ? matchNumber![0] : "";
			return number;
		}
		if (!includeNumber && includeUnit) {
			let matchUnit = bodyFontSize.match(regexUnit);
			let unit = matchUnit ? matchUnit![0] : "";
			return unit;
		}
		return "";
	}
}