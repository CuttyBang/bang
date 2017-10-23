$(document).ready(() => {
  const viewData = {name: 'Bang Framework', chkbx__label1: 'Include a return Label?'};


  $.Mustache.load('../templates/file-upload.htm').done(function(){
    console.log('file-upload Loaded');
  });
  $.Mustache.load('../templates/drop-down.htm').done(function(){
    console.log('drop-down Loaded');
  });
  $.Mustache.load('../templates/checkbox.htm').done(function(){
    console.log('checkbox Loaded');
  });
  $.Mustache.load('../templates/datepicker.htm').done(function(){
    console.log('datepicker Loaded');
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
 $('#navDate').click(function() {
   console.log("click");
   $('#viewBoxes').mustache('datepicker', viewData, { method: 'html' });
 });

pickmeup('.cb_pkgDatepickerComponent');

pickmeup('.cb_pkgDatepickerComponentt', {
	format	: 'Y-m-d'
});

$('.cb_pkgDatePickerComponent').on('click', ()=>{
  pickmeup('.date').show();
})



 // $('#cb_pkgDatepickerComponent').on('click', () =>{
 //   datepicker.show();
 // });


});
