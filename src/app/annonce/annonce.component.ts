import { Component, OnInit, Input } from '@angular/core';
import { Annonce } from "../annonce";
import { ActivatedRoute } from '@angular/router';
import { AnnoncesService } from '../annonces.service';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {
  @Input() annonce: Annonce;
  error;
  id;
  constructor(
    private annonceService: AnnoncesService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id = params.get('annonceid');
      this.annonceService.getAnnonce(id).subscribe(
        annonce => (this.annonce = annonce),
        error => (this.error = error)
      );
    });
  }

  

}
