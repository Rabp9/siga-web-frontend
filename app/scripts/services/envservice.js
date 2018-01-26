'use strict';

/**
 * @ngdoc service
 * @name sigaWebFrontendApp.envService
 * @description
 * # envService
 * Factory in the sigaWebFrontendApp.
 */
angular.module('sigaWebFrontendApp')
.factory('envService', function () {
    return {
        getHost: function() {
            switch (window.location.hostname) {
                case 'localhost':
                    return 'http://localhost:8000/siga-web-backend/';
                case '172.20.1.2':
                    return 'http://172.20.1.2:8989/siga-web/api/';
            }
        }
    };
});