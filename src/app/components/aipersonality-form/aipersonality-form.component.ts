import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonInput, IonButton, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp, bookOutline, bookSharp, codeSlashOutline, codeSlashSharp, colorPaletteOutline, colorPaletteSharp, chatbubblesOutline, chatbubblesSharp } from 'ionicons/icons';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-aipersonality-form',
  templateUrl: './aipersonality-form.component.html',
  styleUrls: ['./aipersonality-form.component.scss'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, IonItem, IonLabel, IonInput, IonButton]
})
export class AIPersonalityFormComponent  implements OnInit {
  
  aiPersonalityForm!: FormGroup;

  constructor(private fb: FormBuilder) { 
    addIcons({ chatbubblesOutline, chatbubblesSharp, colorPaletteOutline, colorPaletteSharp, paperPlaneOutline, bookOutline, bookSharp, codeSlashOutline, codeSlashSharp, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp });
  }

  ngOnInit() {
    this.aiPersonalityForm = this.fb.group({
      ai_name: ['', [Validators.required]],
      ai_culture: ['', [Validators.required]],
      ai_year_born: ['', [Validators.required]],
      ai_pet_names: ['', [Validators.required]],
      ai_polly_voice: ['', [Validators.required]],
      your_name: ['', [Validators.required]],
    });
    
  
  get ai_name() {
    return this.apiForm.get('ai_name');
  }
  
  onSubmit() {
    if (this.apiForm.valid) {
      // Do something with the form data
      alert('Form submitted:' + this.apiForm.value);
    }
  }

}
