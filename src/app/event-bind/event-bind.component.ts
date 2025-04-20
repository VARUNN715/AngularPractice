import { Component } from '@angular/core';

@Component({
  selector: 'app-event-bind',
  templateUrl: './event-bind.component.html',
  styleUrls: ['./event-bind.component.css']
})
export class EventBindComponent {
  userName = "Varun";
  onClick(abc:string){
    this.userName = abc;
  }
  onReset(){
    this.userName ="Varun";
  }

  

  time: number = 120;

  onTime() {
    const interval = setInterval(() => {
      this.time -= 0.1;
     // console.log(this.time.toFixed(2)); // Display the time in a readable format

      if (this.time <= 0) {
        // clearInterval(interval); // Stop the clock when time reaches zero
        // console.log("Time's up!");
        this.time = 0;
      }
    }, 100); // Adjust the interval duration as needed (100ms here)
  }


}

