import { Injectable } from '@angular/core';
import { Livre } from './livre.model';

@Injectable({
  providedIn: 'root'
})
export class LivresService {

  private _ListeLivres:Livre[]=[];
  
  constructor() {}

  ajouterLivre(pLivre:Livre){
    this._ListeLivres.push(pLivre);
  }
  listerLivres(){
    return this._ListeLivres;
  }
  rechargerLivres(pListeLivres:Livre[]){
    this._ListeLivres = pListeLivres;
  }
  choisirLivre(pNumeroISBN:number){
    return this._ListeLivres.find(pLivre=>{return pLivre.numeroISBN == pNumeroISBN})!;
  }
  supprimerLivre(pLivre:Livre){
    const indiceNomSupprPerso = this._ListeLivres.findIndex(bouquin => {return bouquin.numeroISBN == pLivre.numeroISBN})
    this._ListeLivres.slice(indiceNomSupprPerso ,indiceNomSupprPerso+1)
  }
}

