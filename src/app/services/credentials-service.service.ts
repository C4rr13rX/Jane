import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {
  private key = '6NoXVgePWdgIEPvlQ1jggy9jZxxAlaw5Ch/tjCBOxZc='; // replace this with your own uniquely generated key
  
  constructor() { }
  
  saveCredentials(awsAccessKey: string, awsSecret: string, awsRegion: string, awsS3BucketName: string, openAIApiKey: string): void {
    const encryptedAwsAccessKey = this.encrypt(awsAccessKey);
    const encryptedAwsSecret = this.encrypt(awsSecret);
    const encryptedAwsRegion = this.encrypt(awsRegion);
    const encryptedAwsS3BucketName = this.encrypt(awsS3BucketName);
    const encryptedOpenAIApiKey = this.encrypt(openAIApiKey);
    

    // Save encrypted credentials to local storage
    localStorage.setItem('awsAccessKey', encryptedAwsAccessKey);
    localStorage.setItem('awsSecret', encryptedAwsSecret);
    localStorage.setItem('awsRegion', encryptedAwsRegion);
    localStorage.setItem('awsS3BucketName', encryptedAwsS3BucketName);
    localStorage.setItem('openAIApiKey', encryptedOpenAIApiKey)
  }
  
  getCredentials(): Promise<{ awsAccessKey: string, awsSecret: string, awsRegion: string, awsS3BucketName: string, openAIApiKey: string } | null> {
  return new Promise((resolve) => {
    const encryptedAwsAccessKey = localStorage.getItem('awsAccessKey');
    const encryptedAwsSecret = localStorage.getItem('awsSecret');
    const encryptedAwsRegion = localStorage.getItem('awsRegion');
    const encryptedAwsS3BucketName = localStorage.getItem('awsS3BucketName');
    const encryptedOpenAIApiKey = localStorage.getItem('openAIApiKey');

    if (encryptedAwsAccessKey && encryptedAwsSecret && encryptedAwsRegion && encryptedAwsS3BucketName && encryptedOpenAIApiKey) {
      const awsAccessKey = this.decrypt(encryptedAwsAccessKey);
      const awsSecret = this.decrypt(encryptedAwsSecret);
      const awsRegion = this.decrypt(encryptedAwsRegion);
      const awsS3BucketName = this.decrypt(encryptedAwsS3BucketName);
      const openAIApiKey = this.decrypt(encryptedOpenAIApiKey);

      resolve({ awsAccessKey, awsSecret, awsRegion, awsS3BucketName, openAIApiKey });
    } else {
      resolve(null);
    }
  });
}


    return null;
  }
  
  getAIPersonality(): { ai_name: string, ai_culture: string, ai_year_born: string, ai_pet_names: string, ai_polly_voice: string, your_name: string } | null {
    
    const ai_name_encrypted = localStorage.getItem('aiName');
    const ai_culture_encrypted = localStorage.getItem('aiCulture');
    const ai_year_born_encrypted = localStorage.getItem('aiYearBorn');
    const ai_pet_names_encrypted = localStorage.getItem('aiPetNames');
    const ai_polly_voice_encrypted = localStorage.getItem('aiPollyVoice');
    const your_name_encrypted = localStorage.getItem('yourName');
    
    if (ai_name_encrypted && ai_culture_encrypted && ai_year_born_encrypted && ai_pet_names_encrypted && ai_polly_voice_encrypted && your_name_encrypted ) {
      const aiName = this.decrypt(encryptedAwsAccessKey);
      const awsSecret = this.decrypt(encryptedAwsSecret);
      const awsRegion = this.decrypt(encryptedAwsRegion);
      const awsS3BucketName = this.decrypt(encryptedAwsS3BucketName)
      const openAIApiKey = this.decrypt(encryptedOpenAIApiKey);
    
    
  }
  
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
