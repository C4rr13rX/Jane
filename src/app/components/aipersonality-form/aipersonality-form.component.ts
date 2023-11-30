import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonInput, IonButton, IonRouterOutlet, IonSelect, IonSelectOption, PopoverController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp, bookOutline, bookSharp, codeSlashOutline, codeSlashSharp, colorPaletteOutline, colorPaletteSharp, chatbubblesOutline, chatbubblesSharp } from 'ionicons/icons';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Polly } from 'aws-sdk';
import { CredentialsService } from '../../services/credentials-service.service';

@Component({
  selector: 'app-aipersonality-form',
  templateUrl: './aipersonality-form.component.html',
  styleUrls: ['./aipersonality-form.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonItem, IonLabel, IonInput, IonButton, IonSelect, IonSelectOption]
})
export class AIPersonalityFormComponent  implements OnInit {
  
  aiPersonalityForm!: FormGroup;
  availableVoices!: [];
  private polly!: Polly;
  private credentials!: { awsAccessKey: string, awsSecret: string, awsRegion: string, awsS3BucketName: string, openAIApiKey: string } | null;
  
  constructor(private fb: FormBuilder, private credentialsService: CredentialsService, private popoverController: PopoverController) { 
    addIcons({ chatbubblesOutline, chatbubblesSharp, colorPaletteOutline, colorPaletteSharp, paperPlaneOutline, bookOutline, bookSharp, codeSlashOutline, codeSlashSharp, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp });
  }

  ngOnInit() {
    
    this.credentials = credentialsService.getCredentials();
    /*
    
     { awsAccessKey: string, awsSecret: string, awsRegion: string, awsS3BucketName: string, openAIApiKey: string }
    
    */
    this.polly = new Polly({
        region: this.credentials.awsRegion,
        accessKeyId: this.credentials.awsAccessKey,
        secretAccessKey: this.credentials.awsSecret,
     });
     
     this.availableVoices = this.getAwsPollyVoices();
    
    this.aiPersonalityForm = this.fb.group({
      ai_name: ['', [Validators.required]],
      ai_culture: ['', [Validators.required]],
      ai_year_born: ['', [Validators.required]],
      ai_pet_names: ['', [Validators.required]],
      ai_polly_voice: ['', [Validators.required]],
      your_name: ['', [Validators.required]],
    });
    
  }
    
  
  get ai_name() {
    return this.aiPersonalityForm.get('ai_name');
  }
  
  get ai_culture() {
    return this.aiPersonalityForm.get('ai_culture');
  }
  
  get ai_year_born() {
    return this.aiPersonalityForm.get('ai_year_born');
  }
  
  get ai_pet_names() {
    return this.aiPersonalityForm.get('ai_pet_names');
  }
  
  get ai_polly_voice() {
    return this.aiPersonalityForm.get('ai_polly_voice');
  }
  
  get your_name() {
    return this.aiPersonalityForm.get('your_name');
  }
  
  onSubmit() {
    if (this.aiPersonalityForm.valid) {
      // Do something with the form data
      alert('Form submitted:' + this.aiPersonalityForm.value);
    }
  }
  
  // Function to get AWS Polly voices
   async getAwsPollyVoices(): Promise<string[]>
   {
          try {
             const data = await this.polly.describeVoices().promise();
             const voices = data.Voices?.map((voice) => voice.Name) || [];
             return voices;
           } catch (error) {
              alert('Error retrieving AWS Polly voices:' + error.message);
              return [];
       }
    }

}
