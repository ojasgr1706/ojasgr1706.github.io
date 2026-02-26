import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'work', component: WorkComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: '**', redirectTo: '' }
];
