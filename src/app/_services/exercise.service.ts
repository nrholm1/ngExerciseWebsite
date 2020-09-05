import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { exercise } from '../_models/exercise';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  private apiUrl: string = environment.api + "/exercise";

  constructor(private http: HttpClient) { }

  async getExercises() {
    return await this.http.get<exercise[]>(this.apiUrl).toPromise();
  }

  async getExerciseById(id: number) {
    return await this.http.get<exercise>(this.apiUrl + "/" + id).toPromise();
  }

  async createExercise(_exercise: exercise) {
    return this.http.post(this.apiUrl, _exercise).toPromise();
  }

  async searchExercisesByName(query: string) {
    return this.http.get<exercise[]>(this.apiUrl + "/name=" + query).toPromise();
  }
}
