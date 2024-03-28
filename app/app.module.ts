import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { ProviderComponent } from './provider/provider.component';

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
    ProviderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
