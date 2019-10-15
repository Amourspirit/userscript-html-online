import $ from 'jquery';

$(document).ready((): void => {
    if ($('#bottomNotification').length) {
        // $('#bottomNotification').remove();
        $('#bottomNotification').hide();
    }
    if ($('div#warningAboveSource').length) {
        $('div#warningAboveSource').remove();
    }
    if ($('.szekcio4').length) {
        $('.szekcio4').hide();
    }
    if ($('.szekcio1').length) {
        $('.szekcio1').css('width', '49%');
    }
    if ($('.szekcio3').length) {
        $('.szekcio3').css('width', '49%');
    }
});
