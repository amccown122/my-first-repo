const fs = require('fs');
const chalk = require('chalk');

// Function to create rainbow colored ASCII art
function createRainbowBanner() {
    const colors = [chalk.red, chalk.yellow, chalk.green, chalk.cyan, chalk.blue, chalk.magenta];
    let colorIndex = 0;
    
    // Create each line with proper color
    const lines = [
        chalk.red('███╗   ███╗██╗   ██╗    ███████╗██╗██████╗ ███████╗████████╗    ██████╗ ███████╗██████╗  ██████╗'),
        chalk.yellow('████╗ ████║╚██╗ ██╔╝    ██╔════╝██║██╔══██╗██╔════╝╚══██╔══╝    ██╔══██╗██╔════╝██╔══██╗██╔═══██╗'),
        chalk.green('██╔████╔██║ ╚████╔╝     █████╗  ██║██████╔╝███████╗   ██║       ██████╔╝█████╗  ██████╔╝██║   ██║'),
        chalk.cyan('██║╚██╔╝██║  ╚██╔╝      ██╔══╝  ██║██╔══██╗╚════██║   ██║       ██╔═══╝ ██╔══╝  ██╔═══╝ ██║   ██║'),
        chalk.blue('██║ ╚═╝ ██║   ██║       ██║     ██║██║  ██║███████║   ██║       ██║     ███████╗██║     ╚██████╔╝'),
        chalk.magenta('╚═╝     ╚═╝   ╚═╝       ╚═╝     ╚═╝╚═╝  ╚═╝╚══════╝   ╚═╝       ╚═╝     ╚══════╝╚═╝      ╚═════╝')
    ];
    
    return lines.join('\n');
}

// Function to read and display hello.txt
function displayHelloFile() {
    try {
        const content = fs.readFileSync('hello.txt', 'utf8');
        console.log('\n' + '='.repeat(60));
        console.log(chalk.yellow.bold('📄 CONTENTS OF HELLO.TXT:'));
        console.log('='.repeat(60));
        console.log(content);
        console.log('='.repeat(60));
    } catch (error) {
        console.error(chalk.red('❌ Error reading hello.txt:'), chalk.red(error.message));
    }
}

// Main execution
console.log(createRainbowBanner());
displayHelloFile();
