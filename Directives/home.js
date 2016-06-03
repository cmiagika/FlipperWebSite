(function () {
    "use strict";

    function Controller($scope) {

        var homeNavigationButton = document.getElementById("aHome");
        homeNavigationButton.className += " boxShadow";
        var contactNavigationButton = document.getElementById("aContact");
        contactNavigationButton.className = "box";
        var aboutNavigationButton = document.getElementById("aAbout");
        aboutNavigationButton.className = "box";

    }

    myApp.controller("homeController", Controller);

})();