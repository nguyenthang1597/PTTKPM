$(document).ready(function() {
    $('input.ishide').change(function () {
        var id = $(this).parent().parent().parent().parent().find('td#id')[0].innerText
        console.log(id);
        var hide;
        var url = '/admin/publisher/update-visible';
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