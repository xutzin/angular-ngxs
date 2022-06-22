import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, timer } from 'rxjs';

import { OrxUserNgXsActions } from './ngxs/base/user.ngxs.actions';
import { MainUserNgXsState } from './ngxs/user/user.ngxs.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  @Select(MainUserNgXsState.logs) public ngXsLogs$!: Observable<Array<string>>;
  public logs: Array<string> = [];

  constructor(
    private ngXsStore: Store,
  ) {}

  ngOnInit(): void {
    this.ngXsLogs$.subscribe(logs => {
      console.log('AppComponent:', 'ngXsLogs$', logs);
    });
    timer(2000).subscribe(() => {
      this.ngXsStore.dispatch(OrxUserNgXsActions.Sync);
    });
  }
}
