import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from './shared/angular-material-module';

import { AppComponent } from './app.component';
import { ExerciseComponent } from './_components/exercise/exercise.component';
import { SetComponent } from './_components/set/set.component';
import { SetListComponent } from './_components/set-list/set-list.component';
import { WorkoutComponent } from './_components/workout/workout.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './_components/dashboard/dashboard.component';
import { WorkoutListComponent } from './_components/workout-list/workout-list.component';
import { CreateExerciseComponent } from './_components/create-exercise/create-exercise.component';
import { CreateWorkoutComponent } from './_components/create-workout/create-workout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateSetListComponent } from './_components/create-set-list/create-set-list.component';
import { CreateSetComponent } from './_components/create-set/create-set.component';


@NgModule({
  declarations: [
    AppComponent,
    ExerciseComponent,
    SetComponent,
    SetListComponent,
    WorkoutComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    WorkoutListComponent,
    CreateExerciseComponent,
    CreateWorkoutComponent,
    CreateSetListComponent,
    CreateSetComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
