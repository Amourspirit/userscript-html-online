// ==UserScript==
// @name            Html-Online
// @namespace       https://github.com/Amourspirit/userscript-html-online
// @version         1.0.0
// @description     Cleans up some limits of the html editor including allowing ad blockers
// @author          Paul Moss
// @include         /^https?:\/\/html-online\.com\/editor.*n=.*$/
// @match           https://html-online.com/editor/
// @run-at          document-end
// @noframes
// @homepageURL     https://github.com/Amourspirit/userscript-html-online
// @update          https://github.com/Amourspirit/userscript-html-online/raw/master/dist/html-online.user.js
// @downloadURL     https://github.com/Amourspirit/userscript-html-online/raw/master/dist/html-online.user.js
// @license         MIT
// @grant           none
// ==/UserScript==
(function ($) {
    'use strict';

    $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

    $(document).ready(function () {
        if ($('#bottomNotification').length) {
            $('#bottomNotification').hide();
        }
        if ($('div#warningAboveSource').length) {
            $('div#warningAboveSource').remove();
        }
    });

}($));
//# sourceMappingURL=html-online.user.js.map
