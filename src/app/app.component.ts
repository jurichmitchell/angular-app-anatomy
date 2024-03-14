import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Color } from './helpers/color';
import { Position, AbsolutePositionUnits, RelativePositionUnits } from './helpers/position';
import { ConsoleWindow, ConsoleWindowComponent, E_txtType } from './components/content/console-window/console-window.component';
import { WordArtLayer, WordArtComponent, E_FontFamily, E_FontStyle, E_FontVariant, E_FontWeight } from './components/content/word-art/word-art.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
		RouterOutlet
		, ConsoleWindowComponent
		, WordArtComponent
	],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-app-anatomy';

	window1 = new ConsoleWindow("Test", "");
	wordArtLayer1 = new WordArtLayer();
	wordArtLayer2 = new WordArtLayer();
	wordArtLayer3 = new WordArtLayer();
	wordArtLayer4 = new WordArtLayer();
	wordArtLayer5 = new WordArtLayer();

	constructor() {
		this.setupConsoleWindow();
		this.setupWordArt();
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
	
	setupWordArt() {
		this.wordArtLayer1 = new WordArtLayer("<WordArt>", E_FontFamily.Monospace, E_FontStyle.Normal, E_FontWeight.Normal, E_FontVariant.Normal, 60, Color.black);
		this.wordArtLayer2 = new WordArtLayer("<WordArt>", E_FontFamily.Monospace, E_FontStyle.Normal, E_FontWeight.Normal, E_FontVariant.Normal, 60, new Color(250, 230, 10, 0.7), new Position(3, 0, 0, -3, AbsolutePositionUnits.px));
		this.wordArtLayer3 = new WordArtLayer("<WordArt>", E_FontFamily.Monospace, E_FontStyle.Normal, E_FontWeight.Normal, E_FontVariant.Normal, 60, new Color(220, 30, 10, 0.6), new Position(-3, 0, 0, -3, AbsolutePositionUnits.px));
		this.wordArtLayer4 = new WordArtLayer("<WordArt>", E_FontFamily.Monospace, E_FontStyle.Normal, E_FontWeight.Normal, E_FontVariant.Normal, 60, new Color(5, 15, 190, 0.5), new Position(-3, 0, 0, 3, AbsolutePositionUnits.px));
		this.wordArtLayer5 = new WordArtLayer("<WordArt>", E_FontFamily.Monospace, E_FontStyle.Normal, E_FontWeight.Normal, E_FontVariant.Normal, 60, new Color(200, 200, 200, 1), new Position(3, 0, 0, 3, AbsolutePositionUnits.px));
		return;
	}
}
