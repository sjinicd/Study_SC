// 버퍼링 걸렸었던 이유 
// 메시지를 보내거나 받았을 때 보낸 메시지만 그려주는 이벤트
		gridMessage = function(data) {

			console.log("gridMessage로 들어옴1 data: ", data)
			//var msgListJson = JSON.stringify(data.body.AllChatList)
			//console.log("gridMessage data: ",msgListJson)
			var msgList = data.list
			console.log("msgList: ",msgList)
			var room_no = msgList[0].room_no
			var result = "";
			// var contentList = data.nmData_content;
			//var nmData_content = $("#nmData_content").val()
			/**/
			
			/**/
			if(data.temp_room_no){
				$(".messengerChat_temp_" + data.temp_room_no).removeClass("messengerChat_undefined").addClass('messengerChat_' + data.room_no)
				var _p = {
					room_no : data.room_no
				}
				messengerChatFunction(_p);
			} 
			console.log("gridMessage m$.roomInfo: ",m$.roomInfo)
			$('.messengerChat_' + room_no).find('.messengerChatBox').empty();
			for (var i in msgList) {
//				var time = getChatTime();
//				var searchChatInput = $("#searchRoom").val();
				if (msgList[i].writer_id == gSessionUserId) {
					//var fileContent = msgList[i].content || '-';
					var fileContent = msgList[i].file_original_nm
					result += '<div class="right">';
					result += '<div class="txtNode user">';
					result += '<div class="talk">';
					
					if(msgList[i].file_path != null){
					//if(fileContent.indexOf("f_") != -1 ){
						console.log("file 1로 왔다.")
					result += '<a href="'+fileContent+'" download="'+fileContent+'">' + fileContent + '</a>';
					}else{
						console.log("content 2로 왔다.")
					result += '<span>' + msgList[i].content + '</span>';
					}
					result += '<br>';  
					/*if(msgList[i].file_name !=null){
						result += '<a href="'+msgList[i].file_path+'" download="'+msgList[i].file_name+'">' + msgList[i].file_name + '</a>';
					}*/
					result += '</div>';
					result += '<div class="time space">' + _SL.formatDate(msgList[i].mod_dt, "HH:mm") + '</div>';
					result += '</div>';
					result += '</div>';


				}

				else if (msgList[i].writer_id != gSessionUserId) {
					//console.log("두번째 2222")
					var fileContent = msgList[i].file_original_nm
					result += '<div class="right">';
					result += '<div class="txtNode user">';
					result += '<div class="talk">';
					if(msgList[i].file_path != null){
					//if(fileContent.indexOf("f_") != -1 ){
						console.log("file 1로 왔다.")
					result += '<a href="'+msgList[i].file_path+'" download="'+fileContent+'">' + fileContent + '</a>';
					}else{
						console.log("content 2로 왔다.")
					result += '<span>' + msgList[i].content + '</span>';
					}
					result += '<br>';  
					/*if(msgList[i].file_name !=null){
						result += '<a href="'+msgList[i].file_path+'" download="'+msgList[i].file_name+'">' + msgList[i].file_name + '</a>';
					}*/
					result += '</div>';
					result += '<div class="time space">' + _SL.formatDate(msgList[i].mod_dt, "HH:mm") + '</div>';
					result += '</div>';
					result += '</div>';

					//$(".messengerChatBox").append(result);
				}

				else if (msgList[i].content == null && msgList[i].content == "") {
					//console.log("아무값이 없음1")
				}
//				$('.messengerChat_' + msgList[i].room_no).find(".messengerChatBox").scrollTop($(".messengerChatBox")[0].scrollHeight);
				/*var param = {
					room_no: data.room_no,
					content: nmData_content,
					writer_id: gSessionUserId,
					message_type: "message"
				}*/

				//mCfg.socket.send('/messengerChat/management/message/', { test: 'test' }, JSON.stringify(msgList));
				//$('.nmData_content').val('');
			}
			
			$('.messengerChat_' + room_no).find('.messengerChatBox').append(result)
			/*var $downloadFile = $('<a href="sample.html" download="test.html">파일 다운로드</a>');
			$downloadFile.appendTo('.messengerChatBox')*/
			var scrollTop = $('.messengerChat_' + room_no).find(".messengerChatBox")[0].scrollHeight
			$('.messengerChat_' + room_no).find(".messengerChatBox").scrollTop(scrollTop)

			
			
		},
