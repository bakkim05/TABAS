import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {MatButtonModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogInComponent } from './log-in/log-in.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { NavComponent } from './nav/nav.component';
import { MaletasComponent } from './maletas/maletas.component';
import { BagCartsComponent } from './bag-carts/bag-carts.component';
import { ClientesComponent } from './clientes/clientes.component';
import { Page404Component } from './page404/page404.component';
import { CreateMaletasComponent } from './create-maletas/create-maletas.component';
import { CreateBagCartsComponent } from './create-bag-carts/create-bag-carts.component';
import { CreateClientesComponent } from './create-clientes/create-clientes.component';
import { EditMaletasComponent } from './edit-maletas/edit-maletas.component';
import { EditBagCartsComponent } from './edit-bag-carts/edit-bag-carts.component';
import { EditClientesComponent } from './edit-clientes/edit-clientes.component';
import { CommsService } from './comms.service';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    HomeComponent,
    RegisterComponent,
    NavComponent,
    MaletasComponent,
    BagCartsComponent,
    ClientesComponent,
    Page404Component,
    CreateMaletasComponent,
    CreateBagCartsComponent,
    CreateClientesComponent,
    EditMaletasComponent,
    EditBagCartsComponent,
    EditClientesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatTableModule,
    MatInputModule,
    MatDividerModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatTableModule,
    MatInputModule,
    MatDividerModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
  ],
  providers: [CommsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
