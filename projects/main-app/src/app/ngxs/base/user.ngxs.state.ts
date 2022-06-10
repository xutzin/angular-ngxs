import { Injectable } from '@angular/core';
import { Select, Selector, State } from '@ngxs/store';
import { Observable } from 'rxjs';

import { OrxUserNgXsModel } from './user.ngxs.model';

@State<OrxUserNgXsModel>({
  name: 'OrxUser',
  defaults: {
    OData: null,
    Session: null,
  }
})
@Injectable()
export class OrxUserNgXsState {
  @Select(OrxUserNgXsState.token) token$!: Observable<any>;

  constructor() { }

  /* Public */

  @Selector()
  static token(state: OrxUserNgXsModel): string | null {
    return state.Session.Header.Token;
  }
}
