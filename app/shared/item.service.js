'use strict';

angular.
module('itemServise', [])
  .service('Items', ['$http','$localStorage', function($http,$localStorage) {
    var self = this;
    return {
      getItemById: function(id) {
        self.items = $localStorage.items;
        for (var i = 0; i < self.items.length; ++i) {
          if (self.items[i].id === id) {
              // $localStorage.item = self.items[i];
            return self.items[i];
          }
        }
        return null;
      }
    }

  }]);
