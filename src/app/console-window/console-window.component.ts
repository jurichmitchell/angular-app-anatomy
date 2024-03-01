import { Component, Input, ViewEncapsulation } from '@angular/core';

import { HTMLSanitizer } from '../pipes/html-sanitizer';

@Component({
  selector: 'app-console-window',
  standalone: true,
  imports: [
		HTMLSanitizer
	],
  template: `
		<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet">
		<div class="console-window">
			<div class="titlebar">
				<div class="title">{{ titleTxt }}</div>
				<div class="icons" aria-hidden="true">
					<div class="minimize-ico"><span>&#9135;</span></div>
					<div class="maximize-ico"><span>&#9634;</span></div>
					<div class="close-ico"><span>&#10005;</span></div>
				</div>
			</div>
			<div class="window-text" [innerHTML]="windowTxt | htmlSanitizer"></div>
		</div>
  `,
  styleUrl: './console-window.component.css',
	encapsulation: ViewEncapsulation.ShadowDom
})

export class ConsoleWindowComponent {
	@Input() titleTxt: string = "";
	@Input() windowTxt!: string;
}

export enum E_txtType {
	Command = 0,
	Informative = 1
}

export class ConsoleWindow {
	private titleTxt: string = "";
	private windowTxt: string = "";

	constructor(titleTxt?: string, windowTxt?: string) {
		this.titleTxt = titleTxt ?? "";
		this.windowTxt = windowTxt ?? "";
	}

	getTitleText(): string {
		return this.titleTxt;
	}

	getWindowText(): string {
		return this.windowTxt;
	}

	setTitleText(text: string): void {
		this.titleTxt = text;
	}

	pushWindowText(text: string, type: E_txtType): void {
		switch(type) {
			case E_txtType.Command: {
				this.windowTxt = this.windowTxt + '<p class="command">' + text + '</p>';
				break;
			}
			case E_txtType.Informative: {
				this.windowTxt = this.windowTxt + '<p class="informative">' + text + '</p>';
				break;
			}
		}
		return;
	}

	clearTitleText(): void {
		this.titleTxt = "";
	}

	clearWindowText(): void {
		this.windowTxt = "";
	}
}