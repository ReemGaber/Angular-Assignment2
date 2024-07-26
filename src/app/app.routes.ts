import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:'contacts',component:ContactsComponent},
    {path:'About',component:AboutComponent},
    {path:'portofolio',component:PortofolioComponent},
    {path:'gallery',component:GalleryComponent},
    {path:'**',component:NotFoundComponent},






];
