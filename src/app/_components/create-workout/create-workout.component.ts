import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { WorkoutService } from 'src/app/_services/workout.service';

@Component({
  selector: 'app-create-workout',
  templateUrl: './create-workout.component.html',
  styleUrls: ['./create-workout.component.scss']
})
export class CreateWorkoutComponent implements OnInit {
  form: FormGroup;
  id: string;
  createNewMode: boolean;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private workoutService: WorkoutService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
  
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid)
      return;
    
    let form = this.form.value;
    // form['difficulty'] = +form['difficulty'];

    this.loading = true;

    console.log("onSubmit()");
    console.log(this.form.value);

    // TODO: check if add mode
  }
}
