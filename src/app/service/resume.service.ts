import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  baseUrl: string;

constructor(private http: HttpClient) {
  this.baseUrl = 'https://resume-b83a5.firebaseio.com/';
 }

getEducation() {
  return this.http.get(`${this.baseUrl}Education.json`)
      .pipe(map(response => response));
}
getExperience() {
  return this.http.get(`${this.baseUrl}Experience.json`)
  .pipe(map(response => response));
}
getProfile() {
  return this.http.get(`${this.baseUrl}Profile.json`)
  .pipe(map(response => response));
}
getSkills() {
  return this.http.get(`${this.baseUrl}Skills.json`)
  .pipe(map(response => response));
}

getWorkFlow() {
  return this.http.get(`${this.baseUrl}WorkFlow.json`)
  .pipe(map(response => response));
}

}

