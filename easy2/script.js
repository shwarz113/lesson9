let age = document.getElementById('age');

//1 вариант
let User1 = {
	name: "Fedor",
	surname: "Vovkin",
	value: age.value,
	showUser: function (surname, name) {
         alert("Пользователь " + this.surname + " " + this.name + ", его возраст " + this.value);
	}
};

let btn1 = document.getElementsByTagName("button")[0];
btn1.addEventListener("click", function(){
	User1.showUser();
});


//2 вариант
function User(surname, name) {
	this.surname = surname;
	this.name = name,
	this.value = age.value,
    this.showUser = function(){
    	alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
    }
};
let btn2 = document.getElementsByTagName("button")[1],
	boris = new User("Ivanov", "Boris");

btn2.addEventListener("click", function(){
	boris.showUser();
});
