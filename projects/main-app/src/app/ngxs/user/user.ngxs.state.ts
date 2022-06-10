import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';

import { OrxUserNgXsState } from '../base/user.ngxs.state';
import { MainUserNgXsModel } from './user.ngxs.model';

@State<MainUserNgXsModel>({
  name: 'OrxUser',
  defaults: {
    OData: null,
    Session: null,
  }
})
@Injectable()
export class MainUserNgXsState extends OrxUserNgXsState {
}
