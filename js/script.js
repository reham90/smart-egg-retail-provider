$(window).on('load', function () {
    $(".preloader").hide();
  });
$(document).ready(function() {
    //////////////////////////////////////// password verefication  /////////////////////////////
$(".inputs").keyup(function () {
    if (this.value.length == this.maxLength) {
      $(this).next('.inputs').focus();
    }
  });
    //phone size menu onclick
    if ($(window).width() <= 991) {
        $(".menu-id").click(function(e) {
            e.preventDefault();

            $(".navgition").toggleClass("reset-left");

            $("body").toggleClass("overflow");
          

        });
      
    };


    //////////////////////////////// add to cart counter  /////////////////////////////////////////

$('.minus').click(function () {
  var $input = $(this).parent().find('input');
  var count = parseInt($input.val()) - 0;
  count = count < 1 ? 1 : count;
  $input.val(count);
  $input.change();
  return false;
});
$('.plus').click(function () {
  var $input = $(this).parent().find('input');
  $input.val(parseInt($input.val()) + 0);
  $input.change();
  return false;
});


   ///////// ** upload images ** /////////



  ImgUpload();
 
  
  function ImgUpload() {
    var imgWrap = "";
    var imgArray = [];
  
    $('.upload__inputfile').each(function () {
      $(this).on('change', function (e) {
        imgWrap = $(this).closest('.upload__box').find('.upload__img-wrap');
        var maxLength = $(this).attr('data-max_length');
  
        var files = e.target.files;
        var filesArr = Array.prototype.slice.call(files);
        var iterator = 0;
        filesArr.forEach(function (f, index) {
  
          if (!f.type.match('image.*')) {
            return;
          }
  
          if (imgArray.length > maxLength) {
            return false
          } else {
            var len = 0;
            for (var i = 0; i < imgArray.length; i++) {
              if (imgArray[i] !== undefined) {
                len++;
              }
            }
            if (len > maxLength) {
              return false;
            } else {
              imgArray.push(f);
  
              var reader = new FileReader();
              reader.onload = function (e) {
                var html = "<div class='upload__img-box'><div style='background-image: url(" + e.target.result + ")' data-number='" + $(".upload__img-close").length + "' data-file='" + f.name + "' class='img-bg'><div class='upload__img-close'></div></div></div>";
                imgWrap.append(html);
                iterator++;
              }
              reader.readAsDataURL(f);
            }
          }
        });
      });
    });
  
    $('body').on('click', ".upload__img-close", function (e) {
      var file = $(this).parent().data("file");
      for (var i = 0; i < imgArray.length; i++) {
        if (imgArray[i].name === file) {
          imgArray.splice(i, 1);
          break;
        }
      }
      $(this).parent().parent().remove();
    });
  }
   
    //////////////////////////////////////// password verefication  /////////////////////////////
    $(".inputs").keyup(function() {
        if (this.value.length == this.maxLength) {
            $(this).next('.inputs').focus();
        }
    });

//////////////////////////// delete row from table ////////////////////////////////
$('.delete-product').on('click', function(){
    $(this).closest(".table-record").remove();
  });

  $('.delete-product').on('click', function(){
    $(this).closest(".proposal-block").remove();
  });
 




    //////////** fixed arrow to top**//////////
    $(".arrow-top").click(function() {
        $("html,body").animate({
                scrollTop: 0,
            },
            1500
        );
    });
    $(this).scrollTop() >= 500 ?
        $(".arrow-top").fadeIn(300) :
        $(".arrow-top").fadeOut(300);

    $(window).scroll(function() {
        $(this).scrollTop() >= 500 ?
            $(".arrow-top").fadeIn(300) :
            $(".arrow-top").fadeOut(300);
    });


    //////////////////////////////// add to cart counter  /////////////////////////////////////////

    $('.minus').click(function() {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function() {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });




});