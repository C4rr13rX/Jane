import { Injectable } from '@angular/core';
import { OpenAIAPI } from 'openai';

@Injectable({
  providedIn: 'root'
})
export class DALLEService {
private apiKey = 'YOUR_OPENAI_API_KEY'; // Replace with your OpenAI GPT API key
  private openai = new OpenAIAPI({ key: this.apiKey });
  constructor() { }
  
  async sendMessage(userMessage: string): Promise<string> {
    const prompt = `You are an assistant helping me co-write a book. The user says: ${userMessage}`;

    try {
      const response = await this.openai.complete({
        engine: 'text-davinci-002', // Replace with the correct engine name
        prompt,
        temperature: 0.7,
        max_tokens: 150,
      });

      return response.choices[0].text.trim();
    } catch (error) {
      console.error('Error sending message to ChatGPT-4:', error.message);
      throw error;
    }
}
