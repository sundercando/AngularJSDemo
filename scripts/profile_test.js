function formValidation() {
    var a = document.registration.username;
    var b = document.registration.age;
    var c = document.registration.phone;
    var d = document.registration.email;
    var e = document.registration.address;
    var f = document.registration.profileImg;
    if (allLetter(a)) if (ageCheck(b)) if (phoneCheck(c)) if (emailCheck(d)) saveProfile(profileToSave);
    return false;
}

function allLetter(a) {
    var b = /^[A-Za-z]+$/;
    if (a.value.match(b)) return true; else {
        alert("Please fill the Name and name must have alphabet characters only");
        a.focus();
        return false;
    }
}

function ageCheck(a) {
    var b = /^[1-9]+$/;
    if (a.value.match(b) && a.value <= 100) return true; else {
        alert("Age should be number between 1 to 100");
        return false;
    }
}

function phoneCheck(a) {
    var b = /^[0-9]+$/;
    if (a.value.match(b)) return true; else {
        alert("phone Number Should be Number");
        return false;
    }
}

function emailCheck(a) {
    var b = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (a.value.match(b)) return true; else {
        alert("You have entered an invalid email address!");
        a.focus();
        return false;
    }
}

var profileToSave = {
    id: 0,
    name: "",
    age: "",
    phone: "",
    email: "",
    address: "",
    image: ""
};

function saveProfile(a) {
    alert("Thanks!");
	
	document.registration.username.value = "";;
    document.registration.age.value = "";;
    document.registration.phone.value = "";;
    document.registration.email.value = "";;
    document.registration.address.value = "";;
	
    localStorage.setItem("profile", a);
}

function updateImage() {
    var a = document.getElementById("inputFile");
    var b = new FileReader();
    b.readAsDataURL(a.files[0]);
    b.onloadend = function(a) {
        var b = document.getElementById("yourImgTag");
        b.src = a.target.result;
		
    };
	
}