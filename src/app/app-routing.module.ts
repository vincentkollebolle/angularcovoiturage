import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnnoncesListComponent } from './annonces-list/annonces-list.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { AjouterAnnonceComponent } from './ajouter-annonce/ajouter-annonce.component';
const routes: Routes = [
  { path: '', component: AnnoncesListComponent },
  { path: 'annonce/:annonceid', component: AnnonceComponent },
  { path: 'ajouter', component: AjouterAnnonceComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
