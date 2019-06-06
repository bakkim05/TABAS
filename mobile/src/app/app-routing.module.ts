import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path : ''     ,     component : LogInComponent},
  {path : 'home' ,     component : HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
