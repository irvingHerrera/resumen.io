import { Component, OnInit } from '@angular/core';
import { ResumeService } from 'src/app/service/resume.service';
import { forkJoin } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private resumeService: ResumeService,
              private spinner: NgxSpinnerService) {

   }

   profile: any = {};
   skills: any[] = [];
   education: any[] = [];
   experience: any[] = [];
   other: any[] = [];
   ready = false;

  ngOnInit() {

    this.spinner.show();

    const initServices = [];

    initServices.push(this.resumeService.getEducation());
    initServices.push(this.resumeService.getExperience());
    initServices.push(this.resumeService.getProfile());
    initServices.push(this.resumeService.getSkills());
    initServices.push(this.resumeService.getWorkFlow());

    forkJoin(initServices).subscribe((response: any[]) => {
      console.log(response);

      this.education = response[0];
      this.experience = response[1];
      this.profile = (response[2])[0];
      this.skills = (response[3]);
      this.other = this.skills.filter(s => s.Tools === 1);
      this.skills = this.skills.filter(s => s.Tools === 0);
      this.ready = true;

      this.spinner.hide();

    }, (error) => {
      console.log(error);
    });

  }



}
