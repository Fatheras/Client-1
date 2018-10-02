import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IUser } from '../users';




@Injectable()
export class UserService {

    private url = 'http://localhost:8080/api/v1/user';
    constructor(private http: HttpClient) {

    }

    public getUsers() {
        return this.http.get<IUser[]>(this.url);
    }

    public getUser(id: number) {
        return this.http.get<IUser>(`${this.url}/${id}`);
    }

    public deleteUser(id: number) {
        return this.http.delete<IUser>(`${this.url}/${id}`);
    }

    public putUser(id: number, model: IUser) {
        return this.http.put<IUser>(`${this.url}/${id}`, model);
    }

    public postUser(model: IUser) {
        return this.http.post<IUser>(this.url, model);
    }
}
