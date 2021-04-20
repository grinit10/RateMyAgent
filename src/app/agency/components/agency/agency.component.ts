import { Component, Input, OnInit } from '@angular/core';
import { Agency, Item } from 'src/app/shared/models/agencies.model';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.css']
})
export class AgencyComponent implements OnInit {

  @Input()
  agency: Item;
  constructor() { }

  ngOnInit(): void {
  }

  getCelingValue = (val: number) => Math.ceil(val / 1000).toLocaleString();

  handleClick = () => alert('Button clicked');
}
