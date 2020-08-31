import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkoutComponent } from './_components/workout/workout.component';
import { DashboardComponent } from './_components/dashboard/dashboard.component';
import { WorkoutListComponent } from './_components/workout-list/workout-list.component';
import { CreateWorkoutComponent } from './_components/create-workout/create-workout.component';
import { CreateExerciseComponent } from './_components/create-exercise/create-exercise.component';



const routes: Routes = [
    { path: '', component: DashboardComponent},
    { path: 'workout/id/:id', component: WorkoutComponent},
    { path: 'workouts', component: WorkoutListComponent},
    { path: 'workout/create', component: CreateWorkoutComponent},
    { path: 'exercise/add', component: CreateExerciseComponent},
    

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }