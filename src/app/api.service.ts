import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Naloga01UsersInterface } from './naloga01-users-interface';
import { Naloga01TasksInterface } from './naloga01-tasks-interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _usersURL = 'https://jsonplaceholder.typicode.com/users';
  private _tasksURL = 'https://jsonplaceholder.typicode.com/todos';

  constructor( private http: Http ) { 

  }

  getUsers(): Observable<Naloga01UsersInterface[]> {
    return this.http.get(this._usersURL)
      .pipe(map(res => res.json()));
  }

  getTasks(): Observable<Naloga01TasksInterface[]> {
    return this.http.get(this._tasksURL)
      .pipe(map(res => res.json()));
  }

}
