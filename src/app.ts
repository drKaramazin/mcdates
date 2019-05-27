angular.module('mcdatesApp', [])
.controller('McdatesController', function () {
  const mcdates = this;
  mcdates.todos = [
    {text:'learn AngularJS 345', done:true},
    {text:'build an Ang', done:false},
  ];
});
