import { Component, OnInit } from '@angular/core';
import { workout } from 'src/app/_models/workout';
import { WorkoutService } from 'src/app/_services/workout.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit {
  isDataAvailable = false;
  routeSub: Subscription;

  setListIndices: number[];
  
  _workout: workout; 
  
  workoutId: number;

  constructor(private workoutService: WorkoutService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.setWorkoutId()
      .then(() => this.isDataAvailable = true);
    this.getWorkoutById(this.workoutId);
  }

  async setWorkoutId() {
    this.routeSub = this.route.params.subscribe(x => this.workoutId = x['id']);
  }

  async getWorkoutById(id: number) {
    this._workout = await this.workoutService.getWorkoutById(id);
  }

  retrieveSetListIds(setListIds: number[]) {
    this.setListIndices = setListIds;
  }
}