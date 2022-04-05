import MilieuNaturel from "./MilieuNaturel";

export default interface Aquatique extends MilieuNaturel {
    respirerHorDeLeau(): void;

    marcher(): void;
  }