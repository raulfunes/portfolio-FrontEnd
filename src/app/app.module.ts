import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroSectionComponent } from './components/sections/hero-section/hero-section.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProyectosComponent } from './components/sections/proyectos/proyectos.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { AboutComponent } from './components/sections/about/about.component';
import { TimelineComponent } from './components/sections/timeline/timeline.component';
import { ObserveVisibilityDirective } from './directives/observe-visibility-directive.directive';
import { ExperienciaComponent } from './components/sections/experiencia/experiencia.component';
import { EstudiosComponent } from './components/sections/estudios/estudios.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/sections/login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MainComponent } from './components/layout/main/main.component';
import { Pagina404Component } from './components/auxiliar/pagina404/pagina404.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { ExperienciaFormComponent } from './components/form/experiencia-form/experiencia-form.component';
import { EstudioFormComponent } from './components/form/estudio-form/estudio-form.component';
import { ProyectoFormComponent } from './components/form/proyecto-form/proyecto-form.component';
import { TecnologiaFormComponent } from './components/form/tecnologia-form/tecnologia-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HabilidadesComponent } from './components/sections/habilidades/habilidades.component';
import { MatSelectModule } from '@angular/material/select';
import { LoadingComponent } from './components/auxiliar/loading/loading.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HeroSectionComponent,
    ProyectosComponent,
    FooterComponent,
    AboutComponent,
    TimelineComponent,
    ObserveVisibilityDirective,
    ExperienciaComponent,
    EstudiosComponent,
    LoginComponent,
    MainComponent,
    Pagina404Component,
    ExperienciaFormComponent,
    EstudioFormComponent,
    ProyectoFormComponent,
    TecnologiaFormComponent,
    HabilidadesComponent,
    LoadingComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatSelectModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
