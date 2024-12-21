import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'app-afterview',
  standalone: true,
  imports: [],
  templateUrl: './afterview.component.html',
  styleUrl: './afterview.component.css'
})
export class AfterviewComponent implements AfterViewInit, OnInit, OnDestroy{

  counter: number =0;
  private intervalId: any;

  // Starts the timer
  ngOnInit(): void {
    
    this.intervalId = setInterval(() => {
      this.counter++
    }, 1000)
    console.log("Interval ID:", this.intervalId)
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId)
    console.log("OnDestroy timer stopped")
    
  }

  // Focus the input once view initialized
  @ViewChild('nameInput') nameInput!:ElementRef
  ngAfterViewInit(): void {
    this.nameInput.nativeElement.focus();
    console.log("Input focussed")
  }

}
