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

    this.usersData$ = {
      data: [
        {
          id: 1,
          firstName: 'John',
          lastName: 'Doe',
          email: 'john.doe@innovi.co.il',
          age: 34,
        },
        {
          id: 2,
          firstName: 'Vagi',
          lastName: 'Adetokunbo',
          email: 'Vagi.Adetokunbo@innovi.co.il',
          age: 25,
        },
        {
          id: 3,
          firstName: 'Brendan',
          lastName: 'Josip',
          email: 'Brendan.Josip@innovi.co.il',
          age: 42,
        },
        {
          id: 4,
          firstName: 'Fortunatus',
          lastName: 'Zaki',
          email: 'Fortunatus.Zaki@innovi.co.il',
          age: 29,
        },
        {
          id: 5,
          firstName: 'Nye',
          lastName: 'Jia',
          email: 'Nye.Jia@innovi.co.il',
          age: 30,
        },
      ],
    };

    console.log(this.users$);
  }

  onCheckboxChange(e) {
    if (e.target.checked) {
      this.checkboxValue = true;
    } else {
      this.checkboxValue = false;
    }
  }
}
