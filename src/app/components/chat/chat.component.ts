import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonFooter, IonTextarea, IonButton} from '@ionic/angular/standalone';

import { DialoguePopoverComponent } from "../../dialogue-popover/dialogue-popover.component";

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
    
     this.presentDialoguePopover();
    
  }
  
  async presentDialoguePopover() {
    
    const popover = await this.popoverController.create({
      component: DialoguePopoverComponent, // Create a separate component for the popover content
      cssClass: 'dialogue-popover',
      translucent: true,
    });
    return await popover.present();
  }
 
}