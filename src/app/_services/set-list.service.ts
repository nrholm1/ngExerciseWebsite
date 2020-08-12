import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { setList } from '../_models/setList';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SetListService {
  apiUrl: string = environment.api + "/setlist";

  constructor(private http: HttpClient) { }

  async getSetLists() {
    return await this.http.get<setList[]>(this.apiUrl).toPromise();
  }

  async getSetListById(id: number) {
    return await this.http.get<setList>(this.apiUrl + "/" + id).toPromise();
  }
}
