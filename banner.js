const fs = require('fs');
const chalk = require('chalk');

// ASCII art for "MY FIRST REPO"
const banner = `
███╗   ███╗██╗   ██╗    ███████╗██╗██████╗ ███████╗████████╗    ██████╗ ███████╗██████╗  ██████╗ 
████╗ ████║╚██╗ ██╔╝    ██╔════╝██║██╔══██╗██╔════╝╚══██╔══╝    ██╔══██╗██╔════╝██╔══██╗██╔═══██╗
██╔████╔██║ ╚████╔╝     █████╗  ██║██████╔╝███████╗   ██║       ██████╔╝█████╗  ██████╔╝██║   ██║
██║╚██╔╝██║  ╚██╔╝      ██╔══╝  ██║██╔══██╗╚════██║   ██║       ██╔═══╝ ██╔══╝  ██╔═══╝ ██║   ██║
██║ ╚═╝ ██║   ██║       ██║     ██║██║  ██║███████║   ██║       ██║     ███████╗██║     ╚██████╔╝
╚═╝     ╚═╝   ╚═╝       ╚═╝     ╚═╝╚═╝  ╚═╝╚══════╝   ╚═╝       ╚═╝     ╚══════╝╚═╝      ╚═════╝ 
`;

// Function to create rainbow colored ASCII art
function createRainbowBanner() {
    const colors = [chalk.red, chalk.yellow, chalk.green, chalk.cyan, chalk.blue, chalk.magenta];
    const lines = banner.trim().split('\n');
    let colorIndex = 0;
    
    return lines.map(line => {
        const color = colors[colorIndex % colors.length];
        colorIndex++;
        return color(line);
    }).join('\n');
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
