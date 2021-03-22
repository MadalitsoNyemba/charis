<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Charis Legal</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="{{asset('assets/plugins/fontawesome-free/css/all.min.css')}}">
    <!-- fullCalendar -->
    <link rel="stylesheet" href="{{asset('assets/plugins/fullcalendar/main.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/plugins/fullcalendar-daygrid/main.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/plugins/fullcalendar-timegrid/main.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/plugins/fullcalendar-bootstrap/main.min.css')}}">

  <!-- DataTables -->
  <link rel="stylesheet" href="{{asset('assets/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css')}}">
  <link rel="stylesheet" href="{{asset('assets/plugins/datatables-responsive/css/responsive.bootstrap4.min.css')}}">
  <!-- Ionicons -->
  <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
  <!-- Tempusdominus Bbootstrap 4 -->
  <link rel="stylesheet" href="{{asset('assets/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css')}}">
  <!-- iCheck -->
  <link rel="stylesheet" href="{{asset('assets/plugins/icheck-bootstrap/icheck-bootstrap.min.css')}}">
  <!-- JQVMap -->
  <link rel="stylesheet" href="{{asset('assets/plugins/jqvmap/jqvmap.min.css')}}">
  <!-- Theme style -->
  <link rel="stylesheet" href="{{asset('assets/dist/css/adminlte.min.css')}}">
  <!-- overlayScrollbars -->
  <link rel="stylesheet" href="{{asset('assets/plugins/overlayScrollbars/css/OverlayScrollbars.min.css')}}">
  <!-- Daterange picker -->
  <link rel="stylesheet" href="{{asset('assets/plugins/daterangepicker/daterangepicker.css')}}">
  <!-- summernote -->
  <link rel="stylesheet" href="{{asset('assets/plugins/summernote/summernote-bs4.css')}}">
  <!-- Google Font: Source Sans Pro -->
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet">
        {{-- <link rel="stylesheet" href="{{mix('css/app.css') }}"> --}}
        
       
    </head>
