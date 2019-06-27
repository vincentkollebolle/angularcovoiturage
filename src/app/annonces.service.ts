import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Annonce } from './annonce';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnnoncesService {
  configUrl = "https://www.covoiturage-simple.com/api/epicerie/annonces";

  constructor(private http: HttpClient) { }

  getAnnonces(): Observable<Annonce[]>  {
    return this.http.get<Annonce[]>(environment.apiUrl);
    
  }

  getAnnonce(id): Observable<Annonce> {
    let url = 'https://www.covoiturage-simple.com/api/demo/annonces/'+id;
    console.log('ajaxcall on :'+url);
    return this.http.get<Annonce>(url);
  }
}
