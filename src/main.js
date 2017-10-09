$(document).ready(function() {
  var viewData = {name: 'Bang Framework'};


  $.Mustache.load('../templates/file-upload.htm').done(function(){
    console.log('file-upload Loaded');
  });
  $.Mustache.load('../templates/drop-down.htm').done(function(){
    console.log('drop-down Loaded');
  });


 $('#navFile').click(function() {
   console.log("click");
   $('#viewBoxes').mustache('file-upload', viewData, { method: 'html' });
 });
 $('#navDrop').click(function() {
   console.log("click");
   $('#viewBoxes').mustache('drop-down', viewData, { method: 'html' });
 });

 

});
