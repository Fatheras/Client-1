import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
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

    putUser(id: number, model: IUser) {
        return this.http.put<IUser>(`${this.url}/${id}`, model);
    }

    postUser(model: Object) {
        return this.http.post<Object>(this.url, model);
    }
}
