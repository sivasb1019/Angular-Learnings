import { Component, DoCheck, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { SimpleMessageComponent } from './simple-message/simple-message.component';
import { AfterviewComponent } from './afterview/afterview.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ChildComponent, SimpleMessageComponent, AfterviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, DoCheck {
  itemList = [
    {'id': 1, 'name': 'Apple'},
    {'id': 2, 'name': 'Orange'},
    {'id': 3, 'name': 'Banana'},
    {'id': 4, 'name': 'JackFruit'},
    {'id': 5, 'name': 'Cherry'},
  ]
  title = ""
  prevTitle = ""

  ngOnInit(): void {
    this.title = "Lifecycle Hooks"
  }

  ngDoCheck(): void {
    if (this.title != this.prevTitle) {
      console.log("Title changed value", this.title);
      this.prevTitle = this.title;
    }
  }

  showHello = true;
}
