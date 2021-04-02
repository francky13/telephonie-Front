import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoriqueComponent } from './historique/historique.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  {path: 'Login', component : LoginComponent},
  {path: 'Historique', component : HistoriqueComponent},
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
