import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Agencies } from 'src/app/shared/models/agencies.model';
import { GetAgencyResult } from 'src/app/store/agency/actions/agency.action';

@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.component.html',
  styleUrls: ['./agencies.component.css']
})
export class AgenciesComponent implements OnInit {

  agencies: Agencies;
  constructor(private store: Store) {
    this.store.select(state => state.agencies.Agencies).subscribe((r: Agencies) => {
      this.agencies = r;
    });
  }

  ngOnInit(): void {
    this.store.dispatch(new GetAgencyResult());
  }

}
