import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public items = Array.from(Array(10).keys());
  constructor() {}
  public allowDrop(ev) {
    console.log('ALLOW DROP');
    ev.preventDefault();
  }

  public drag(ev) {
    console.log('drag', ev);
    ev.dataTransfer.setData("text", ev.target.id);
  }
  public drop(ev) {
    console.log('DROP', ev);
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.
    ev.target.appendChild(document.getElementById(data));
  }
}
