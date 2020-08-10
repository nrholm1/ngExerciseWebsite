import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExerciseComponent } from './_components/exercise/exercise.component';
import { SetComponent } from './_components/set/set.component';
import { SetListComponent } from './_components/set-list/set-list.component';
import { WorkoutComponent } from './_components/workout/workout.component';
import { ModelModule } from './_models/index';

@NgModule({
  declarations: [
    AppComponent,
    ExerciseComponent,
    SetComponent,
    SetListComponent,
    WorkoutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
