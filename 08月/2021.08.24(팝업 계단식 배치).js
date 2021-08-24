/* 팝업창 계단식 배열 */
		getPopOption = function(newTop, newLeft, num){
			//console.log("newTop, newLeft, num",newTop, newLeft, num)
			//console.log($('.messengerChat').length)
			//채팅방이 1개 이상일때 
			if($('.messengerChat').length > 1){
				//console.log("$('body').find('.messemgerChat_'+num)",$('body').find('.messengerChat_'+num))
				$('body').find('.messengerChat_'+num).css(
					{	
						// length 값이 1이상인 것에서 length 만큼 값을 곱해줌
						'top': m$.standardPosition.top + 50 * ($('.messengerChat').length - 1) + "px",
						'left': m$.standardPosition.left + 50 * ($('.messengerChat').length - 1) + "px"
					}
				)
			} else {
				m$.standardPosition = {
					// first()첫번째 , offset() 위치
					left : $(".messengerChat").first().offset().left,
					top : $(".messengerChat").first().offset().top
				}
			}
//			$('body').find('.messemgerChat_'+num).css({'top': newTop+50+'px', 'Left': newLeft+50+'px'})
//			console.log("getPopOption 들어옴 ")

		},
