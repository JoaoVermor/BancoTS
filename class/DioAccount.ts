export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private readonly status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  public deposit = (value: number): void => {
    if (value > 0){
      if(this.validateStatus()){
        this.balance += value;
        console.log('Voce depositou')
    }
  }else{
    console.log("Valor invalido")
  }
  }

  public withdraw = (value: number): void => {
    if (this.status === true && this.balance >= value) {
      this.balance -= value;
      console.log(`Withdrawal of ${value} accepted. New balance: ${this.balance}`);
  } else if (this.status === false) {
      console.log("Account is inactive. Cannot make withdrawals.");
  } else if (this.balance < value) {
      console.log("Insufficient balance for withdrawal.");
  } else {
      console.log("Invalid value for withdrawal. Please enter a positive value less than your balance.");
  }
  }

  public getBalance = (): void => {
    console.log(this.balance)
  }

 public validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
