import { Component, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SetService } from 'src/app/_services/set.service';
import { ExerciseService } from 'src/app/_services/exercise.service';
import { exercise } from 'src/app/_models/exercise';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-set',
  templateUrl: './create-set.component.html',
  styleUrls: ['./create-set.component.scss']
})
export class CreateSetComponent implements OnInit {
  exerciseOptions: exercise[];
  exercisePicker = new FormControl();
  query: string;
  
  @Output() exerciseIdSelection = new EventEmitter<number>();

  constructor(private setService: SetService,
              private exerciseService: ExerciseService) { }

  ngOnInit(this): void {
    this.addSelectExerciseEventListener();
    this.disableEnterKeyReloadTrigger();
  }

  addSelectExerciseEventListener(): void {
    window.addEventListener('keydown', (e) =>
      {
        if(e.keyCode == 13 && this.exercisePicker.value != "") {
          this.selectExerciseEvent(+this.exerciseOptions[0].id);
          this.exercisePicker.setValue("");
        }
        console.log(this.exerciseOptions);
      },true);
  }

  disableEnterKeyReloadTrigger(): void {
    window.addEventListener('keydown',function(e){
      if(e.keyCode==13) {
          e.preventDefault();
          return false; 
        }
      },true);
  }

  arrowKeyPressed(keyCode: number) {
    if (keyCode == 40 || 
        keyCode == 39 ||
        keyCode == 38 ||
        keyCode == 37)
      return true;
    else return false;
  } 

  keyPress(event: KeyboardEvent) {
    // console.log(`event triggered | ${event.keyCode}`);
    // console.log(this.exercisePicker.value);

    // disable default=resend query when pressing arrow keys for navigating dropdown
    if (this.arrowKeyPressed(event.keyCode))
      return;
    
    // if (this.exercisePicker.)

    const inputQuery = this.exercisePicker.value;

    setTimeout(() => this.searchExerciseByName(inputQuery), 300);
  }

  async searchExerciseByName(query: string) {
    let queryResult  = await this.exerciseService.searchExercisesByName(query);

    this.exerciseOptions = queryResult;
    console.log(this.exerciseOptions);
  }

  selectExerciseEvent(exerciseId: number) {
    console.log(`emit <${exerciseId}>`);
    this.exerciseIdSelection.emit(exerciseId);
  } 
}

// get id from currently selected/highlighted exercise and emit it to create-setlist-component
