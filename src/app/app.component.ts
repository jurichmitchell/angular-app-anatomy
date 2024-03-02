import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ConsoleWindow, ConsoleWindowComponent, E_txtType } from './console-window/console-window.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
		RouterOutlet
		, ConsoleWindowComponent
	],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-app-anatomy';

	window1 = new ConsoleWindow("Test", "");

	constructor() {
		this.setupConsoleWindow();
	}

	setupConsoleWindow() {
		this.window1.setTitleText("Creating a Component via Angular CLI");
		this.window1.pushWindowText("ng generate component [name]", E_txtType.Command);
		this.window1.pushWindowText("This command will create the necessary files for a basic Angular Component", E_txtType.Informative);
		this.window1.pushWindowText("A second command here", E_txtType.Command);
		this.window1.pushWindowText("Line 1 info", E_txtType.Informative);
		this.window1.pushWindowText("Line 2 info", E_txtType.Informative);
		return;
	}

}
