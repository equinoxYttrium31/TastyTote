import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
	selector: 'app-switch-language',
	imports: [CommonModule, TranslateModule],
	templateUrl: './switch-language.component.html',
	styleUrl: './switch-language.component.css',
})
export class SwitchLanguageComponent {
	constructor(private translate: TranslateService) {
		this.translate.setDefaultLang('en'); // Default language
	}

	switchLanguage(event: Event) {
		const selectElement = event.target as HTMLSelectElement | null;
		if (selectElement && selectElement.value) {
			this.translate.use(selectElement.value);
		}
	}
}
