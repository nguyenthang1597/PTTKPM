$(document).ready(function () {
    

    $('.deletebook').on('click', function () {
        if (window.confirm('Bạn có chắc chắn muốn xoá?')) {
            var id = $(this).parent().parent().find('td#id')[0].innerText;
            var url = '/admin/book/delete';
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

    $('input.ishide').change(function () {
        var id = $(this).parent().parent().parent().parent().find('td#id')[0].innerText
        console.log(id);
        var hide;
        var url = '/admin/book/update-visible';
        if (this.checked) {
            hide = 'true';
        }
        else {
            hide = 'false';
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
    $('input.ishighlight').change(function () {
        var id = $(this).parent().parent().parent().parent().find('td#id')[0].innerText
        var highlight;
        var url = '/admin/book/update-highlight';
        if (this.checked) {
            highlight = 'true';
        }
        else {
            highlight = 'false';
        }
        $.ajax({
            url: url,
            type: 'POST',
            cache: false,
            data: { id: id, highlight: highlight },
            success: function (data) {
                if (data) {
                    console.log(data)
                }
                else alert('Cập nhật không thành công!');
            }
        });
});
})