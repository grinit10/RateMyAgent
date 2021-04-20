import { Agencies} from 'src/app/shared/models/agencies.model';

export class PopulateAgencyResult {
    static readonly type = '[AgencyResult] Populate';

    constructor(public payload: Agencies) {
    }
}


export class GetAgencyResult {
    static readonly type = '[AgencyResult] Get';

    constructor() { }
}
