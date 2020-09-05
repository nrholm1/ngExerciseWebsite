import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExerciseService } from 'src/app/_services/exercise.service';

@Component({
  selector: 'app-create-exercise',
  templateUrl: './create-exercise.component.html',
  styleUrls: ['./create-exercise.component.scss']
})
export class CreateExerciseComponent implements OnInit {
  form: FormGroup;
  id: string;
  createNewMode: boolean;
  loading = false;
  submitted = false;

  difficultyLevel: number[] = [1,2,3,4,5,6,7,8,9,10];
  muscleGroups: string[] = [null, "Chest","Back","Legs","Shoulders","Triceps","Biceps",];
  exTypes: string[] = ["Compound", "Calisthenics", "Cardio", "Explosive", "Stretch"];

  constructor(
    private formBuilder: FormBuilder,
    private exerciseService: ExerciseService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      mainMuscleGroup: ['', Validators.required],
      secondaryMuscleGroup: [''],
      exType: ['', Validators.required],
      difficulty: ['', Validators.required], 
    });
  }
  
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid)
      return;
    
    let form = this.form.value;
    form['difficulty'] = +form['difficulty'];

    this.loading = true;

    console.log("onSubmit()");
    console.log(this.form.value);

    // TODO: check if add mode
    this.createExercise();
  }

  async createExercise() {
    return await this.exerciseService.createExercise(this.form.value);
  }
}
