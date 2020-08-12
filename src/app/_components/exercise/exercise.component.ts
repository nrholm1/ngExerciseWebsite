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
  
  exerciseList: exercise[];

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit(): void {
    this.getExerciseList();
  }

  async getExerciseList() {
    this.exerciseList = await this.exerciseService.getExercises();
    console.log(this.exerciseList);
  }
}