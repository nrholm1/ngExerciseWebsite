import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SetService } from 'src/app/_services/set.service';
import { ExerciseService } from 'src/app/_services/exercise.service';
import { exercise } from 'src/app/_models/exercise';

@Component({
  selector: 'app-create-set',
  templateUrl: './create-set.component.html',
  styleUrls: ['./create-set.component.scss']
})
export class CreateSetComponent implements OnInit {
  exerciseOptions: exercise[];
  exercisePicker = new FormControl();
  query: string;
  
  constructor(private setService: SetService,
              private exerciseService: ExerciseService) { }

  ngOnInit(this): void {
    this.disableEnterKeyReloadTrigger();
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
    console.log(`event triggered | ${event.keyCode}`);
    console.log(this.exercisePicker.value);

    // disable default=resend query when pressing arrow keys for navigating dropdown
    if (this.arrowKeyPressed(event.keyCode))
      return;
    
    // if (this.exercisePicker.)

    const inputQuery = this.exercisePicker.value;

    setTimeout(() => this.searchExerciseByName(inputQuery), 300);
  }

  onSubmit() {
    console.log("Submit triggered");
  }

  async searchExerciseByName(query: string) {
    let queryResult  = await this.exerciseService.searchExercisesByName(query);

    this.exerciseOptions = queryResult;
    console.log(this.exerciseOptions);
  }

}
