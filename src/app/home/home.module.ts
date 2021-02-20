import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationComponent } from '../education/education.component';
import { EducationModule } from '../education/education.module';
import { ExperienceComponent } from '../experience/experience.component';
import { ExperienceModule } from '../experience/experience.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ExperienceModule
  ]
})
export class HomeModule { }
