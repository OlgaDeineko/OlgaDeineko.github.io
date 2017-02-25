'use strict';

angular.module('itemDetail', []).component('itemDetail', {
  templateUrl: 'item-detail/item-detail.html',
  controller: ['$routeParams','Items', '$localStorage', function ItemDetailController($routeParams,Items,$localStorage) {
    var self = this;
    self.item = Items.getItemById(parseInt($routeParams.id, 10));

    self.addComment = function () {
      self.item.itemComments.push(self.description);
      self.description = '';
    };

  }]

});