import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginformComponent } from './components/loginform/loginform.component';
import { SignupformComponent } from './components/signupform/signupform.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginformComponent,
  },
  {
    path: 'signup',
    component: SignupformComponent,
  },
  {
    path: 'home',
    component: HomepageComponent,
  }]

@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    SignupformComponent,
    NavigationComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
