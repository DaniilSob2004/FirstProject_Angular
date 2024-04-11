import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SurveyFormService } from '../../services/survey-form.service';
import { Group } from '../../interfaces/group'
import { Subject } from '../../interfaces/subject';
import { SurveyFormData } from '../../interfaces/survey-form-data';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrl: './survey-form.component.css'
})
export class SurveyFormComponent {
  groups: Group[] | undefined;

  subjects: Subject[] | undefined;
  defSubject: Subject;

  genders: string[] | undefined;
  defGender: string = "male";

  isAgree: boolean = false;
  minNameSymbol: number = 6;

  formData: SurveyFormData | undefined;

  constructor(private surveyFormService : SurveyFormService) {
    this.groups = surveyFormService.groups;
    this.subjects = surveyFormService.subjects;
    this.genders = surveyFormService.genders;
    this.defSubject = this.subjects[0];
  }

  onSubmit(form: NgForm) {
    this.formData = form.value;
    console.log(this.formData);
  }
}
