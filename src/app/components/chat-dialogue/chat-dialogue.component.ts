import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { IonContent, IonButton, IonIcon, IonFooter } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp, bookOutline, bookSharp, codeSlashOutline, codeSlashSharp, colorPaletteOutline, colorPaletteSharp, chatbubblesOutline, chatbubblesSharp, copyOutline} from 'ionicons/icons';

@Component({
  selector: 'app-chat-dialogue',
  templateUrl: './chat-dialogue.component.html',
  styleUrls: ['./chat-dialogue.component.scss'],
  standalone: true,
  imports: [IonContent, IonButton, IonIcon, IonFooter]
})
export class ChatDialogueComponent  implements OnInit {
  
  @ViewChild('dialogue', { static: false }) dialogue!: ElementRef;

  copyText() {
    const textToCopy = this.dialogue.nativeElement.textContent; // Get the text content from the dialogue-container
    // Implement logic to copy the text (e.g., use Clipboard API)
    alert(textToCopy)
  }

  constructor() { }

  ngOnInit() {}
  
  
}
