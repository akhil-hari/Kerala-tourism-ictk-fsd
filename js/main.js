
var homepage=["res/index4.jpg","res/index3.jpg","res/index2.jpg","res/index1.webp"];
var i=0;
console.log("hi frm js")
const home_bg=document.getElementById('web-cover');
//home_bg.style.backgroundImage="url('res/index2.jpg')";
// setInterval(function(){
    
//     i=i>=4?0:i;
//     home_bg.style.backgroundImage="url("+homepage[i]+")";
//     console.log(homepage[i]);
//     i++;
// },10000);\
const email=document.getElementById("exampleInputEmail1");
const confirm_email_address=document.getElementById("exampleInputConfirmEmail1");
const email_confirm_text=document.getElementById("emailConfirm");
const phone=document.getElementById("examplePhone");
const phone_text=document.getElementById("phoneText");
const password_help=document.getElementById("passwordInfo");
function validate_phone(){
    phone_regex=/[0-9]{10}|[0-9]{3}[-.\s][0-9]{3}[-.\s][0-9]{4}/;
    let phone_number=phone.value;
    if(phone_number.length==10||phone_number.length==12&&phone_regex.test(phone_number))
    {
        phone.classList.toggle("is-valid",true);
        phone.classList.toggle("is-invalid",false);
        phone_text.innerHTML="";
    }
    else{
        phone.classList.toggle("is-valid",false);
        phone.classList.toggle("is-invalid",true);
        phone_text.innerHTML="emails doesn't match.!";
    }
    
}

function confirm_email(){
    if(email.value==confirm_email_address.value)
    {
        confirm_email_address.classList.toggle("is-valid",true);
        confirm_email_address.classList.toggle("is-invalid",false);
        email_confirm_text.innerHTML="";
    }
    else{
        confirm_email_address.classList.toggle("is-valid",false);
        confirm_email_address.classList.toggle("is-invalid",true);
        email_confirm_text.innerHTML="emails doesn't match.!";
    }

}
const password=document.getElementById("exampleInputPassword1");
const confirm_password=document.getElementById("exampleInputPassword2");
const password_confirm_text=document.getElementById("passwordConfirm");
const password_under_text=document.getElementById("passwordText");
const password_level_bar=document.getElementById("Level");
const password_level=document.getElementById("passwordLevel");

function validate_password(){

    let score=0;
    let remedy=[];
    let remedy_str="";
    let lowerCase=/[a-z]/;
    let upperCase=/[A-Z]/;
    let number=/[0-9]/;
    let symbols=/[!@#$%^&*()_+?\|?><\/'`"-+=\[\[~{}]/;
    let level=["Very Poor","Poor","Medium","Strong"]
    let l_dis=["red","orangered","yellow","green"];

    password_help.style.display="none";
    password_help.style.visibility="hidden";

    let password_text=password.value;
    if(password_text.length<8)
    {
        password_under_text.innerHTML="Password must be more than 8 charecters long.";
        password.classList.toggle("is-invalid",true);

       

    }
    else{
        password_under_text.innerHTML="";
        password.classList.toggle("is-invalid",false);

        if(password_text.search(lowerCase)>=0)
        {
            score+=1;
        
        }
        else{
            remedy.push("Lower Case Letters");
            
        }
        
        if(password_text.search(upperCase)>=0)
        {
            score+=1;
        }
        else{
            remedy.push("Upper Case Letters");
        }
        if(password_text.search(number)>=0)
        {
            score+=1;
        }
        else{
            remedy.push("Numbers");
        }
        if(password_text.search(symbols)>=0)
        {
            score+=1;
        }
        else{
            remedy.push("Special Symbols");
        }

        if(score<4){
            password.classList.toggle("is-valid",false);
            password_help.style.visibility="visible";
            password_help.style.display="inherit";

            remedy_str="Add "
            for(var i=0;i<remedy.length;i++)
            {
                if(i>0){
                remedy_str+=","+remedy[i];
                }
                else{
                    remedy_str+=remedy[i];
                }
            
            }
            remedy_str+=" to improve your password.";
            password_help.innerText=remedy_str;
        

        }
        else{

            password.classList.toggle("is-valid",true);
        }

        password_level_bar.style.width=score*25+"%";
        password_level.style.color=l_dis[score-1];
        password_level.innerText=level[score-1];
        
        password_level_bar.style.backgroundColor=l_dis[score-1];
       

    }
    
   


}




function confirm_password_function(){
    if(password.value==confirm_password.value)
    {
        confirm_password.classList.toggle("is-valid",true);
        confirm_password.classList.toggle("is-invalid",false);
        password_confirm_text.innerHTML="";
    }
    else{
        confirm_password.classList.toggle("is-valid",false);
        confirm_password.classList.toggle("is-invalid",true);
        password_confirm_text.innerHTML="passwords doesn't match.!";
    }

}
