'use strict';

/**
 * @ngdoc function
 * @name sigaWebFrontendApp.controller:ImpresionTicketsCtrl
 * @description
 * # ImpresionTicketsCtrl
 * Controller of the sigaWebFrontendApp
 */
angular.module('sigaWebFrontendApp')
.controller('ImpresionTicketsCtrl', function ($scope, patBienesService, $state) {
    
    $scope.bienes_selected = [];
    $scope.ch_all_bienes = {
        value: false
    };
    
    $scope.ch_all_bienes_event = function() {
        if ($scope.ch_all_bienes.value) {
            angular.forEach($scope.bienes, function(value, key) {
                if ($scope.bienes_selected.indexOf(value.codigo_patrimonial) === -1) {
                    $scope.bienes_selected.push(value.codigo_patrimonial);
                }
            });
        } else {
            $scope.bienes_selected.length = 0;
        }
    };
    
    $scope.searchBienes = function(search) {
        $scope.loading = true;
        patBienesService.get({search: search}, function(data) {
            $scope.bienes = data.patBienes;
            $scope.loading = false;
        });
    };
   
    $scope.showBienesPrint = function() {
        var url = $state.href('reporte-print-qr', {codigos_patrimoniales: $scope.bienes_selected});
        console.log(url);
        window.open(url,'_blank');
    };
});