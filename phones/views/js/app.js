"user strict";
var app = angular.module('myApp', ['ui.router']);
//routerApp.config(function ($stateProvider, $urlRouterProvider) {

//    $urlRouterProvider.otherwise('/home');

//    $stateProvider

//        // HOME STATES AND NESTED VIEWS ========================================
//        .state('home', {
//            url: '/home',
//            templateUrl: 'views/index.html'
//        })
 

//});

 
app.controller("phoneGallaryCtrl", ['$http',"$filter", phoneGallaryCtrl]);
function phoneGallaryCtrl($http, $filter) {
    var vm = this;
    vm.colorArry = [];
    vm.prices = "1";
    debugger
    // to get the data from json file and bind it to the view
    $http.get('data/phones.json').then(function (response) {
        debugger
        vm.phonseData = response.data;
        // map new property in every length on the phone list to convert price from USD to EGP
        for (var i = 0; i < vm.phonseData.length; i++) {
            vm.phonseData[i]['priceEGP'] = (vm.phonseData[i].priceUSD * 17);
            vm.colorArry.push(vm.phonseData[i].color);
        }
        console.log('vm.phonseData', vm.phonseData);
    });

    //to switch the price view between USD and EGP
    vm.convertPrices = function (data) {
        
        if (data==1) {
            vm.showEGP = true;
            vm.showUSD = false;
        } else if (data == 2){
            vm.showUSD = true;
            vm.showEGP = false;
        }
    }


        //to filter the data with type

    vm.searchBytype = function (pram) {
        if (pram==1) {
            $http.get('data/phones.json').then(function (response) {

                vm.phonseData = $filter('filter')(response.data, { type: 'Tablet' });
                // map new property in every length on the phone list to convert price from USD to EGP

                for (var i = 0; i < response.data.length; i++) {
                    response.data[i]['priceEGP'] = (response.data[i].priceUSD * 17);
                }


            });
        } else if(pram==2) {
            $http.get('data/phones.json').then(function (response) {

                vm.phonseData = $filter('filter')(response.data, { type: 'Phone' });
                // map new property in every length on the phone list to convert price from USD to EGP

                for (var i = 0; i < response.data.length; i++) {
                    response.data[i]['priceEGP'] = (response.data[i].priceUSD * 17);
                }


            });
        }

    }
    vm.searchByPrice = function (min,max) {
        (vm.minPrice, vm.maxPrice)
        $http.get('data/phones.json').then(function (response) {

          //  vm.phonseData = $filter('filter')(response.data, {priceUSD: min && priceUSD: max});
            // map new property in every length on the phone list to convert price from USD to EGP

            for (var i = 0; i < response.data.length; i++) {
                response.data[i]['priceEGP'] = (response.data[i].priceUSD * 17);
                if (response.data[i].priceUSD >= min && response.data[i].priceUSD <= max) {
                    vm.phonseData = $filter('filter')(response.data[i]);

                }
            }


        });

    }
    vm.convertPrices(1) 

}