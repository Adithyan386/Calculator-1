function  validate(event){
    event.preventDefault()
    const fname = document.getElementById("fname").value
    if (fname == ""){
        alert("Fill The Form ")
        return false
    }
    else{
        let fname = document.register.fname.value;
        let patternName = /^[A-z\s\.]+$/;
        let validname =   patternName.test(fname)
        if(validname == false){
            alert("The Name Cannot Contain Any Special Characters")
            return false
        }
    }
    const lname1 = document.getElementById("lname1").value
    if(lname1 == ""){
        alert("Fill Second Name")
        return false
    }
    else{
        let lname1 = document.register.lname1.value;
        let patternName = /^[A-z\s\.]+$/;
        let validname1 = patternName.test(lname1)
        if(validname1 == false){
            alert("The Name Cannot Contain Any Special Characters")
            return false
        }
    }
    const address = document.getElementById("address").value
    if(address == ""){
        alert("Fill Your Address")
        return false
    }
    else
    {
        let address = document.register.address.value;
        let patternadr = /^[A-z\s\.]+$/;
        let validadr = patternadr.test(address)
        if(validadr == false){
            alert("The Name Cannot Contain Any Special Characters")
            return false
        }
    }
    const exampleInputEmail1 = document.getElementById("exampleInputEmail1").value
    if(exampleInputEmail1 == ""){
        alert("Fill Your E-Mail")
        return false
    }
    else{
        let exampleInputEmail1 = document.register.exampleInputEmail1.value
        let patternmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
        let validmail = patternmail.test(exampleInputEmail1)
        if(validmail == false){
            alert("Enter Valid E-mail")
            return false
        }
    }
    const phone = document.getElementById("phone").value
    if(phone == ""){
        alert("Enter Your Phone Number")
        return false
    }
    else{
        let phone = document.register.phone.value
        let patternpho = /^[0-9]{10}$/;
        let validpho = patternpho.test(phone)
        if(validpho == false){
            alert("Fill An Valid Phone Number")
            return false    
        }
    }
    const exampleInputPassword1 = document.getElementById("exampleInputPassword1").value
    if(exampleInputPassword1 == ""){
        alert("Fill Your Password")
        return false
    }
    else{
        let exampleInputPassword1 = document.register.exampleInputPassword1.value
        let patternpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&amp;^])[A-Za-z\d@.#$!%*?&amp;]{8,15}$/;
        let validpass  = patternpass.test(exampleInputPassword1)
        if(validpass == false){
            alert("Password must contain atleast 8 characters anuppercase letter,lowercase letter ,number and a special character..");
            return false
        }
    }
    const exampleInputPassword2 = document.getElementById("exampleInputPassword2").value
    if(exampleInputPassword2 == ""){
        alert("Re-Type Password")
        return false

    }
    else{
        if(exampleInputPassword1 != exampleInputPassword2){
            alert("Password is Not Matching...")
        }
        else{
            alert("Form Submitted")
        }
    }


}