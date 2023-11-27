import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonInput, IonButton, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp, bookOutline, bookSharp, codeSlashOutline, codeSlashSharp, colorPaletteOutline, colorPaletteSharp, chatbubblesOutline, chatbubblesSharp } from 'ionicons/icons';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CredentialsService } from '../../services/credentials-service.service';

@Component({
  selector: 'app-api-form',
  templateUrl: './api-form.component.html',
  styleUrls: ['./api-form.component.scss'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, IonItem, IonLabel, IonInput, IonButton]
})
export class ApiFormComponent  implements OnInit {
  
  apiForm!: FormGroup;

  constructor(private fb: FormBuilder, private credentialsService: CredentialsService) { 
    addIcons({ chatbubblesOutline, chatbubblesSharp, colorPaletteOutline, colorPaletteSharp, paperPlaneOutline, bookOutline, bookSharp, codeSlashOutline, codeSlashSharp, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp });
  }

  ngOnInit() {
    this.apiForm = this.fb.group({
      aws_access_key: ['', [Validators.required]],
      aws_secret: ['', [Validators.required]],
      aws_region: ['', [Validators.required]],
      aws_s3_bucket_name: ['', [Validators.required]],
      open_ai_api_key: ['', [Validators.required]],
    });
    
  }
  
  // Access form controls in the template easily
  get aws_access_key() {
    return this.apiForm.get('aws_access_key');
  }
  
  get aws_secret() {
    return this.apiForm.get('aws_secret');
  }
  
  get aws_region() {
    return this.apiForm.get('aws_region');
  }

  get open_ai_api_key() {
    return this.apiForm.get('open_ai_api_key');
  }
  
  get aws_s3_bucket_name() {
    return this.apiForm.get('aws_s3_bucket_name');
  }
  
  onSubmit() {
    if (this.apiForm.valid) {
      // Do something with the form data
      this.credentialsService.saveCredentials(this.apiForm.value.aws_access_key, this.apiForm.value.aws_secret, this.apiForm.value.aws_region, this.apiForm.value.aws_s3_bucket_name, this.apiForm.value.open_ai_api_key);
      
    }
  }


}