import { Component, OnInit, Input } from '@angular/core';

import { ItemService } from '../item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
	@Input() items;
	@Input() index;

	editing = true;
	hovering = false;

  constructor(private _itemService: ItemService) { }

  ngOnInit() {
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
