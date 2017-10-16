(function () {
    'use strict';

    angular
        .module('app')
        .factory('FlashService', FlashService);

    function Error(message) {
        window.alert("Incorrect login id and password");
    }
}()