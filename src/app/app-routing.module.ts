import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NaviComponent } from './components/navi/navi.component';
import { PlanComponent } from './components/plan/plan.component';
import { ServiceComponent } from './components/service/service.component';

const routes: Routes = [
  {path : "", component:HomeComponent},
  {path : "home", component:HomeComponent},
  {path : "about", component:AboutComponent},
  {path : "service", component:ServiceComponent},
  {path : "plan", component:PlanComponent},
  {path : "contact", component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
