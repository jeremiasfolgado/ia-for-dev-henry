export interface Message {
    role: 'user' | 'assistant';
    content: string;
  }
  
  export class Conversation {
    private messages: Message[] = [];
  
    addMessage(role: 'user' | 'assistant', content: string) {
      this.messages.push({ role, content });
    }
  
    getMessages(): Message[] {
      return this.messages;
    }
  
    clear() {
      this.messages = [];
    }
  }
  