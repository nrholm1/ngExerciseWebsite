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
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './shared/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    ExerciseComponent,
    SetComponent,
    SetListComponent,
    WorkoutComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
