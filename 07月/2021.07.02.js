function wssConnect() {
				debugger;

				var url = "//" + window.location.host + "/messengerChat/stomp";
				var protocol = window.location.protocol == "https:" ? "wss:" : "ws:"	//서버&로컬

				mCfg.socket = Stomp.client(protocol + url);

				//연결되었을때 실행하는 함수
				mCfg.socket.connect({}, function() {
					console.log("connect1")	
					// subscribe(path, callback)로 메시지를 받을 수 있다. 
					//callback 첫번째 파라미터의 body로 메시지의 내용이 들어온다.
					mCfg.socket.subscribe('/messengerChat/newChatList/'+ m$.roomNo, function(rsData) {
						
						var body = JSON.parse(rsData.body)
						if(body.message_type != null && body.message_type == 'message'){
							gridMessage(body);
							console.log("connect 2")
						}else{
							console.log("connect 되었지만 else gridmessage")
							gridMessage(body);
						}	
					});
