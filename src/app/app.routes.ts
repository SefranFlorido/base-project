import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { ProfessionalComponent } from './pages/professional/professional.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'personal', component: PersonalComponent},
    {path: 'professional', component: ProfessionalComponent}
];
