// send event (파일 입력)
			$("body").on("click", ".btn_file", function() {

				var room_no = $(this).parents(".messengerChat").attr("id").split("messengerChat")[1];
				var param = {
					room_no: room_no,
					room_type: 0
				}
				var first_chat_no = "";
				// 새로운 방 생성
				if (param.room_no == "undefined") {
					var temp_room_no = $(this).parents(".messengerChat").data("temp-room-no")
					param.room_sj = $(this).parents(".messengerChat").find(".messengerChat-title").attr("title")
					param.host_id = gSessionUserId
					param.temp_room_no = temp_room_no
					param.user_id = $(this).parents(".messengerChat").find("#user_id").attr("value")
					$(this).parents(".messengerChat").addClass("messengerChat_temp_" + temp_room_no),
						first_chat_no = "0"
				}

				//파일 전송 버튼
				$('body').find('.messengerChat_' + param.room_no).find(".btn_file").on("click", function() {
					$inputFileUpload.click();
				});

				var $msChat_form = $('<form>').attr({ 'class': 'msChat_form', 'id': 'msChat_form_' + param.room_no }).appendTo("#msChat_div_" + param.room_no);
				var $inputFileUpload = $('<input>').attr({ 'type': 'file', 'id': 'fileup_set', 'name': 'file_upload_path' }).appendTo($msChat_form);

				$inputFileUpload.css('display', 'none');
				$inputFileUpload.on('change', function(evt) {
					var files = evt.target.files;
					fileUploadView($('#fileup_set'), param, files);


				});
