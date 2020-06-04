import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { LenguajesComponent } from './componentes/lenguajes/lenguajes.component';
import { AppRutasModule } from './app-rutas.module';
import { DetallesComponent } from './componentes/detalles/detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarComponent,
    LenguajesComponent,
    DetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRutasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
