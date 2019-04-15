import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivitiesComponent } from './activities/activities.component';
import { EditActivityComponent } from './edit-activity/edit-activity.component';

const routes: Routes = [
  { path: '', component: ActivitiesComponent },
  { path: 'edit', component: EditActivityComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
