(function(){
	'use strict';

	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService){
		
		var toBuy = this;

		toBuy.addItem = function (itemBuy, itemIndex) {
			ShoppingListCheckOffService.addItem(itemBuy);
			ShoppingListCheckOffService.removeItem(itemIndex);
		};
		toBuy.items = ShoppingListCheckOffService.getToBuyItems();


	};

	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService){
		
		var boughtItems = this;
		boughtItems.items = ShoppingListCheckOffService.getBoughtItems();

	};

	function ShoppingListCheckOffService() {

		var service = this;
		var boughtItems = [];
		var toBuyItems = [
			{
				name: 'Charge',
				quantity: 1
			},
			{
				name: 'KitKat',
				quantity: 2
			},
			{
				name: 'Pretigio',
				quantity: 3
			},
			{
				name: 'Suflair',
				quantity: 5
			},
			{
				name: 'Sensação',
				quantity: 7
			}
		];

		service.addItem = function(item) {
			boughtItems.push(item);
		};

		service.removeItem = function (itemIdex) {
			toBuyItems.splice(itemIdex, 1);
		};

		service.getToBuyItems = function() {
			return toBuyItems;
		};

		service.getBoughtItems = function() {
			return boughtItems;
		};

	}

})();
