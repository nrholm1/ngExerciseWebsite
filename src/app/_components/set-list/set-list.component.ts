import { Component, OnInit, Input } from '@angular/core';
import { setList } from 'src/app/_models/setList';
import { SetListService } from 'src/app/_services/set-list.service';
import { set } from 'src/app/_models/set';
import { SetService } from 'src/app/_services/set.service';

@Component({
  selector: 'app-set-list',
  templateUrl: './set-list.component.html',
  styleUrls: ['./set-list.component.scss']
})
export class SetListComponent implements OnInit {
  @Input() workoutId: number = 1;

  isDataAvailable = false;

  _setLists: setList[];
  _sets: set[];

  constructor(private setListService: SetListService,
              private setService: SetService) { }

  ngOnInit(): void {
    this.getSetListsByWorkoutId().then(() => {
      this.getSetsByIds().then(() => this.isDataAvailable = true);
    });
    
  }

  ngDoCheck() { console.log("doing check");}

  async getSetLists() {
    this._setLists = await this.setListService.getSetLists();
  }

  async getSetListsByWorkoutId() {
    console.log("calling getSetListsByWorkoutId");
    this._setLists = await this.setListService.getSetListsByWorkoutId(this.workoutId);
  }

  async getSets() {
    this._sets = await this.setService.getSets();
    console.log(this._sets);
  }

  async getSetsByIds() {
    console.log("calling getSetsByIds");
    let ids: number[] = this._setLists.map(setList => setList.setId);
    this._sets = await this.setService.getSetsByIds(ids);
    setTimeout(()=>console.log(this._sets));
  }
}