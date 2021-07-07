import { Component, Input, OnInit } from '@angular/core';
import { Livre } from '../livre.model';

@Component({
  selector: 'app-afficher-livre',
  templateUrl: './afficher-livre.component.html',
  styleUrls: ['./afficher-livre.component.scss']
})
export class AfficherLivreComponent implements OnInit {
  @Input()livreGenre="";
  @Input()livreTitre="";
  @Input()livreAuteur="";
  @Input()livreAnnee=0;
  @Input()livreNumeroISBN=0;
  @Input() bouquin?:Livre;

  constructor() { }

  ngOnInit(): void {
  }

}
