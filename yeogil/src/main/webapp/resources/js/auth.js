var auth = auth || {};
auth =(()=>{
		let init=()=>{
			onCreate();
		};
		let onCreate=()=>{
			setContentView();
		};
		let setContentView=()=>{
			$.getScript($.js()+'/compo.js',()=>{
				$(compo.main()).appendTo('body');
			$('#main_text_01').text("여길가자 이용방법");
			$('#main_text_02').text("쉽고 편리한 여길가자와 함께!");
			
			$('#main_hotel_link').remove();
			
			$('#airport_01').text("항공").click(function(){
				style.backgroundColor='red'
				$('<a></a>').attr("href","#").appendTo('#airport_01');
			});
			$('#airport_02').text("호텔").click(function(){
				$.getScript($.js()+'/hotel.js',()=>{
					hotel.init();
				});
			});
			 $.datepicker.setDefaults({
			      closeText: "닫기",
			      prevText: "이전달",
			      nextText: "다음달",
			      currentText: "오늘",
			      monthNames: ["1월", "2월", "3월", "4월", "5월", "6월",
			        "7월", "8월", "9월", "10월", "11월", "12월"
			      ],
			      monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월",
			        "7월", "8월", "9월", "10월", "11월", "12월"
			      ],
			      dayNames: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
			      dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
			      dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
			      weekHeader: "주",
			      dateFormat: "yy년 m월 d일",
			      firstDay: 0,
			      isRTL: false,
			      showMonthAfterYear: true,
			      yearSuffix: "년"
			    })
			    $("#date-range200").datepicker({
			      minDate: 0,
			      /* to use in wix */
			      onSelect: function (selected, event) {
			        console.log(selected);
			        /* 
			         * wix-send-messages from html component
			         * https://support.wix.com/en/article/working-with-the-html-component-in-wix-code
			         */
			        window.parent.postMessage(selected, "*");
			      }
			    })
			$('#main_search_btn').click(function(){
				alert("ddd");
				$('#qusghk').empty();
				
					$(compo.search_airport_result_bottom()).appendTo('#qusghk');
					$('#modify_icon01').empty();
					$('<button id="apbtn" type="button" class="btn btn-primary">결제</button>').appendTo('#modify_icon01');
					$('#apbtn').click(function(){
						alert("결제창이동");
					});
					});
			});
		};
		
		return {init:init};
})();