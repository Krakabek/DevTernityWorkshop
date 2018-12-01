export class Roman {

    private numberMapper = [
        {number: 1000, letter: "M"},
        {number: 900, letter: "CM"},
        {number: 500, letter: "D"},
        {number: 400, letter: "CD"},
        {number: 100, letter: "C"},
        {number: 90, letter: "XC"},
        {number: 50, letter: "L"},
        {number: 40, letter: "XL"},
        {number: 10, letter: "X"},
        {number: 9, letter: "IX"},
        {number: 5, letter: "V"},
        {number: 4, letter: "IV"},
        {number: 1, letter: "I"},
    ];

    constructor() {
    }

    convert(number: number): string {
        let result = "";

        for (let i = 0; i < this.numberMapper.length; i++) {
            const currentNumberAssociation = this.numberMapper[i];

            while (number >= currentNumberAssociation.number) {
                result += currentNumberAssociation.letter;
                number -= currentNumberAssociation.number;
            }
        }
        return result;
    }
}
