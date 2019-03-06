function load_page(page_path) {
    //document.getElementById("pageContent").innerHTML = '<iframe src="' + page_path + '" width="100%" frameborder=0></iframe>';
    document.getElementById("pageContent").src = page_path;
}


// Adjust content height
function resizeIframe() {
    iFrameID = document.getElementById('pageContent')
    iFrameID.height = window.innerHeight * 0.95;
}


function clickMenu(e) {
    var elem, evt = e ? e : event;
    if (evt.srcElement) elem = evt.srcElement;
    else if (evt.target) elem = evt.target;

    // Define a menu mapping
    menu_mapping = {
        "btn-rt": "m1-relTxt.html",

        "btn-ttv": "m2-thmTopView.html",
        "btn-ttv-ippt": "m2-thmTopView.html",
        "btn-ttv-ord": "m2-thmTopView.html",
        "btn-ttv-enl": "m2-thmTopView.html",
        "btn-ttv-book": "m2-thmTopView.html",
        "btn-ttv-others": "m2-thmTopView.html",

        "btn-tv": "m3-tarView.html",
        "btn-ev": "m4-entView.html"
    }

    // Get button id
    if (elem.id in menu_mapping) {
        // Setting color class
        for (did in menu_mapping) {
            if (did == elem.id) {
                document.getElementById(did).classList.add('selected-item');
            }
            else {
                document.getElementById(did).classList.remove('selected-item');
            }
        }
        // Redirect to
        load_page(menu_mapping[elem.id]);
    }
}