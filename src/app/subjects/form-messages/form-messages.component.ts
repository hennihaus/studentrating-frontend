import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-messages',
  templateUrl: './form-messages.component.html',
  styleUrls: ['./form-messages.component.css']
})
export class FormMessagesComponent implements OnInit {
  @Input() control: AbstractControl;
  @Input() controlName: string;

  private allMessages = {
    id: {
      required: 'Ein Fach muss angegeben werden'
    },
    rating: {
      required: 'Eine Bewertung muss angegeben werden'
    },
    title: {
      required: 'Ein Title muss angegeben werden',
      maxlength: 'Der Title kann maximal 50 Zeichen haben'
    },
    text: {
      required: 'Ein kurzer Text muss angegeben werden',
      minlength: 'Der Text muss mindestens 25 Zeichen haben'
    },
  };

  constructor() { }

  ngOnInit() {
  }

  errorsForControl(): string[] {
    const messages = this.allMessages[this.controlName];

    if (!this.control || !this.control.errors || !messages || !this.control.dirty) {
      return null;
    }

    return Object.keys(this.control.errors)
      .map(err => messages[err]);
  }

}
