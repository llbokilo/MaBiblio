export class Livre {
    genre:string;
    titre:string;
    auteur:string;
    annee:number;
    numeroISBN:number;

    constructor(pGenre:string, pTitre:string, pAuteur:string, pAnnee:number, pNumeroISBN:number){
        this.genre = pGenre;
        this.titre = pTitre;
        this.auteur = pAuteur;
        this.annee = pAnnee;
        this.numeroISBN = pNumeroISBN;
    }
}
