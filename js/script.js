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


//First Image
$(document).ready(function(){
    $("#ubuntu").hover(function(){
        $(".pot-1").css("opacity",0.3)
        $(".carier-text-1").css("opacity",1)
    },
    function(){
        $(".pot-1").css("opacity",1)
        $(".carier-text-1").css("opacity",0)
    })
})


//Second  Image
$(document).ready(function(){
    $("#fedora").hover(function(){
        $(".pot-2").css("opacity",0.3)
        $(".carier-text-2").css("opacity",1)
    },
    function(){
        $(".pot-2").css("opacity",1)
        $(".carier-text-2").css("opacity",0)
    })
})


//Third Image
$(document).ready(function(){
    $("#mint").hover(function(){
        $(".pot-3").css("opacity",0.3)
        $(".carier-text-3").css("opacity",1)
    },
    function(){
        $(".pot-3").css("opacity",1)
        $(".carier-text-3").css("opacity",0)
    })
})

//Fourth Image
$(document).ready(function(){
    $("#kubuntu").hover(function(){
        $(".pot-4").css("opacity",0.3)
        $(".carier-text-4").css("opacity",1)
    },
    function(){
        $(".pot-4").css("opacity",1)
        $(".carier-text-4").css("opacity",0)
    })
})



//Fifth Image
$(document).ready(function(){
    $("#ios").hover(function(){
        $(".pot-5").css("opacity",0.3)
        $(".carier-text-5").css("opacity",1)
    },
    function(){
        $(".pot-5").css("opacity",1)
        $(".carier-text-5").css("opacity",0)
    })
})



//Sixth Image
$(document).ready(function(){
    $("#spring").hover(function(){
        $(".pot-6").css("opacity",0.3)
        $(".carier-text-6").css("opacity",1)
    },
    function(){
        $(".pot-6").css("opacity",1)
        $(".carier-text-6").css("opacity",0)
    })
})


//Seventh Image
$(document).ready(function(){
    $("#rest").hover(function(){
        $(".pot-7").css("opacity",0.3)
        $(".carier-text-7").css("opacity",1)
    },
    function(){
        $(".pot-7").css("opacity",1)
        $(".carier-text-7").css("opacity",0)
    })
})


//Eighth Image
$(document).ready(function(){
    $("#angular").hover(function(){
        $(".pot-8").css("opacity",0.3)
        $(".carier-text-8").css("opacity",1)
    },
    function(){
        $(".pot-8").css("opacity",1)
        $(".carier-text-8").css("opacity",0)
    })
})