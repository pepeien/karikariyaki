import { Component, OnInit } from '@angular/core';
import { Langs, Operator } from 'karikarihelper';

// Service
import { LanguageService } from '@services';

// Animations
import { AutomaticAnimation, BasicAnimations, LoggedNavbarAnimation } from '@animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    animations: [BasicAnimations.breatheAnimation, AutomaticAnimation.slideInOut],
})
export class AppComponent implements OnInit {
    /**
     * Language
     */
    public selectedLanguage = LanguageService.DEFAULT_LANGUAGE;

    /**
     * In House
     */
    public langList = Langs;

    constructor(private _languageService: LanguageService) {}

    ngOnInit(): void {
        this._languageService.language.subscribe({
            next: (nextLanguage) => {
                this.selectedLanguage = nextLanguage;
            },
        });
    }
}
