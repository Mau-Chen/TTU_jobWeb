// JavaScript Document

// ToTop
// $(function(){
// 	$(".toTop").click( function(){
// 		$("html,body").animate( {scrollTop:"0px"}  ,  1000);
// 	})
	
// 	$(window).scroll(function(){
// 		var scrollT = $(window).scrollTop();  //目前捲軸距離頂端位置
// 		var windowH = ($(window).height())/2 ; 
// 		if(scrollT >= 150){              //當捲軸位置大於視窗高時
// 			$(".toTop").fadeIn("slow");
// 		}else{
// 			$(".toTop").fadeOut("slow");
// 		}
// 	})
// })
$(function () {
	$(".toTop").on("click", function () {
		$("html,body").animate({ scrollTop: "0px" }, 1000);
	});

	$(window).on("scroll", function () {
		var scrollT = $(window).scrollTop();  // 目前捲軸距離頂端位置
		var windowH = $(window).height() / 2;

		if (scrollT >= 150) {
			// 當捲軸位置大於視窗高時
			$(".toTop").fadeIn("slow");
		} else {
			$(".toTop").fadeOut("slow");
		}
	});
});

// 設立設立日期checkbox切換時，變動日曆能否選取
// function toggleDateInput() {
// 	var dateInput = document.getElementById('creationDateInput');
// 	var creationDateYet = document.getElementById('creationDateYet');
// 	dateInput.disabled = creationDateYet.checked;
// }

//===========新增職缺==============
//選擇薪資條件變動輸入框
document.addEventListener('DOMContentLoaded', function () {
	//選擇框
	var jobSalary = document.getElementById('jobSalary');

		if (jobSalary) {
			// 監聽 select 的 change 事件
			jobSalary.addEventListener('change', function () {
				// 取得選擇的選項值
				var selectedOption = this.value;
		
				// 定義函數來處理添加class的邏輯
				function addClass(classNames, ids) {
					ids.forEach(function (id) {
						var element = document.getElementById(id);
						if (element) {
							classNames.forEach(function (className) {
								element.classList.add(className);
							});
						}
					});
				}
				//定義函數來處理移除class的邏輯
				function removeClass(classNames, ids) {
					ids.forEach(function (id) {
						var element = document.getElementById(id);
						if (element) {
							classNames.forEach(function (className) {
								element.classList.remove(className);
							});
						}
					});
				}
		
				// 根據選項值顯示相應的元素
				switch (selectedOption) {
					case '時薪':
					case '日薪':
						addClass(["choose"], ["dollars"]);
						removeClass(["choose"], ['dollarsToDollars', 'moreThenDollars', 'negotiable', 'dollarsPerCase']);
						document.getElementById('optionsRadios1').checked = true; // #optionsRadios1 增加 checked 屬性
						break;
					case '月薪':
						addClass(["choose"], ['dollarsToDollars', 'moreThenDollars', 'negotiable',"dollars"]);
						removeClass(["choose"], [ 'dollarsPerCase']);
						document.getElementById('optionsRadios1').checked = true; // #optionsRadios1 增加 checked 屬性
						break;
					case '按件計酬':
						addClass(["choose"], ['dollarsPerCase']);
						removeClass(["choose"], ['dollarsToDollars', 'moreThenDollars', 'negotiable',"dollars" ]);
						document.getElementById('optionsRadios5').checked = true; // #optionsRadios1 增加 checked 屬性
						break;
				}
			});
		}
});


//拼湊薪資區間
function combineInputs() {
	// 檢查 optionsRadios2 是否被選中
	var dollarsToDollars = document.getElementById('optionsRadios2').checked;

	if (dollarsToDollars) {
		// 取得兩個 input 的值
		var firstValue = document.querySelector('.combineInputs:nth-child(1)').value;
		var secondValue = document.querySelector('.combineInputs:nth-child(2)').value;

		// 組合兩個值，用 '~' 連接
		var combinedValue = firstValue + '~' + secondValue;

		// 賦值給 JobSalaryData
		document.querySelector('[name="JobSalaryData"]').value = combinedValue;
	}
}



