(function(){
    function RoomCtrl(Room, $uibModal, $log, Message, $cookies) {
        this.rooms = Room.all;
        this.room = '';

        this.getMessages = function(roomId, room) {
            //console.log(roomId)
            this.currentRoom = roomId;
            this.messages = Message.getByRoomId(roomId);
        }

        this.createMessage = function(message) {
            var newMessage = {};
            newMessage.username = $cookies.get('blocChatCurrentUser');
            newMessage.content = message;
            newMessage.roomId = this.currentRoom;
            newMessage.timeStamp = firebase.database.ServerValue.TIMESTAMP;
            //console.log(newMessage.timeStamp);
            Message.createMessage(newMessage)
        }

        this.animationsEnabled = true;
        this.open = function (size) {
            var modalInstance = $uibModal.open({
                animation: this.animationsEnabled,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: '/templates/Modal.html',
                controller: 'ModalCtrl',
                controllerAs: 'modal',
                size: size
            });

    modalInstance.result.then(function (selectedItem) {
      this.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

    this.toggleAnimation = function () {
         this.animationsEnabled = !this.animationsEnabled;
       };
    }

    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', '$uibModal', '$log', 'Message', '$cookies', RoomCtrl]);
})();
