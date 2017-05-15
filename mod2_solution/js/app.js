(function(){
	'use strict';

	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ListService', ListService);

	ToBuyController.$inject = ['ListService'];
	function ToBuyController(ListService){
		
		var itemBuy = this;

		itemBuy.addItem = function () {
			ListService.addItem(itemBuy);
		};

		itemBuy.removeItem = function (itemIndex) {
			ListService.removeItem(itemIndex);
		};


	};

	AlreadyBoughtController.$inject = ['ListService'];
	function AlreadyBoughtController(ListService){
		
		var boughtItems = this;

		boughtItems.items = ListService.getBoughtItems();

	};

	function ListService() {

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