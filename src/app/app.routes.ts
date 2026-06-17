import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard';
import { AboutComponent } from './about/about';
import { ProjectsComponent } from './projects/projects';
import { ExperienceComponent } from './experience/experience';
import { ContactComponent } from './contact/contact';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'about', component: AboutComponent },
  { path: 'skills', redirectTo: 'about' },
  { path: 'projects', component: ProjectsComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
