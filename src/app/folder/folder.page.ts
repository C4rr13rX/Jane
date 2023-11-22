
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ChatComponent } from '../components/chat/chat.component';
import { DrawComponent } from '../components/draw/draw.component';
import { MakeBooksComponent } from '../components/make-books/make-books.component';
import { WriteSoftwareComponent } from '../components/write-software/write-software.component';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, ChatComponent, DrawComponent, MakeBooksComponent, CommonModule]
  
})
export class FolderPage implements OnInit {
  public folder!: string;
  public location!: string;
  public isTrue = true;
  private activatedRoute = inject(ActivatedRoute);
  constructor(private cdr: ChangeDetectorRef ) {}

  ngOnInit() {
    this.folder = this.replaceDashesAndCapitalize(this.activatedRoute.snapshot.paramMap.get('id') as string);
    
    this.activatedRoute.paramMap.subscribe(paramMap => {
      // Get the 'id' parameter from the route
      const newLocation = paramMap.get('id') as string;

      // Update the location variable
      this.location = newLocation;

      // Mark for change detection
      this.cdr.markForCheck();
      this.cdr.detectChanges();
    });
    
  }
  
  replaceDashesAndCapitalize(inputString: string): string {
    // Replace dashes with spaces
    const stringWithSpaces = inputString.replace(/-/g, ' ');

    // Capitalize the first letter of every word
    const capitalizedString = stringWithSpaces.replace(/\b\w/g, (match) => match.toUpperCase());

    return capitalizedString;
  }
}
