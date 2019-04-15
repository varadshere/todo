import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { ActivitiesComponent } from './activities/activities.component';
import { ActivityComponent } from './activity/activity.component';
import { MatCardModule, MatButtonModule, MatIconModule, MatDividerModule } from '@angular/material';
import { EditActivityComponent } from './edit-activity/edit-activity.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ActivitiesComponent, ActivityComponent, EditActivityComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    FormsModule
  ]
})
export class TodoModule { }
