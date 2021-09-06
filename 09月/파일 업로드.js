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
				
				
//
				fileUploadView = function($target, fileInfo, getFiles) {
			console.log("fileInfo", fileInfo)
			var roomNo = fileInfo.room_no
			var user_id_list = fileInfo.user_id
			var roomType = fileInfo.room_type
			var roomSj = fileInfo.room_sj
			var form = $('#msChat_form_' + roomNo)[0];
			var formData = new FormData(form);
			var slKey = m$.slKey.val();
			var $thisForm = $target.closest('form');
			var $input_file = $thisForm.find('[name=file_upload_path]');
			var checkFilelength = $input_file.val()
			var temp_room_no = fileInfo.temp_room_no
			// 방의 정보
			var room_info = m$.roomInfo[fileInfo.room_no];
			//var room_no = $('#room_no').val()
			var room_no = roomNo

			var files = null;
			if (getFiles != null && getFiles[0] != "") {
				files = getFiles
				if (files[0].name.length >= 100) {
					alert('파일명이 너무 깁니다.')
					return false;
				}
			} else {
				files = $input_file.prop('files');
				if (checkFilelength.length > 100) {
					alert('파일명이 너무 깁니다.')
					return false;
				}
			}

			// 저장할 파일 정보
			var fileType = '';

			var i = 0;
			for (i = 0; i < files.length; i++) {
				var uploadFile = files[i];
				// 최대 크기 300메가
				var max_size = 300 * 1024 * 1024;

				if (uploadFile.size > max_size) {
					_alert('300MB까지 업로드가 가능합니다.');
					$input_file.val('');
					return false;
				};

				if (i == 0) {
					fileType = uploadFile.type.match('image.*') ? 'image' : 'file';
				} else {
					fileType += uploadFile.type.match('image.*') ? ',image' : ',file';
				};
			};
			// 해당 방에 들어있는 사람들
			var temp_receiver = room_info ? room_info.user_id.replaceAll("#", "").split(",") : fileInfo.user_id.split(",")
			//유저포함한 방유저들
			var user_id = "";
			for (var i = 0; i < temp_receiver.length; i++) {
				if (i < temp_receiver.length - 1) {
					user_id += "#" + temp_receiver[i] + "#,"
				} else {
					user_id += "#" + temp_receiver[i] + "#"
				}
			}
			formData.append("file_upload_path", files[0]);
			formData.append("file_type", fileType)
			formData.append("room_no", room_no),
			formData.append("room_type", roomType),
			formData.append("room_sj", roomSj),
			formData.append("chat_user_list", user_id);
			formData.append("temp_room_no", temp_room_no);


			$.ajax({
				url: mCfg.urlChatFileUpload,
				processData: false,
				contentType: false,
				data: formData,
				dataType: 'json',
				type: 'POST',
				beforeSubmit: function() {
					//loading.show($('.inner-wrapper'));
				},

				success: function(result) {
					console.log("result", result)
					var fileDetailData = result.data
					var _param = {
						room_no: fileDetailData.room_no,
						user_id: fileDetailData.user_id_list,
						slKey: slKey,
						chat_no: fileDetailData.chat_no,
						file_type: fileDetailData.file_type,
						file_path: fileDetailData.file_path,
						file_size: fileDetailData.file_size,
						file_name: fileDetailData.file_name,
						file_original_nm: fileDetailData.file_original_nm,
						writer_id: gSessionUserId,
						content: fileDetailData.file_name,
						room_sj: fileDetailData.room_sj,
						room_type: fileDetailData.room_type,
						chat_user_list: fileDetailData.chat_user_list,
						temp_room_no: fileDetailData.temp_room_no
					}

					mCfg.socket.send('/messengerChat/management/message/', {}, JSON.stringify(_param));
				}
			});


			if (files == null) {
				$input_file.val('');
			}

			$('.msg-textarea').val('')
		},
