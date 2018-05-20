$(document).ready(function(){
    $('.deleteCard').on('click', function () {
        if (window.confirm('Bạn có chắc chắn muốn xoá?')) {
            var id = $(this).parent().parent().find('td#id')[0].innerText;
            var url = '/admin/card/delete';
            var target = $(this).parent().parent();
            
            $.ajax({
                url: url,
                type: 'POST',
                data: { id: id },
                success: function (data) {
                    if (data) {
                        var $table1 = $('#table-1').DataTable();
                        $table1.row(target).remove().draw();
                    }
                    else
                        alert('Xoá sách không thành công')
                }
            })
        }
        else
            return false;
    })
})