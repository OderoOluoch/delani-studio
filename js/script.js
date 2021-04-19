$(document).ready(function(){
    $("#dtext").hide()
    $("#design-img").click(function(){
        $("#dtext").show(1000);
        $("#design-img").hide();
        $("#dtext").click(function(){
            $("#design-img").show()
            $("#dtext").hide()
        })
    })
})


$(document).ready(function(){
    $("#dev").hide()
    $("#dev-img").click(function(){
        $("#dev").show(1000);
        $("#dev-img").hide();
        $("#dev").click(function(){
            $("#dev-img").show()
            $("#dev").hide()
        })
    })
})

$(document).ready(
    $("#dev-img").click(function(){
        $("#dev").toggle(1000)
    })
)

$(document).ready(
    $("#prod-img").click(function(){
        $("#prod").toggle(1000)
    })
)