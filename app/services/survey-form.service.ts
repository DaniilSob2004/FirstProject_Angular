import { Injectable } from '@angular/core';
import { Group } from '../interfaces/group';
import { Subject } from '../interfaces/subject';

@Injectable({
  providedIn: 'root'
})
export class SurveyFormService {
  groups: Group[] = [
    {
      id: 1,
      title: "P-12"
    },
    {
      id: 2,
      title: "PKM-189"
    },
    {
      id: 3,
      title: "P-15"
    },
    {
      id: 4,
      title: "B-78"
    }
  ];

  subjects: Subject[] = [
    {
      id: 1,
      title: "Angular"
    },
    {
      id: 2,
      title: "C++"
    },
    {
      id: 3,
      title: ".Net C#"
    },
    {
      id: 4,
      title: "Python"
    },
    {
      id: 5,
      title: "JS"
    }
  ];

  genders: string[] = [
    "male",
    "female"
  ];
}
