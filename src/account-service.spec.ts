import {AccountService, BalanceService, Logger} from "./account-service";

describe("Acoount service", () => {
    let accountSerivce: AccountService;
    let balanceService: BalanceService;
    let logger: Logger;
    beforeEach(() => {
        balanceService = new BalanceService();
        logger = new Logger();
        accountSerivce = new AccountService(balanceService, logger);

        spyOn(console, "log");
    });
    it("should print statement containing transactions in chrono order", () => {
        accountSerivce.deposit(1000);
        accountSerivce.widthraw(500);

        accountSerivce.printStatement();

        expect(console.log).toHaveBeenCalledWith("Date | Amount | Balance");
        expect(console.log).toHaveBeenCalledWith(`${logger.currentDate()} | -500 | 500`);
        expect(console.log).toHaveBeenCalledWith(`${logger.currentDate()} | 1000 | 1000`);
    });
});

describe("Account service lowlevel", () => {
    let accountSerivce: AccountService;
    let balanceService: BalanceService;
    let logger: Logger;
    beforeEach(() => {
        balanceService = new BalanceService();
        logger = new Logger();
        accountSerivce = new AccountService(balanceService, logger);

        spyOn(console, "log");
    });

    it("should put money when deposited", () => {
        accountSerivce.deposit(1000);

        expect(logger.lastTransaction()).toEqual(
            `${logger.currentDate()} | 1000 | 1000`
        );
    });

    it("should reduce amount when widthrawed", () => {
        accountSerivce.widthraw(1000);
        expect(logger.lastTransaction()).toEqual(
            `${logger.currentDate()} | -1000 | -1000`
        );
    });

    it("should print operations history", () => {
        accountSerivce.deposit(1000);
        accountSerivce.widthraw(500);

        accountSerivce.printStatement();

        expect(console.log).toHaveBeenCalledWith("Date | Amount | Balance");
        expect(console.log).toHaveBeenCalledWith(`${logger.currentDate()} | -500 | 500`);
        expect(console.log).toHaveBeenCalledWith(`${logger.currentDate()} | 1000 | 1000`);
    })

});
