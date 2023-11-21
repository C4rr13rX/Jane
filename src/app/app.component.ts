import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp, bookOutline, codeSlashOutline, colorPaletteOutline, chatbubblesOutline} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet],
})
export class AppComponent {
  public appPages = [
    { title: 'Chat', url: '/tasks/chat', icon: 'chatbubbles-outline' },
    { title: 'Draw', url: '/tasks/draw', icon: 'color-palette-outline' },
    { title: 'Make Books', url: '/tasks/make-books', icon: 'book-outline' },
    { title: 'Write Software', url: '/tasks/write-software', icon: 'code-slash-outline' }
  ];
  public labels = [];
  constructor() {
    addIcons({ chatbubblesOutline, colorPaletteOutline, paperPlaneOutline, bookOutline, codeSlashOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp });
  }
}
