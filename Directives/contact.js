(function () {
    "use strict";

    function Controller($scope) {

        var homeNavigationButton = document.getElementById("aHome");
        homeNavigationButton.className = "box";
        var contactNavigationButton = document.getElementById("aContact");
        contactNavigationButton.className += " boxShadow";
        var aboutNavigationButton = document.getElementById("aAbout");
        aboutNavigationButton.className = " box";

    }

    myApp.controller("contactController", Controller);

})();