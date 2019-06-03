import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { MaletasComponent } from './maletas/maletas.component';
import { ClientesComponent } from './clientes/clientes.component';
import { RegisterComponent } from './register/register.component';
import { Page404Component } from './page404/page404.component';
import { CreateMaletasComponent } from './create-maletas/create-maletas.component';
import { CreateBagCartsComponent } from './create-bag-carts/create-bag-carts.component';
import { CreateClientesComponent } from './create-clientes/create-clientes.component';
import { BagCartsComponent } from './bag-carts/bag-carts.component';
import { EditMaletasComponent } from './edit-maletas/edit-maletas.component';
import { EditBagCartsComponent } from './edit-bag-carts/edit-bag-carts.component';
import { EditClientesComponent } from './edit-clientes/edit-clientes.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    MaletasComponent,
    ClientesComponent,
    RegisterComponent,
    Page404Component,
    CreateMaletasComponent,
    CreateBagCartsComponent,
    CreateClientesComponent,
    BagCartsComponent,
    EditMaletasComponent,
    EditBagCartsComponent,
    EditClientesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
