import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ThemeService {
	private isLightModeSubject = new BehaviorSubject<boolean>(this.getInitialTheme());
	isLightMode$ = this.isLightModeSubject.asObservable();

	constructor() {
		// Apply the saved theme when service initializes
		this.applyTheme(this.isLightModeSubject.value);
	}

	// Get theme from localStorage
	private getInitialTheme(): boolean {
		return localStorage.getItem('theme') === 'light';
	}

	// Apply theme to body
	private applyTheme(isLight: boolean) {
		document.body.classList.toggle('light-mode', isLight);
	}

	// Toggle theme and notify subscribers
	toggleTheme() {
		const newTheme = !this.isLightModeSubject.value;
		this.isLightModeSubject.next(newTheme);
		this.applyTheme(newTheme);
		localStorage.setItem('theme', newTheme ? 'light' : 'dark');
	}
}
