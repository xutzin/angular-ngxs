import { Injectable } from '@angular/core';
import { Action, Select, Selector, State, StateContext, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { OrxUserNgXsActions } from './user.ngxs.actions';

import { OrxUserNgXsModel } from './user.ngxs.model';

@State<OrxUserNgXsModel>({
  name: 'OrxUser',
  defaults: {
    OData: null,
    Session: null,
    Logs: [],
  }
})
@Injectable()
export class OrxUserNgXsState {
  @Select(OrxUserNgXsState.logs) logs$!: Observable<Array<string>>;
  @Select(OrxUserNgXsState.token) token$!: Observable<any>;

  constructor(
    private ngXsStore: Store,
  ) { }

  /* Public */

  @Selector()
  static logs(state: OrxUserNgXsModel): Array<string> {
    return state.Logs;
  }

  @Selector()
  static token(state: OrxUserNgXsModel): string | null {
    return state.Session.Header.Token;
  }

  @Action(OrxUserNgXsActions.Sync)
  sync(ctx: StateContext<OrxUserNgXsModel>): any {
    ctx.patchState({
      Logs: [
        ...this.ngXsStore.selectSnapshot(OrxUserNgXsState.logs),
        `OrxUserNgXsState: OrxUserNgXsActions.Sync`
      ],
    });
  }
}
