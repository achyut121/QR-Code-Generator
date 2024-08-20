function hover(){
    document.querySelector('#btn').style.color = "aqua";
}
function out(){
    document.querySelector('#btn').style.color = "antiquewhite";
}

function qr(){
    var x = document.querySelector('#text');
    document.querySelector('#qrImage').src = "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=" + x.value;
}