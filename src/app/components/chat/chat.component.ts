import { Component, OnInit } from '@angular/core';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonFooter, IonTextarea, IonButton, PopoverController} from '@ionic/angular/standalone';
import { ChatDialogueComponent } from '../chat-dialogue/chat-dialogue.component';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  standalone: true,
  imports: [IonContent, IonFooter, IonTextarea, IonButton]
})
export class ChatComponent implements OnInit {
  
  constructor(private popoverController: PopoverController) {}

  ngOnInit() {
    this.openDialogue();
  }
  
  async openDialogue() {
    const popover = await this.popoverController.create({
      component: ChatDialogueComponent, // Create a separate component for the popover content
      cssClass: 'dialogue-popover',
      translucent: true,
      side: 'top'
    });

    return await popover.present();
  }
 
}