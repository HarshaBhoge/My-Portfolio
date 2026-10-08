import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

import { HeroComponent } from '../../../features/hero/hero.component';
import { AboutComponent } from '../../../features/about/about.component';
import { SkillsComponent } from '../../../features/skills/skills.component';
import { ProjectsComponent } from '../../../features/projects/projects.component';
import { JourneyComponent } from '../../../features/journey/journey.component';
import { ConnectComponent } from '../../../features/connect/connect.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    JourneyComponent,
    ConnectComponent,
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {}
