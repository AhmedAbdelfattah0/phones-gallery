(function () {

    //parent controller holdes the languageService
    'use strict';

    angular
        .module('myApp')
        .controller("parentController", ['$http', "$filter", 'languageService', parentCtrl]);
    function parentCtrl($http, $filter, languageService) {

        var vm = this;
        vm.languageService = languageService;


       
    }
})();
