import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { workout } from '../_models/workout';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  apiUrl: string = environment.api + "/workout";

  constructor(private http: HttpClient) { }

  async getWorkouts() {
    return await this.http.get<workout[]>(this.apiUrl).toPromise();
  }

  async getWorkoutById(id: number) {
    return await this.http.get<workout>(this.apiUrl + "/" + id).toPromise();
  }
}
