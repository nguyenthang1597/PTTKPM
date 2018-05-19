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

    $('input.ishide').change(function () {
        var id = $(this).parent().parent().parent().parent().find('td#id')[0].innerText
        console.log(id);
        var hide;
        var url = '/admin/author/update-visible';
        if (this.checked) {
            hide = 1;
        }
        else {
            hide = 0;
        }
        $.ajax({
            url: url,
            type: 'POST',
            cache: false,
            data: { id: id, hide: hide },
            success: function (data) {
                if (data) {
                    console.log(data);
                }
                else alert('Cập nhật không thành công!');
            }
        });
    });
})