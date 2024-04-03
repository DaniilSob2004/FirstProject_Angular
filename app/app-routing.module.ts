import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './site/home/home.component';
import { ContactComponent } from './site/contact/contact.component';
import { FeaturesComponent } from './site/features/features.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "contact", component: ContactComponent },
  { path: "features", component: FeaturesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
