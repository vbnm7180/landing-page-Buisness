        function slide1() {
            document.getElementById("slide1").style.display = "block";
            document.getElementById("slide2").style.display = "none";
            document.getElementById("slide3").style.display = "none";
        };

        function slide2() {
            document.getElementById("slide1").style.display = "none";
            document.getElementById("slide2").style.display = "block";
            document.getElementById("slide3").style.display = "none";
        };

        function slide3() {
            document.getElementById("slide1").style.display = "none";
            document.getElementById("slide2").style.display = "none";
            document.getElementById("slide3").style.display = "block";
        };

        function scroll_to_bottom(change, place, time) {
            var top = 0;
            var scr = setInterval(function () {
                top += change;
                if (top > place) {
                    clearInterval(scr);
                }
                else {
                    window.scrollTo(0, top);
                }
            }, time);
        };

        function scroll_to_top(change, place, time) {
            var bottom = 6098;
            var scr = setInterval(function () {
                bottom = bottom - change;
                if (bottom < place) {
                    clearInterval(scr);
                }
                else {
                    window.scrollTo(0, bottom);
                }
            }, time);
        };

        function twitter_icon1() {
            document.getElementById("twitter1").style.display = "none";
            document.getElementById("twitter2").style.display = "block";
        };

        function twitter_icon2() {
            document.getElementById("twitter1").style.display = "block";
            document.getElementById("twitter2").style.display = "none";
        };

        function facebook_icon1() {
            document.getElementById("facebook1").style.display = "none";
            document.getElementById("facebook2").style.display = "block";
        };

        function facebook_icon2() {
            document.getElementById("facebook1").style.display = "block";
            document.getElementById("facebook2").style.display = "none";
        };