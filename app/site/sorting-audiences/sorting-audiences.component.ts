import { Component } from '@angular/core';

import { AudiencesService } from '../../services/audiences.service';

@Component({
  selector: 'app-sorting-audiences',
  templateUrl: './sorting-audiences.component.html',
  styleUrl: './sorting-audiences.component.css'
})
export class SortingAudiencesComponent {
  groups: any[] = [];
  faculties: any[] = [];

  constructor(private audiencesService: AudiencesService) {
    this.groups = audiencesService.groups;
    this.faculties = audiencesService.faculties;
  }
}
