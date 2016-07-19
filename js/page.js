/**
 * Created by ethan on 4/13/15.
 */

var labeler_status = function () {
    var links = document.querySelectorAll('header > nav > ul > li > a');
    var i;
    for (i = 0; i < links.length; i++) {
        var item = links[i];
        if (item.textContent === document.title) {
            item.parentNode.className = "cur_page";
        }
    }
    return true;
}();
