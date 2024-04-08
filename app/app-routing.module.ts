import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './site/home/home.component';
import { ContactComponent } from './site/contact/contact.component';
import { AboutUsComponent } from './site/about-us/about-us.component';
import { PetsComponent } from './site/pets/pets.component';
import { UsersComponent } from './site/users/users.component';

// Определяет маршруты приложения.
// Каждый объект Route содержит инфу о том, как соответ. URL-адрес должен
// быть сопоставлен с компонентом Angular
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "contact", component: ContactComponent },
  { path: "about", component: AboutUsComponent },
  { path: "pets", component: PetsComponent },
  { path: "users", component: UsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
