$(document).ready(function() {



    $(window).keypress(function(p) { // function so when u press 'P' it starts painting boxes
        $( '.box' ).mouseover(function() {
            $(this).addClass( 'painted' );
        });
    });

    $( '.new_grid_btn' ).on('click', function(){
        var grid_num = prompt( "Enter new number of rows and collumns" , "e.g. 32..." ); // input

        $( '.container' ).empty(); // remove all items (rows and collumns)



        for ( var i = 0; i < grid_num; i++ ){ // loop for rows

            $( '.container' ).append( ' <div class="row"></div> ' );
        }

        for ( var j = 0; j < grid_num; j++ ){ // loop for boxes

            $( '.row' ).append( ' <div class="box"></div> ' );

        }




    });



});
