import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoverLinkDirective } from './directives/hover-link.directive';
import { WrongDataDirective } from './directives/wrong-data.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserDataComponent } from './pages/user-data/user-data.component';
import { UserLoginComponent } from './pages/user-login/user-login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HoverLinkDirective,
    WrongDataDirective,
    HeaderComponent,
    FooterComponent,
    UserDataComponent,
    UserLoginComponent,
    NotFoundComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
