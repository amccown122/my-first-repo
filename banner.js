const fs = require('fs');

// ASCII art for "MY FIRST REPO"
const banner = `
███╗   ███╗██╗   ██╗    ███████╗██╗██████╗ ███████╗████████╗    ██████╗ ███████╗██████╗  ██████╗ 
████╗ ████║╚██╗ ██╔╝    ██╔════╝██║██╔══██╗██╔════╝╚══██╔══╝    ██╔══██╗██╔════╝██╔══██╗██╔═══██╗
██╔████╔██║ ╚████╔╝     █████╗  ██║██████╔╝███████╗   ██║       ██████╔╝█████╗  ██████╔╝██║   ██║
██║╚██╔╝██║  ╚██╔╝      ██╔══╝  ██║██╔══██╗╚════██║   ██║       ██╔═══╝ ██╔══╝  ██╔═══╝ ██║   ██║
██║ ╚═╝ ██║   ██║       ██║     ██║██║  ██║███████║   ██║       ██║     ███████╗██║     ╚██████╔╝
╚═╝     ╚═╝   ╚═╝       ╚═╝     ╚═╝╚═╝  ╚═╝╚══════╝   ╚═╝       ╚═╝     ╚══════╝╚═╝      ╚═════╝ 
`;

// Function to read and display hello.txt
function displayHelloFile() {
    try {
        const content = fs.readFileSync('hello.txt', 'utf8');
        console.log('\n' + '='.repeat(60));
        console.log('📄 CONTENTS OF HELLO.TXT:');
        console.log('='.repeat(60));
        console.log(content);
        console.log('='.repeat(60));
    } catch (error) {
        console.error('❌ Error reading hello.txt:', error.message);
    }
}

// Main execution
console.log(banner);
displayHelloFile();
