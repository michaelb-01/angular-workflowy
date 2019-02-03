import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

	items2 = [];

	items = [
		{
			text: "1",
			expanded: true,
     		items: [
				{ 
					text: "1.1",
					expanded: true,
					items: [
						{ 
							expanded: true,
							text: "1.1.1 ",
							items: []
						}
					]
				},
		        { 
		        	text: "1.2",
		        	expanded: true,
		          	items: [ ]
		        },
		        { 
		        	text: "1.3",
		        	expanded: true,
		          	items: [
						{ 
			          		expanded: true,
			          		text: "1.3.1",
			          		items: []
			          	} 
		          	]
		        }
      		]
		},
		{
			text: "2",
			expanded: true,
			items: [
				{ 
					text: "2.1",
					expanded: true,
					items: [
						{ 
							expanded: true,
							text: "2.1.1",
							items: [] 
						}
	         		]
	       		}
	     	]
	   }
   ]

	items4 = [
		{
			text: "1",
			expanded: true,
     		items: [
				{ 
					text: "1.1",
					expanded: true,
					items: [
						{ 
							expanded: true,
							text: "1.1.1 " 
						}
					]
				},
		        { 
		        	text: "1.2",
		        	expanded: false,
		          	items: [ 
			          	{ 
			          		expanded: true,
			          		text: "1.2.1" 
			          	} 
		          ]
		        }
      		]
		},
		{
			text: "2",
			expanded: false,
			items: [
				{ 
					text: "2.1",
					expanded: true,
					items: [
						{ 
							expanded: true,
							text: "2.1.1" 
						}
	         		]
	       		}
	     	]
	   }
   ]

  constructor() { }

  addFirstComment() {
  	let newItem = {
  		expanded: false,
  		text: '',
  		items: []
  	}

  	this.items.unshift(newItem);
  }

  addSibling() {
  	console.log('addSibling');
  }

  addChild() {
  	console.log('addChild');
  }

  addItem(str) {
  	let indexStr = str;
  	let parent = str.substring(0, str.length - 1);
  	let curIndex = str[str.length - 1];
  	let nextIndex = Number(curIndex) + 1;

  	console.log('fullpath: ' + indexStr);
  	console.log('parent: ' + parent);
  	console.log('current index: ' + curIndex);
  	console.log('next index: ' + nextIndex);

  	let cmd = 'this.items';

  	for (let i = 0; i < parent.length; i++) {
  		cmd += '[' + str.charAt(i) + ']["items"]';
  	}

	let newItem = {
		expanded: false,
		text: '',
		items: []
	};

	// check if item has children
	let children = eval(cmd + '[' + curIndex + ']["items"]');

	if (!Array.isArray(children) || !children.length) {
		this.addSibling();
		cmd += '.splice(' + nextIndex + ', 0, newItem);';
		eval(cmd);
	}
	else {
		this.addChild();
		cmd += '[' + curIndex + ']["items"].splice(0, 0, newItem);';
		eval(cmd);
	}

  }

  removeRootItem(index) {
  	// add item to parent
  	this.items[index-1].items.push(this.items[index]);
  	// remove item
  	//this.items.splice(index, 1);
  }

  indentItem2(str) {
  	console.log('indentItem');
  	let indexStr = str;
  	let parent = Number(str.substring(0, str.length - 1));
  	let curIndex = str[str.length - 1];

  	let destIndex = Number(curIndex) - 1;

  	console.log('Path: ' + str);
  	console.log('Parent: ' + parent);
  	console.log('Current: ' + curIndex);
  	console.log('Dest: ' + destIndex);

  	if (destIndex < 0) {
  		console.log('Cant indent root');
  		return;
  	}

  	let cmd = 'this.items';

  	for (let i = 0; i < indexStr.length - 1; i++) {
  		cmd += '[' + str.charAt(i) + ']["items"]';
  	}

  	let curItemCmd = cmd + '[' + curIndex + ']';
  	let curItem = eval(curItemCmd);

  	console.log(cmd + '[' + destIndex + ']["items"].push(curItem)');
  	console.log(this.items);

  	eval(cmd + '[' + destIndex + ']["items"].push(curItem)');

  	// remove
  	// cmd += '.splice(' + curIndex + ',1);';

  	eval(cmd + '.splice(' + curIndex + ',1);')

  	// check if parent has children
  }

  unindentItem(str) {
  	console.log('unindentItem');
  	let indexStr = str;
  	let parent = Number(str.substring(0, str.length - 1)) + 1;
  	let curIndex = str[str.length - 1];

  	console.log('parent: ' + parent);

  	let cmd = 'this.items';

  	for (let i = 0; i < indexStr.length - 2; i++) {
  		cmd += '[' + str.charAt(i) + ']["items"]';
  	}

  	let cmd2 = 'this.items';

  	for (let i = 0; i < indexStr.length - 1; i++) {
  		cmd2 += '[' + str.charAt(i) + ']["items"]';
  	}

  	let curItemCmd = cmd2 + '[' + curIndex + ']';
  	let curItem = eval(curItemCmd);

  	cmd += '.splice(' + parent + ', 0, curItem )';

  	eval(cmd);
  	eval(cmd2 + '.splice(' + curIndex + ',1);')

  	console.log(cmd);

  }

}
