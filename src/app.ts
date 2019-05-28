declare var moment;
declare var angular;

angular.module('mcdatesApp', ['ngMaterial', 'ngMessages'])

.config(function($mdDateLocaleProvider) {

  $mdDateLocaleProvider.formatDate = function(date) {
    return moment(date).format('YYYY-MM-DD');
  };

  $mdDateLocaleProvider.parseDate = function(date) {
    return moment(date).format('YYYY-MM-DD');
  };

})

.component('mcDates', {
  bindings: {
    dateFrom: '=',
    dateTo: '=',
    mcChange: '&',
  },
  template: `
    <md-datepicker ng-model="$ctrl.dateFrom"
    ng-change="$ctrl.mcChange()"
    md-open-on-focus="yes"></md-datepicker>
    
    <md-datepicker ng-model="$ctrl.dateTo"
    ng-change="$ctrl.mcChange()"
    md-open-on-focus="yes"></md-datepicker>
  `,
  controller: function () {
  },
})

.controller('McdatesController', function () {
  this.dateFrom = moment().format('YYYY-MM-DD');
  this.dateTo = moment().format('YYYY-MM-DD');

  this.changeDates = function () {
    console.log(this.dateFrom, this.dateTo);
  }
});
