export interface Message {
    role: 'user' | 'assistant';
    content: string;
  }
  
  export class Conversation {
    private messages: Message[] = [];
  
    /**
     * Adds a new message to the conversation.
     * @param role - The role of the message sender, either 'user' or 'assistant'.
     * @param content - The content of the message.
     */
    addMessage(role: 'user' | 'assistant', content: string) {
      this.messages.push({ role, content });
    }
  
    /**
     * Returns the messages in the conversation.
     * @returns {Message[]} The messages in the conversation.
     */
    getMessages(): Message[] {
      return this.messages;
    }
  
    /**
     * Clears all messages from the conversation.
     */
    clear() {
      this.messages = [];
    }
  }
  