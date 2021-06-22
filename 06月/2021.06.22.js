//js

mCfg = {
		chatMainDiv: '#supportChatList',
		urlList : gCONTEXT_PATH + 'messenger/chat_list_detail.json'
	},
  
  
  
  $('body').requestData(mCfg.urlList,{},{
			callback:function(rsData){
				
				m$.chatMainDiv.find("minichat").text(rsData.msListCount);
				chatMainForm(rsData.msList);
				
			}
		});
