// smart-storage.service.ts
import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class SmartStorageService {
  private s3: AWS.S3;
  private bucketName = 'JaneSays';

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
    const s3Objects = await this.listS3Objects();

    // Loop through S3 objects and sync with local storage
    for (const s3Object of s3Objects) {
      const localTimestampedKey = localStorage.getItem(s3Object.Key);

      // If the object is not found locally or the S3 version is newer, sync it
      if (!localTimestampedKey || this.isS3VersionNewer(localTimestampedKey, s3Object.LastModified)) {
        const s3Data = await this.s3.getObject({ Bucket: this.bucketName, Key: s3Object.Key }).promise();
        localStorage.setItem(s3Object.Key, s3Data.Body as string);
      }
    }

    // Loop through local storage and check for objects that exist in local but not in S3
    for (let i = 0; i < localStorage.length; i++) {
      const localKey = localStorage.key(i);
      if (!s3Objects.find(s3Object => s3Object.Key === localKey)) {
        // Object is in local storage but not in S3, delete it locally
        localStorage.removeItem(localKey);
      }
    }
  }

  private async listS3Objects(): Promise<AWS.S3.ObjectList> {
    const s3ListObjectsResponse = await this.s3.listObjects({ Bucket: this.bucketName }).promise();
    return s3ListObjectsResponse.Contents || [];
  }

  private isS3VersionNewer(localTimestampedKey: string, s3LastModified: Date): boolean {
    const localTimestamp = parseInt(localTimestampedKey.split('_')[1], 10);
    return moment(s3LastModified).unix() > localTimestamp;
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
