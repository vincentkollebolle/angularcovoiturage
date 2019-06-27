import { Pipe, PipeTransform } from '@angular/core';
import { Annonce} from './annonce';
@Pipe({
  name: 'filterAnnonce'
})
export class FilterAnnoncePipe implements PipeTransform {

  transform(annonces: Annonce[], type: string): any {
      if(!annonces) return [];
      if(type == "all") { return annonces; }
      //return annonces.filter( annonce => annonce.chercheoupropose == "cherche");
      return annonces.filter(it => it.chercheoupropose == type);
   }
}
