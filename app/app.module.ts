import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { PwBindingComponent } from './pw-binding/pw-binding.component';
import { BookComponent } from './book/book.component';
import { SeeWorldComponent } from './see-world/see-world.component';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { ChoiceIphoneComponent } from './choice-iphone/choice-iphone.component';
import { HomeComponent } from './site/home/home.component';
import { ContactComponent } from './site/contact/contact.component';
import { NavMenuComponent } from './site/nav-menu/nav-menu.component';
import { AboutUsComponent } from './site/about-us/about-us.component';
import { PetsComponent } from './site/pets/pets.component';
import { UsersComponent } from './site/users/users.component';
import { UserComponent } from './site/user/user.component';
import { TestPipeComponent } from './test-pipe/test-pipe.component';
import { FilterPipe } from './pipes/filter.pipe';
import { UniversityComponent } from './site/university/university.component';
import { AudiencesComponent } from './site/audiences/audiences.component';
import { FiltersAudiencePipe } from './pipes/filters-audience.pipe';

import { AudiencesService } from './services/audiences.service';
import { AudienceComponent } from './site/audience/audience.component';
import { FormComponent } from './form/form.component';

/*
Декоратор NgModule() — это функция, принимает один объект метаданных, свойства которого описывают модуль.
Свойство declarations - передает Angular список директив, компонентов и каналов (pipes), которые принадлежат этому модулю.
Свойство imports - для перечисления других модулей, чьи экспортированные классы нужны в этом модуле.
Свойство providers - определяет сервисы, которые хотите добавить в глобальную коллекцию сервисов.
  Эти сервисы будут доступны через внедрение зависимостей (dependency injection).
Свойство bootstrap - указывает основной компонент этого модуля, который должен быть загружен при загрузке модуля.

Корневой модуль приложения импортирует модуль BrowserModule, который предоставляет функциональность, необходимую
для запуска приложений Angular в браузерах.
Так же импортируется компонент AppComponent и объявляется как основной в свойстве bootstrap.
*/
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    PwBindingComponent,
    BookComponent,
    SeeWorldComponent,
    TextEditorComponent,
    ChoiceIphoneComponent,
    HomeComponent,
    ContactComponent,
    NavMenuComponent,
    AboutUsComponent,
    PetsComponent,
    UsersComponent,
    UserComponent,
    TestPipeComponent,
    FilterPipe,
    UniversityComponent,
    AudiencesComponent,
    FiltersAudiencePipe,
    AudienceComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,  // для использования модели браузера
    AppRoutingModule,  // маршрутизация, навигация
    FormsModule  // для 2-ух сторонней привязке
  ],
  providers: [
    provideClientHydration(),
    AudiencesService
  ],
  bootstrap: [AppComponent]  // самый первый подключенный компонент
})
export class AppModule { }
