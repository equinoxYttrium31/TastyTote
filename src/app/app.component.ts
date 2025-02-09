import { Component } from '@angular/core';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { HomePageComponent } from './pages/home/home-page.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [NavigationBarComponent, HomePageComponent],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {}
