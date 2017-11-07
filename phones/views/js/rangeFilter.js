(function () {

    'use strict';
    //custom filter to search by min and max price 
    angular
        .module('myApp')
        .filter('range', function () {
        return function (items, property, min, max) {
            return items.filter(function (item) {
                return item[property] >= min && item[property] <= max;
            })
        }
    })

})();