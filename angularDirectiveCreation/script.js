/*
Project Name: Angular Directive Creation
File Name: index.html
Author: Lance Takiguchi
Date: 10/18/2016 Time: 16:14 
Objective: Get Practice with Angular's directive creation
Prompt: https://docs.google.com/presentation/d/1KbEfzhGO-Gj9bDaqwAIlwGCbXymO6J0FYWvCfmx2wdc/pub?start=false&loop=false&delayms=15000&slide=id.p
*/
var app = angular.module("directiveApp", []);

app.directive("studentList", function(){
  return {
    restrict: 'AE',
    templateUrl: 'student-form-template.html'
  }
});
app.directive("studentListTwo", function(){
  return {
    restrict: 'AE',
    templateUrl: 'student-list-template.html'
  }
});