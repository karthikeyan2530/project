//Lion:
function showLion() {
    const image = document.getElementById('animalImage');

    // Change the image to a lion
    image.src = 'Photos/lion.jpg'; // 
    image.alt = 'Lion';

    // Play the lion's roar sound
    const lionSound = new Audio('audio/lion-roars-with-growls-and-inhales-195839.mp3'); 
    lionSound.play();
}

//Tiger:
function showTiger() {
    const image = document.getElementById('tigerImage');

    //change the image to a tiger:
    image.src = 'Photos/Tiger.jpg';
    image.alt = 'Tiger';

    //play the Tiger roar sound:
    const tigerSound = new Audio('audio/tiger-attack-195840.mp3');
    tigerSound.play();
}
