(function() {
    'use strict';

        Object.defineProperty(window, 'AdController', {
            value: new Proxy({}, {
                get: (target, prop) => {
                    if (prop === '_handle') return '';
                    return () => undefined;
                }
            }),
            writable: false,
            configurable: false
        });

        console.log("[iq digital AdBlock] Successfully initialized.");
})();
