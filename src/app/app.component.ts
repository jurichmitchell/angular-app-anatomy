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
	consoleWindowText: string = "<p>LINE ONE</p><p>LINE TWO</p><p>LINE THREE</p>";
}
