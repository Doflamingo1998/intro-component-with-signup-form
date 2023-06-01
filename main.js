
function validate() {
    var fnameValue = document.getElementById('fname').value;
    //var inputs = document.querySelectorAll("div.contain-2 > form > div.input-area");
    var error = document.getElementsByClassName("error");
    var inputs = document.getElementsByClassName('input-area');

    if(!fnameValue){
        error[0].innerHTML = "First Name cannot be empty";
        inputs[0].className = "input-area error-input";
        return false;
    }
    error[0].innerHTML = "";
    inputs[0].className = "input-area";

    var lnameValue = document.getElementById('lname').value;
    if(!lnameValue){
        error[1].innerHTML = "Last Name cannot be empty";
        inputs[1].className = "input-area error-input";
        return false;
    }
    error[1].innerHTML = "";
    inputs[1].className = "input-area";

    var emailValue = document.getElementById('email').value;
    if(!emailValue){
        error[2].innerHTML = "Email cannot be empty";
        inputs[2].className = "input-area error-input";
        return false;
    } else if(!emailValue.match(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/)){
        error[2].innerHTML = "Looks like this is not an email";
        inputs[2].className = "input-area error-input";
        return false;
    }
    error[2].innerHTML = "";
    inputs[2].className = "input-area";

    var passwordValue = document.getElementById('password').value;
    if(!passwordValue){
        error[3].innerHTML = "Password cannot be empty";
        inputs[3].className = "input-area error-input";
        return false;
    }
    error[3].innerHTML = "";
    inputs[3].className = "input-area";


//<img src="../intro-component-with-signup-form/images/icon-error.svg"></img>

    
        var info = "";
            info += "Success\n";
            info += "-------------------\n";
            info += "Name: " +fnameValue + lnameValue+"\n";
            info += "Email: " +emailValue+"\n";
            alert(info);
    
}