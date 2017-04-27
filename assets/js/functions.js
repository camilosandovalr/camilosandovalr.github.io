
  $(document).on("ready",inicio);

  function inicio(){

    $( function() {
        $("#sortable").sortable();
        $("#sortable").disableSelection();
    });

  $( function() {
    $( "#selectable" ).selectable();
    });

    var current=null;
    $('input[type="radio"]').click(function(){
        if ($(this).is(':checked'))
        {
            var value = $(this).val();
            if(value==1){
                $("#files-sidebar").hide();  
                $("#properties-div").fadeIn();
                $("#title-slide").fadeIn();   
                $("#subtitle-slide").hide();   
                $("#white-check-sidebar").hide();
            }
            if(value==2){
                $("#files-sidebar").hide();  
                $("#properties-div").fadeIn();
                $("#title-slide").hide();   
                $("#subtitle-slide").fadeIn();
                $("#white-check-sidebar").hide();
            }  
            if(value==3){
                $("#files-sidebar").fadeIn();  
                $("#properties-div").hide();
                $("#title-slide").hide();   
                $("#subtitle-slide").hide();
                $("#white-check-sidebar").fadeIn();   
            }
            if(value==4){
                $("#files-sidebar").hide();  
                $("#properties-div").fadeIn();
                $("#title-slide").fadeIn();   
                $("#subtitle-slide").hide();
                $("#white-check-sidebar").hide();     
            }         
        }
    });
  }