import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { AboutComponent } from "./about/about.component";
import { WorkComponent } from './work/work.component';
import { ProjectsComponent } from './projects/projects.component';
import { MiscComponent } from './misc/misc.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, AboutComponent, WorkComponent, ProjectsComponent, MiscComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'personal_website';
}
