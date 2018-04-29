
		$(document).ready(function(){
			$('.deleteCate').on('click',function(){
				if(window.confirm("Bạn chắc chắn muốn xoá?")){
					var id =$(this).parent().parent().find('input#id').val();
					var url ='/admin/catalog/delete';
					var target = $(this).parent().parent();
					$.ajax({
		                url: url,
		                type: 'POST',
		                cache: false,
		                data:{id:id},
		                success: function (data){
		                    if(data){
		                        target.remove();
		                    }
		                    else alert('Ajax không thành công!');
		                 }
		            });
		        }
		        else return false;
			});
			$('div.alert').delay(5000).slideUp();
			$('input.hide').change(function() {
				var id =$(this).parent().parent().find('input#id').val();
				var hide;
				var url ='/admin/catalog/update-visible';
 				if(this.checked){
				    hide='true';
				}
				else{
				    hide='false';
				}
				$.ajax({
	                url: url,
	                type: 'POST',
	                cache: false,
	                data:{id:id,hide:hide},
	                success: function (data){
	                    if(data){
	                        console.log(data);
	                    }
	                    else alert('Thay đổi trạng thái thất bại!');
	                 }
	            });
			});
		});	
