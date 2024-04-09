import { Component, Input } from '@angular/core';
import { AudiencesService } from '../../services/audiences.service';

@Component({
  selector: 'app-audience',
  templateUrl: './audience.component.html',
  styleUrl: './audience.component.css'
})
export class AudienceComponent {
  @Input() audience: any;

  constructor(private audiencesService: AudiencesService) {}

  getFacultyById(id: number): string {
    return this.audiencesService.getFacultyById(id);
  }
}
