import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ConsoleWindowComponent } from './console-window/console-window.component';

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
	consoleWindowText: string = '<p>ng generate component [name]</p>'
		+ '<p class="non-command-text">This command will create the necessary files for a basic Angular Component</p>'
		+ '<p>A second command here</p>'
		+ '<p class="non-command-text">Line 1 info</p>'
		+ '<p class="non-command-text">Line 2 info</p>'
		+ '<p></p>';
}
