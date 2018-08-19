import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Naloga01UsersInterface } from './naloga01-users-interface';
import { Naloga01TasksInterface } from './naloga01-tasks-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent implements OnInit {
  title = 'naloga01';
  _usersArray: Naloga01UsersInterface[];
  _tasksArray: Naloga01TasksInterface[];

  constructor( private apiService: ApiService ) {

  }

  getUsers(): void {
    this.apiService.getUsers()
      .subscribe(
          resultArray => this._usersArray = resultArray,
          error => console.log("Error : " + error)
      )
  }

  getTasks(): void {
    this.apiService.getTasks()
      .subscribe(
          resultArray => this._tasksArray = resultArray,
          error => console.log("Error : " + error)
      )
  }

  ngOnInit(): void {
    this.getUsers();
    this.getTasks();
  }
}
