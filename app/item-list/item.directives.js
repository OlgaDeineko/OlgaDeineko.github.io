angular.
module('itemList')
  .directive('pressEnter', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
          if(event.which === 13) {
            scope.$apply(function (){
              scope.$eval(attrs.pressEnter);
            });

            event.preventDefault();
          }
        });
      }
    }
  }).directive('iframeAutoSize', [function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      element.on('load', function() {
        var iFrameHeight = element[0].contentWindow.document.body.scrollHeight + 'px';
        element.css('height', iFrameHeight);
      });
    }
  }}]).directive('liSelect', [function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {

      var ul = document.getElementById('itemList');

      var selectedLi;

      ul.onclick = function(event) {
        var target = event.target;

        while (target != this) {
          if (target.tagName == 'LI') {
            highlight(target);
            return;
          }
          target = target.parentNode;
        }
      }

      function highlight(node) {
        if (selectedLi) {
          selectedLi.classList.remove('highlight');
        }
        selectedLi = node;
        selectedLi.classList.add('highlight');
      }
    }
  }}]);
