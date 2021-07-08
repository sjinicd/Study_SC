<%@ page language="java" contentType="text/html;charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ page language="java"%>
<%@ page import="java.io.*"%>
<c:import url="/WEB-INF/jsp/system/messenger/newChat_form.jsp" />
<head>
<link rel="stylesheet" type="text/css"
	href="
   <c:url value="/resources/js/messengerChat/chat_list.css" />
   ">
<link rel="stylesheet" type="text/css"
	href="
   <c:url value="/resources/js/chatbot/jquery.fancybox.min.css" />
   ">

<script
	src="
   <c:url value="/resources/js/chatbot/jquery.fancybox.min.js" />
   "></script>
<script type="text/javascript">
	var comUserRoleList = '${comUserRoleList}';
	console.log("comUserRoleList: " + comUserRoleList)
	var gSessionUserId = "${sessionScope.USER_ID}";
	var user_nm = "${sessionScope.USER_SESSION.user_nm}";
	//var sessionScope = "${sessionScope}";

</script>

<style>
.chat-icon-close {
	width: 17px;
	height: 17px;
	cursor: pointer;
	float: right;
	position: absolute;
	z-index: 1;
	margin-top: -5px;
	margin-left: 52px;
	border: 1px solid white;
	border-radius: 50%;
	background: #F68726;
	padding: 3px;
}

.chat-icon-close:hover {
	opacity: 0.5;
}
</style>

<script>
	//팝업 열기
	function openModal(modalNo) {
		console.log("modalNo >> ", modalNo);
		// 여기에는 하나값이 잘 들어오고 처리를 어떤걸 하고 싶으신거죠?
		// 제가 선택한 넘버의 값을 가지고 페이지에 뿌리고 싶은데요 

		// 여기서 이건 어떤 형식으로 fadein 해주는거죠?
		//제가 참고한 곳에서 이런식으로 불러오는것 같더라구요

		// 아 아마 fadeIn 애니메이션 효과 일거고
		// $("." + no) 는 어디에 있어요?
		

		// 여기서 처리해줄수 있나요?
		//여기서 어떻게 modalNo를 가져갈까여
		// 아까 가져왔자나요~잠시만요 
		
		//
		var $popUpView = $('<div class="popup '+modalNo+'">'
				+ '<a href="#none" class="chat-close-div">X</a>'
				+ '<div class="messengerChat_'+ modalNo +'" id=messengerChat"'+ modalNo +'">'
				+ '<form id="chatDetail-form">'
				+ '<input type="hidden" name="room_no" id="room_no" value="'+ modalNo +'">'
				+ '<div class="messengerChat_container">'
				+ '<div class="messenger-info-card">'
				/* 채팅방 헤더 */
				+ '<div class="messengerChat-header">'
				+ '<img class="chatbot-character" src="/resources/images/chatbot/chat_character.png">'
				+ '<div class="messengerChat-title-div">'
				// 			+					'<span class="messengerChat-title">'+ getData.chatList[i].room_sj +'</span></div>'
				+ '<div class="messengerChat-plus-div">'
				+ '<img class="chatbot-setting" src="/resources/images/chatbot/plus-3-24.gif"></div>'
				+ '<div class="messengerChat-close-div">'
				+ '<img class="chatbot-close-img"src="/resources/images/chatbot/chatbot_icon_close.png"></div></div>'

				/* 메신저 채팅 구간 */
				+ '<div class="messengerChatBox" id="messengerChatBox"></div>'
				/* 메신저 채팅 입력 구간 */
				+ '<div class="mschatDiv" id="mschatDiv">'
				+ '<img class="btn_quick" data-id="fresh" src="/resources/imgs/messenger/file-attach.png">'
				+ //'<input type="hidden" id="slKey" name="slKey" value="'+ param._slKey +'">'
				+'<input type="text" id="content" name="content" style="width: 300px;">'
				+ '<button type="button" class="btnSend">'
				+ '<img class="room_no_btn_send" id="room_no_btn_send" src="/resources/images/chatbot/chat_send.png"></button>'
				+ '</div></div></div></div></form></div>' + '</div>')

		// m$.chat~ 이건 없겟네요 추가해주고 싶은곳 찾아서 한번 해보세요~넵
		$("#supportChatList").append($popUpView);

		// 				            document.get
		// 				            $("." + modalNo).fadeIn(300);
		// 지금 저 위쪽 modalNo 값이 만약 하나가 들어오는데
		// 다 뜨는거면 클래스로 잡아서 클래스가 뜨는거 같기도하고요

		// modalNo가 전체를 가져오진 않을거 같거든요??

		// 즉, 여기서 문제인지 한번  console 확인해보죠!!!넵
	}

	// 팝업 닫기
	$('.popup .close').click(function() {
		//$(this).parent().fadeOut(300);
		$("." + modalname).close();
	});
