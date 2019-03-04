import $ from 'jquery';

$(document).ready((): void => {
    if ($('#bottomNotification').length) {
        // $('#bottomNotification').remove();
        $('#bottomNotification').hide();
    }
    if ($('div#warningAboveSource').length) {
        $('div#warningAboveSource').remove();
    }
});
