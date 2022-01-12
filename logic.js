const colors = require('colors');

const ratioOfChangeF = (5/9);
const ratioOfChangeC = (9/5);
const waterFreezingPoint = 32;

function TemperatureConvert(value, unit) {
    try {
        if (unit.toUpperCase() == 'FARENHEIT') { return ((value - waterFreezingPoint) * ratioOfChangeF).toFixed(2) }
        else if (unit.toUpperCase() == 'CELSIUS') { return ((value * ratioOfChangeC) + waterFreezingPoint).toFixed(2) }
        else { throw new Error("Invalid or Unsupported Unit of Temperature")};
    } catch (error) {
        throw error;
    }
}

function OutputConversion(rawValue, unit, convertedValue) {
    try {
        if (unit.toUpperCase() == 'FARENHEIT') { console.log(colors.blue(rawValue + ' Farenheit converted equals:'),    colors.yellow(convertedValue), colors.yellow('Celsius'))}
        else if (unit.toUpperCase() == 'CELSIUS') { console.log(colors.yellow(rawValue + ' Celsius converted equals:'), colors.blue(convertedValue), colors.blue('Farenheit'))}
    } catch (error) {
        throw error;
    }
}

function Conversion(value, unit) {
    if((Number.isSafeInteger(value)) && (typeof unit == 'string')) {
        OutputConversion(value, unit, TemperatureConvert(value, unit));
    } else {
        console.log(typeof value, typeof unit)
        throw new Error("Invalid or Unsupported type detected")
    }
}

module.exports = {
    Conversion: Conversion,
    TemperatureConvert: TemperatureConvert
}