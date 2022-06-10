import { Injectable } from '@angular/core';
import { Selector, State, StateToken, Store } from '@ngxs/store';

import { OrxAccountServiceNgXsModel } from './account-service.ngxs.model';

export const ORX_NGXS_ACCOUNT_SERVICE_STATE_TOKEN = new StateToken<OrxAccountServiceNgXsModel>('OrxAccountService');

@State({
  name: ORX_NGXS_ACCOUNT_SERVICE_STATE_TOKEN,
  defaults: {
    OData: null,
    Error: null,
  }
})
@Injectable()
export class OrxAccountServiceNgXsState {
  protected preloads: Array<string> = [];

  constructor(
    protected ngXsStore: Store,
  ) { }

  @Selector()
  static odata(state: OrxAccountServiceNgXsModel): any | null {
    return state.OData;
  }
}
