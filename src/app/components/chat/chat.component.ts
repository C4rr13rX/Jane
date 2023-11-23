import { Component, OnInit } from '@angular/core';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonFooter, IonTextarea } from '@ionic/angular/standalone';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  standalone: true,
  imports: [IonFooter, IonTextarea]
})
export class ChatComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
