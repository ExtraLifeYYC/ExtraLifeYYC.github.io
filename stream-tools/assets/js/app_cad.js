
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

const particlesJSON = {
    "particles": {
        "number": {
            "value": 15,
            "density": {
                "enable": true,
                "value_area": 500
            }
        },
        "color": {
            "value": "#00C1BE"
        },
        "shape": {
            "type": "triangle",
            "stroke": {
                "width": 2,
                "color": "#00C1BE"
            },
            "polygon": {
                "nb_sides": 3
            }
        },
        "opacity": {
            "value": 0.5,
            "random": true
        },
        "size": {
            "value": 30,
            "random": true
        },
        "line_linked": {
            "enable": false,
            "distance": 100,
            "color": "#00C1BE",
            "opacity": 0.3,
            "width": 2
        },
        "move": {
            "enable": true,
            "speed": 0.3,
            "direction": "top",
            "random": true,
            "straight": false,
            "out_mode": "in",
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

particlesJS("particles-js", particlesJSON)

gsap.from("#cameraOne", {border: 0, x: 210, width: 0, duration: 0.75, delay: 0.75});
gsap.from("#gameOne", {border: 0, y: 550, height: 0, duration: 0.75, delay: 1});
gsap.from("#controllerwings", {opacity: 0, y: 50, duration: 0.75, delay: 0.95});
gsap.from("#donationBar", {opacity: 0, y: -50, duration: 0.75, delay: 0.75});
gsap.from("#totals", {opacity: 0, y: -50, duration: 0.75, delay: 0.75});
gsap.from("#extralifeCAD", {opacity: 0, y: -50, duration: 0.75, delay: 0.95});



//get the URL parameter 'streamer'

const streamer = getUrlParameter('streamer');
layout = getUrlParameter('layout');
region = getUrlParameter('region');
teamid = getUrlParameter('teamid');

// This is the region section
if(region == "calgary"){
    $('#hospital').text("Alberta Children's Hospital")
} else if(region == "edmonton") {
    $('#hospital').text("Stollery Children's Hospital")
} else if(region == "vancouver") {
    $('#hospital').text("BC Children's Hospital")
} else if(region == "saskatchewan") {
    $('#hospital').text("Jim Pattison Children's Hospital")
} else if(region == "winnipeg") {
    $('#hospital').text("Children's Hospital of Winnipeg")
} else if(region == "london") {
    $('#hospital').text("Children's Health Foundation")
} else if(region == "hamilton") {
    $('#hospital').text("McMaster Children's Hospital")
} else if(region == "toronto") {
    $('#hospital').text("SickKids Hospital")
} else if(region == "ottawa") {
    $('#hospital').text("Children's Hospital of Eastern Ontario")
} else if(region == "halifax") {
    $('#hospital').text("IWK Health Centre Foundation")
} else if(region == "newfoundlandlabradour") {
    $('#hospital').text("Janeway Children's Hospital")
} else {
    $('#hospital').text("kids")
}


// This changes toggles layout between webcam mode and non webcam mode
if(layout == "nocam"){
    gsap.to("#cameraOne", {opacity:0});
}

// This is the third message that shouts out the livecaster
if(streamer != ""){
    $("#streamer").text(streamer);
    $("#streamerURL").text(streamer);
}else{
    $("#messageThree").hide();
}

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


//now it's time for an animation loop