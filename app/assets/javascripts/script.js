$(document).ready(function(){
    $("#presentation").click(function(){
        $("#text_presentation").show();
        $("#text_menu").hide();
        $("#text_contact").hide();
    });

    $("#menu").click(function(){
        $("#text_menu").show();
        $("#text_presentation").hide();
        $("#text_contact").hide();
    });

    $("#contact").click(function(){
        $("#text_contact").show();
        $("#text_presentation").hide();
        $("#text_menu").hide();
    });

    var $carousel = $('#carousel'),
      $img = $('#carousel img'),
      indexImg = $img.length - 1,
      i = 0,
      $currentImg = $img.eq(i);

  $img.css('display', 'none');
  $currentImg.css('display', 'block');

  $("#next").click(function(){

      i++;

      if( i <= indexImg ){
          $img.css('display', 'none');
          $currentImg = $img.eq(i);
          $currentImg.css('display', 'block');
      }
      else{
          i = indexImg;
      }

  });

  $("#prev").click(function(){

      i--;

      if( i >= 0 ){
          $img.css('display', 'none');
          $currentImg = $img.eq(i);
          $currentImg.css('display', 'block');
      }
      else{
          i = 0;
      }

  });
});
