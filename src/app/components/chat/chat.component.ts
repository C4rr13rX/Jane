import { Component, OnInit } from '@angular/core';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonFooter, IonTextarea, IonButton} from '@ionic/angular/standalone';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  standalone: true,
  imports: [IonContent, IonFooter, IonTextarea, IonButton]
})
export class ChatComponent  implements OnInit {
  dialogue!;
  constructor() { }

  ngOnInit() {
    
    this.showDialogue();
    
  }
  
  showDialogue() {
    // Replace this with your actual dialogue content
    const messages = [
      'Hello there!',
      'How can I assist you today?',
      'Feel free to ask me anything!',
    ];

    // Interval to simulate scrolling messages
    const interval = setInterval(() => {
      const currentContent = this.dialogue.nativeElement.innerHTML;
      const nextMessage = messages.shift();

      if (nextMessage) {
        this.dialogue.nativeElement.innerHTML = `${currentContent}<br>${nextMessage}`;
        this.dialogue.nativeElement.scrollTop = this.dialogue.nativeElement.scrollHeight;
      } else {
        clearInterval(interval);
      }
    }, 2000); // Adjust the interval as needed
  }

}
