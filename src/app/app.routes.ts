import { Routes } from '@angular/router';
import { ProfessionalPageComponent } from './pages/professional-page/professional-page.component';
import { PersonalPageComponent } from './pages/personal-page/personal-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'services', component: ServicesPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'personal', component: PersonalPageComponent },
  { path: 'professional', component: ProfessionalPageComponent },
];
