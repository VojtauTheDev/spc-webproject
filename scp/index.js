window.onload = function playVideo(){
    var video = document.getElementById('video');
    video.play();
    video.addEventListener('ended',function(){
        window.location.href = '/site/mainsite.html';
    });
}