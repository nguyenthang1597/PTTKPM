$(document).ready(function () {
    $('div.alert').delay(5000).slideUp();

    $('.deleteAuthor').on('click', function () {
        if (window.confirm('Bạn có chắc chắn muốn xoá?')) {
            var id = $('.deleteAuthor').parent().parent().find('td#id')[0].innerText;
            var url = '/admin/author/delete';
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
                        alert('Xoá tác giả khong thành công')
                }
            })
        }
        else
            return false;

    })
})