import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDataComponent } from './pages/user-data/user-data.component';
import { UserLoginComponent } from './pages/user-login/user-login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: "",
    component: UserLoginComponent
  },
  {
    path: "datos",
    component: UserDataComponent
  },
  {
    path: "not-found",
    component: NotFoundComponent
  },
  {
    path: "**",
    pathMatch: "full",
    redirectTo: "not-found"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
