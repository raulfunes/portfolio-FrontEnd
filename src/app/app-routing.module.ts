import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/layout/main/main.component';
import { LoginComponent } from './components/sections/login/login.component';
import { Pagina404Component } from './components/auxiliar/pagina404/pagina404.component';

const routes: Routes = [
  { path: 'inicio', component: MainComponent, data: { animation: 'HomePage' } },
  { path: 'login', component: LoginComponent, data: { animation: 'AboutPage' } },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '**', component: Pagina404Component, data: { animation: 'ErrorPage' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
