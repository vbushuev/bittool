function recalculate(){
    var val= new BitArray(32);
    $("div.bit a").each(function(){
        var tut=$(this);
        var pos=parseInt(tut.attr("rel-data"));
        //console.debug("pos="+pos+" val="+tut.text());
        val.set(pos,tut.text()=="1");
    });
    $("a.result").text("0x"+val.toHexString());
}
$("a.reset").on("click",function(){
    $("div.bit a").text("0");
    recalculate();
});
$("div.bit a").on("click",function(e){
    e.preventDefault();
    var t=$(this);
    if(t.text()=="0"){t.addClass("bitsetted");t.text("1");}
    else{t.removeClass("bitsetted");t.text("0");}
    recalculate();
})
new Clipboard('.result');
recalculate();
