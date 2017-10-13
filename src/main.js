$(document).ready(function() {
  var viewData = {name: 'Bang Framework', chkbx__label1: 'Include a return Label?'};


  $.Mustache.load('../templates/file-upload.htm').done(function(){
    console.log('file-upload Loaded');
  });
  $.Mustache.load('../templates/drop-down.htm').done(function(){
    console.log('drop-down Loaded');
  });
  $.Mustache.load('../templates/checkbox.htm').done(function(){
    console.log('checkbox Loaded');
  });


 $('#navFile').click(function() {
   console.log("click");
   $('#viewBoxes').mustache('file-upload', viewData, { method: 'html' });
 });
 $('#navDrop').click(function() {
   console.log("click");
   $('#viewBoxes').mustache('drop-down', viewData, { method: 'html' });
 });
 $('#navCheck').click(function() {
   console.log("click");
   $('#viewBoxes').mustache('checkbox', viewData, { method: 'html' });
 });



});
