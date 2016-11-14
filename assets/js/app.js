(function () {

    "use strict";

    // Zmienna body
    var $body = document.getElementById('body');

    // Slider.
    (function () {

        // Opcje.
        var settings = {

            //Zdjęcia formatowane do url.
            images: {

                'images/bg01.png': '',
                'images/bg02.jpg': '',
                'images/bg03.jpg': '',
                'images/bg04.jpg': ''

            },
            // Czas do nastepnego zdjęcia.
            delay: 6000

        };

        // Zmienne.
        var postion = 0,
            lastPosition = 0,
            wrapper,
            $bgs = [],
            $bg,
            images; // zdjęcia

        // Dodanie do body diva o id bg
        wrapper = document.createElement('div');
        wrapper.id = 'bg';
        $body.appendChild(wrapper);

        for (images in settings.images) {

            // Stworzenie tła i przypisanie danego obrazu
            $bg = document.createElement('div');
            $bg.style.backgroundImage = 'url("' + images + '")';
            wrapper.appendChild($bg);

            // Dodanie do tablicy
            $bgs.push($bg);

        }

        // Główna pętla, dodawanie klas
        $bgs[postion].classList.add('visible');
        $bgs[postion].classList.add('top');

        window.setInterval(function () {

            lastPosition = postion;
            postion++;

            // Powrot do początku jeżeli pozycja w tym przypadku bedzie rowna 4. Ponieważ mamy cztery zdjecia
            if (postion == $bgs.length) {

                postion = 0;

            }

            // Zamiana klas
            $bgs[lastPosition].classList.remove('top');
            $bgs[postion].classList.add('visible');
            $bgs[postion].classList.add('top');

            // Ukrycie ostatniego zdjęcia po krótkiej przerwie
            window.setTimeout(function () {

                $bgs[lastPosition].classList.remove('visible');

            }, settings.delay / 2);

        }, settings.delay);

    })();

})();