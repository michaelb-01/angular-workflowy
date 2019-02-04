import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';

import { ItemService } from '../item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit, AfterViewInit {
	@Input() items;
	@Input() index;

  @ViewChild('myinput') myinput: ElementRef;

	editing = true;
	hovering = false;

  constructor(private _itemService: ItemService) { }

  ngOnInit() {
    console.log('init');
  }

  ngAfterViewInit() {
    console.log('set focus: ' + this.index);
    if (this.myinput) {
      this.myinput.nativeElement.focus();
    }
  }

  inc(i) {
  	let index = (typeof this.index === 'undefined') ? '' : this.index;
  	if (this.index === 'undefined') {

		}
  	return this.index.toString() + i.toString()
  }

  addItem(i) {
  	this._itemService.addItem(this.index + i.toString());
  	event.preventDefault();
  }

  onKeyDown(event, comment, i) {
  	if (event.keyCode == 13) {
  		this.addItem(i);
		}
    else if (event.keyCode == 9) {
      if (event.shiftKey) {
        this._itemService.unindentItem(this.index + i.toString());
        event.preventDefault();
      }
      else {
        this._itemService.indentItem2(this.index + i.toString());
        event.preventDefault();
      }
    }
  }
}
