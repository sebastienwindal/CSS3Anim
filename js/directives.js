
app.directive('movieselected', function() {
    return {
        restrict: 'A',
        link:function (scope, element, attrs) {
            var thumb = angular.element(element);
            thumb.bind('click', animateThumb);

            function animateThumb() {
                var classes = thumb.attr("class").split(" ");
                if (_.contains(classes, "highlightImage2")) {
                    thumb.removeClass("highlightImage2");
                } else {
                    thumb.addClass("highlightImage2");    
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
                }, 200);
                setTimeout(function() {
                    p.removeClass("flipping");
                }, 400);
               
            });
    }

    };
});

