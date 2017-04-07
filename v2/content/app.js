/**
 * Created by y7se on 03/04/2017.
 */
(function () {
    'use strict';

    angular.module('App', ['xeditable']).run(function(editableOptions) {
        //editableOptions.theme = 'bs3';
        //editableOptions.buttons = 'no';
    });

    angular.module('App', ['xeditable']).controller('AppController', AppController);

    AppController.$inject = ['$scope'];

    function AppController($scope) {

        var sc = $scope;

        sc.taskName = 'Click here to edit';
        sc.showMe = false;
        sc.saveName = saveName;
        sc.editName = editName;

        function editName() {
            sc.showMe = true;
        }

        function saveName() {
            sc.showMe = false;
        }
    }
})();
