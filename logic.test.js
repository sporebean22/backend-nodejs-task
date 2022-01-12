const convert = require('./logic');

describe("Positive Conversion Unit Tests", () => {

    test('convert 23 Celsius to 73.4 Farenheit', () => {
        expect(convert.TemperatureConvert(23,'celsius')).toBe((73.40).toFixed(2));
    });
    
    test('convert -1 Celsius to 30.2 Farenheit', () => {
        expect(convert.TemperatureConvert(-1,'celsius')).toBe((30.20).toFixed(2));
    });
    
    test('convert 23 Farenheit to -5 Celsius', () => {
        expect(convert.TemperatureConvert(23,'farenheit')).toBe((-5.00).toFixed(2));
    });
    
    test('convert value with malformed unit string for celsius', () => {
        expect(convert.TemperatureConvert(23,'cElsIuS')).toBe((73.40).toFixed(2));
    });
    
    test('convert value with malformed unit string for farenheit', () => {
        expect(convert.TemperatureConvert(23,'fArEnHeIt')).toBe((-5.00).toFixed(2));
    });

});

describe("Negative Conversion Unit Tests", () => {
    
    test('Return Error upon invalid Unit of Temperature', () => 
    {
        expect(() => {
            (convert.Conversion(23,'Test'))
        }).toThrow();
      });

      test('Return Error upon invalid Value Datatype', () => 
    {
        expect(() => {
            (convert.Conversion('Test','Farenheit'))
        }).toThrow();
      });
      
      test('Return Error upon invalid Unit Datatype', () => 
    {
        expect(() => {
            (convert.Conversion(23,45))
        }).toThrow();
      });
      
      test('Return Error upon invalid Unit of Temperature', () => 
    {
        expect(() => {
            (convert.Conversion(23,'Test'))
        }).toThrow();
      });
});