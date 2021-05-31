$.ajax({
		url : "<c:url value="/information2/community_comment_save.json" />",
		type : "POST",
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify(data),
        dataType: 'json',
		success : function(rsJson, textStatus, jqXHR){
			console.log("rsJson", rsJson);
			console.log("textStatus", textStatus);
			console.log("jqXHR", jqXHR);
      
      
//success(data,textStatus,jqXHR) : 요청이 성공일때 실행되는 callback 함수

