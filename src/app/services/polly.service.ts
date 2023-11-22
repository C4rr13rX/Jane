import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Polly } from 'aws-sdk';

@Injectable({
  providedIn: 'root'
})
export class PollyService {
  
  private polly: Polly;

  constructor() {
    this.initPolly();
  }
  
  private initPolly() {
    this.polly = new Polly({
      accessKeyId: environment.aws.accessKeyId,
      secretAccessKey: environment.aws.secretAccessKey,
      region: environment.aws.region,
    });
  }
  
  async textToSpeech(text: string): Promise<AudioBuffer> {
    const params: Polly.Types.SynthesizeSpeechInput = {
      OutputFormat: 'pcm',
      Text: text,
      VoiceId: 'Danielle', // Change to 'Joanna' for the English (US) Danielle voice
    };

    try {
      const response = await this.polly.synthesizeSpeech(params).promise();
      const audioBuffer = new Uint8Array(response.AudioStream as ArrayBuffer);
      return this.convertUint8ArrayToAudioBuffer(audioBuffer);
    } catch (error) {
      console.error('Error synthesizing speech:', error);
      throw error;
    }
  }
  
  private convertUint8ArrayToAudioBuffer(uint8Array: Uint8Array): AudioBuffer {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const audioBuffer = audioContext.createBuffer(1, uint8Array.length / 2, 22050);

    const data = audioBuffer.getChannelData(0);
    for (let i = 0; i < uint8Array.length / 2; i++) {
      const value = uint8Array[i * 2] + (uint8Array[i * 2 + 1] << 8);
      data[i] = value / 32768.0;
    }

    return audioBuffer;
  }
  
  
}
