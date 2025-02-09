import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { SwitchLanguageComponent } from '../switch-language/switch-language.component';
import { ThemeSwitcherComponent } from '../theme-switcher/theme-switcher.component';
import { ThemeService } from '../../services/theme.service';

@Component({
	standalone: true,
	selector: 'app-navigation-bar',
	imports: [
		CommonModule,
		TranslateModule,
		RouterModule,
		SwitchLanguageComponent,
		ThemeSwitcherComponent,
	],
	templateUrl: './navigation-bar.component.html',
	styleUrl: './navigation-bar.component.css',
})
export class NavigationBarComponent {
	isNavbarOpen = false;
	isLightMode = false;
	logoPath = 'assets/images/logo-dark.png'; // Default logo

	constructor(private themeService: ThemeService) {
		this.themeService.isLightMode$.subscribe((mode) => {
			this.isLightMode = mode;
			this.updateLogo();
		});
	}

	toggleLinks() {
		this.isNavbarOpen = !this.isNavbarOpen;
	}

	updateLogo() {
		this.logoPath = this.isLightMode
			? '/assets/images/logo-light.png'
			: '/assets/images/logo-dark.png';
	}
}
