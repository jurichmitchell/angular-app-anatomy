import { Component } from '@angular/core';

@Component({
  selector: 'app-console-window',
  standalone: true,
  imports: [],
  template: `
		<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet">
		<div class="grid-container">
			<div class="grid-item titlebar">
				<div class="title">Creating a Component via Angular CLI</div>
				<div class="minimize-ico">&#9135;</div>
				<div class="maximize-ico">&#9634;</div>
				<div class="close-ico">&#10005;</div>
				<!--<span class="title">Creating a Component via Angular CLI</span>
				<div class="icons">
					<span class="minimize-ico">&#9135;</span>
					<span class="maximize-ico">&#9634;</span>
					<span class="close-ico">&#10005;</span>
				</div>-->
			<!--<div class="grid-item title right-aligned">&#9135;&#9634;&#10005;</div>-->
				
			</div>
			
			<div class="grid-item window-text">Here is some test text for a console command or whatever</div>
		</div>
  `,
  styleUrl: './console-window.component.css'
})
export class ConsoleWindowComponent {

}
