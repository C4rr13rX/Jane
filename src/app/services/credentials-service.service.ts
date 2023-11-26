import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {
  private key = '6NoXVgePWdgIEPvlQ1jggy9jZxxAlaw5Ch/tjCBOxZc=';
  
  constructor() { }
  
  saveCredentials(username: string, password: string, openaiApiKey: string): void {
    const encryptedPassword = this.encrypt(password);
    const encryptedApiKey = this.encrypt(openaiApiKey);

    // Save encrypted credentials to local storage
    localStorage.setItem('username', username);
    localStorage.setItem('password', encryptedPassword);
    localStorage.setItem('openaiApiKey', encryptedApiKey);
  }
  
  getCredentials(): { awsAccessKey: string, awsSecret: string, awsRegion: string, openaiApiKey: string } | null {
    const encryptedAwsAccessKey = localStorage.getItem('awsAccessKey');
    const encryptedAwsSecret = localStorage.getItem('awsSecret');
    const encryptedAwsRegion = localStorage.getItem('awsRegion')
    const encryptedOpenAIApiKey = localStorage.getItem('openAIApiKey');

    if (username && encryptedPassword && encryptedApiKey) {
      const password = this.decrypt(encryptedPassword);
      const openaiApiKey = this.decrypt(encryptedApiKey);

      return { username, password, openaiApiKey };
    }

    return null;
  }
  
  private encrypt(value: string): string {
    const encryptedValue = CryptoJS.AES.encrypt(value, this.key).toString();
    return encryptedValue;
  }

  private decrypt(encryptedValue: string): string {
    const decryptedValue = CryptoJS.AES.decrypt(encryptedValue, this.key).toString(CryptoJS.enc.Utf8);
    return decryptedValue;
  }
  
}
