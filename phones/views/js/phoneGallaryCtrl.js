(function () {
    'use strict';

    angular
        .module('myApp')
    .controller("phoneGallaryCtrl", ['$http', "$filter", phoneGallaryCtrl]);
    function phoneGallaryCtrl($http, $filter) {
        var vm = this;
        vm.prices = "1";//initialize the price type drowpdown list
        vm.pagesize = 16;// initialize items per page
        vm.currentpage = 1;// initialize the current page
        vm.phoneEnORAr = /lang-ar/.test(window.top.location.href) ? 'data/phonesArabic.json' : 'data/phones.json';//to get arabic or english data based on url

        //to get number of pages
        function getNumberOfPages(data) {
            return new Array(Math.ceil(data.length / vm.pagesize));
        }


        // to get the data from json file and bind it to the view
        $http.get(vm.phoneEnORAr).then(function (response) {
            debugger
            // map new property in every length on the phone list to convert price from USD to EGP
            for (var i = 0; i < response.data.length; i++) {
                response.data[i]['priceEGP'] = (response.data[i].priceUSD * 17);
            }
            vm.OriginalphonseData = response.data;
            vm.generalData = angular.copy(response.data);
            vm.getDataForCurrentPage(1);

            vm.numberOfPage = getNumberOfPages(vm.OriginalphonseData);
        });

        //to switch the price view between USD and EGP
        vm.convertPrices = function (data) {
            // if EGP
            if (data == 1) {
                vm.showEGP = true;
                vm.showUSD = false;

            }   // if USD
            else if (data == 2) {
                vm.showUSD = true;
                vm.showEGP = false;
            }
        }


        //to filter the data with type

        vm.searchBytype = function (pram) {
            if (pram == 1) {
                var data = angular.copy(vm.generalData);
                vm.phonseData = $filter('filter')(data, { type: 'Tablet' } || { type: 'تابلت' });
                vm.numberOfPage = getNumberOfPages(vm.phonseData);

            } else if (pram == 2) {
                var data = angular.copy(vm.generalData);

                vm.phonseData = $filter('filter')(data, { type: 'Phone' } || { type: 'هاتف' });
                vm.numberOfPage = getNumberOfPages(vm.phonseData);

            }

        }

        //filter by price min and max
        vm.searchByPrice = function (min, max) {
            var data = angular.copy(vm.generalData);
            if (vm.prices == "1") {
                vm.phonseData = $filter('range')(data, 'priceEGP', min, max);
                vm.numberOfPage = getNumberOfPages(vm.phonseData);

            } else if (vm.prices == "2") {
                vm.phonseData = $filter('range')(data, 'priceUSD', min, max);
                vm.numberOfPage = getNumberOfPages(vm.phonseData);

            }


        }
        //filter by color
        vm.searchBycolor = function (data) {
            if (data == "1") {
                var data = angular.copy(vm.generalData);
                vm.phonseData = $filter('filter')(data, { color: 'Black' } || { color: 'اسود' });
                vm.numberOfPage = getNumberOfPages(vm.phonseData);

            } else if (data == 2) {
                var data = angular.copy(vm.generalData);
                vm.phonseData = $filter('filter')(data, { color: 'Gray' } || { color: 'رمادى' });
                vm.numberOfPage = getNumberOfPages(vm.phonseData);

            } else if (data == 3) {
                var data = angular.copy(vm.generalData);
                vm.phonseData = $filter('filter')(data, { color: 'Gold' || { color: 'ذهبى' } });
                vm.numberOfPage = getNumberOfPages(vm.phonseData);

            }



        }
        //get data of the Current Page
        vm.getDataForCurrentPage = function (currentPage) {
            vm.currentpage = currentPage;
            var originalData = angular.copy(vm.OriginalphonseData);
            var start = (currentPage - 1) * 16;
            var end = currentPage * 16;
            vm.phonseData = originalData.slice(start, end);

        }
        // Prev page button
        vm.prev = function () {
            if (vm.currentpage - 1 == 0) {
                return;
            } else {
                vm.getDataForCurrentPage(vm.currentpage - 1);
            }

        }
        // next page button 
        vm.next = function () {
            if (vm.currentpage + 1 > vm.numberOfPage.length) {
                return;
            } else {
                vm.getDataForCurrentPage(vm.currentpage + 1);
            }
        }
        // inisializ the price view by EGP
        vm.convertPrices(1)

    }
})();
