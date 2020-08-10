import { Component, OnInit, Input } from '@angular/core';

import { set } from '../../_models/set';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.scss']
})
export class SetComponent implements OnInit {
  @Input() id: number;

  set1: set = {id: 1,
                  exerciseId: 1,
                  setCount: 10,
                  repCount: 5};
  set2: set = {id: 2,
                  exerciseId: 2,
                  setCount: 3,
                  repCount: 3};
                  
  set3: set = {id: 3,
              exerciseId: 3,
              setCount: 5,
              repCount: 10};

  _sets = {1: this.set1,
           2: this.set2,
           3: this.set3};

  constructor() { }

  ngOnInit(): void {
  }

}
