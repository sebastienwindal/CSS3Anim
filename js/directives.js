app.directive('movieSelected', function() {
    return {
        restrict: 'A',
        link:function (scope, element, attrs) {
            var thumb = angular.element(element);
            thumb.bind('click', animateThumb);

            function animateThumb() {
                // get the CSS classes of our HTML element
                var classes = thumb.attr("class").split(" ");
                if (_.contains(classes, "animatedhighlightImage")) {
                    // this element is already selected, unselect it.
                    thumb.removeClass("animatedhighlightImage");
                } else {
                    // the element was not selected before.
                    // "unselect" previously selected movie.
                    thumb.parent().children().removeClass("animatedhighlightImage");
                    // select the new one.
                    thumb.addClass("animatedhighlightImage");    
                }
            }
        }
    };
});


























app.directive('flippingText', function() {
    return {
        restrict: 'E',
        template:'<p>{{t}}</p>',
        scope: {
            text: '=' // get the text attribute as is
        },
        link:function(scope, elm, attrs){
            var p = elm.children("p");
            scope.$watch("text", function(newVal, oldVal, scope) {

                p.addClass("flipping");

                setTimeout(function() {
                    scope.t = newVal;
                    scope.$apply();
                    
                    //var h = newVal.replace(/[aeiouyAEIOUY]/g, function(g) {
                    //    return "<span style='color:lime'>" + g + "</span>";
                    //});
                    //p.html(h);
                }, 500);
                setTimeout(function() {
                    p.removeClass("flipping");
                }, 1000);
               
            });
    }

    };
});

