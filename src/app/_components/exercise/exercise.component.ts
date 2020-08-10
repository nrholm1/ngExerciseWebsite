import { Component, OnInit } from '@angular/core';
import { exercise } from 'src/app/_models/exercise';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit {
  _exercises: exercise[] = [{id: 1,
                            name: "Muscle-up",
                            description: "pull-up to dip",
                            muscleGroup: "back & core",
                            exType: "calisthenics",
                            difficulty: 8}];

  constructor() { }

  ngOnInit(): void {
  }

}
