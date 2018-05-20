$(document).ready(function () {
    var id = $('#SACH').val();
    var url = `/admin/book/getbook/${id}`;
    axios.get(url)
        .then(respone => {
            console.log(respone.data.SOLUONGCONLAI);
            $('#SOLUONGCONLAI').val(respone.data.SOLUONGCONLAI)
        })


    $('#SACH').on('change', function () {
        var id = $(this).val();
        var url = `/admin/book/getbook/${id}`;
        axios.get(url)
            .then(respone => {
                console.log(respone.data.SOLUONGCONLAI);
                $('#SOLUONGCONLAI').val(respone.data.SOLUONGCONLAI)
            })
    })


    
})