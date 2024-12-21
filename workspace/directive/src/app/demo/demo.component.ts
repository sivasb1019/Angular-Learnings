import { Component } from '@angular/core';
import { HighlightDirective } from '../highlight.directive';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [HighlightDirective],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {

}
