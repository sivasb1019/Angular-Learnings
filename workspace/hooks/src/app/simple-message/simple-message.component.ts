import { AfterContentInit, Component, ContentChildren, ElementRef, QueryList } from '@angular/core';

@Component({
  selector: 'app-simple-message',
  standalone: true,
  imports: [],
  templateUrl: './simple-message.component.html',
  styleUrl: './simple-message.component.css'
})
export class SimpleMessageComponent implements AfterContentInit{
  @ContentChildren('messagecontent') messageElements!: QueryList<ElementRef>

  ngAfterContentInit(): void {
    this.messageElements.forEach(element => {
      console.log('Projected content', element.nativeElement.textContent)
    })
  }
}
