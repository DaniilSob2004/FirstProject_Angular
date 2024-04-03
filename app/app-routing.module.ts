import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './site/home/home.component';
import { ContactComponent } from './site/contact/contact.component';
import { FeaturesComponent } from './site/features/features.component';
import { AboutUsComponent } from './site/about-us/about-us.component';
import { PetsComponent } from './site/pets/pets.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "contact", component: ContactComponent },
  { path: "features", component: FeaturesComponent },
  { path: "about", component: AboutUsComponent },
  { path: "pets", component: PetsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
