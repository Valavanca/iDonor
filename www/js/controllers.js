angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
    $scope.data = {};
 
    $scope.login = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            $state.go('tab.dash');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
    }
})

.controller('DashCtrl', function($scope) {})


.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

/////////////
.controller('PeopleCtrl', function ($http, $log, $window, $ionicPopup, $state, $scope, $rootScope, People, BloodBankService) {

    // array of people
        BloodBankService.getBloodDirectory().success(function (data) {
        $scope.GroupList = [];
        var obj, split;
        for (var i = 0; i < data.feed.entry.length; i++) {
            obj = {};

            data.feed.entry[i].content.$t.split(',').forEach(function (v) {
                split = v.split(':');
                obj[split[0].trim()] = split[1].trim();

            });
            $scope.GroupList.push(obj);
        }
        
        }).error(function (data) { });

    // selection blood
        $scope.TypeList = [
          { text: "0", value: "0" },
          { text: "A", value: "A" },
          { text: "B", value: "B" },
          { text: "AB", value: "AB" }
        ];

        $scope.RhList = [
          { text: "+", value: "+" },
          { text: "-", value: "-" },

        ];

        $scope.data = {
            Type: 'A',
            Rh: '+'
        };



        
        $scope.RhChange = function (item) {
            console.log("Rh:", item.value);
            changedValue($scope.data.Type, item.value)
        };
        
        $scope.TypeChange = function (item) {
            console.log("Type:", item.value);
            console.log("Rh:", $scope.data.Rh);
            changedValue(item.value, $scope.data.Rh)
        };

       /////////////////////////////////// to be continued...
        
        function changedValue(type, rh) {
            $scope.tempGroupList = [];
            for (var i = 0; i < $scope.GroupList.length; i++) {
                if ($scope.GroupList[i].group === type && $scope.GroupList[i].rh === rh) {
                    $scope.tempGroupList.push($scope.GroupList[i]);
                }
            };
        };

})

////////////
.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

