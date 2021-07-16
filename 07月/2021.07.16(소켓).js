/* 채팅 DB저장 */
		insertChat = function(rsData) {
			//			$('.messengerChat_'+rsData.room_no).find('.messengerChatBox').empty();
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
				}
			});
		},
    
      
      
    //java
    //메세지 전송했을 때
	@MessageMapping("/messengerChat/newChatList/message/")
	public void sendMessage(Map<String,Object> map) {
		logger.debug("#######controller /messengerChat/newChatList/message/");
		MessengerDAO dao = sqlSession.getMapper(MessengerDAO.class);
		//지금까지 진행된 사항 보내기
		String roomNo = StringUtils.get(map.get("room_no"));
		
		Map<String,Object> retMap = new HashMap<String, Object>();
		String messageType = StringUtils.get(map.get("message_type"));
		String content = StringUtils.get(map.get("content"));
		List<Map<String,Object>> list = dao.selectMessengerChat(map);
		retMap.put("list", list);
//		if(messageType.equals("message")) {
//		String writer_id = StringUtils.get(map.get("writer_id"));
//		map.put("room_no", roomNo);
//		map.put("writer_id", writer_id);
//		map.put("content", content);
//		logger.debug("messageType: "+messageType+"writer_id: "+writer_id+"roomNo"+roomNo);
//			//dao.insertChatMsg(map);
//			//retMap = dao.selectChatHistoryMessage2(map);
//		}
		retMap.put("message_type", StringUtil.get(map.get("message_type")));
		logger.debug("message_type 작성까지 왔음 roomNo: "+roomNo+ "retMap: "+retMap);
		
		template.convertAndSend("/messengerChat/newChatList/" + roomNo, retMap);
	}
    
    
