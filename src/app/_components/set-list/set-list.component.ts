import { Component, OnInit, Input } from '@angular/core';
import { setList } from 'src/app/_models/setList';

@Component({
  selector: 'app-set-list',
  templateUrl: './set-list.component.html',
  styleUrls: ['./set-list.component.scss']
})
export class SetListComponent implements OnInit {
  @Input() id: number = 1;

  setList1: setList = {id: 1,
                       workoutId: 1,
                       setId: 1,
                       orderNo: 1,
                       dateAdded: new Date};
  setList2: setList = {id: 2,
                      workoutId: 1,
                      setId: 2,
                      orderNo: 2,
                      dateAdded: new Date};
  setList3: setList = {id: 3,
                      workoutId: 1,
                      setId: 3,
                      orderNo: 3,
                      dateAdded: new Date};
  
  _setLists = {1: this.setList1,
               2: this.setList2,
               3: this.setList3};

  constructor() { }

  ngOnInit(): void {
  }

}


// id: number,
//     workoutId: number,
//     setId: number,
//     orderNo: number,
//     dateAdded: Date