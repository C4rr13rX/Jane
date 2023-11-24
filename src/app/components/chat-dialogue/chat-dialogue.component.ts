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

  constructor() { }

  ngOnInit() {}

}
