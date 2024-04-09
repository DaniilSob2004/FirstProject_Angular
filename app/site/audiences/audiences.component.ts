import { Component, OnInit } from '@angular/core';

import { AudiencesService } from '../../services/audiences.service';

@Component({
  selector: 'app-audiences',
  templateUrl: './audiences.component.html',
  styleUrl: './audiences.component.css'
})
export class AudiencesComponent {
  audiences: any[] = [];
  faculties: any[] = [];
  groups: any[] = [];
  sortFunc: (a: any, b: any) => any = (a, b) => 0;
  selectedFacultyIndex: number = -1;

  constructor(private audiencesService: AudiencesService) {
    this.faculties = audiencesService.faculties;
    this.groups = audiencesService.groups;
  }

  ngOnInit(): void {
    this.audiences = this.audiencesService.audiences;
  }

  sortByCapacity() {
    this.sortFunc = (a, b) => a.capacity - b.capacity;
  }

  sortByName() {
    this.sortFunc = (a, b) => a.title.localeCompare(b.title);
  }

  filterByGroup(event: any) {
    const index = Number(event.target.value);
    // this.groups[index].amountStud
    this.selectedFacultyIndex = index !== -1 ? this.groups[index].facultyId : -1;
  }

  filterByFaculty(event: any) {
    const index = Number(event.target.value);
    this.selectedFacultyIndex = index !== -1 ? index + 1 : -1;
  }
}
