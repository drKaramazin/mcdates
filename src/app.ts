angular.module('mcdatesApp', [])
.controller('McdatesController', function () {
  const mcdates = this;
  mcdates.todos = [
    {text:'learn AngularJS 234578', done:true},
    {text:'build an Ang', done:false},
  ];
});