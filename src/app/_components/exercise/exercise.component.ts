import { Component, OnInit, Input } from '@angular/core';
import { exercise } from 'src/app/_models/exercise';
import { ExerciseService } from 'src/app/_services/exercise.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit {
  @Input() id: number;

  isDataAvailable = false;
  
  _exercise: exercise;
  exerciseList: exercise[];

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit(): void {
    this.getExercise().then(() => this.isDataAvailable = true);
  }

  async getExerciseList() {
    this.exerciseList = await this.exerciseService.getExercises();
    // console.log(this.exerciseList);
  }

  async getExercise() {
    this._exercise = await this.exerciseService.getExerciseById(this.id);
  }
}