<body class="hold-transition sidebar-mini layout-fixed">
    <div class="wrapper">

        <div id="app">
            <app></app>
        </div>
    </div>
     <!-- jQuery -->
     <script src="{{asset('assets/plugins/jquery/jquery.min.js')}}"></script>
     <!-- jQuery UI 1.11.4 -->
     <script src="{{asset('assets/plugins/jquery-ui/jquery-ui.min.js')}}"></script>
     <!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
     <script>
       $.widget.bridge('uibutton', $.ui.button)
     </script>
     <!-- Bootstrap 4 -->
     <script src="{{asset('assets/plugins/bootstrap/js/bootstrap.bundle.min.js')}}"></script>
     <!-- ChartJS -->
     <script src="{{asset('assets/plugins/chart.js/Chart.min.js')}}"></script>
     <!-- Sparkline -->
     <script src="{{asset('assets/plugins/sparklines/sparkline.js')}}"></script>
     <!-- JQVMap -->
     <script src="{{asset('assets/plugins/jqvmap/jquery.vmap.min.js')}}"></script>
     <script src="{{asset('assets/plugins/jqvmap/maps/jquery.vmap.usa.js')}}"></script>
     <!-- jQuery Knob Chart -->
     <script src="{{asset('assets/plugins/jquery-knob/jquery.knob.min.js')}}"></script>
     <!-- daterangepicker -->
     <script src="{{asset('assets/plugins/moment/moment.min.js')}}"></script>
     <script src="{{asset('assets/plugins/daterangepicker/daterangepicker.js')}}"></script>
     <!-- Tempusdominus Bootstrap 4 -->
     <script src="{{asset('assets/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js')}}"></script>
     <!-- Summernote -->
     <script src="{{asset('assets/plugins/summernote/summernote-bs4.min.js')}}"></script>
     <!-- overlayScrollbars -->
     <script src="{{asset('assets/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js')}}"></script>
 
      <!-- DataTables -->
 <script src="{{asset('assets/plugins/datatables/jquery.dataTables.min.js')}}"></script>
 <script src="{{asset('assets/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js')}}"></script>
 <script src="{{asset('assets/plugins/datatables-responsive/js/dataTables.responsive.min.js')}}"></script>
 <script src="{{asset('assets/plugins/datatables-responsive/js/responsive.bootstrap4.min.js')}}"></script>
     <!-- AdminLTE App -->
     <script src="{{asset('assets/dist/js/adminlte.js')}}"></script>
     <!-- AdminLTE dashboard demo (This is only for demo purposes) -->
     <script src="{{asset('assets/dist/js/pages/dashboard.js')}}"></script>
     <!-- AdminLTE for demo purposes -->
     <script src="{{asset('assets/dist/js/demo.js')}}"></script>
 
 
    
 
 <script>
     $(function () {
       $("#example1").DataTable({
         "responsive": true,
         "autoWidth": false,
       });
       $('#example2').DataTable({
         "paging": true,
         "lengthChange": false,
         "searching": false,
         "ordering": true,
         "info": true,
         "autoWidth": false,
         "responsive": true,
       });
     });
   </script>
 
 
 <script src="{{asset('assets/plugins/moment/moment.min.js')}}"></script>
 <script src="{{asset('assets/plugins/fullcalendar/main.min.js')}}"></script>
 <script src="{{asset('assets/plugins/fullcalendar-daygrid/main.min.js')}}"></script>
 <script src="{{asset('assets/plugins/fullcalendar-timegrid/main.min.js')}}"></script>
 <script src="{{asset('assets/plugins/fullcalendar-interaction/main.min.js')}}"></script>
 <script src="{{asset('assets/plugins/fullcalendar-bootstrap/main.min.js')}}"></script>
 <!-- Page specific script -->
 <script>
   $(function () {
 
     /* initialize the external events
      -----------------------------------------------------------------*/
     function ini_events(ele) {
       ele.each(function () {
 
         // create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
         // it doesn't need to have a start or end
         var eventObject = {
           title: $.trim($(this).text()) // use the element's text as the event title
         }
 
         // store the Event Object in the DOM element so we can get to it later
         $(this).data('eventObject', eventObject)
 
         // make the event draggable using jQuery UI
         $(this).draggable({
           zIndex        : 1070,
           revert        : true, // will cause the event to go back to its
           revertDuration: 0  //  original position after the drag
         })
 
       })
     }
 
     ini_events($('#external-events div.external-event'))
 
     /* initialize the calendar
      -----------------------------------------------------------------*/
     //Date for the calendar events (dummy data)
     var date = new Date()
     var d    = date.getDate(),
         m    = date.getMonth(),
         y    = date.getFullYear()
 
     var Calendar = FullCalendar.Calendar;
     var Draggable = FullCalendarInteraction.Draggable;
 
     var containerEl = document.getElementById('external-events');
     var checkbox = document.getElementById('drop-remove');
     var calendarEl = document.getElementById('calendar');
 
     // initialize the external events
     // -----------------------------------------------------------------
 
     new Draggable(containerEl, {
       itemSelector: '.external-event',
       eventData: function(eventEl) {
         console.log(eventEl);
         return {
           title: eventEl.innerText,
           backgroundColor: window.getComputedStyle( eventEl ,null).getPropertyValue('background-color'),
           borderColor: window.getComputedStyle( eventEl ,null).getPropertyValue('background-color'),
           textColor: window.getComputedStyle( eventEl ,null).getPropertyValue('color'),
         };
       }
     });
 
     var calendar = new Calendar(calendarEl, {
       plugins: [ 'bootstrap', 'interaction', 'dayGrid', 'timeGrid' ],
       header    : {
         left  : 'prev,next today',
         center: 'title',
         right : 'dayGridMonth,timeGridWeek,timeGridDay'
       },
       'themeSystem': 'bootstrap',
       //Random default events
       events    : [
         {
           title          : 'All Day Event',
           start          : new Date(y, m, 1),
           backgroundColor: '#f56954', //red
           borderColor    : '#f56954', //red
           allDay         : true
         },
         {
           title          : 'Long Event',
           start          : new Date(y, m, d - 5),
           end            : new Date(y, m, d - 2),
           backgroundColor: '#f39c12', //yellow
           borderColor    : '#f39c12' //yellow
         },
         {
           title          : 'Meeting',
           start          : new Date(y, m, d, 10, 30),
           allDay         : false,
           backgroundColor: '#0073b7', //Blue
           borderColor    : '#0073b7' //Blue
         },
         {
           title          : 'Lunch',
           start          : new Date(y, m, d, 12, 0),
           end            : new Date(y, m, d, 14, 0),
           allDay         : false,
           backgroundColor: '#00c0ef', //Info (aqua)
           borderColor    : '#00c0ef' //Info (aqua)
         },
         {
           title          : 'Birthday Party',
           start          : new Date(y, m, d + 1, 19, 0),
           end            : new Date(y, m, d + 1, 22, 30),
           allDay         : false,
           backgroundColor: '#00a65a', //Success (green)
           borderColor    : '#00a65a' //Success (green)
         },
         {
           title          : 'Click for Google',
           start          : new Date(y, m, 28),
           end            : new Date(y, m, 29),
           url            : 'http://google.com/',
           backgroundColor: '#3c8dbc', //Primary (light-blue)
           borderColor    : '#3c8dbc' //Primary (light-blue)
         }
       ],
       editable  : true,
       droppable : true, // this allows things to be dropped onto the calendar !!!
       drop      : function(info) {
         // is the "remove after drop" checkbox checked?
         if (checkbox.checked) {
           // if so, remove the element from the "Draggable Events" list
           info.draggedEl.parentNode.removeChild(info.draggedEl);
         }
       }    
     });
 
     calendar.render();
     // $('#calendar').fullCalendar()
 
     /* ADDING EVENTS */
     var currColor = '#3c8dbc' //Red by default
     //Color chooser button
     var colorChooser = $('#color-chooser-btn')
     $('#color-chooser > li > a').click(function (e) {
       e.preventDefault()
       //Save color
       currColor = $(this).css('color')
       //Add color effect to button
       $('#add-new-event').css({
         'background-color': currColor,
         'border-color'    : currColor
       })
     })
     $('#add-new-event').click(function (e) {
       e.preventDefault()
       //Get value and make sure it is not null
       var val = $('#new-event').val()
       if (val.length == 0) {
         return
       }
 
       //Create events
       var event = $('<div />')
       event.css({
         'background-color': currColor,
         'border-color'    : currColor,
         'color'           : '#fff'
       }).addClass('external-event')
       event.html(val)
       $('#external-events').prepend(event)
 
       //Add draggable funtionality
       ini_events(event)
 
       //Remove event from text input
       $('#new-event').val('')
     })
   })
 </script>
        <script src="{{mix('js/app.js') }}"></script>
    </body>
</html>
