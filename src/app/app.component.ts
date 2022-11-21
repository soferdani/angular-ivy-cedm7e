import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IUsers } from './info-box/users.model';
import { retrievedUsersList } from './store/users.actions';
import { selectUsers } from './store/users.selectors';
import { UsersService } from './users.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private fetch: UsersService, private store: Store) {}

  usersData$: any;

  users$ = this.store.select(selectUsers);

  checkboxValue: boolean = false;

  ngOnInit(): void {
    this.fetch
      .getUsersInfoFromApi()
      .subscribe((users: any) =>
        this.store.dispatch(retrievedUsersList({ users }))
      );
  }

  onCheckboxChange(e) {
    if (e.target.checked) {
      this.checkboxValue = true;
    } else {
      this.checkboxValue = false;
    }
  }
}
