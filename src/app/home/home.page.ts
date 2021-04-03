import { Component } from '@angular/core';
import { debounce } from 'lodash';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public dragIndex: number;
  public items = Array.from(Array(10).keys());
  constructor() {}
  public allowDrop(ev) {
    ev.preventDefault();
  }
  public dragEnter(ev) {
    if (ev.target?.classList) {
      ev.target?.classList.add('over');
    }
  }
  public dragLeave(ev) {
    if (ev.target?.classList) {
      ev.target?.classList.remove('over');
    }
  }
  public drag(ev) {
    this.dragIndex = ev.target.id;
    ev.target.style.opacity = 0.5;
  }
  public dragEnd(ev) {
    ev.target.style.opacity = 1;
  }
  public drop(ev) {
    const temp = this.items[this.dragIndex];
    this.items[this.dragIndex] = this.items[ev.target.id];
    this.items[ev.target.id] = temp;
    ev.target?.classList.remove('over');
  }
}
