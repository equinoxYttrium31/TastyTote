import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ThemeService {
	private isLightModeSubject = new BehaviorSubject<boolean>(this.getInitialTheme());
	isLightMode$ = this.isLightModeSubject.asObservable();

	constructor() {}

	// Get theme from localStorage
	private getInitialTheme(): boolean {
		return localStorage.getItem('theme') === 'light';
	}

	// Toggle theme and notify subscribers
	toggleTheme() {
		const newTheme = !this.isLightModeSubject.value;
		this.isLightModeSubject.next(newTheme);
		document.body.classList.toggle('light-mode', newTheme);
		localStorage.setItem('theme', newTheme ? 'light' : 'dark');
	}
}
