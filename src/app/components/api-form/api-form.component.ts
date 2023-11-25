import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp, bookOutline, bookSharp, codeSlashOutline, codeSlashSharp, colorPaletteOutline, colorPaletteSharp, chatbubblesOutline, chatbubblesSharp } from 'ionicons/icons';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-api-form',
  templateUrl: './api-form.component.html',
  styleUrls: ['./api-form.component.scss'],
  standalone: true,
  imports[FormsModule, ReactiveFormsModule]
})
export class ApiFormComponent  implements OnInit {
  
  apiForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    addIcons({ chatbubblesOutline, chatbubblesSharp, colorPaletteOutline, colorPaletteSharp, paperPlaneOutline, bookOutline, bookSharp, codeSlashOutline, codeSlashSharp, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp });
  }

  ngOnInit() {
    this.apiForm = this.fb.group({
      aws_access_key: ['', [Validators.required]],
      aws_secret: ['', [Validators.required]],
      aws_region: ['', [Validators.required]],
      open_ai_api_key: ['', [Validators.required]],
    });
    
  }

}
