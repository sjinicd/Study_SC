searchTest = function(){
		var params = $.extend({
					content: $("input[name=content]").val()
				}, _SL.serializeMap(m$.chatDetailform));
				/*console.log("들어왔다 2")
				console.log("ddd:"+params)
				var list = JSON.stringify(params)
				console.log("list: "+list)*/
				$('body').requestData(mCfg.chatHistoryView, params, {
					callback: function(rsData){
						console.log(rsData)
						var Stringify = JSON.stringify(rsData)
						console.log("Stringify: "+Stringify)
						//onMessageSend(rsData);
					}
				});
	},
	
	onMessageSend = function($target){
		var list = $target
		console.log("target: "+ list)
		var list2 = JSON.stringify($target)
		console.log("list2: "+list2)
		var params = $.extend({
					content: $("input[name=content]").val()
				}, _SL.serializeMap(m$.chatDetailform));
		
		$('body').requestData(mCfg.chatHistoryView, list, {
					callback: function(rsData){
						console.log(rsData)
						var Stringify = JSON.stringify(rsData)
						console.log("Stringify: "+Stringify)
						
					}
				});
		console.log("콘텐츠의 값: "+params)
		var list222 = JSON.stringify(params)
		console.log("콘텐츠: "+list222)
	},
