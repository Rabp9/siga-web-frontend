'use strict';

/**
 * @ngdoc service
 * @name sigaWebFrontendApp.patBienesService
 * @description
 * # patBienesService
 * Factory in the sigaWebFrontendApp.
 */
angular.module('sigaWebFrontendApp')
.factory('patBienesService', function ($resource, envService) {
    return $resource(envService.getHost() + 'pat_bienes/:id.json', {}, {
        getByCodigosPatrimoniales: {
            method: 'GET',
            url: envService.getHost() + 'pat_bienes/getByCodigosPatrimoniales/:codigos_patrimoniales.json'
        }
    });
});