import { ChartsComponent } from './../charts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    component: ChartsComponent,
    data: {
      title: 'Charts Works'
    }
  },{
    path: 'subpage',
    pathMatch: 'full',
    component: ChartsComponent,
    data: {
      title: 'Subpage Tables Works'
    }
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule { }