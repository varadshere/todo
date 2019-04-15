import { NgModule } from '@angular/core';
import { MatToolbarModule, MatFormFieldModule, MatSidenavModule, MatIconModule, MatDividerModule } from '@angular/material';
import { AppNavComponent } from './app-nav/app-nav.component';
import { AppRoutingModule } from '../app-routing.module';
@NgModule({
  declarations: [AppNavComponent],
  imports: [
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatIconModule,
    MatDividerModule
  ],
  exports: [AppNavComponent]
})
export class AppCommonModule { }
