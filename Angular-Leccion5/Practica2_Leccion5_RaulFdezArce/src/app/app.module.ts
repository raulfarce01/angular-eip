import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormComponent } from './pages/form/form.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LinkHoverDirective } from './directives/link-hover.directive';
import { EmptyInputDirective } from './directives/empty-input.directive';
import { UserDataComponent } from './pages/user-data/user-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    NotFoundComponent,
    LinkHoverDirective,
    EmptyInputDirective,
    UserDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
