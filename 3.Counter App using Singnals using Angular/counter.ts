import { Component,signal,Signal,computed } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {
   count=signal(0);
   double:Signal<number>=computed(()=> this.count()*2)
   increment(){
    this.count.set(this.count()+1);
   }
   decrement(){
    this.count.set(this.count()-1);
   }

}
