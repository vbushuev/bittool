//make checks
function checkDObits(t){
    var doBitDependens = [
        [0,1], // V1
        [0,1], // V2
        [2,3,4,5,11,12,13,14], // V3
        [2,3,4,5,11,12,13,14], // V4
        [2,3,4,5,11,12,13,14], // V5
        [2,3,4,5,11,12,13,14], // V6
        [6,7], // V7
        [6,7], // V8
        [], // V9
        [], // V10
        [], // V11
        [2,3,4,5,11,12,13,14], // V12
        [2,3,4,5,11,12,13,14], // V13
        [2,3,4,5,11,12,13,14], // V14
        [2,3,4,5,11,12,13,14], // V15
        [], // V6
        [], // V17
        [] // V18
    ];
    var bit = doBitDependens[parseInt(t.attr("rel-data"))];
    console.debug("dependens for "+t.attr("rel-data")+" is "+bit);
    if(typeof bit == "undefined") return;
    for(var i=0;i<bit.length;++i){
        console.debug(bit[i]);
        t.parent().parent().find("div.bit a[rel-data="+pad(bit[i],2)+"]").removeClass("choosed").text("0");
    }
}
function checkDIbits(t){
    var doBitDependens = [
        [0,1,14], // A1
        [0,1,14], // A2
        [2,3,4], // A3
        [2,3,4], // A4
        [2,3,4], // A5
        [5], // A6
        [6,7], // A7
        [6,7], // A8
        [8,9,10], // A9
        [8,9,10], // A10
        [8,9,10], // A11
        [11], // A12
        [12,13], // A13
        [12,13], // A14
        [0,1], // A15
        [], // A6
        [], // A17
        [] // A18
    ];
    var bit = doBitDependens[parseInt(t.attr("rel-data"))];
    console.debug("dependens for "+t.attr("rel-data")+" is "+bit);
    if(typeof bit == "undefined") return;
    for(var i=0;i<bit.length;++i){
        console.debug(bit[i]);
        $(".di div.bit a[rel-data="+pad(bit[i],2)+"]").removeClass("choosed").text("0");
    }
}
function pad(num, size) {
    var s = "0" + num;
    //console.debug("padding zeros for["+num+"] "+s);
    return s.substr(s.length-size);
}
function recalculate(){
    var vdo = new BitArray(32);
    var vdi = new BitArray(32);
    var vd = new BitArray(32);
    $(".do div.bit a").each(function(){
        var tut=$(this);
        var pos=parseInt(tut.attr("rel-data"));
        //console.debug("pos="+pos+" val="+tut.text());
        vdo.set(pos,tut.text()=="1");
    });
    $(".di div.bit a").each(function(){
        var tut=$(this);
        var pos=parseInt(tut.attr("rel-data"));
        //console.debug("pos="+pos+" val="+tut.text());
        vdi.set(pos,tut.text()=="1");
    });
    $(".d div.bit a").each(function(){
        var tut=$(this);
        var pos=parseInt(tut.attr("rel-data"));
        //console.debug("pos="+pos+" val="+tut.text());
        vd.set(pos,tut.text()=="1");
    });
    $("a.do-result").text("0x"+vdo.toHexString());
    $("a.di-result").text("0x"+vdi.toHexString());
    $("a.d-result").text("0x"+vd.toHexString());
    var text_di=",{0,0x"+vdi.toHexString()+"}";
    if($(".encoder.choosed").length)text_di=",{2,0x"+vdi.toHexString()+"/*"+$(".encoder.choosed").text()+"*/}";
    if($(".timer.choosed").length)text_di=",{1,0x"+vdi.toHexString()+"/*"+$(".timer.choosed").text()+"*/}";
    var text = "{0x"+vdo.toHexString()+text_di+",0x"+vd.toHexString()+",0},";
    $("#result").text(text);
    //$('.result').click();
}
function parsePrj(){
    var prj = $(".scenario").html().split("<br>");
}
$("a.fix").on("click",function(){
    var text=$(".scenario").html();
    text=text.split("<br>");
    console.debug(text.length);
    $(".scenario").html($(".scenario").html()+$("#result").text()+"//"+pad(text.length-1,2)+"<br>");
});
$("a.fix-back").on("click",function(){
    var text=$(".scenario").html();
    console.debug(text);
    text=text.split("<br>");//$(".scenario").html()+$("#result").text()+"<br/>");
    console.debug(text.length);
    $(".scenario").html("");
    for(var i=0;i<text.length-2;++i){
        console.debug(text[i]);
        $(".scenario").html($(".scenario").html()+text[i]+"<br/>");
    }
});
$(".encoder,.timer").on("click",function(e){
    e.preventDefault();
    var t=$(this);
    if(t.hasClass("choosed"))t.removeClass("choosed");
    else{
        $(".encoder,.timer").removeClass("choosed");
        checkDIbits(t);
        t.addClass("choosed");
    }
    recalculate();
});
$("a.fix-reset").on("click",function(){
    $(".scenario").html("");
});
$("a.reset").on("click",function(){
    $(this).parent().find("div.bit a").removeClass("choosed").text("0");
    recalculate();
});
$("div.bit a").on("click",function(e){
    e.preventDefault();
    var t=$(this);
    if(t.text()=="0"){
        if(t.parent().parent().hasClass("do")||t.parent().parent().hasClass("d"))checkDObits(t);
        if(t.parent().parent().hasClass("di")){
            checkDIbits(t);
            $(".encoder,.timer").removeClass("choosed");
        }
        t.addClass("choosed");
        t.text("1");
    }
    else{t.removeClass("choosed");t.text("0");}
    recalculate();
})
$('[contenteditable=true]').on('focus', function() {
    before = $(this).html();
}).on('blur paste', function() {
    if (before != $(this).html()) { $(this).trigger('change'); }
});
$(".result").on("change",function(e){
    var tut = $(this);
    var hex = tut.text();
    var bit = ConvertBase.hex2bin(hex.substr(2)).split("").reverse().join("");
    console.debug(hex.substr(2)+" => "+bit);
    tut.parent().find("div.bit a").removeClass("choosed").text("0");
    for(var i=0;i<bit.length;++i){
        var v=bit[i];
        if(v=="1")
            tut.parent().find("div.bit a[rel-data="+pad(i,2)+"]").addClass("choosed").text("1");
    }
    recalculate();
});
$("#ascii").on("change",function(){
    $("#hexi").html(ascii_to_hex($(this).text()));
    $("#lrc").html(lrc($(this).text()));
});

new Clipboard('.result');
recalculate();
