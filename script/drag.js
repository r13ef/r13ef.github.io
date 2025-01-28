for (object of document.getElementsByClassName('object')) {
    top_int = parseInt(object.offsetTop)
    left_int = parseInt(object.offsetLeft)
    object.style.backgroundColor = 'rgb(' + top_int * 256 / window.innerHeight + ' ' + left_int * 256 / window.innerWidth + ' ' + (top_int + left_int) * 256 / (window.innerHeight + window.innerWidth) + ')'
}

box1.onpointermove = function (event) {
    if (event.buttons) {
        this.draggable = false
        this.style.position = 'absolute'
        this.style.top = this.offsetTop + event.movementY + 'px'
        this.style.left = this.offsetLeft + event.movementX + 'px'
        this.style.margin = 0 + 'px';
        this.setPointerCapture(event.pointerId)
        top_int = parseInt(this.style.top)
        left_int = parseInt(this.style.left)
        this.style.backgroundColor = 'rgb(' + top_int * 256 / window.innerHeight + ' ' + left_int * 256 / window.innerWidth + ' ' + (top_int + left_int) * 256 / (window.innerHeight + window.innerWidth) + ')'
    }
}

box2.onpointermove = function (event) {
    if (event.buttons) {
        this.draggable = false
        this.style.position = 'absolute'
        this.style.top = this.offsetTop + event.movementY + 'px'
        this.style.left = this.offsetLeft + event.movementX + 'px'
        this.style.margin = 0 + 'px';
        this.setPointerCapture(event.pointerId)
        top_int = parseInt(this.style.top)
        left_int = parseInt(this.style.left)
        this.style.backgroundColor = 'rgb(' + top_int * 256 / window.innerHeight + ' ' + left_int * 256 / window.innerWidth + ' ' + (top_int + left_int) * 256 / (window.innerHeight + window.innerWidth) + ')'
    }
}

box3.onpointermove = function (event) {
    if (event.buttons) {
        this.draggable = false
        this.style.position = 'absolute'
        this.style.top = this.offsetTop + event.movementY + 'px'
        this.style.left = this.offsetLeft + event.movementX + 'px'
        this.style.margin = 0 + 'px';
        this.setPointerCapture(event.pointerId)
        top_int = parseInt(this.style.top)
        left_int = parseInt(this.style.left)
        this.style.backgroundColor = 'rgb(' + top_int * 256 / window.innerHeight + ' ' + left_int * 256 / window.innerWidth + ' ' + (top_int + left_int) * 256 / (window.innerHeight + window.innerWidth) + ')'
    }
}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function change_direction(x) {
    if (x.index) {
        x.index *= -1;
        x.style.backgroundColor = 'rgb(' + getRandomInt(256) + ' ' + getRandomInt(256) + ' ' + getRandomInt(256) + ')';
    } else {
        x.index = -1;
        x.style.backgroundColor = 'rgb(' + getRandomInt(256) + ' ' + getRandomInt(256) + ' ' + getRandomInt(256) + ')';
    }
}


function enlarge(x) {
    if (!x.style.width || !x.style.height || !x.index) {
        console.log(x.style.width, x.style.height, x.style.backgroundColor)
        x.style.width = '100px';
        x.style.height = '100px';
        x.index = 1;
    }

    if (parseInt(x.style.width) >= 100 && parseInt(x.style.width) >= 100) {
        x.style.width = parseInt(x.style.width) + 2 * x.index + "px";
        x.style.height = parseInt(x.style.height) + 2 * x.index + "px";
    } else if (x.index == 1) {
        x.style.width = parseInt(x.style.width) + 2 + "px";
        x.style.height = parseInt(x.style.height) + 2 + "px";
    }



}