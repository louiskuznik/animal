import Mammifere from "./abstract/Mammifere";
import Terrestre from "./../interface/Terrestre";

export default class Chat extends Mammifere implements Terrestre {

    miauler(): string{
        return `Meow`;
    }

    respirerHorDeLeau(): string{
        return `Je marche hors de l'eau`;
    }

    marcher(): string{
        return `Je marche`;
    }
}