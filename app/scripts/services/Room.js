(function() {
    function Room($firebaseArray){
        var Room = {};
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);

        Room.all = rooms;

        Room.add = function(room){
            rooms.$add({ roomName: room }).then(function(ref) {
              var id = ref.key;
              console.log("added record with id " + id);
            });
        }

        return Room;
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
