import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { TodoResponse } from 'src/app/model/response.interface';
import { TodoEntity, InsertTodo, CreateEntity } from 'src/app/model/todo.interface.model';
import { AppIdService } from 'src/app/services/app-id.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {

  activities: TodoEntity[];
  constructor(
    private restService: RestService, 
    private appIdService: AppIdService,
    private router: Router
    ) { }

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.restService.getTodos().subscribe((data: TodoResponse) => {
      this.activities = data.msg;
    });
  }

  newTodo() {
    // const createEntity: CreateEntity = {
    //   appId: this.appIdService.appId,
    //   todo: 
    // };
    // const dataToSend: InsertTodo = {
    //   appId: this.appIdService.appId,
    //   create: 
    // };
    // this.restService.insertTodo(dataToSend)
    this.router.navigateByUrl('/todo/edit');
  }

}
