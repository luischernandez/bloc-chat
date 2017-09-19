(function(){
    function ModalCtrl($uibModalInstance, Room) {
        var $ctrl = this;

      $ctrl.ok = function (name) {
        $uibModalInstance.close(Room.add(name));
      };

      $ctrl.cancel = function () {
        $uibModalInstance.dismiss('cancel');
      };
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModalInstance', 'Room', ModalCtrl]);
})();
