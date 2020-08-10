import { Component, OnInit, Input } from '@angular/core';
import { exercise } from 'src/app/_models/exercise';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit {
  @Input() id: number;

  exercise1: exercise = {id: 1,
                            name: "Muscle-up",
                            description: "pull-up to dip",
                            muscleGroup: "back & core",
                            exType: "calisthenics",
                            difficulty: 8};
  exercise2: exercise = {id: 2,
                            name: "One arm pull-up",
                            description: "pull-up using only one arm",
                            muscleGroup: "back & core",
                            exType: "calisthenics",
                            difficulty: 10};
  
  exercise3: exercise = {id: 3,
                        name: "Squat",
                        description: "Sit down motion but not quite",
                        muscleGroup: "legs & core",
                        exType: "compund",
                        difficulty: 3};

  _exercises = {1: this.exercise1,
                2: this.exercise2,
                3: this.exercise3};

  constructor() { }

  ngOnInit(): void {
  }

}
