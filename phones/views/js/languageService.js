(function () {
    'use strict';
    //language service to localize the view 
    angular
        .module('myApp')
        .factory('languageService', function () {
        var res = {
            'phoneGallery': {
                'eng-us': 'Phone Shope',
                'arabic-eg': 'متجر الهواتف'

            },
            'type': {
                'eng-us': 'Type',
                'arabic-eg': 'النوع'

            },
            'home': {
                'eng-us': 'Language',
                'arabic-eg': 'اللغة'

            },
            'English': {
                'eng-us': 'English',
                'arabic-eg': 'English'

            },
            'Arabic': {
                'eng-us': 'العربية',
                'arabic-eg': 'العربية'

            },
            'filter': {
                'eng-us': 'Filter by',
                'arabic-eg': 'البحث بواسطة'
            },
            'prices': {
                'eng-us': 'Prices on',
                'arabic-eg': 'الاسعار بـ'

            },
            'USD': {
                'eng-us': 'USD',
                'arabic-eg': 'دولار'

            }
            ,
            'EGP': {
                'eng-us': 'EGP',
                'arabic-eg': 'جنيه'

            },
            'Price': {
                'eng-us': 'Price',
                'arabic-eg': 'السعر'

            }
            ,
            'Min': {
                'eng-us': 'Min',
                'arabic-eg': 'اقل'

            }
            ,
            'Max': {
                'eng-us': 'Max',
                'arabic-eg': 'أكثر'

            }
            ,
            'Color': {
                'eng-us': 'Color',
                'arabic-eg': 'اللون'

            },
            'Black': {
                'eng-us': 'Black',
                'arabic-eg': 'اسود'

            },
            'Gray': {
                'eng-us': 'Gray',
                'arabic-eg': 'رمادى'

            },
            'Gold': {
                'eng-us': 'Gold',
                'arabic-eg': 'ذهبى'

            },
            'Tablet': {
                'eng-us': 'Tablet',
                'arabic-eg': 'تابلت'

            },
            'Phone': {
                'eng-us': 'Phone',
                'arabic-eg': 'هاتف'

            },
            'Next': {
                'eng-us': 'Next',
                'arabic-eg': 'التالى'

            },
            'Prev': {
                'eng-us': 'Prev',
                'arabic-eg': 'السابق'

            },
            'Search': {
                'eng-us': 'Search',
                'arabic-eg': 'بحث'

            }
        }

        var currLang = /lang-ar/.test(window.top.location.href) ? 'arabic-eg' : 'eng-us';
        return {
            getLangValue: function (value) {
                return res[value][currLang];
            }
        }
    })
})();