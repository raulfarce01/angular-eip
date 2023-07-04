import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './pages/form/form.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UserDataComponent } from './pages/user-data/user-data.component';

const routes: Routes = [
  {
    path: "",
    component: FormComponent
  },
  {
    path: "user-data",
    component: UserDataComponent
  },
  {
    path: "login",
    component: FormComponent
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
