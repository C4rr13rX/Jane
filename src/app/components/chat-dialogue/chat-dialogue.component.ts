import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { IonContent, IonButton, IonIcon, IonFooter } from '@ionic/angular/standalone'; 

@Component({
  selector: 'app-chat-dialogue',
  templateUrl: './chat-dialogue.component.html',
  styleUrls: ['./chat-dialogue.component.scss'],
  standalone: true,
  imports: [IonContent, IonButton, IonIcon, IonFooter]
})
export class ChatDialogueComponent  implements OnInit {
  
  @ViewChild('dialogue', { static: false }) dialogue: ElementRef;

  copyText() {
    const textToCopy = this.dialogue.nativeElement.textContent; // Get the text content from the dialogue-container
    // Implement logic to copy the text (e.g., use Clipboard API)
    alert(textToCopy)
  }

  constructor() { }

  ngOnInit() {}
  
  
}
