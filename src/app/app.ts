import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuToolbar } from './shared/menu-toolbar/menu-toolbar';

@Component({
  imports: [RouterOutlet, MenuToolbar],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {}
