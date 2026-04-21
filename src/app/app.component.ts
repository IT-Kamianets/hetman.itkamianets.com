import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopbarComponent } from './layouts/topbar/topbar.component';
import { ScrollService } from './services/scroll.service';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, TopbarComponent],
    template: `
        <app-topbar />

        <main>
            <router-outlet />
        </main>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
    private readonly _scrollService = inject(ScrollService);

    constructor() {
        this._scrollService.initialize();
    }
}