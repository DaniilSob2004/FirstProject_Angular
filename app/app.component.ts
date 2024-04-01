import { Component } from '@angular/core';

/*
Компонент представляет собой класс AppComponent, перед которым указана функция
декоратор @Component.
*/
@Component({
  selector: 'app-root',  // название селектора для отображения во view
  templateUrl: './app.component.html',  // представление с вкраплением кода Angular
  styleUrl: './app.component.css'  // набор стилей
})
export class AppComponent {
  title: string = 'FirstProject';
}
