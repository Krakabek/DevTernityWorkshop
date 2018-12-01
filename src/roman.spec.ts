import {Roman} from "./roman";

describe("Roman converter should", () => {
    const roman = new Roman();
    it("convert main numbers", () => {
        expect(roman.convert(1)).toEqual("I");
        expect(roman.convert(5)).toEqual("V");
        expect(roman.convert(10)).toEqual("X");
        expect(roman.convert(50)).toEqual("L");
        expect(roman.convert(100)).toEqual("C");
        expect(roman.convert(500)).toEqual("D");
        expect(roman.convert(1000)).toEqual("M");
    });

    it("concatenate numbers to sum", () => {
        expect(roman.convert(3)).toEqual("III");
        expect(roman.convert(1666)).toEqual("MDCLXVI");
    });

    it("should convert exceptional numbers", () => {
        expect(roman.convert(4)).toEqual("IV");
        expect(roman.convert(9)).toEqual("IX");
        expect(roman.convert(40)).toEqual("XL");
        expect(roman.convert(90)).toEqual("XC");
        expect(roman.convert(400)).toEqual("CD");
        expect(roman.convert(900)).toEqual("CM");
    });

    it("should handle complex stuff", ()=>{
       expect(roman.convert(999)).toEqual("CMXCIX");
       expect(roman.convert(2499)).toEqual("MMCDXCIX");
       expect(roman.convert(3949)).toEqual("MMMCMXLIX");
    })

});
