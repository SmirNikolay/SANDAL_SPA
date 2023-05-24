window.addEventListener('DOMContentLoaded', function () {

        type="text/javascript">
        ymaps.ready(init);
        function init(){
            var myMap = new ymaps.Map("map", {
                center: [55.784005, 37.576376],
                zoom: 10
            });
            var myPlacemark = new ymaps.GeoObject({
                geometry: {
                    type: "Point",
                    coordinates: [55.769114, 37.470895]
                }
            });
            var myPlacemark_2 = new ymaps.GeoObject({
                geometry: {
                    type: "Point",
                    coordinates: [55.784005, 37.576376]
                }
            });
            myMap.geoObjects.add(myPlacemark);
            myMap.geoObjects.add(myPlacemark_2);
        }

    const popupLinks = document.querySelectorAll('.popup__link');
    const body = document.querySelector('body');
    const lockPadding = document.querySelectorAll('.lock__padding');
    let unlock = true;

    const timeout = 600;

    if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener('click', function (e) {
        const popupName = popupLink.getAttribute('href').replace('#', '');
        const curentPopup = document.getElementById(popupName);
        popupOpen(curentPopup);
        e.preventDefault();
        });
    }
    }
    const popupCloseIcon = document.querySelectorAll('.popup-close');
    if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function (e) {
        popupClose(el.closest('.popup'));
        e.preventDefault();
        });
    };
    };

    function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
        popupClose(popupActive, false);
        } else {
        bodyLock();
        }
        curentPopup.classList.add('open');
        curentPopup.addEventListener('click', function (e) {
        if (!e.target.closest('.popup__content')) {
            popupClose(e.target.closest('.popup'));
        };
        });
    };
    };
    function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
        bodyUnlock();
        }
    }
    }

    function bodyLock() {
      const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

      if (lockPadding.length > 0) {
          for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index]; 
            el.style.paddingRight = lockPaddingValue;
          }
      }
      body.style.paddingRight = lockPaddingValue;
      body.classList.add('lock');

      unlock = false;
      setTimeout(function () {
        unlock = true;
      }, timeout);
    };

    function bodyUnlock() {
    setTimeout(function () {
        if (lockPadding.length > 0){
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index]; 
            el.style.paddingRight = '0px';
        }
        }  
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);
    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
    }

    document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
        const popupActive = document.querySelector('.popup.open');
        popupClose(popupActive);
    }
    });

    [].forEach.call( document.querySelectorAll('.tel'), function(input) {
        var keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (___) ___ __ __",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function(a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function(a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5)  this.value = ""
        }
    
        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)
    
      });

    document.querySelectorAll('a[href^="#cert"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    document.querySelectorAll('a[href^="#hottime"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    document.querySelectorAll('a[href^="#masters"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    document.querySelectorAll('a[href^="#footer"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    document.querySelector('.header__mobile-burger-btn').addEventListener('click', function () {
        document.querySelector('.header__mobile-burger-menu').classList.toggle('active');
        document.querySelector('.header__mobile-burger-btn').classList.toggle('active');
    });
  });