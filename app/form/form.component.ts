import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  answers = [
    {
      type: 'yes',
      text: 'Да'
    },
    {
      type: 'no',
      text: 'Нет'
    }
  ];
  defaultAnswer: string = "no";
  defaultLang: string = "fr";
  formData: any = {};
  isSubmited: boolean = false;

  submitForm(form: NgForm) {
    this.isSubmited = true;
    this.formData = form.value;
    form.reset();
  }
}
