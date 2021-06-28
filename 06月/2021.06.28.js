//1
m$.chatMainDiv.find(".mschat-setting-div").on('click', onClickOpenChatSetting);
//2
$("#chat_list").on("click", ".btn_room_list_search", function() {
  sessionIdForm();
}
                   
                   
//1번, 2번 모두 형태만 다를뿐 클릭했을때 function이 실행된다.
