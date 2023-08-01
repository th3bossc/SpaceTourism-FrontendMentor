import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { HomeComponent } from './home/home.component';
import { DestinationComponent } from './destination/destination.component';
import { CrewComponent } from './crew/crew.component';
import { TechComponent } from './tech/tech.component';

const routes: Routes = [
  {path : '', redirectTo : '/main/home', pathMatch : 'full'},
  {path : 'main', component : ContainerComponent, children : [
    {path : 'home', component : HomeComponent, data : { animation : 'home'}},
    {path : 'dest', component : DestinationComponent, data : { animation : 'dest'}},
    {path : 'crew', component : CrewComponent, data : { animation : 'crew'}},
    {path : 'tech', component : TechComponent, data : { animation : 'tech'}},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
