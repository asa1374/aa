var hotel = hotel || {};
hotel =(()=>{
	const WHEN_ERR = "호출하는 JS파일을 찾지 못했습니다."
		let init=()=>{
			onCreate();
		};
		let onCreate=()=>{
			setContentView();
		};
		let setContentView=()=>{
			$.getScript($.js()+'/compo.js',()=>{
				$(".dropdown").remove();
				$('.content-header').remove();
				$('#header').remove();
				$('<div id="wrap" class="main"></div>').appendTo('#container');
				$(compo.hotel_top()).appendTo('#container');
				
				$('#qusghk').empty();
				$(compo.hotel_bottom()).appendTo('#qusghk');
				
				hotel_modify();
				$('#main_hotel_search_btn').click(function(){
					$('.main-howto').remove();
					$(compo.hotel_search_result()).appendTo('#wrap');
					 $.each(img(),(i,j)=>{
		                    $('<div class="intro_box" style="height:320px"><img src="'+j.url
		                            +'" width="348" height="170" alt=""></img>'
		                            +'<div class="intro_title">호텔이름</div>'
		                            
		                            +'<div class="intro_desc">호텔 간단한 설명</div>'
		                            +'<div class="btn-area">'
		                            +'<div class="btn-wrap position-relative">'
		                            +'<button type="button" class="btn type01 medium" onclick="finishPaxInfo();">예약 및 결제진행</button>'
		                            +'</div>'
		                            +'</div>'

		                            +'<div class="clear"></div>').attr('name',j.name).appendTo('.intro_list').click(function(){
		                            	let that = $(this).attr('name');
		                            	alert("결제창이동");
		                            });
		                   
		                });
				});
				hotel_event();
			});
			
		};
		
		let img = ()=>{
	        return [{name : "img1",url : "http://image.edaily.co.kr/images/Photo/files/NP/S/2016/06/PS16060300126.jpg"},
	                {name : "img2",url : "https://t1.daumcdn.net/cfile/tistory/220ACD49543246531D"},
	                {name : "img3",url : "https://travelblog.expedia.co.kr/wp-content/uploads/2017/01/113.jpg"}];
	        
	        };
		
		let hotel_modify=()=>{
			$('#hotel_main_icon').text("항공");
			$('#new_hotel_search_text').text("호텔");
			$('#hotel_main_icon').click(function(){
				auth.init();
			})
			$('#main_hotel_link').remove();
			
		};

		
		let hotel_event=()=>{
			$('#DepartureCity').click(function(){
				alert("출발도시 리스트");
			});
			$('#ArrivalCity').click(function(){
				alert("숙박도시 리스트");
			});
			$('#date-range200').click(function(){
				alert("달력");
			});
			$('#date-range201').click(function(){
				alert("달력");
			});
			$('#passenger_value').click(function(){
				alert("인원선택");
			});
		};
		/*let hotel_payment=()=>{
			$.getScript($.js()+'/compo.js',()=>{
				$('#hotel_clean').empty();
				$(compo.airport_payment_top()).appendTo('#hotel_clean');
				$(compo.airport_payment_mid()).appendTo('#hotel_clean');
			});
		};*/
		return {init:init};
})();