(function() {
    function UserModalCtrl($uibModal, $cookies) {

        this.save = function() {
            if (this.username && this.username !== '') {
        $cookies.put('blocChatCurrentUser', this.username);
        userModalInstance.close();
        //$uibModal.close(); this line will not work, must be wrapped with modalInstance
        console.log('You created new username ' + this.username);
      } else {
          alert('You must enter a valid username.')
      }
        }

    }

    angular
        .module('blocChat')
        .controller('UserModalCtrl', ['$uibModal', '$cookies', UserModalCtrl]);
})();
