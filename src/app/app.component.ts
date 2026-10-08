import { Component } from '@angular/core';
import { PortfolioComponent } from './core/components/portfolio/portfolio.component';
import { ToasterComponent } from './core/components/toaster/toaster.component';
import {
  MODE_STORAGE_SERVICE,
  ModeLocalStorageService,
} from './features/mode-toggle/mode-storage.service';
import { ModeToggleService } from './features/mode-toggle/mode-toggle.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PortfolioComponent, ToasterComponent],
  providers: [
    ModeToggleService,
    {
      provide: MODE_STORAGE_SERVICE,
      useClass: ModeLocalStorageService,
    },
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {}