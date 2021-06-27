init = function () {

			m$.chatMainDiv = $(mCfg.chatMainDiv);
			// 메신저 접기 초기 세팅
			chatListFoldSet();
			// 메신저 session유지 띄우기, 위치 저장
			chatListPos();
			// 메신저 네이게이션 바 생성
			selectUserNav();
			// 사용자 탭 검색 버튼
			selectUserId();
			// 사용자 탭 내 유저 list 조회 
			selectUserList();
			// 메신저탭 내 세션 유저 
			sessionIdForm();
}


// 무조건 레이아웃 먼저 잡고 그 안에서 function 기능을 넣기. 
// 한번에 다 하나의 function에 넣을생각 xxx!  좋지않다!
