import { Component, OnInit } from '@angular/core';
import { workout } from 'src/app/_models/workout';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit {
  _workout: workout = {id: 1,
                      setListId: 1,                      
                      title: "Super calisthenics and strength",
                      description: "Funny workout haha",
                      avgDifficulty: 9,
                      rating: 5,
                      ratingCount: 10,
                      dateCreated: new Date};

  setListIds: number[] = [1,2];

  constructor() { }

  ngOnInit(): void {
  }

}
