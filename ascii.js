function padi(num, size) {
    var s = "0" + num;
    //console.debug("padding zeros for["+num+"] "+s);
    return s.substr(s.length-size);
}
function ascii_to_hex(s){
    var ret ="";
    for(var i=0;i<s.length;++i){
        var c = "0x"+s[i]+s[++i];
        //ret += "0x"+padi(ascii[ s[i]+s[++i] ])+" ";
        ret+=String.fromCharCode(parseInt(c));
        //console.debug(c+" - "+String.fromCharCode(parseInt(c)))
    }
    return ret;
}
function hex_to_ascii(s){
    var ret ="", hexi=[30,31,32,33,34,35,36,37,38,39,41,42,43,44,45,46];
    //hexi["NUL"]="00";hexi["SOH"]="01";hexi["STX"]="02";hexi["ETX"]="03";hexi["EOT"]="04";hexi["ENQ"]="05";hexi["ACK"]="06";hexi["BEL"]="07";hexi["BS"]="08";hexi["HT"]="09";hexi["LF"]="0A";hexi["VT"]="0B";hexi["FF"]="0C";hexi["CR"]="0D";hexi["SO"]="0E";hexi["SI"]="0F";hexi["DLE"]="10";hexi["DC1"]="11";hexi["DC2"]="12";hexi["DC3"]="13";hexi["DC4"]="14";hexi["NAK"]="15";hexi["SYN"]="16";hexi["ETB"]="17";hexi["CAN"]="18";hexi["EM"]="19";hexi["SUB"]="1A";hexi["ESC"]="1B";hexi["FS"]="1C";hexi["GS"]="1D";hexi["RS"]="1E";hexi["US"]="1F";hexi["&#32;"]="20";hexi["!"]="21";hexi["""]="22";hexi["#"]="23";hexi["$"]="24";hexi["%"]="25";hexi["&"]="26";hexi["'"]="27";hexi["("]="28";hexi[")"]="29";hexi["*"]="2A";hexi["+"]="2B";hexi[","]="2C";hexi["-"]="2D";hexi["."]="2E";hexi["/"]="2F";hexi["0"]="30";hexi["1"]="31";hexi["2"]="32";hexi["3"]="33";hexi["4"]="34";hexi["5"]="35";hexi["6"]="36";hexi["7"]="37";hexi["8"]="38";hexi["9"]="39";hexi[":"]="3A";hexi[";"]="3B";hexi["<"]="3C";hexi["="]="3D";hexi[">"]="3E";hexi["?"]="3F";hexi["@"]="40";hexi["A"]="41";hexi["B"]="42";hexi["C"]="43";hexi["D"]="44";hexi["E"]="45";hexi["F"]="46";hexi["G"]="47";hexi["H"]="48";hexi["I"]="49";hexi["J"]="4A";hexi["K"]="4B";hexi["L"]="4C";hexi["M"]="4D";hexi["N"]="4E";hexi["O"]="4F";hexi["P"]="50";hexi["Q"]="51";hexi["R"]="52";hexi["S"]="53";hexi["T"]="54";hexi["U"]="55";hexi["V"]="56";hexi["W"]="57";hexi["X"]="58";hexi["Y"]="59";hexi["Z"]="5A";hexi["["]="5B";hexi["\"]="5C";hexi["]"]="5D";hexi["^"]="5E";hexi["_"]="5F";hexi["`"]="60";hexi["a"]="61";hexi["b"]="62";hexi["c"]="63";hexi["d"]="64";hexi["e"]="65";hexi["f"]="66";hexi["g"]="67";hexi["h"]="68";hexi["i"]="69";hexi["j"]="6A";hexi["k"]="6B";hexi["l"]="6C";hexi["m"]="6D";hexi["n"]="6E";hexi["o"]="6F";hexi["p"]="70";hexi["q"]="71";hexi["r"]="72";hexi["s"]="73";hexi["t"]="74";hexi["u"]="75";hexi["v"]="76";hexi["w"]="77";hexi["x"]="78";hexi["y"]="79";hexi["z"]="7A";hexi["{"]="7B";hexi["|"]="7C";hexi["}"]="7D";hexi["~"]="7E";hexi["&#127;"]="7F";hexi["€"]="80";hexi["130"]="81";hexi["ƒ"]="83";hexi["„"]="84";hexi["…"]="85";hexi["†"]="86";hexi["‡"]="87";hexi["ˆ"]="88";hexi["‰"]="89";hexi["Š"]="8A";hexi["‹"]="8B";hexi["Œ"]="8C";hexi["142"]="8D";hexi["144"]="8F";hexi["‘"]="91";hexi["’"]="92";hexi["“"]="93";hexi["”"]="94";hexi["•"]="95";hexi["–"]="96";hexi["—"]="97";hexi["˜"]="98";hexi["™"]="99";hexi["š"]="9A";hexi["›"]="9B";hexi["œ"]="9C";hexi["158"]="9D";hexi["Ÿ"]="9F";hexi["&#160;"]="A0";hexi["¡"]="A1";hexi["¢"]="A2";hexi["£"]="A3";hexi["¤"]="A4";hexi["¥"]="A5";hexi["¦"]="A6";hexi["§"]="A7";hexi["¨"]="A8";hexi["©"]="A9";hexi["ª"]="AA";hexi["«"]="AB";hexi["¬"]="AC";hexi["&#173;"]="AD";hexi["®"]="AE";hexi["¯"]="AF";hexi["°"]="B0";hexi["±"]="B1";hexi["²"]="B2";hexi["³"]="B3";hexi["´"]="B4";hexi["µ"]="B5";hexi["¶"]="B6";hexi["·"]="B7";hexi["¸"]="B8";hexi["¹"]="B9";hexi["º"]="BA";hexi["»"]="BB";hexi["¼"]="BC";hexi["½"]="BD";hexi["¾"]="BE";hexi["¿"]="BF";hexi["À"]="C0";hexi["Á"]="C1";hexi["Â"]="C2";hexi["Ã"]="C3";hexi["Ä"]="C4";hexi["Å"]="C5";hexi["Æ"]="C6";hexi["Ç"]="C7";hexi["È"]="C8";hexi["É"]="C9";hexi["Ê"]="CA";hexi["Ë"]="CB";hexi["Ì"]="CC";hexi["Í"]="CD";hexi["Î"]="CE";hexi["Ï"]="CF";hexi["Ð"]="D0";hexi["Ñ"]="D1";hexi["Ò"]="D2";hexi["Ó"]="D3";hexi["Ô"]="D4";hexi["Õ"]="D5";hexi["Ö"]="D6";hexi["×"]="D7";hexi["Ø"]="D8";hexi["Ù"]="D9";hexi["Ú"]="DA";hexi["Û"]="DB";hexi["Ü"]="DC";hexi["Ý"]="DD";hexi["Þ"]="DE";hexi["ß"]="DF";hexi["à"]="E0";hexi["á"]="E1";hexi["â"]="E2";hexi["ã"]="E3";hexi["ä"]="E4";hexi["å"]="E5";hexi["æ"]="E6";hexi["ç"]="E7";hexi["è"]="E8";hexi["é"]="E9";hexi["ê"]="EA";hexi["ë"]="EB";hexi["ì"]="EC";hexi["í"]="ED";hexi["î"]="EE";hexi["ï"]="EF";hexi["ð"]="F0";hexi["ñ"]="F1";hexi["ò"]="F2";hexi["ó"]="F3";hexi["ô"]="F4";hexi["õ"]="F5";hexi["ö"]="F6";hexi["÷"]="F7";hexi["ø"]="F8";hexi["ù"]="F9";hexi["ú"]="FA";hexi["û"]="FB";hexi["ü"]="FC";hexi["ý"]="FD";hexi["þ"]="FE";hexi["ÿ"]="FF";
    for(var i=0;i<s.length;++i){
        var c = parseInt(s.substr(i,2),16);
        //console.debug(ret+" + "+c.toString(16)+ " [ "+parseInt(c/16)+" "+(c%16)+" ]");
        ret += hexi[parseInt(c/16)].toString();
        ret += hexi[c%16].toString();
        i++;
    }
    return ret;
}
function lrc(str){
    var lrc = 0x0;
    for(var i=0;i<str.length;++i){
        var c = parseInt(str[i],16);
        console.debug("LRC = " + lrc.toString(16)+ " xor "+c.toString(16));
        lrc ^= c;
    }
    return (0xff-lrc).toString(16);
}
function lrc2(str){
    var lrc=0;
    //var as = ascii_to_hex(str);
    var as = str;
    var blrc = new BitArray(8,0);
    //console.debug(blrc.toString());
    for (var i = 0; i < as.length-2; i++) {

        var c = new BitArray(8,"0x"+as[i]);
        console.debug("LRC = " + blrc.toHexString()+ " xor "+c.toHexString());
        //console.debug("char["+str[i]+"] - "+c.toHexString());
        lrc ^=str[i];
        blrc=blrc.xor(c);
    }
    var ff = new BitArray(8,"0xff");
    //blrc=blrc.not();
    blrc=blrc.and(ff);
    console.debug("LRC = " + blrc.toHexString());
    return blrc.toHexString(2);
}
