/* 채팅방 */
		messengerChatFunction = function(data) {
			//console.log("messengerChatFunction data:  ",data)
			/* 채팅방 드래그 */
			chatDrag();
			/* 채팅방 새 사용자 추가 */
			$(".messengerChat-plus-div").on("click", function() {
				//var roomno = $('body').find('.messengerChat').attr("id").split("messengerChat")[1]
				// 1. newChat div 에 아이디 값에 data.room_no를 넣어준다.
				// 2. id 값을 찾아 display 값이 undefined or none 인 것 중에
				// 3. length >0 (display: none) 이면 show로 보여준다./ length <0 일 경우 onClickNewChat function 실행
				// 4. display show 일 경우 hide로 가려준다.
				$(".newChat").attr({ 'id': data.room_no+'_add_form'});
				if(!$("#" + data.room_no +"_add_form").css("display") || $("#" + data.room_no +"_add_form").css("display") == "none") {
					if($("#" + data.room_no +"_add_form").length > 0) {
						$("#" + data.room_no +"_add_form").show()
					}else {
						onClickNewChat(data)
					}
				}else {
					$("#" + data.room_no +"_add_form").hide()
				}

				
			});
