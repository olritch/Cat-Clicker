/*var picture = document.getElementById('my-elem'); 
picture.addEventListener('click', function(e){
    //the element has been clicked... do stuff here
    document.getElementById('my-elem').style.width= "250px"
});*/

/*var elem = document.getElementById("my-elem");
elem.addEventListener("click", function(){
    //the element has been clicked... do stuff here
}, false);
*/


var clicks = 0;
function onClick1() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
    document.getElementById('my-elem').classList.add('flash-img');
    setTimeout(function() {
        document.getElementById('my-elem').classList.remove('flash-img');
    }, 100);
};

var clicks2 = 0;
function onClick2() {
    clicks2 += 1;
    document.getElementById("clicks2").innerHTML = clicks2;
    document.getElementById('my-elem2').classList.add('flash-img');
    setTimeout(function() {
        document.getElementById('my-elem2').classList.remove('flash-img');
    }, 100);
};


// click me --- inserted into img

function mDown(obj) {
    obj.innerHTML = "<h1 class='bottom-right'>Thank you!</h1>";
}

function mUp(obj) {
    obj.innerHTML='<h1 class="bottom-right">Click Me!</h1>';
}