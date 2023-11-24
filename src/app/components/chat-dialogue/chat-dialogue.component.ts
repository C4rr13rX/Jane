import { Component, OnInit } from '@angular/core';
import { IonContent, IonButton, IonIcon, IonFooter } from '@ionic/angular/standalone'; 

@Component({
  selector: 'app-chat-dialogue',
  templateUrl: './chat-dialogue.component.html',
  styleUrls: ['./chat-dialogue.component.scss'],
  standalone: true,
  imports: [IonContent, IonButton, IonIcon, IonFooter]
})
export class ChatDialogueComponent  implements OnInit {
  
  @ViewChild('dialogue', { static: false }) dialogue: IonContent;

  copyText() {
    const textToCopy = this.dialogue.el.textContent; // Get the text content from the dialogue-container
    // Implement logic to copy the text (e.g., use Clipboard API)
    console.log('Text copied:', textToCopy);
  }

  constructor() { }

  ngOnInit() {}
  
  
}
