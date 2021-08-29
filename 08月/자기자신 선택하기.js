/* 전체보기/접기 토글 */
			$("body").on("click", ".btnMore", function(){
				console.log("btnMore",$(this))
				//m$.writerIdCount += 1;
				var room_no = $(this).parents(".messengerChat").attr("id").split("messengerChat")[1];
				$(this).toggleClass("short")
				//id="short_'+msgList[i].writer_id+"_writerIdCnt_"+m$.writerIdCount+'"
				////if($(".userListDiv").find('.mschat-li_' + rsData.user_id).length >0)
				//var userId = $(this).attr("id").split("short_")[1]
				//var shortIdCnt = $('body').find('.btnMore').attr("name").split("shortIdCnt_")[1]
				//$(this).toggleClass("short").attr({"id": "short_"+userId, "name": "room_no_"+room_no})
			})
