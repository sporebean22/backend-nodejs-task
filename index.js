const converter = require('./logic')
const { Command } = require('commander');
const program = new Command();

program.version('V1.0');

program
.command('convert <value> <unit>')
.alias('c')
.description('Convert Farenheit to Celsius and vice versa')
.action(function(value, unit){
    converter.Conversion(parseInt(value), unit);
});

program.parse(process.argv);
