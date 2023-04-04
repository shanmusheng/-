var add = document.querySelector(".add"),
	sub = document.querySelector(".subtraction");
add.addEventListener("click", function () {
	var a = parseFloat(prompt("请输入第一个相加数"));
	while (isNaN(a)) {
		a = parseFloat(prompt("请输入一个数字!!!!"));
		if (!isNaN(a)) {
			break;
		}
	}
	var b = parseFloat(prompt("请输入第二个相加数"));
	while (isNaN(b)) {
		b = parseFloat(prompt("请输入一个数字!!!!"));
		if (!isNaN(b)) {
			break;
		}
	}
	alert("相加结果为" + a + b);
});
sub.addEventListener("click", function () {
	var a = parseFloat(prompt("请输入被减数"));
	while (isNaN(a)) {
		a = parseFloat(prompt("请输入一个数字!!!!"));
		if (!isNaN(a)) {
			break;
		}
	}
	var b = parseFloat(prompt("请输入减数"));
	while (isNaN(b)) {
		b = parseFloat(prompt("请输入一个数字!!!!"));
		if (!isNaN(b)) {
			break;
		}
	}
	alert("相减结果为" + (a - b));
});
