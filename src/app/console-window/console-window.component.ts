import { Component, Input, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-console-window',
  standalone: true,
  imports: [],
  template: `
		<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet">
		<div class="console-window">
			<div class="titlebar">
				<div class="title">{{ titleTxt }}</div>
				<div class="icons">
					<div class="minimize-ico"><span>&#9135;</span></div>
					<div class="maximize-ico"><span>&#9634;</span></div>
					<div class="close-ico"><span>&#10005;</span></div>
				</div>
			</div>
			<div class="window-text" [innerHTML]=windowTxt></div>
		</div>
  `,
  styleUrl: './console-window.component.css',
	encapsulation: ViewEncapsulation.ShadowDom
})
export class ConsoleWindowComponent {
	@Input() titleTxt!: string;
	@Input() windowTxt!: string;
	sanitizer: DomSanitizer;

	constructor(sanitizer: DomSanitizer) {
		this.sanitizer = sanitizer;
	}

	sanitize(html: string) {
		return this.sanitizer.bypassSecurityTrustHtml(html);
	}
}
