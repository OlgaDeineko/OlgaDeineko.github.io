'use strict';

angular.module('itemList', []).component('itemList', {
    templateUrl: '../../app/item-list/item-list.html',
    controller: ['Items','$sce', '$localStorage','$scope',function ItemListController(Items,$sce,$localStorage,$scope) {
      var self = this;
      if(typeof $localStorage.items == "undefined" ){
        self.items = [];
      }
      else{
        self.items = $localStorage.items;
      }

      self.setItem = function (id) {
        self.currentItemUrl = $sce.trustAsResourceUrl("#!/items/"+id);
        self.frameDisplayed = true;
      };

      self.setItemLength = function (id) {
        self.itemForlength = $localStorage.items;
        for (var i = 0; i < self.itemForlength.length; ++i) {
          if (self.itemForlength[i].id === id) {
            return self.itemForlength[i].itemComments.length;
          }
        }
        return null;
      };


      self.addItem = function () {

        if(typeof $localStorage.items == "undefined" ){
          self.items = [];
        }
        else{
          self.items = $localStorage.items;
        }

        if(self.items.length == null || typeof self.items.length == "undefined"){
          self.id = 1;
        }
        else {
          self.id = self.items.length +1;
        }
        self.items.push({ id:self.id, name:self.name,itemComments:[]});
        $localStorage.items = self.items;
        console.log($localStorage.items);
        self.name = '';
      };

      self.deleteItem = function(item){
        var index = self.items.indexOf(item);
        self.items.splice(index, 1);
        $localStorage.items = self.items;
        self.frameDisplayed = false;
      };

     }]
  });


