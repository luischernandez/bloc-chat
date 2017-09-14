(function() {
    function config($locationProvider, $stateProvider){
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });

        $stateProvider
            .state('Room', {
                url: '/',
                controller: 'RoomCtrl as Room',
                templateUrl: '/templates/Room.html'
            });
    }

    angular
        .module('blocChat', ['ui.router', 'firebase'])
        .config(config);
})();
