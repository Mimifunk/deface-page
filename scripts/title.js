let counter = 0,
    Title = 'nevermore >.<', 
    direction = true;

let aniTitle = setInterval(function() {
    if (counter == Title.length) {
        direction = false;
    }
    if (counter == 0) {
        direction = true;
    }
    counter = direction ? ++counter : --counter;
    let newtitle = counter == 0 ? '' : Title.slice(0, counter);
    document.title = newtitle;
}, 400);

window.oncontextmenu = function() {
    return false;
};

$(document).ready(function() {
    $(document).keydown(function(E) {
        if (E.keyCode == 123) { 
            return false;
        } else {
            if ((E.ctrlKey && E.shiftKey && E.keyCode == 73) || 
                (E.ctrlKey && E.shiftKey && E.keyCode == 74)) {
                return false;
            }
        }
    });
});

function audioPlay() {
    let E = document.getElementById('audio');
    E.volume = 0.3;
    E.play();
}

function videoPlay() {
    let E = document.getElementById('video');
    E.play();
}
