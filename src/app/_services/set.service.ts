import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { set } from '../_models/set';

@Injectable({
  providedIn: 'root'
})
export class SetService {
  apiUrl: string = environment.api + "/set";

  constructor(private http: HttpClient) { }

  async getSets() {
    return await this.http.get<set[]>(this.apiUrl).toPromise();
  }

  async getSetById(id: number) {
    return await this.http.get<set>(this.apiUrl + "/" + id).toPromise();
  }
}
