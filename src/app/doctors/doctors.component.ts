import { Component, OnInit } from '@angular/core';
import { DoctorsService } from '../service/doctors.service';
import { Doctor } from '../model/doctor';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css'],
})
export class DoctorsComponent implements OnInit {
  
  $doctors: Observable<Doctor[]> | undefined;

  constructor(private doctorsService: DoctorsService) {}

  ngOnInit(): void {
    this.$doctors = this.doctorsService.getDoctors();
  }
}
