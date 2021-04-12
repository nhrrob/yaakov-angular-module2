(
    function () {
        'use strict';
        angular.module('ShoppingListCheckOff', [])
            .controller('ToBuyController', ToBuyController)
            .controller('AlreadyBoughtController', AlreadyBoughtController)
            .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

        ToBuyController.$inject = ['ShoppingListCheckOffService'];
        AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

        function ToBuyController(ShoppingListCheckOffService) {
            var tobuy = this;
            tobuy.items = ShoppingListCheckOffService.tobuy;

            tobuy.buyItem = function (itemIndex) {
                ShoppingListCheckOffService.buyItem(itemIndex);
            };
        }

        function AlreadyBoughtController(ShoppingListCheckOffService) {
            var bought = this;
            bought.items = ShoppingListCheckOffService.bought;
        }

        function ShoppingListCheckOffService() {
            var service = this;
            service.tobuy = [{ name: "Apple", quantity: 3 },
            { name: "Orange", quantity: 5 },
            { name: "Banana", quantity: 20 },
            { name: "Lunch", quantity: 5 },
            { name: "Bread", quantity: 11 }];

            service.bought = [];

            service.buyItem = function (itemIndex) {
                service.bought.push(service.tobuy[itemIndex]);
                service.tobuy.splice(itemIndex, 1);
            };

            service.getToBuy = function () {
                return service.tobuy;
            };

            service.getBought = function () {
                return service.bought;
            };
        }
    }

)();