// import * as $ from 'jquery';
import $ from 'jquery';
// import * as jqueryProxy from 'jquery';
// const jquery: JQueryStatic = (<any> jqueryProxy).default || jqueryProxy;
// import * as jquery_ from 'jquery';
// const $ = jquery_;
$(document).ready((): void => {
    if ($('#bottomNotification').length) {
        // $('#bottomNotification').remove();
        $('#bottomNotification').hide();
    }
    if ($('div#warningAboveSource').length) {
        $('div#warningAboveSource').remove();
    }
});
