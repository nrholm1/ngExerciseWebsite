import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { workout } from 'src/app/_models/workout';
import { WorkoutService } from 'src/app/_services/workout.service';
import { SetListService } from 'src/app/_services/set-list.service';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit {
  setListIndices: number[];
  
  _workout: workout = {id: 1,
                      setListId: 1,                      
                      title: "Super calisthenics and strength",
                      description: "Funny workout haha",
                      avgDifficulty: 9,
                      rating: 5,
                      ratingCount: 10,
                      dateCreated: new Date};
  
  workoutId: number = 1;

  constructor(private workoutService: WorkoutService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.setWorkoutId();
    this.getWorkoutById(this.workoutId);
    setTimeout(() => console.log("setListIds = " + this.setListIndices), 300);
  }

  setWorkoutId(): void {
    // this.workoutId = this.route.queryParams['id'];
    this.workoutId = 1;
  }

  async getWorkoutById(id: number) {
    this._workout = await this.workoutService.getWorkoutById(id);
  }

  retrieveSetListIds(setListIds: number[]) {
    this.setListIndices = setListIds;
  }
}