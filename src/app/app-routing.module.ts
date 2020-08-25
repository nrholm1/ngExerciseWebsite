import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkoutComponent } from './_components/workout/workout.component';
import { DashboardComponent } from './_components/dashboard/dashboard.component';
import { WorkoutListComponent } from './_components/workout-list/workout-list.component';



const routes: Routes = [
    { path: '', component: DashboardComponent},
    { path: 'workout/id/:id', component: WorkoutComponent},
    { path: 'workouts', component: WorkoutListComponent},
    

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }