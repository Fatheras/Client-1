import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { IUser } from './user/users';




@Injectable()
export class HttpService {

    private url = 'http://localhost:8080/api/v1/user';
    constructor(private http: HttpClient) {

    }

    getUsers() {
        return this.http.get<IUser[]>(this.url);
    }

    getUser(id: number) {
        return this.http.get<IUser>(`${this.url}/${id}`);
    }

    deleteUser(id: number) {
        return this.http.delete<IUser>(`${this.url}/${id}`);
    }
}
