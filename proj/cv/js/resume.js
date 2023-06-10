<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\assets\js\Meting.min.js"></script>var button = document.getElementsByClassName("fa-compass")[0];
var contact = document.getElementsByClassName("contact")[0];
var returnButton = document.getElementsByClassName("return")[0];
var returnButton2 = document.getElementsByClassName("button")[0];
returnButton.addEventListener("click", resumePut);
returnButton2.addEventListener("click", resumePut);
button.addEventListener("click", resumePut);
var flag = true;
var count = 0;
function resumePut() {
    if(flag){
        flag = false;
        if(count%2 == 0){
            contact.style.cssText = "transition: all .5s ease-out;-webkit-transition: all .5s ease-out;";
            contact.className="contact contact-active ";
            returnButton.className="return return-active";
        }else {
            contact.className="contact";
            returnButton.className="return";
        }
        count++;
    }
    setTimeout("flag=true;",400);
}