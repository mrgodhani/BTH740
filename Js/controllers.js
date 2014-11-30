'use strict';

/* Controllers */

angular.module('myApp').
controller('OrderController',
    function($scope)
    {
        $scope.breadtypes = [
        {name:'Italian', image: 'https://order.subway.com/Images/Subway/en-us/Options/o_BreadItalian.png'},
        {name:'9-Grain Wheat', image: 'https://order.subway.com/Images/Subway/en-us/Options/o_BreadWheat.png'},
        {name:'Honey Oat', image: 'https://order.subway.com/Images/Subway/en-us/Options/o_BreadHOWheat.png'},
        {name:'Italian Herb & Cheese', image: 'https://order.subway.com/Images/Subway/en-us/Options/o_BreadItalianHerb.png'},
        {name:'Flat Bread', image: 'https://order.subway.com/Images/Subway/en-us/Options/o_BreadFlat.png'},
        {name:'Jalapeno Cheese', image: 'https://order.subway.com/Images/Subway/en-us/Options/o_BreadJalepenoCheese.png'}
        ];

        $scope.sandwichtypes = [
        {name:'Black Forest Ham', image: 'https://order.subway.com/Images/Subway/en-us/ProductClassLink/3002.png'},
        {name:'Chicken & Bacon Ranch Melt', image: 'https://order.subway.com/Images/Subway/en-us/ProductClassLink/3004.png'},
        {name:'Cold Cut Combo', image: 'https://order.subway.com/Images/Subway/en-us/ProductClassLink/3005.png'},
        {name:'Italian B.M.T', image: 'https://order.subway.com/Images/Subway/en-us/ProductClassLink/3006.png'},
        {name:'Meatball Marinara', image: 'https://order.subway.com/Images/Subway/en-us/ProductClassLink/3007.png'},
        {name:'Oven Roasted Chicken', image: 'https://order.subway.com/Images/Subway/en-us/ProductClassLink/3008.png'},
        {name:'Roast Beef', image: 'https://order.subway.com/Images/Subway/en-us/ProductClassLink/3009.png'},
        {name:'Spicy Italian', image: 'https://order.subway.com/Images/Subway/en-us/ProductClassLink/3010.png'},
        {name:'Steak & Cheese', image: 'https://order.subway.com/Images/Subway/en-us/ProductClassLink/3011.png'},
        {name:'Subway Club', image: 'https://order.subway.com/Images/Subway/en-us/ProductClassLink/3009.png'},
        {name:'Sweet Onion Chicken Teriyaki', image: 'https://order.subway.com/Images/Subway/en-us/ProductClassLink/3010.png'},
        {name:'Tuna', image: 'https://order.subway.com/Images/Subway/en-us/ProductClassLink/3011.png'}
        ];

        $scope.toppings = 
        [
        {name:'Black Forest Ham', image: 'https://order.subway.com/Images/Subway/en-us/ProductClassLink/3002.png'},
        {name:'Chicken & Bacon Ranch Melt', image: 'https://order.subway.com/Images/Subway/en-us/ProductClassLink/3004.png'},
        {name:'Cold Cut Combo', image: 'https://order.subway.com/Images/Subway/en-us/ProductClassLink/3005.png'},
        {name:'Italian B.M.T', image: 'https://order.subway.com/Images/Subway/en-us/ProductClassLink/3006.png'},
        {name:'Meatball Marinara', image: 'https://order.subway.com/Images/Subway/en-us/ProductClassLink/3007.png'},
        {name:'Oven Roasted Chicken', image: 'https://order.subway.com/Images/Subway/en-us/ProductClassLink/3008.png'},
        {name:'Roast Beef', image: 'https://order.subway.com/Images/Subway/en-us/ProductClassLink/3009.png'},
        {name:'Spicy Italian', image: 'https://order.subway.com/Images/Subway/en-us/ProductClassLink/3010.png'},
        {name:'Steak & Cheese', image: 'https://order.subway.com/Images/Subway/en-us/ProductClassLink/3011.png'},
        {name:'Subway Club', image: 'https://order.subway.com/Images/Subway/en-us/ProductClassLink/3009.png'},
        {name:'Sweet Onion Chicken Teriyaki', image: 'https://order.subway.com/Images/Subway/en-us/ProductClassLink/3010.png'},
        {name:'Tuna', image: 'https://order.subway.com/Images/Subway/en-us/ProductClassLink/3011.png'}
        ];
    });