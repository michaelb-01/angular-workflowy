import { Component } from '@angular/core';
import { ItemService } from './item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  comment = '';

	constructor(public _itemService: ItemService) {}

	addItem(e, comment) {
		if (comment) {
			this._itemService.addFirstComment();
		}
	}
}
