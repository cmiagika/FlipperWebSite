(function () {
    "use strict";

    function Controller($scope) {

        var homeNavigationButton = document.getElementById("aHome");
        homeNavigationButton.className += " boxShadow";
        var contactNavigationButton = document.getElementById("aContact");
        contactNavigationButton.className = "box";
        var aboutNavigationButton = document.getElementById("aAbout");
        aboutNavigationButton.className = "box";

        var mainContainer = document.getElementById("inhaltContainer");
        var posCounter;
        for(posCounter = 2000; posCounter >= 0; posCounter--) {
           setTimeout(subtractPosition(posCounter), 100);
        }
        function subtractPosition(posCounterF) {
            mainContainer.style.marginLeft = posCounterF + "px";
            console.log(posCounterF);
        }
    }

    myApp.controller("homeController", Controller);

})();