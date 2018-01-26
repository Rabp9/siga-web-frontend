'use strict';

/**
 * @ngdoc overview
 * @name sigaWebFrontendApp
 * @description
 * # sigaWebFrontendApp
 *
 * Main module of the application.
 */
angular
.module('sigaWebFrontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'checklist-model',
    'scrollable-table',
    'monospaced.qrcode',
    'AngularPrint'
])
.config(function($stateProvider, $urlRouterProvider) {
    var mainState = {
        name: 'main',
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        title: 'Home'
    };
    
    var impresionTicketsState = {
        name: 'impresion-tickets',
        url: '/impresion-tickets',
        templateUrl: 'views/impresion-tickets.html',
        controller: 'ImpresionTicketsCtrl',
        controllerAs: 'impresionTickets',
        title: 'Impresión de Tickets'
    };
    
    var reportePrintQrState = {
        name: 'reporte-print-qr',
        url: '/reporte-print-qr/:codigos_patrimoniales',
        templateUrl: 'views/reporte-print-qr.html',
        controller: 'ReportePrintQrCtrl',
        controllerAs: 'reportePrintQr',
        title: 'Impresión de Tickets'
    };
    
    $stateProvider.state(mainState);
    $stateProvider.state(impresionTicketsState);
    $stateProvider.state(reportePrintQrState);
    $urlRouterProvider.when('', '/');
});