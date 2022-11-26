var input = document.getElementById('name');
var age = document.getElementById('age');
var address = document.getElementById('address');
var phone = document.getElementById('phone');
var email = document.getElementById('email');
var CNIC = document.getElementById('CNIC');
var errorElement = document.getElementById('error');
var errorElement2 = document.getElementById('error1');
var errorElement3 = document.getElementById('error2');
var errorElement4 = document.getElementById('error3');
var errorElement5 = document.getElementById('error4');
var errorElement6= document.getElementById('error5');
var result1 = document.getElementById('msg1');
var result2 = document.getElementById('msg2');
var result3 = document.getElementById('msg3');
var result4 = document.getElementById('msg4');
var result5 = document.getElementById('msg5');
var result6 = document.getElementById('msg6');
var array = []
function getValue()
{
    if(input.value==""){
        errorElement.innerHTML="Enter value";
    }else{
        result1.innerHTML=input.value;
    }

    if(age.value==""){
        errorElement2.innerHTML="Enter value";
    }else{
        result2.innerHTML=age.value;
    }

    if(address.value==""){
        errorElement3.innerHTML="Enter value";
    }else{
        result3.innerHTML=address.value;
    }

    if(phone.value==""){
        errorElement4.innerHTML="Enter value";
    }else{
        result4.innerHTML=phone.value;
    }

    if(email.value==""){
        errorElement5.innerHTML="Enter value";
    }else{
        result5.innerHTML=email.value;
    }

    if(CNIC.value==""){
        errorElement6.innerHTML="Enter value";
    }else{
        result6.innerHTML=CNIC.value;
    }
}