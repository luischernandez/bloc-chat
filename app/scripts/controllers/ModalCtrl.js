(function(){
    function ModalCtrl($uibModalInstance, Room) {
        var $ctrl = this;

      this.ok = function (name) {
        $uibModalInstance.close(Room.add(name));
      };

      this.cancel = function () {
        $uibModalInstance.dismiss('cancel');
      };
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModalInstance', 'Room', ModalCtrl]);
})();
