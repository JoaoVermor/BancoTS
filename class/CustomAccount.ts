import { DioAccount } from "./DioAccount";

export class CustomAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber); // Definindo o status como true na chamada do construtor pai
  }

  public customDeposit = (value: number): void => {
    if (value > 0 && this.validateStatus()) {
      const newValue = value + 10; // Acrescenta 10 ao valor do depósito
      super.deposit(newValue);
    } else {
      console.log("Invalid deposit amount or account is inactive.");
    }
  }
}
