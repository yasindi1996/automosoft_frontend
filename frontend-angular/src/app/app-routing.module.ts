import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/Auth/login/login.component';
import { UserlandingComponent } from './components/userlanding/userlanding.component';
import { RegisterUserComponent } from './components/Admin/register-user/register-user.component';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/main/home/home.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:"landing",component:UserlandingComponent},
  {path:"registerUser",component:RegisterUserComponent},

  {
    path: "", component:MainComponent,
    children: [
      {path:'home', component:HomeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
