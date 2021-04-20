import { Injectable } from '@angular/core';
import { Agencies } from 'src/app/shared/models/agencies.model';
import agencies from '../../../../data.json';


@Injectable({
    providedIn: 'root'
})
export class AgencyService {
    private agencies = agencies;

    public getAgencies = (): Agencies => this.agencies;
}
