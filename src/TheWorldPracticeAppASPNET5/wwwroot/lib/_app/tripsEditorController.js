!function(){"use strict";function t(t,n){var s=this;s.tripName=t.tripName;var e="/api/trips/"+s.tripName+"/stops";s.stops=[],s.errorMessage="",s.isBusy=!0,s.newStop={},n.get(e).then(function(t){s.stops=t.data,o(s.stops)},function(t){s.errorMessage="Failed to Load Stops"})["finally"](function(){s.isBusy=!1}),s.addStop=function(){s.isBusy=!0,n.post(e,s.newStop).then(function(t){s.stops.push(t.data),o(s.stops),s.newStop={}},function(t){s.errorMessage="Failed to Add new Stop"})["finally"](function(){s.isBusy=!1})}}function o(t){if(t&&t.length>0){var o=_.map(t,function(t){return{lat:t.latitude,"long":t.longitude,info:t.name}});travelMap.createMap({stops:o,selector:"#map",currentStop:1,initialZoom:3})}}t.$inject=["$routeParams","$http"],angular.module("app-trips").controller("tripsEditorController",t)}();