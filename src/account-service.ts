export class AccountService {
    constructor(
        private balance: BalanceService,
        private logger: Logger,
    ) {
    }

    private saveTransaction(money: number) {
        this.balance.put(money);
        this.logger.logTransaction(money, this.balance.amount);
    }

    deposit(money: number): void {
        this.saveTransaction(money)
    }

    widthraw(money: number): void {
        this.saveTransaction(-1 * money);
    }

    printStatement(): void {
        this.logger.printTransactions();
    }
}

export class BalanceService {
    private _amount: number = 0;

    put(money: number): void {
        this._amount += money;
    }

    get amount(): number {
        return this._amount;
    }
}

export class Logger {
    private operations: Array<string> = [];

    currentDate(): string {
        return (new Date()).toString().split(" ").slice(0, 3).join("/");
    }

    lastTransaction(): string | null {
        if (this.operations.length) {
            return this.operations[this.operations.length - 1];
        }
        return null;
    }

    logTransaction(amount: number, currentBalance: number): void {
        const date = this.currentDate();
        const logString = `${date} | ${amount} | ${currentBalance}`;
        this.operations.push(logString);
    }

    printTransactions(): void {
        console.log("Date | Amount | Balance");
        for (let i = this.operations.length - 1; i >= 0; i--) {
            console.log(this.operations[i]);
        }
    }

}
