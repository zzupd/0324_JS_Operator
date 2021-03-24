$(function () {

    $("button").click(function () {

        var number1 = $("#number1").val();    // .text() => 요소의 내용
        var number2 = $("#number2").val();    // .val() => 입력양식의 값

        var result = parseInt(number1) + parseInt(number2);
        $("#addRes").text("result : " + result);
    });

});
