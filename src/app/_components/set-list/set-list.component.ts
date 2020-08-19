import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { setList } from 'src/app/_models/setList';
import { SetListService } from 'src/app/_services/set-list.service';

@Component({
  selector: 'app-set-list',
  templateUrl: './set-list.component.html',
  styleUrls: ['./set-list.component.scss']
})
export class SetListComponent implements OnInit {
  @Input() workoutId: number = 1;
  @Input() id: number;

  @Output() setListIndices = new EventEmitter<number[]>();

  _setLists: setList[];

  constructor(private setListService: SetListService) { }

  ngOnInit(): void {
    this.getSetListsByWorkoutId(this.workoutId);
  }

  async getSetLists() {
    this._setLists = await this.setListService.getSetLists();
  }

  async getSetListsByWorkoutId(id: number) {
    console.log("calling this");
    this._setLists = await this.setListService.getSetListsByWorkoutId(id);
    this.onSetListRetrieval(this._setLists);
  }

  onSetListRetrieval(setListIndices: setList[]) {
    console.log("calling event");
    this.setListIndices.emit(setListIndices.map(setList => setList.id));
  }
}