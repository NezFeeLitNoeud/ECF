import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { ProfilComponent } from './components/profil/profil.component';
import { LogoutComponent } from './components/logout/logout.component';

const routes: Routes = [
  {path: "registration", component: LoginComponent},
  {path: "connexion", component: ConnexionComponent},
  {path: "profil", component: ProfilComponent},
  {path: "logout", component: LogoutComponent},
  {path: '', redirectTo: 'connexion', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
