import Animal from "../../interface/Animal";

export default class Mammifere implements Animal {
    _nom: string;
    _poids: number;
    _dateNaissance: Date;
            
    constructor(_nom: string, _poids: number, _dateNaissance: string){
        this._nom = _nom;
        this._dateNaissance = new Date (_dateNaissance);
        this._poids = _poids;
    }

    public get age() {
        const today = new Date();
        const age = today.getFullYear() - this._dateNaissance.getFullYear();
        return age;
    }

    public get dateNaissance(): string {
        return this._dateNaissance.toLocaleDateString();
    }

    display(): void {
        console.log(`Je suis un mammifère, je m'appelle ${this._nom}, j'ai ${this.age} et je fait ${this._poids}`);
    }
}