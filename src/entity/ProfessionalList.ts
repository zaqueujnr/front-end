import Professional from "./Professional";

export default class ProfessionalList {
  public professionals: Professional[]
  
  constructor() {
    this.professionals = []
  }
  addProfessional(professional: Professional) {
    const professionalData = new Professional(professional.professionalId,professional.name,
      professional.email, professional.position, professional.salary
    )
    this.professionals.push(professionalData)
  }
  addProfessionals(professionals: Professional[]) {
    professionals.forEach(professional => this.addProfessional(professional))
  }
  setProfessionals(professionals: Professional[]) {
    this.removeProfessionals()
    this.addProfessionals(professionals)
  }
  removeProfessionals() {
    this.professionals = []
  }
  totalProfessionals() {
    return this.professionals.length
  }
}