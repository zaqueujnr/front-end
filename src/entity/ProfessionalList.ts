import Professional from './Professional';

export default class ProfessionalList {
  public professionals: Professional[];

  public constructor() {
    this.professionals = [];
  }
  public addProfessional(professional: Professional): void {
    const professionalData = new Professional(
      professional.professionalId,
      professional.name,
      professional.email,
      professional.position,
      professional.salary,
    );
    this.professionals.push(professionalData);
  }
  public addProfessionals(professionals: Professional[]): void {
    professionals.forEach((professional) => this.addProfessional(professional));
  }
  public setProfessionals(professionals: Professional[]): void {
    this.removeProfessionals();
    this.addProfessionals(professionals);
  }
  public removeProfessionals(): void {
    this.professionals = [];
  }
  public totalProfessionals(): number {
    return this.professionals.length;
  }
}
