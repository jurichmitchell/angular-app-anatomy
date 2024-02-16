import { Pipe, PipeTransform, SecurityContext } from "@angular/core";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

/********************************************************
 * HTMLSanitizer
 * 
 * Takes in a string value and sanitizes it using the
 * DomSanitizer. Returns the value as a SafeHtml object
 * to indicate that it is safe to use as innerHTML.
 ********************************************************/
@Pipe({
	name: 'htmlSanitizer',
	standalone: true
})
export class HTMLSanitizer implements PipeTransform {
	constructor(private sanitizer: DomSanitizer) {}

	transform(value: string): SafeHtml {
		if (typeof value !== 'string')
			return "";
		let sanitizedValue = this.sanitizer.sanitize(SecurityContext.HTML, value);
		sanitizedValue ??= ""; // If sanitize() returned null, then set value to empty string
		return this.sanitizer.bypassSecurityTrustHtml(sanitizedValue);
	}	
}