import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UsersService } from './users.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor() {}

  usersData$: any;

  checkboxValue: boolean = false;

  ngOnInit(): void {
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
  }

  onCheckboxChange(e) {
    if (e.target.checked) {
      this.checkboxValue = true;
    } else {
      this.checkboxValue = false;
    }
  }
}
