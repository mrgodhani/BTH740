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
        {name:'White Cheese', image: 'https://order.subway.com/Images/Subway/en-us/Options/o_CheeseAmerWhite.png'},
        {name:'Cheddar Cheese', image: 'https://order.subway.com/Images/Subway/en-us/Options/o_CheeseCheddar.png'},
        {name:'Lettuce', image: 'https://order.subway.com/Images/Subway/en-us/Options/o_LettuceNo.png'},
        {name:'Spinach', image: 'https://order.subway.com/Images/Subway/en-us/Options/o_SpinachNo.png'},
        {name:'Tomatoes', image: 'https://order.subway.com/Images/Subway/en-us/Options/o_TomatoesNo.png'},
        {name:'Cucumber', image: 'https://order.subway.com/Images/Subway/en-us/Options/o_CucumbersNo.png'},
        {name:'Pickles', image: 'https://order.subway.com/Images/Subway/en-us/Options/o_PicklesNo.png'},
        {name:'Green Peppers', image: 'https://order.subway.com/Images/Subway/en-us/Options/o_GPeppersNo.png'},
        {name:'Black Olives', image: 'https://order.subway.com/Images/Subway/en-us/Options/o_OlivesNo.png'},
        {name:'Red Onions', image: 'https://order.subway.com/Images/Subway/en-us/Options/o_OnionsNo.png'},
        {name:'Jalapenos', image: 'https://order.subway.com/Images/Subway/en-us/Options/o_JalepenoNo.png'},
        {name:'Banana Peppers', image: 'https://order.subway.com/Images/Subway/en-us/Options/o_BananaPeppersNo.png'}
        ];

        $scope.sauces =
        [
        {name:'Mayonnaise', image: 'https://order.subway.com/Images/Subway/en-us/Options/o_MayoNo.png'},
        {name:'Light Mayonnaise', image: 'https://order.subway.com/Images/Subway/en-us/Options/o_LightMayoNo.png'},
        {name:'Yellow Mustard', image: 'https://order.subway.com/Images/Subway/en-us/Options/o_MustardNo.png'},
        {name:'Chiptole Southwest', image: 'https://order.subway.com/Images/Subway/en-us/Options/o_ChipotleNo.png'},
        {name:'Sweet Onion', image: 'https://order.subway.com/Images/Subway/en-us/Options/o_SweetOnionNo.png'},
        {name:'Ranch', image: 'https://order.subway.com/Images/Subway/en-us/Options/o_RanchNo.png'},
        ];

        $scope.sides =
        [
        {name:'Coca-Cola classic', image: 'https://order.subway.com/Images/Subway/en-us/Options/p_CocaColaNo.png'},
        {name:'Diet Coke', image: 'https://order.subway.com/Images/Subway/en-us/Options/p_DietCokeNo.png'},
        {name:'Sprite', image: 'https://order.subway.com/Images/Subway/en-us/Options/p_SpriteNo.png'},
        {name:'Dasani Water', image: 'https://order.subway.com/Images/Subway/en-us/Options/20007No.png'},
        {name:'Chips', image: 'https://order.subway.com/Images/Subway/en-us/Options/32052No.png'},
        {name:'Cookies', image: 'https://order.subway.com/Images/Subway/en-us/Options/o_ChocoChipNo.png'}
        ];
    });