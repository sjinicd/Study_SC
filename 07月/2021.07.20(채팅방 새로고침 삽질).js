/* 채팅 DB저장 */
		insertChat = function(rsData) {
			
			//$('.messengerChat_'+rsData.room_no).find('.messengerChatBox').empty();
			$(".user-chat ul").find(".mschat-li-chatList").remove();
			var slKey = m$.slKey.val();
			var param =
			{
				room_no: rsData.room_no,
				writer_id: gSessionUserId,
				content: $('.messengerChat_' + rsData.room_no).find("#nmData_content").val(),
				slKey: slKey

			}
			$('body').requestData(mCfg.chatListInsert, param, {
				callback: function(rsData) {
					console.log("rsData 222222 ::: ", rsData)
					mCfg.socket.send('/messengerChat/newChatList/message/', { test: 'test' }, JSON.stringify(param));
					gridMessage(rsData)
					var chatListView = rsData.chatList;
					console.log("m$.chatListView: ",m$.chatListView)
					
					var chatList = chatListView
						console.log("chatList: ", chatList)
						/**/
						//var chatList = m$.allChatList
						for(var i in chatList) {
						var chat = chatList[i]
						var $chatListTemplate = '';
						$chatListTemplate += '<li class="mschat-li-chatList " name= "chat_'+chat.room_sj+'" id="chat_'+chat.room_no+'" >' 
								//+ '<input type="hidden" name="'+chat.room_no+'">'
								+ '<img src="../../resources/imgs/index/icon_admin.png" alt="나의프로필사진"; style="cursor: pointer;  ">' 
								+'<div class="profile" style="border-bottom: 1px solid #ccc">' 
									+ '<p data-ui="tooltip" data-text="'+chat.room_sj+'" style="width: 200px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;"> ' + chat.room_sj + '</p>' 
									// + '<p> 채팅방 번호: ' + chat.room_no+ '</p>' 
									+ '<div class="chat-status">' 
									+ '<p class="p-chat-status">' + _SL.formatDate(chat.reg_dt, "yyyy-MM-dd HH:mm:ss") + '</p>' 
									+ '</div>' 
								+ '</div>' 
							+ '</li>';
						//$(".user-chat ul").find(".mschat-li-chatList").empty();
						$(".user-chat ul").append($chatListTemplate)
						
						
						slui.attach.tooltip('body');
						
//						
					}
					
						/**/
						
					
				}
				
			});
		},
