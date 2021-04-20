import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { AgencyService } from 'src/app/agency/services/agency.service';
import { Agencies } from 'src/app/shared/models/agencies.model';
import { GetAgencyResult, PopulateAgencyResult } from '../actions/agency.action';

export class AgencyStateModel {
    Agencies: Agencies;
    Loading: boolean;
}

@State<AgencyStateModel>({
    name: 'agencies',
    defaults: {
        Agencies: null,
        Loading: false
    }
})

@Injectable()
export class AgencyState {
    constructor(private agencyService: AgencyService, private store: Store) {
    }

    @Selector()
    static getUnits(state: AgencyStateModel): Agencies {
        return state.Agencies;
    }

    @Action(PopulateAgencyResult)
    PopulateAgencyResult({ getState, patchState }: StateContext<AgencyStateModel>,
                         { payload }: PopulateAgencyResult): void {
        const state = getState();
        patchState({
            ...state,
            Agencies: { ...payload },
            Loading: false,
        });
    }

    @Action(GetAgencyResult)
    GetAgencyResult({ getState, setState }: StateContext<AgencyStateModel>): void {
        const state = getState();
        setState({
            ...state,
            Loading: true,
        });
        this.store.dispatch(new PopulateAgencyResult(this.agencyService.getAgencies()));
    }
}
