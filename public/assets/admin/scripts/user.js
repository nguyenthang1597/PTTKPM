$(document).ready(function(){
    $('.banUser').on('click',function(){
        if(window.confirm("Bạn chắc chắn muốn cấm thành viên này?")){
            var id =$(this).parent().find('input#id').val();
            var url ='/admin/user/ban-user';
            var target = $(this);
            $.ajax({
                url: url,
                type: 'POST',
                cache: false,
                data:{id:id},
                success: function (data){
                    if(data){
                        location.reload();
                    }
                    else alert('Ban user không thành công!');
                 }
            });
        }
        else return false;
    });
    $('.unbanUser').on('click',function(){
        if(window.confirm("Bạn chắc chắn muốn huỷ cấm thành viên này?")){
            var id =$(this).parent().find('input#id').val();
            var url ='/admin/user/unban-user';
            var target = $(this);
            $.ajax({
                url: url,
                type: 'POST',
                cache: false,
                data:{id:id},
                success: function (data){
                    if(data){
                        location.reload();
                    }
                    else alert('Ban user không thành công!');
                 }
            });
        }
        else return false;
    });
    $('div.alert').delay(5000).slideUp();
});	