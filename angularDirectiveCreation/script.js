/*
Project Name: Angular Directive Creation
File Name: index.html
Author: Lance Takiguchi
Date: 10/18/2016 Time: 16:14 
Objective: Get Practice with Angular's directive creation
Prompt: https://docs.google.com/presentation/d/1KbEfzhGO-Gj9bDaqwAIlwGCbXymO6J0FYWvCfmx2wdc/pub?start=false&loop=false&delayms=15000&slide=id.p
*/
var app = angular.module("directiveApp", []);

app.directive("student", function(){
  return {
    restrict: 'AE',
    //** Create different types of directive to inject
    templateUrl: function(elem, attr){
      return 'student-' + attr.type + '-template.html';
    },
    //** Add in students from a JS array into a controller
       controller: function(){
       	this.name = "";
       	this.course = "";
       	this.grade = "";
       	this.add = function(){
       		var a = {
       			name: this.name,
       			course: this.course,
       			grade: this.grade
       		};
       		this.studentArr.push(a);
       		this.clear();
       	}
       	this.clear = function(){
       		this.name = "";
       		this.course = "";
       		this.grade = "";
       	}
        this.studentArr = [
          {name: 'Bruce Wayne',
           course: 'Economics',
           grade: '94'
          },
          {name: 'Clark Kent',
           course: 'Creative Writing',
           grade: '81'
            
          },
          {name: 'Hal Jordan',
           course: 'Avionics',
           grade: '88'
            
          },
          {name: 'Barry Ale',
           course: 'Forensic Science',
           grade: '98'
          },
        ];
    }, 
    controllerAs: 'sc'
  }
});