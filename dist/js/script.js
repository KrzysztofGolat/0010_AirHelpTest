
        $(document).ready(function() {
            
            $("#airhelpform").validate();
            
            $('#privacyPolicy a:not(.close)').on('click', function(event) {
                event.preventDefault();
               $(this).next().show(); 
            });
            
            $('.close').on('click', 
            function(event) {
                event.preventDefault();
                $('#privacyPolicy .info').hide();
            });
            
            
            $(".form__info").on('mouseover', function () {
//                $(".ibaninfo").html($(this).attr('title'));
//                $(".ibaninfo").css("top", event.pageX + 20).css("left", event.pageY + 20);
                $(".ibaninfo").show();
            });
            $(".form__info").on('mouseout', function () {
                $(".ibaninfo").hide();
            });
                
        });