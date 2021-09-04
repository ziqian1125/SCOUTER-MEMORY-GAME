var cv = document.getElementById("cv");
var ctx = cv.getContext('2d');
cv.onmousedown = function (ev) {
    var ev = ev || window.event;
    ctx.moveTo(ev.clientX - cv.offsetLeft, ev.clientY - cv.offsetTop);
    document.onmousemove = function (ev) {
        var ev = ev || window.event;
        ctx.lineTo(ev.clientX - cv.offsetLeft, ev.clientY - cv.offsetTop);
        ctx.stroke();
    }
    document.onmouseup = function () {
        document.onmousemove = null;
        document.onmouseup = null;
    }

    // var dataImg = new Image()
    // dataImg.src = cv.toDataURL('image/png')
    // document.body.appendChild(dataImg) 
}

function copyText(cv){
    var leftdiv = document.getElementById('left')

    var dataImg = new Image()
    dataImg.src = cv.toDataURL('image/png')

    leftdiv.appendChild(dataImg) 

    // document.body.appendChild(dataImg) 
}

cv.crossOrigin = 'anonymous'