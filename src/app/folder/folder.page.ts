import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent } from '@ionic/angular/standalone';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent]
  
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor() {}

  ngOnInit() {
    this.folder = FolderPage.replaceDashesAndCapitalize(this.activatedRoute.snapshot.paramMap.get('id') as string);
  }
  
  static replaceDashesAndCapitalize(inputString: string): string {
    // Replace dashes with spaces
    const stringWithSpaces = inputString.replace(/-/g, ' ');

    // Capitalize the first letter of every word
    const capitalizedString = stringWithSpaces.replace(/\b\w/g, (match) => match.toUpperCase());

    return capitalizedString;
  }
}
