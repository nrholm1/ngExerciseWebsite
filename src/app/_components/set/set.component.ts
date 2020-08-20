import { Component, OnInit, Input } from '@angular/core';

import { set } from '../../_models/set';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.scss']
})
export class SetComponent implements OnInit {
  @Input() _set: set;

  constructor() { }

  ngOnInit(): void {
  }
}

// rethink where the list of sets/setlists is made - right now a lot of calls to the server are made at bad times, and not a lot is cached