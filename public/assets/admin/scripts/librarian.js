$(document).ready(function() {
    $('.deleteLibrarian').on('click', function() {
        if (window.confirm('Bạn có chắc chắn muốn xoá?')) {
            var id = $('.deleteLibrarian').parent().parent().find('td#id')[0].innerText;
            console.log(id);
            var url = '/admin/librarian/delete';
            var target = $(this).parent().parent();
            $.ajax({
                url: url,
                type: 'POST',
                data: { MA_THUTHU: id },
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