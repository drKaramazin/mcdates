angular.module('mcdatesApp', ['ngMaterial', 'ngMessages'])

.component('mcDates', {
    bindings: {
        dateFrom: '=',
        dateTo: '=',
    },
    template: `
        <md-datepicker ng-model="$ctrl.dateFrom" md-open-on-focus="yes"></md-datepicker>
        <md-datepicker ng-model="$ctrl.dateTo" md-open-on-focus="yes"></md-datepicker>
    `,
})

.controller('McdatesController', function () {
  this.dateFrom = new Date();
  this.dateTo = new Date();
});
