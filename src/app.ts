angular.module('mcdatesApp', ['ngMaterial', 'ngMessages'])
.controller('McdatesController', function () {
  this.myDate = new Date();
});
