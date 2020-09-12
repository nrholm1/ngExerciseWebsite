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
  timeout: any;
  
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
        if(e.keyCode == 13 
            && this.exercisePicker.value != ""
            && this.exerciseOptions.length == 1) {
          this.selectExerciseEvent(+this.exerciseOptions[0].id);
        }
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
    // disable default=resend query when pressing arrow keys for navigating dropdown
    if (this.arrowKeyPressed(event.keyCode))
      return;
    
    const inputQuery = this.exercisePicker.value;
    
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => this.searchExerciseByName(inputQuery), 100);
  }

  async searchExerciseByName(query: string) {
    let queryResult: exercise[]; 

    if (query != "")
      queryResult = await this.exerciseService.searchExercisesByName(query);

    this.exerciseOptions = queryResult;
  }

  selectExerciseEvent(exerciseId: number) {
    this.exerciseIdSelection.emit(exerciseId);
    setTimeout(() => this.clearAutocompleteField(),50);
  } 

  clearAutocompleteField() {
    this.exercisePicker.setValue("");
  }
}

// get id from currently selected/highlighted exercise and emit it to create-setlist-component
