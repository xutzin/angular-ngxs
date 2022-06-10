import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { OrxAccountServiceNgXsState } from '../../ngxs/account-service/account-service.ngxs.state';
import { ShaBaseDialog } from '../base/base.dialog';

@Component({
  selector: 'sha-main',
  templateUrl: './main.dialog.html',
  styleUrls: ['./main.dialog.scss'],
})
export class ShaMainComponent extends ShaBaseDialog implements OnInit {
  @Select(OrxAccountServiceNgXsState.odata) account$!: Observable<any>;

  constructor() {
    super();
  }

  /* Public */

  ngOnInit(): void {
  }

  /* Protected */

  /* Private */
}
