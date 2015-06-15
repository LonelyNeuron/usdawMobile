angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Dashboard) {
      $scope.news = Dashboard.allNews();
      $scope.campaigns = Dashboard.allCampaigns();
      $scope.events = Dashboard.allEvents();
    })

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('joinReasonCtrl', function($scope, Whyjoin) {
  $scope.reasons = Whyjoin.all();
})

.controller('joinReasonDetailCtrl', function($scope, $stateParams, Whyjoin) {
  $scope.reasonx = Whyjoin.get($stateParams.reasonId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
