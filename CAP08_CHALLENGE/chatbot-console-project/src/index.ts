import readline from 'readline';
import { chatbot } from './chatbot';
import { Conversation } from './models/conversation';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


/**
 * Runs the main loop of the chatbot application.
 * Prompts the user for input, passes it to the chatbot, and continues until the user enters "salir" to exit.
 */
async function main() {
  console.log('Bienvenido al chatbot. Escribe "salir" para terminar.');
  const conversation = new Conversation();
  while (true) {
    const userInput = await new Promise<string>((resolve) => {
      rl.question('> ', resolve);
    });

    if (userInput.toLowerCase() === 'salir') {
      break;
    }

    await chatbot(userInput, conversation);
  }

  rl.close();
  console.log('¡Gracias por usar el chatbot!');
}

main().catch(console.error);