</script>
<!-- <style>
					.popup {border:1px solid #ccc;background:#fff;padding:50px;width:50%;position:fixed;top:20px;display:none}

					.popup .close {float:right}
					</style> -->
</head>


<!--  -->
<!--  -->

<!-- <a href="javascript:openModal(1);">레이어팝업1 열기</a> -->
<a href="javascript:openModal('modal2');">레이어팝업2 열기</a>
<a href="javascript:openModal('modal3');">레이어팝업3 열기</a>




<!--  -->

<!--  -->
<!-- 챗봇 아이콘  -->
<div class="chat-support" id="supportChatList">
	<div class="button-container">
		<!-- 
            -->


		<!-- <div class="popup 1">
					   <a href="#none" class="chat-close-div">X</a>
					레이어팝업 1
					</div>
					<div class="popup modal2">
					  <a href="#none" class="close">X</a>
					레이어팝업 2
					</div>
					<div class="popup modal3">
					  <a href="#none" class="close">X</a>
					레이어팝업 3
					</div>
             -->

		<div class="chatbot-dp" id="chatbot-dp">
			<!-- 
               -->
			<div class="chat-card">
				<div class="chat-header">
					<!-- 메신저 챗 옵션 세팅 구간 -->

					<img class="chat-character"
						src="/resources/images/chatbot/chat_character.png">
					<div class="chat-title-div">
						<span class="chat-title">eyeCloudXOAR 메신저</span>
					</div>
					<div class="chat-fold-div up" style="display: none;">
						<!--  <img class="chat-fold" src="/resources/images/chatbot/chat_folder.png" style="transform: rotate(180deg);"> -->
					</div>
					<div class="chat-fold-div down">
						<!--  <img class="chat-fold" src="/resources/images/chatbot/chat_folder.png"> -->
					</div>
					<div class="mschat-setting-div">
						<img class="chat-setting"
							src="/resources/images/chatbot/chat_chatSetting.png">
					</div>
					<div class="chat-close-div">
						<img class="mschat-close-img"
							src="/resources/images/chatbot/chatbot_icon_close.png">
					</div>
				</div>

				<!-- 메신저 챗 첫페이지 구간 -->
				<div class='chatMainDiv' id='supportChatList'>
					<form id='mschat-form'>
						<input type="hidden" name="user_id"
							value="${sessionScope.USER_ID}"> <input type="hidden"
							name="user_nm" class="form-input form-text"
							value="${sessionScope.USER_SESSION.user_nm}"> <input
							type="hidden" name="group_nm" class="form-input form-text">
						<input type='hidden' id='slKey' name='slKey' value='${_slKey}'>
						<div class="mschat">
							<table class="tabletable">
								<tr>
									<!-- 네비게이션 구간  -->
									<td rowspan="3" align="center" valign="top"
										style="background-color: #ddd; width: 94px; height: 651px;">
										<div class="mschat_nav"></div>
									</td>
									<!-- 세션 구간 -->
									<td style="background-color: #ffffff; height: 100px;">

										<div class="addPopup"
											style="background-color: #d8d8d8; margin-top: -5px; margin-right: -6px;"></div>
										<div class="profile" style="background-color: #ffffff;">
										</div>
									</td>
								<tr style="height: 57px;">
									<!-- 검색 -->
									<td>
										<div class='chat_list' id='chat_list'></div>
									</td>
								<tr>
									<!-- 메신저 유저리스트 구간 -->
									<td style="height: 380px;">
										<div class="userList"></div>
									</td>
								</tr>
							</table>
						</div>
						<!-- 유저목록 -->

					</form>
				</div>
			</div>
		</div>
	</div>
</div>

<script
	src="<c:url value="/resources/app/system/messenger/chat_list.js" />"></script>
