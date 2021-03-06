'use strict';

/**
 * @ngdoc function
 * @name sigaWebFrontendApp.controller:ImpresionTicketsCtrl
 * @description
 * # ImpresionTicketsCtrl
 * Controller of the sigaWebFrontendApp
 */
angular.module('sigaWebFrontendApp')
.controller('ImpresionTicketsCtrl', function ($scope, bienesService, $state) {
    
    $scope.bienes_selected = [];
    $scope.ch_all_bienes = {
        value: false
    };
    
    $scope.ch_all_bienes_event = function() {
        if ($scope.ch_all_bienes.value) {
            angular.forEach($scope.bienes, function(value, key) {
                if ($scope.bienes_selected.indexOf(value.Bien_CodigoPatri) === -1) {
                    $scope.bienes_selected.push(value.Bien_CodigoPatri);
                }
            });
        } else {
            $scope.bienes_selected.length = 0;
        }
    };
    
    $scope.searchBienes = function(search) {
        $scope.loading = true;
        bienesService.get({search: search}, function(data) {
            $scope.bienes = data.bienes;
            $scope.buscados = data.buscados;
            $scope.encontrados = data.encontrados;
            $scope.loading = false;
        });
    };
   
    $scope.showBienesPrint = function() {
        var url = $state.href('reporte-print-qr', {codigos_patrimoniales: $scope.bienes_selected});
        window.open(url,'_blank');
    };
});