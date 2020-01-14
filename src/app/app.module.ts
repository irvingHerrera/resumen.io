import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarComponent } from './shared/bar/bar.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/home/about/about.component';
import { ExperienceComponent } from './pages/home/experience/experience.component';
import { EducationComponent } from './pages/home/education/education.component';
import { SkillsComponent } from './pages/home/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    HomeComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
