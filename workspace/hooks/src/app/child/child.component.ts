import { Component, Input, SimpleChanges } from '@angular/core';
import { OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnChanges {
  @Input() items:any[] = []
  @Input() title = ''

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['items']) {
      console.log("Changes occured", changes['items'])
    }
    if (changes['title']) {
      console.log("Changes occured", changes['title'])
    }
  }
}
