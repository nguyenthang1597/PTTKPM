
	$(document).ready(function () {
		$('.deletearticle').on('click',function () {
			if (window.confirm("Bạn chắc chắn muốn xoá?")) {
				var id = $(this).parent().parent().find('input#id').val();
				var url = '/admin/article/delete';
				var target = $(this).parent().parent();
				$.ajax({
					url: url,
					type: 'POST',
					cache: false,
					data: { id: id },
					success: function (data) {
						if (data) {
							target.remove();
						}
						else alert('Xoá bài viết không thành công!');
					}
				});
			}
			else return false;
		});
		$('div.alert').delay(5000).slideUp();
		$('input#ishide').change(function () {
			var id = $(this).parent().parent().find('input#id').val();
			var hide;
			var url = '/admin/article/update-visible';
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
		$('input#ishighlight').change(function () {
			var id = $(this).parent().parent().find('input#id').val();
			var highlight;
			var url = '/admin/article/update-highlight';
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
						console.log(data);
					}
					else alert('Cập nhật không thành công!');
				}
			});
		});
	});	
