$(document).ready(function() {
    $('.deleteAccount').on('click', function () {
        if (window.confirm('Bạn có chắc chắn muốn xoá?')) {
            var username= $('.deleteAccount').parent().parent().find('td#id')[0].innerText;
            console.log(username);
            var url = '/admin/account/delete';
            var target = $(this).parent().parent();
            $.ajax({
                url: url,
                type: 'POST',
                data: { USERNAME: username },
                success: function (data) {
                    if (data) {
                        var $table1 = $('#table-1').DataTable();
                        $table1.row(target).remove().draw();
                    }
                    else
                        alert('Xoá tài khoản không thành công')
                }
            })
        }
        else
            return false;
    })
})