import { CreateClientesComponent } from './create-clientes/create-clientes.component';
import { CreateBagCartsComponent } from './create-bag-carts/create-bag-carts.component';
import { CreateMaletasComponent } from './create-maletas/create-maletas.component';
import { ClientesComponent } from './clientes/clientes.component';
import { BagCartsComponent } from './bag-carts/bag-carts.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { MaletasComponent } from './maletas/maletas.component';
import { Page404Component } from './page404/page404.component';
import { EditMaletasComponent } from './edit-maletas/edit-maletas.component';
import { EditBagCartsComponent } from './edit-bag-carts/edit-bag-carts.component';
import { EditClientesComponent } from './edit-clientes/edit-clientes.component';

const routes: Routes = [
  {path : ''                      , component : LogInComponent},
  {path : 'register'              , component : RegisterComponent},
  {path : 'home'                  , component : HomeComponent},
  {path : 'maletas'               , component : MaletasComponent},
  {path : 'bagCarts'              , component : BagCartsComponent},
  {path : 'clientes'              , component : ClientesComponent},
  {path : 'editMaletas'           , component : EditMaletasComponent},
  {path : 'editBagCarts'          , component : EditBagCartsComponent},
  {path : 'editClientes'          , component : EditClientesComponent},
  {path : 'createMaletas'         , component : CreateMaletasComponent},
  {path : 'createBagCarts'        , component : CreateBagCartsComponent},
  {path : 'createClientes'        , component : CreateClientesComponent},
  {path : '**'                    , component : Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
