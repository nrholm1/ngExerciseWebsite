import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-set-list',
  templateUrl: './create-set-list.component.html',
  styleUrls: ['./create-set-list.component.scss']
})
export class CreateSetListComponent implements OnInit {
  form: FormGroup;

  exerciseIds: number[];//= [1,3,4,5,6,7,8,9,10];

  addExerciseId(newExerciseId: number) {
    console.log(this.exerciseIds);
    this.exerciseIds.push(newExerciseId);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
