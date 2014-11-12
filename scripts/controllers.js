	app.controller('SignInController',['$scope', '$location', function ($scope, $location)
	{
		var validUsers = [["sunder","sunder123"],["admin","admin123"],["test","test123"]];
		
		$scope.formValidation = function()
		{
			if(validateUserName() && validatePassword() && validateUser())
			{
				$location.path("/feed");
			}	
		};
			
			
		function validateUser()
		{
			var validUser = false;
			for(var count = 0; count < validUsers.length; count++)
			{
				if(validUsers[count][0] === $scope.user.username  && validUsers[count][1] === $scope.user.password)
				{
					validUser = true;
					break;
				}
			}
			if(!validUser)
			{
				alert("Your User name or Password is Incorrect");
				$scope.user.username = '';
				$scope.user.password = '';
			}
			return validUser;
		}

		function validatePassword()
		{
			var isValidPassword = true;
			if($scope.user.password.length < 6)
			{
				alert("Password cannot be less than 6 characters.");
				$scope.user.username = '';
				$scope.user.password = "";
				isValidPassword = false;
			}
			return isValidPassword;
		}
		
		function validateUserName()
		{
			var validKeyRegex = /[a-zA-Z0-9]$/, isValidUserName = true;
			if(!(validKeyRegex.test($scope.user.username)))
			{
				alert("User name can only be alphanumeric. Special characters are not allowed...");
				$scope.user.username = "";
				isValidUserName = false;
			}
			return isValidUserName;
		}
			
	}]);
	
	app.controller('FeedController', ['$scope','$location', function ($scope, $location)
	{
	  
	  $scope.inputFeeds =  [{id: 1, text:'First Input Text', date: '2014-11-11T12:44:58.737Z'},
							 {id: 2, text:'Second Input Text', date: '2014-11-11T12:44:58.737Z'}];

	  
	  $scope.createFeeds = function(){
	      var inText = $scope.inputText.text;
		 
		  var feedId = $scope.inputFeeds.length + 1;
		  var currentTime = new Date();
		  addFeed = {id: feedId, text: inText, date: currentTime};
	
  	  
		  $scope.inputFeeds.push(addFeed);

		  $scope.inputText.text = " ";
	  
	  };
	  
	  $scope.removeFeed = function(id){
			for(var i = 0; i < $scope.inputFeeds.length; i++)
			{
				if($scope.inputFeeds[i].id === id)
				{
					$scope.inputFeeds.splice(i,1);
					break;
				}
			}
	  
	  };
	  

  $scope.goToProfile = function(){
    $location.path("/profile");
  }
  
   $scope.goToFeed = function(){
      $location.path("/feed");
 }
	
	}]);
	
	app.controller('ProfileController', ['$scope','$location', function ($scope, $location){
	
	
	$scope.formValidation = function() {
	
	 alert(" from Profile controller");
	
    var a = $scope.username;
    var b = $scope.age;
    var c = $scope.phone;
    var d = $scope.email;
    var e = $scope.address;
    var f =$scope.profileImg;
	
    if (allLetter(a)) if (ageCheck(b)) if (phoneCheck(c)) if (emailCheck(d)) saveProfile(profileToSave);
    return false;
}

function allLetter(a) {
 
    var regExp = /^[A-Za-z]+$/;
    if (regExp.test($scope.username)) return true; else {
        alert("Name must be alphabets only");
        $scope.username = "";
		return false;
		
    }
}

function ageCheck(a) {
    var regExp = /^[1-9]+$/;
    if ((regExp.test($scope.age) && $scope.age <=100)) return true; else {
        alert("Age should be number between 1 to 100");
		$scope.age = "";
        return false;
    }
}

function phoneCheck(a) {
    var regExp = /^[0-9]+$/;
    if (regExp.test($scope.phone)) return true; else {
        alert("Phone Number Should be Number");
		$scope.phone = "";
        return false;
    }
}

function emailCheck(a) {
    var regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regExp.test($scope.email)) return true; else {
        alert("You have entered an invalid email id");
		$scope.email = "";
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
    alert("Profile Saved Successfully!!!");
	
	$scope.username = "";
    $scope.age = "";
    $scope.phone = "";
    $scope.email = "";
    $scope.address = "";
	
    localStorage.setItem("profile", a);
}

$scope.updateImage = function() {
    var a = document.getElementById("inputFile");
    var b = new FileReader();
    b.readAsDataURL(a.files[0]);
    b.onloadend = function(a) {
        var b = document.getElementById("yourImgTag");
        b.src = a.target.result;
		
    };
	
}


 $scope.goToFeed = function(){
     $location.path("/profile");
 }

  $scope.goToProfile = function(){
      $location.path("/feed");
 }


}]);	
	
	
	
	
	