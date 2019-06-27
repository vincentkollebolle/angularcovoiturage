import { Component, OnInit } from '@angular/core';
import { Annonce } from '../annonce';
import { AnnoncesService } from '../annonces.service';

@Component({
  selector: 'app-annonces-list',
  templateUrl: './annonces-list.component.html',
  styleUrls: ['./annonces-list.component.css']
})
export class AnnoncesListComponent implements OnInit {

  constructor(private monService: AnnoncesService) { }
  annonces: Annonce[]; 
  error;
  filter: string = "all";

  ngOnInit() {
    this.monService.getAnnonces().subscribe(
      annonces => (this.annonces = annonces),
      error => (this.error = error)
    );
  }

  activRecherche() {this.filter = "cherche"; }
  activePropose() { this.filter = "propose";}
  activeAll() { this.filter = "all";}

  checkRecherche(annonce: Annonce) {
    return annonce.chercheoupropose == "cherche";
  }
  sortRecherche() {


    this.annonces = this.annonces.filter(this.checkRecherche);
  }

 
}
