import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { set } from 'src/app/_models/set';
import { setNoId } from 'src/app/_models/intermediary/setNoId';
import { setList } from 'src/app/_models/setList';
import { setListNoId } from 'src/app/_models/intermediary/setListNoId';

import { SetService } from 'src/app/_services/set.service';
import { SetListService } from 'src/app/_services/set-list.service';
import { WorkoutService } from 'src/app/_services/workout.service';

@Component({
  selector: 'app-create-set-list',
  templateUrl: './create-set-list.component.html',
  styleUrls: ['./create-set-list.component.scss']
})
export class CreateSetListComponent implements OnInit {
  form: FormGroup;

  sets: setNoId[] = []; 
  setLists: setListNoId[] = []; // index in array == orderNo property of obj


  constructor(private setService: SetService,
              private setListService: SetListService,
              private workoutService: WorkoutService) { }

  ngOnInit(): void {
  }

  addSetList(newExerciseId: number) {
    let newSet: setNoId = {exerciseId: newExerciseId, 
                           repCount: 10, 
                           setCount: 3};

    this.sets.push(newSet);
    let newSetIndex = this.sets.length - 1;

    let newSetList: setListNoId = {setId: -1, // placeholder
                                   orderNo: newSetIndex,  // orderNo is used as intermediary link between sets and setlist
                                   dateAdded: new Date(Date.now())};

    this.setLists.push(newSetList);

    this.printWorkoutDataObjects();
  }

  printWorkoutDataObjects() {
    console.log(this.sets);
    console.log(this.setLists);
  }
}