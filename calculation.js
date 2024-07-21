const http = require('http');
const url = require('url');
const arithmetic = require('./arithmetic');

const server = http.createServer((req, res) => {
    const query = url.parse(req.url,true).query;
    const num1 = parseFloat(query.num1);
    const num2 = parseFloat(query.num2);
    const operation = query.operation;

    let result;
    switch (operation) {
        case 'add':
            result = arithmetic.addition(num1, num2);
            break;
        case 'subtract':
            result = arithmetic.subtraction(num1, num2);
            break;
        case 'multiply':
            result = arithmetic.multiplication(num1, num2);
            break;
        case 'divide':
            result = arithmetic.division(num1, num2);
            break;
        case 'mod':
            result = arithmetic.modulous(num1, num2);
            break;
        case 'exponent':
            result = arithmetic.exponent(num1, num2);
            break;
        case 'factorial':
            result = arithmetic.factorial(num1);
            break;
        default:
            result = 'Invalid operation';
    }
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write( `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Arithmetic Result</title>
            <style>
                .container {
                    border: 2px solid purple;
                    background-color:aqua;
                    width: 300px;
                    padding: 20px;
                    margin: 0 auto;
                    text-align: center;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h2>Result</h2>
                <p>The Result of ${operation} is ${result}</p>
            </div>
        </body>
        </html>
    `);
    res.end();
});

server.listen(4000);
