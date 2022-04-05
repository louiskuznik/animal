import Mammifere from "./abstract/Mammifere";
import Aquatique from "../interface/Aquatique";

class Dauphin extends Mammifere implements Aquatique {
    protected _nom!: string;
    protected _poids!: number;
    protected _dateNaissance!: Date;
    protected _age!: number;


    constructor(_nom: string, _poids: number, _dateNaissance: Date) {
        super(_nom, _poids, _dateNaissance)
        this._nom = _nom;
        this._dateNaissance = _dateNaissance;
        this._poids = _poids;
    }

    retenirRespiration(): void{
    }

    respirerSousLeau(): void{
        this.retenirRespiration();
    }

    cliquetter(): string{
        return `clique?`
    }
}