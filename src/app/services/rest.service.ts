import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { TodoResponse } from '../model/response.interface';
import { InsertTodo, UpdateTodo } from '../model/todo.interface.model';
import { AppIdService } from './app-id.service';
@Injectable({
    providedIn: 'root'
})
export class RestService {
    private appId: string;
    constructor(private http: HttpClient, private appIdService: AppIdService) {
        this.appId = appIdService.appId;
    }

    getTodos(): Observable<TodoResponse> {
        const params = new HttpParams().set('appId', this.appId);
        return this.http.get<TodoResponse>(environment.getTodos, { params });
    }
    insertTodo(body: InsertTodo): Observable<TodoResponse> {
        return this.http.post<TodoResponse>(environment.insertTodo, { body });
    }
    updateTodo(body: UpdateTodo): Observable<TodoResponse> {
        return this.http.post<TodoResponse>(environment.updateTodo, { body });
    }
}