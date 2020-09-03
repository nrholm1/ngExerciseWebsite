import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-set',
  templateUrl: './create-set.component.html',
  styleUrls: ['./create-set.component.scss']
})
export class CreateSetComponent implements OnInit {
  options: string[] = ["abc","cde","fgh"];
  myControl = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }

}
