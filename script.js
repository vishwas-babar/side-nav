let showbtn = document.getElementsByClassName('show-btn')[0];
let side_container = document.getElementsByClassName('side-container')[0];

function displaySideNav(){
    side_container.style.width = '300px';
    console.log("displaySideNav called!");

    //hide the show buttton
    showbtn.style.zIndex = '-10';
    showbtn.style.visibility = 'hidden';
}

 function hideNav(){
    side_container.style.width = '0px';
    showbtn.style.zIndex = '10';
    showbtn.style.visibility = 'visible';
}