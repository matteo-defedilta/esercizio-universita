import { Component, OnInit } from '@angular/core';
import { LessonService } from "./lesson.service"
import { Study } from "../interfaces/study"
 
// export interface Test {
//   description: object,
//   lessons: any
// }

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.less']
})

export class LessonComponent implements OnInit {
 
  // studies: Test[] = [];
  studies: Study[];
  lessonsName: Array<any> = [];

  constructor(private callLesson: LessonService) { }

  // lessonListFilter = (value: any): any => {
    
  //   console.log(value); 
  //   value.forEach((elem, index:number) =>{
  //     this.studies.push(elem)
  //     elem.pathOfStudies.forEach(lesson => {
  //       if (elem.pathOfStudies.length > 1) {
  //         this.studies[index].lessons = [elem.pathOfStudies]
  //       }else{
  //         this.studies[index].lessons = lesson.lessons;
  //       }
  //     });
      
  //   })
  //   console.log(this.studies); 
  //   return this.studies;
  // };


  ngOnInit(): void {
    this.callLesson.callLessonList()
      .subscribe((value:Study[]) => {
        console.log(value);
        
        return this.studies = value;
      })
  }

}
