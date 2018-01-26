'use strict';

/**
 * @ngdoc function
 * @name sigaWebFrontendApp.controller:ReportePrintQrCtrl
 * @description
 * # ReportePrintQrCtrl
 * Controller of the sigaWebFrontendApp
 */
angular.module('sigaWebFrontendApp')
.controller('ReportePrintQrCtrl', function ($scope, $stateParams, bienesService, $window, $timeout) {
    $scope.getBienes = function() {
        bienesService.getByCodigosPatrimoniales({codigos_patrimoniales: $stateParams.codigos_patrimoniales}, function(data) {
            $scope.bienes = data.bienes;
            $timeout(function() {
                $window.print();
            }, 1);
            $timeout(function() {
                $window.close();
            }, 1);
        });
    };
    
    $scope.init = function() {
        $scope.getBienes();
    };
    
    $scope.init();
});