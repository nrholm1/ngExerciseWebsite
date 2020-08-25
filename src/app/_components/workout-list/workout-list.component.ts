import { Component, OnInit } from '@angular/core';
import { WorkoutService } from 'src/app/_services/workout.service';
import { workout } from 'src/app/_models/workout';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.scss']
})
export class WorkoutListComponent implements OnInit {
  _workouts: workout[];

  constructor(private workoutService: WorkoutService) { }

  ngOnInit(): void {
    this.getWorkoutList();
  }

  async getWorkoutList() {
    this._workouts = await this.workoutService.getWorkouts();
  }
}
