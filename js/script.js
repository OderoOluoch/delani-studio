$(document).ready(function(){
    $("#dtext").hide()
    $("#design-img").click(function(){
        $("#dtext").show(1000);
        $("#design-img").hide(1000);
        $("#dtext").click(function(){
            $("#design-img").show(1000)
            $("#dtext").hide(1000)
        })
    })
})


$(document).ready(function(){
    $("#dev").hide()
    $("#dev-img").click(function(){
        $("#dev").show(1000);
        $("#dev-img").hide(1000);
        $("#dev").click(function(){
            $("#dev-img").show(1000)
            $("#dev").hide(1000)
        })
    })
})

$(document).ready(function(){
    $("#prod").hide()
    $("#prod-img").click(function(){
        $("#prod").show(1000);
        $("#prod-img").hide(1000);
        $("#prod").click(function(){
            $("#prod-img").show(1000)
            $("#prod").hide(1000)
        })
    })
})


$(document).ready(function(){
    $("#img-Hov").hover(function(){
        alert("Hoverr")
    })
})