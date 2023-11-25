// smart-storage.service.ts
import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class SmartStorageService {
  private s3: AWS.S3;
  private bucketName = 'your-s3-bucket-name';

  constructor() {
    this.s3 = new AWS.S3();
  }

  private generateTimestampedKey(key: string): string {
    const timestamp = moment().unix();
    return `${key}_${timestamp}`;
  }

  private extractBaseKey(timestampedKey: string): string {
    return timestampedKey.split('_')[0];
  }

  async syncWithS3(): Promise<void> {
    // Implement logic to compare local storage with S3
    // Retrieve the list of objects from the S3 bucket
    // Compare timestamps and sync accordingly
    // Update local storage as needed
  }

  async saveObjectLocallyAndRemotely(key: string, data: any): Promise<void> {
    const timestampedKey = this.generateTimestampedKey(key);

    // Save to local storage
    localStorage.setItem(timestampedKey, JSON.stringify(data));

    // Save to AWS S3
    await this.s3
      .putObject({
        Bucket: this.bucketName,
        Key: timestampedKey,
        Body: JSON.stringify(data),
      })
      .promise();
  }

  async getObject(key: string): Promise<any | null> {
    const timestampedKey = this.generateTimestampedKey(key);
    const localData = localStorage.getItem(timestampedKey);

    if (localData) {
      return JSON.parse(localData);
    } else {
      // If not found locally, try to retrieve from AWS S3
      try {
        const s3Data = await this.s3
          .getObject({ Bucket: this.bucketName, Key: timestampedKey })
          .promise();
        return JSON.parse(s3Data.Body as string);
      } catch (error) {
        // Handle the case when the object is not found in local storage or S3
        console.error('Error retrieving object:', error);
        return null;
      }
    }
  }
}
