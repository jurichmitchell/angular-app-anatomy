import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ConsoleWindow, ConsoleWindowComponent, E_txtType } from './console-window/console-window.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet
		, ConsoleWindowComponent
	],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-app-anatomy';

	consoleWindowTitle: string = "Creating a Component via Angular CLI";
	consoleWindowText: string = '<p class="command">ng generate component [name]</p>'
		+ '<p class="informative">This command will create the necessary files for a basic Angular Component</p>'
		+ '<p class="command">A second command here</p>'
		+ '<p class="informative">Line 1 info</p>'
		+ '<p class="informative">Line 2 info</p>'
		+ '<p></p>';
	
	title2: string = "Hello There!";
	windowText2: string = "<p>rm * -o</p>";

	window1 = new ConsoleWindow("Test", "");

	constructor() {
		this.window1.setTitleText("Creating a Component via Angular CLI");
		this.window1.pushWindowText("ng generate component [name]", E_txtType.Command);
		this.window1.pushWindowText("This command will create the necessary files for a basic Angular Component", E_txtType.Informative);
		this.window1.pushWindowText("A second command here", E_txtType.Command);
		this.window1.pushWindowText("Line 1 info", E_txtType.Informative);
		this.window1.pushWindowText("Line 2 info", E_txtType.Informative);
		return;
	}

}
