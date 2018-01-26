'use strict';

/**
 * @ngdoc service
 * @name sigaWebFrontendApp.bienesService
 * @description
 * # bienesService
 * Factory in the sigaWebFrontendApp.
 */
angular.module('sigaWebFrontendApp')
.factory('bienesService', function ($resource, envService) {
    return $resource(envService.getHost() + 'bienes/:id.json', {}, {
        getByCodigosPatrimoniales: {
            method: 'GET',
            url: envService.getHost() + 'bienes/getByCodigosPatrimoniales/:codigos_patrimoniales.json'
        }
    });
});