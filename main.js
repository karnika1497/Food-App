
var food= angular.module('foodieApp', ['ngRoute']);

food.controller('logincontroller',function($scope){});

food.controller('maincontroller', function ($scope) {
	$scope.restaurants=$scope.restaurants = [{
		name: 'Farzi Cafe',
		address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
		location: 'Connaught Place',
		category: 'Casual Dining, Bar',
		vote: '4.2',
		cuisines: 'Modern Indian',
		cost: '2200',
		hours: '12 Noon to 1 AM (Mon-Sun)',
		image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
	},
	{
		name: 'Girl In The Cafe',
		address: 'SCO 117-119, Level 2, Sector 17, Chandigarh',
		location: 'Sector 17',
		category: 'Cafe, Bar',
		vote: '3.5',
		cuisines: 'Cafe, Italian',
		cost: '1500',
		hours: '10 AM to 11 PM (Mon-Sun)',
		image: 'https://miami.eat24hours.com/files/cuisines/v4/cafe.jpg'
	},
	{
		name: 'Rustic Door',
		address: 'SCO 12, Opposite Mount View, Sector 10, Chandigarh',
		location: 'Sector 10',
		category: 'Casual Dining, Café',
		vote: '3.9',
		cuisines: 'Italian, North Indian, Continental, Cafe',
		cost: '1500',
		hours: '11:30 AM to 11:30 PM (Mon-Sun)',
		image: 'https://b.zmtcdn.com/data/pictures/8/121858/a27edf73ecd10761fda62837c87e41de_featured_v2.jpg'
	},
	{
		name: 'Boston Bites',
		address: 'Shop 39, Sector 11 D, Sector 11, Chandigarh',
		location: 'Sector 11 D',
		category: 'Quick Bites',
		vote: '3.7',
		cuisines: 'Pizza, Burger, Healthy Food',
		cost: '400',
		hours: '9 AM to 11 PM (Mon-Sun)',
		image: 'http://images.jdmagicbox.com/patiala/r5/9999px175.x175.160920123125.p8r5/catalogue/boston-bites-patiala-ffqae.jpg'
	}]
	// body...
});
//------------------------------

	food.config(function($routeProvider){
		$routeProvider
		.when('/',{
			templateUrl : 'pages/login.html',
			controller : 'logincontroller'
		})
		.when('/home',{
			templateUrl : 'pages/main.html',
			controller : 'maincontroller'
		})
	});

//------------------ My js --------------------
var loc_clicked=0;
var name;

//------------- return name of list item--------------
function list_item_name(num){
	var id="#list_item"+ num;
	console.log(id);
	$(id).on('click',function(){
		loc_clicked=1- loc_clicked;
		var name1= $(this).attr("name");
	console.log(name1);
	name=name1;
		$('.loc-btn').val( name);
	});
	
}

	for (var i = 1;i < 5; i++) {
			
	 list_item_name(i);
	}






$('.loc-btn').on('click',function(){
	loc_clicked=1- loc_clicked;
	
	
	console.log(name);
	if (loc_clicked==1) {
		$('.loc-btn').val("");
	}
	
});