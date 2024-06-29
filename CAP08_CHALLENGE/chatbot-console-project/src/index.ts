import readline from 'readline';
import { chatbot } from './chatbot';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function main() {
  console.log('Bienvenido al chatbot. Escribe "salir" para terminar.');

  while (true) {
    const userInput = await new Promise<string>((resolve) => {
      rl.question('> ', resolve);
    });

    if (userInput.toLowerCase() === 'salir') {
      break;
    }

    await chatbot(userInput);
  }

  rl.close();
  console.log('¡Gracias por usar el chatbot!');
}

main().catch(console.error);
