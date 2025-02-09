import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
	selector: 'app-theme-switcher',
	standalone: true,
	templateUrl: './theme-switcher.component.html',
	styleUrls: ['./theme-switcher.component.css'],
})
export class ThemeSwitcherComponent {
	isLightMode = false;

	constructor(private themeService: ThemeService) {
		this.themeService.isLightMode$.subscribe((mode) => {
			this.isLightMode = mode;
		});
	}

	toggleTheme() {
		this.themeService.toggleTheme();
	}
}
