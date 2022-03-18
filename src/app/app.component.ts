import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  language: string = '';
  listOfLanguages: string[] = ['English', 'Hidi'];

  addLanguage() {
    this.listOfLanguages.push(this.language);
    console.log(this.listOfLanguages);
  }
  deleteFirst() {
    this.listOfLanguages.splice(0, 1);
  }
}
