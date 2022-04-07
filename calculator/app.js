(function(){
    var app= angular.module("MIC", []);
    
   let appFunc = function($scope){
       
       $scope.appname = "Insurance Calculator";
       $scope.rate="";
       $scope.insured = "";
       $scope.insuredpercent = "";
       $scope.commission = "";
       $scope.netvalue="";
       
       
       
   }
    app.controller("insurancecalculator", appFunc)
}());