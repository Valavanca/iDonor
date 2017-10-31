angular.module('starter.services', [])
.service('LoginService', function ($q) {
    return {
        loginUser: function (name, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;

            if (name == '1' && pw == '1') {
                deferred.resolve('Welcome ' + name + '!');
            } else {
                deferred.reject('Wrong credentials.');
            }
            promise.success = function (fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function (fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})

 .factory('Chats', function () {
     // Might use a resource here that returns a JSON array

     // Some fake testing data
     var chats = [{
         id: 0,
         name: 'Ben Sparrow',
         lastText: 'You on your way?',
         face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
     }, {
         id: 1,
         name: 'Max Lynx',
         lastText: 'Hey, it\'s me',
         face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
     }, {
         id: 2,
         name: 'Adam Bradleyson',
         lastText: 'I should buy a boat',
         face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
     }, {
         id: 3,
         name: 'Perry Governor',
         lastText: 'Look at my mukluks!',
         face: '../img/11014947.png'
     }, {
         id: 4,
         name: 'Mike Harrington',
         lastText: 'This is wicked good ice cream.',
         face: '../img/9060444.png'
     }];

     return {
         all: function () {
             return chats;
         },
         remove: function (chat) {
             chats.splice(chats.indexOf(chat), 1);
         },
         get: function (chatId) {
             for (var i = 0; i < chats.length; i++) {
                 if (chats[i].id === parseInt(chatId)) {
                     return chats[i];
                 }
             }
             return null;
         }
     };
 })

.factory('People', function ($http) {
    var users = [];
    var obj, split;

	return {
		getUsers: function(){
		    return $http.get("https://spreadsheets.google.com/feeds/list/1rB-DJ0lzAwlGVFzGt3EGbUponzv4WZZfkBN6LHwSeCg/od6/public/basic?hl=en_US&alt=json").then(function (data) {

		        users = data
				return users;
			});
		},
		getUser: function(index){
			return users;
		}
	}
})

.service('BloodBankService', function BloodBankService($http) {

    this.getBloodDirectory = function () {
        return $http({
            method: 'GET',
            cache: true,
            url: 'https://spreadsheets.google.com/feeds/list/1rB-DJ0lzAwlGVFzGt3EGbUponzv4WZZfkBN6LHwSeCg/od6/public/basic?hl=en_US&alt=json'
        });
    };
});


