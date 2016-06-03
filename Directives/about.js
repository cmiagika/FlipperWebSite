(function () {
    "use strict";

    function Controller($scope) {

        var homeNavigationButton = document.getElementById("aHome");
        homeNavigationButton.className = "box";
        var contactNavigationButton = document.getElementById("aContact");
        contactNavigationButton.className = "box";
        var aboutNavigationButton = document.getElementById("aAbout");
        aboutNavigationButton.className += " boxShadow";
        
    }

    myApp.controller("aboutController", Controller);

})();