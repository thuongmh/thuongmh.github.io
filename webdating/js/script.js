/**
 * Created by Administrator on 11/02/2017.
 */
$(document).ready(function () {

    $('#button-search').click(function () {
        $('#search-menu').css('display', 'block')
    });
    $("#login-dkm").click(function () {
        console.log('aaaa');
        $(".login-content").slideToggle(300)
    });
    $('.new-member').owlCarousel({
        loop: true,
        margin: 30,
        // nav:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
    $('#group_chat').owlCarousel({
        loop: true,
        margin: 30,
        // nav:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
// xử lí trang index
// in ra tuổi
    for (var i =18; i < 60; i++){
        var html = '<option value="'+ i +'">'+ i +'</option>'
        $('#age-tuoi0').append(html);
        $('#age-tuoi').append(html);

    }
// tuổi
    var a = ['Hà Nội', 'Hồ Chí Minh', 'Đà Nẵng', 'Hải Phòng', 'Trung Quốc', 'Đắc Nông'];
    for (var i = 0; i < a.length; i++)
    {
        var html = '<option value="">'+ a[i] +'</option>'
        $('#city').append(html);
    }
//    tên
    var b = ['Mourinho', 'Manu' , 'Sir.Alex Ferguson', 'Eric Cantona'];
    for (var i = 0; i < b.length; i++)
    {
        var html = '<option value="">'+ b[i] +'</option>'
        $('#name').append(html);
    }
    limit('.content-blog', 270);
});

function  limit ($x,$n) {
    $.fn.limit = function($n){
        this.each(function(){
            var allText   = $(this).html();
            var tLength   = $(this).html().length;
            var startText = allText.slice(0,$n);
            if(tLength >= $n){
                $(this).html(startText+'...');
            }else {
                $(this).html(startText);
            }
        });

        return this;
    };
    $($x).limit($n);
}

