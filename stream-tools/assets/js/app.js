
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

const particlesJSON = {
    "particles": {
        "number": {
            "value": 20,
            "density": {
                "enable": true,
                "value_area": 500
            }
        },
        "color": {
            "value": "#00C1BE"
        },
        "shape": {
            "type": "polygon",
            "stroke": {
                "width": 2,
                "color": "#00C1BE"
            },
            "polygon": {
                "nb_sides": 6
            }
        },
        "opacity": {
            "value": 0.5,
            "random": true
        },
        "size": {
            "value": 10,
            "random": true
        },
        "line_linked": {
            "enable": true,
            "distance": 100,
            "color": "#00C1BE",
            "opacity": 0.3,
            "width": 2
        },
        "move": {
            "enable": true,
            "speed": 0.5,
            "direction": "bottom",
            "random": true,
            "straight": true,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "retina_detect": true
}

//get the URL parameter 'streamer'

const streamer = getUrlParameter('streamer');
layout = getUrlParameter('layout');
background = getUrlParameter('background');
particles = getUrlParameter('particles');


if (particles != "none"){
    particlesJS("particles-js", particlesJSON);
}

if (background == "none"){
    $(".backgroundProd").removeClass("backgroundProd");
}

gsap.from("#cameraOne", {border: 0, x: 210, width: 0, duration: 0.75, delay: 0.75});
gsap.from("#gameOne", {border: 0, y: 550, height: 0, duration: 0.75, delay: 1});
gsap.from("#rockies", {opacity: 0, y: 50, duration: 0.75, delay: 0.95});
gsap.from("#donationBar", {opacity: 0, y: -50, duration: 0.75, delay: 0.75});
gsap.from("#totals", {opacity: 0, y: -50, duration: 0.75, delay: 0.75});
gsap.from("#extralife", {opacity: 0, y: -50, duration: 0.75, delay: 0.95});

// This changes toggles layout between webcam mode and non webcam mode
if(layout == "nocam"){
    gsap.to("#cameraOne", {opacity:0});
}else if(layout == "none"){
    gsap.to("#cameraOne", {opacity:0});
    gsap.to("#gameOne", {opacity:0});    
}

// This is the third message that shouts out the livecaster
if(streamer != ""){
    $("#streamer").text(streamer);
    $("#streamerURL").text(streamer);
}else{
    $("#messageThree").hide();
}

if(layout == "none"){
    gsap.to("#messageOne", {opacity: 0});
    gsap.to("#messageTwo", {opacity: 0});
    gsap.to("#rockies", {opacity: 0, delay:2});
}else{
    var tl = gsap.timeline({repeat: -1, delay: 1});
    tl.from("#messageOne", {opacity: 0, duration:0.5});
    tl.to("#messageOne", {opacity: 0, duration:0.5, delay: 30});
    tl.from("#messageTwo", {opacity: 0, duration:0.5});
    tl.to("#messageTwo", {opacity: 0, duration:0.5, delay: 30});
    // Animate the shoutout if a streamer name is provided
    if(streamer != ""){
        tl.from("#messageThree", {opacity: 0, duration:0.5});
        tl.to("#messageThree", {opacity: 0, duration:0.5, delay: 30}); 
    }

    tl.play();
};

//now it's time for an animation loop