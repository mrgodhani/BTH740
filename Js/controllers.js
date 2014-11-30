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
    });