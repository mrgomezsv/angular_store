import { Component, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required: true}) duration: number = 0;
  @Input({required: true}) message = '';

  constructor(){
    // NO ASYNCHRONOUS CODE
    console.log('constructor');
    console.log('-' .repeat(10));
  }

  ngOnChanges(changes: SimpleChanges) {
    // before and during rendeer
    console.log('ngOnChanges');
    console.log('-' .repeat(10));
    console.log(changes);
  }

  ngOnInit() {
    // after render
    // una vez
    // async, then, subs
    console.log('ngOnInit');
    console.log('_'.repeat(10)),
    console.log('duraction =>', this.duration);
    console.log('message =>', this.message);
  }

  ngAfterViewInit() {
        // after render
        // si los hijos ya fueron renderizados
    console.log('ngAfterViewInit');
    console.log('_'.repeat(10));
  }

  ngDestroy() {
    console.log(this.ngDestroy);
    console.log('_'.repeat(10));
  }
}
