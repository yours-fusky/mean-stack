'use strict';

/**
 * Configure app at first run
 */
angular.module('core').run(['$rootScope', '$sce',
    function($rootScope, $sce) {

        $rootScope.trustSrc = function(src) {
            return $sce.trustAsResourceUrl(src);
        };
    }
]);