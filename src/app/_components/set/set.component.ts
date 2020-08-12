import { Component, OnInit, Input } from '@angular/core';

import { set } from '../../_models/set';
import { SetService } from 'src/app/_services/set.service';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.scss']
})
export class SetComponent implements OnInit {
  @Input() id: number;

  sets: set[];

  constructor(private setService: SetService) { }

  ngOnInit(): void {
    this.getSets();
  }

  async getSets() {
    this.sets = await this.setService.getSets();
  }
}
