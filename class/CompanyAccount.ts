import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber); // Definindo o status como true na chamada do construtor pai
  }

  getLoan = (value: number): void => {
    if (this.validateStatus() && value > 0) {
      this.deposit(value);
      console.log(`Emprestimo de ${value} aceito. Novo saldo: ${this.balance}`);
    } else {
      console.log("Emprestimo impossibilitado. Conta inativa ou valor invalido.");
    }
  }
}
