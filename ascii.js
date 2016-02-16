function padi(num, size) {
    var s = "0" + num;
    //console.debug("padding zeros for["+num+"] "+s);
    return s.substr(s.length-size);
}
function ascii_to_hex(s){
    var ascii = [], hexi = [], ret ="";
    ascii["00"]="NUL";ascii["01"]="SOH"; ascii["02"]="STX"; ascii["03"]="ETX"; ascii["04"]="EOT"; ascii["05"]="ENQ"; ascii["06"]="ACK"; ascii["07"]="BEL"; ascii["08"]="BS"; ascii["09"]="HT";
    ascii["0A"]="LF"; ascii["0B"]="VT"; ascii["0C"]="FF"; ascii["0D"]="CR"; ascii["0E"]="SO"; ascii["0F"]="SI"; ascii["10"]="DLE"; ascii["11"]="DC1"; ascii["12"]="DC2"; ascii["13"]="DC3";
    ascii["14"]="DC4"; ascii["15"]="NAK"; ascii["16"]="SYN"; ascii["17"]="ETB"; ascii["18"]="CAN"; ascii["19"]="EM"; ascii["1A"]="SUB"; ascii["1B"]="ESC"; ascii["1C"]="FS"; ascii["1D"]="GS";
    ascii["1E"]="RS"; ascii["1F"]="US"; ascii["20"]=" ";ascii["21"]="!"; ascii["22"]="\""; ascii["23"]="#"; ascii["24"]="$"; ascii["25"]="%"; ascii["26"]="&"; ascii["27"]="'";
    ascii["28"]="("; ascii["29"]=")"; ascii["2A"]="*"; ascii["2B"]="+"; ascii["2C"]=","; ascii["2D"]="-"; ascii["2E"]="."; ascii["2F"]="/"; ascii["30"]="0"; ascii["31"]="1";
    ascii["32"]="2"; ascii["33"]="3"; ascii["34"]="4"; ascii["35"]="5"; ascii["36"]="6"; ascii["37"]="7"; ascii["38"]="8"; ascii["39"]="9"; ascii["3A"]=":"; ascii["3B"]=";";
    ascii["3C"]="<"; ascii["3D"]="="; ascii["3E"]=">"; ascii["3F"]="?"; ascii["40"]="@"; ascii["41"]="A"; ascii["42"]="B"; ascii["43"]="C"; ascii["44"]="D"; ascii["45"]="E";
    ascii["46"]="F"; ascii["47"]="G"; ascii["48"]="H"; ascii["49"]="I"; ascii["4A"]="J"; ascii["4B"]="K"; ascii["4C"]="L"; ascii["4D"]="M"; ascii["4E"]="N"; ascii["4F"]="O";
    ascii["50"]="P"; ascii["51"]="Q"; ascii["52"]="R"; ascii["53"]="S"; ascii["54"]="T"; ascii["55"]="U"; ascii["56"]="V"; ascii["57"]="W"; ascii["58"]="X"; ascii["59"]="Y";
    ascii["5A"]="Z"; ascii["5B"]="["; ascii["5C"]="\\"; ascii["5D"]="]"; ascii["5E"]="^"; ascii["5F"]="_"; ascii["60"]="`"; ascii["61"]="a"; ascii["62"]="b"; ascii["63"]="c";
    ascii["64"]="d"; ascii["65"]="e"; ascii["66"]="f"; ascii["67"]="g"; ascii["68"]="h"; ascii["69"]="i"; ascii["6A"]="j"; ascii["6B"]="k"; ascii["6C"]="l"; ascii["6D"]="m";
    ascii["6E"]="n"; ascii["6F"]="o"; ascii["70"]="p"; ascii["71"]="q"; ascii["72"]="r"; ascii["73"]="s"; ascii["74"]="t"; ascii["75"]="u"; ascii["76"]="v"; ascii["77"]="w";
    ascii["78"]="x"; ascii["79"]="y"; ascii["7A"]="z"; ascii["7B"]="{"; ascii["7C"]="|"; ascii["7D"]="}"; ascii["7E"]="~";
    /*ascii["7F"]="&#127;"; ascii["80"]="€"; ascii["81"]="130";
    ascii["83"]="ƒ"; ascii["84"]="„"; ascii["85"]="…"; ascii["86"]="†"; ascii["87"]="‡"; ascii["88"]="ˆ"; ascii["89"]="‰"; ascii["8A"]="Š"; ascii["8B"]="‹"; ascii["8C"]="Œ";
    ascii["8D"]="142"; ascii["8F"]="ascii["90"]="145";"; ascii["93"]="“"; ascii["94"]="”"; ascii["95"]="•"; ascii["96"]="–"; ascii["97"]="—"; ascii["98"]="˜"; ascii["99"]="™";
    ascii["9A"]="š"; ascii["9B"]="›"; ascii["9C"]="œ"; ascii["9D"]="158"; ascii["9F"]="Ÿ"; ascii["A0"]="&#160;"; ascii["A1"]="¡"; ascii["A2"]="¢"; ascii["A3"]="£"; ascii["A4"]="¤";
    ascii["A5"]="¥"; ascii["A6"]="¦"; ascii["A7"]="§"; ascii["A8"]="¨"; ascii["A9"]="©"; ascii["AA"]="ª"; ascii["AB"]="«"; ascii["AC"]="¬"; ascii["AD"]="&#173;"; ascii["AE"]="®";
    ascii["AF"]="¯"; ascii["B0"]="°"; ascii["B1"]="±"; ascii["B2"]="²"; ascii["B3"]="³"; ascii["B4"]="´"; ascii["B5"]="µ"; ascii["B6"]="¶"; ascii["B7"]="·"; ascii["B8"]="¸";
    ascii["B9"]="¹"; ascii["BA"]="º"; ascii["BB"]="»"; ascii["BC"]="¼"; ascii["BD"]="½"; ascii["BE"]="¾"; ascii["BF"]="¿"; ascii["C0"]="À"; ascii["C1"]="Á"; ascii["C2"]="Â";
    ascii["C3"]="Ã"; ascii["C4"]="Ä"; ascii["C5"]="Å"; ascii["C6"]="Æ"; ascii["C7"]="Ç"; ascii["C8"]="È"; ascii["C9"]="É"; ascii["CA"]="Ê"; ascii["CB"]="Ë"; ascii["CC"]="Ì";
    ascii["CD"]="Í"; ascii["CE"]="Î"; ascii["CF"]="Ï"; ascii["D0"]="Ð"; ascii["D1"]="Ñ"; ascii["D2"]="Ò"; ascii["D3"]="Ó"; ascii["D4"]="Ô"; ascii["D5"]="Õ"; ascii["D6"]="Ö";
    ascii["D7"]="×"; ascii["D8"]="Ø"; ascii["D9"]="Ù"; ascii["DA"]="Ú"; ascii["DB"]="Û"; ascii["DC"]="Ü"; ascii["DD"]="Ý"; ascii["DE"]="Þ"; ascii["DF"]="ß"; ascii["E0"]="à";
    ascii["E1"]="á"; ascii["E2"]="â"; ascii["E3"]="ã"; ascii["E4"]="ä"; ascii["E5"]="å"; ascii["E6"]="æ"; ascii["E7"]="ç"; ascii["E8"]="è"; ascii["E9"]="é"; ascii["EA"]="ê";
    ascii["EB"]="ë"; ascii["EC"]="ì"; ascii["ED"]="í"; ascii["EE"]="î"; ascii["EF"]="ï"; ascii["F0"]="ð"; ascii["F1"]="ñ"; ascii["F2"]="ò"; ascii["F3"]="ó"; ascii["F4"]="ô";
    ascii["F5"]="õ"; ascii["F6"]="ö"; ascii["F7"]="÷"; ascii["F8"]="ø"; ascii["F9"]="ù"; ascii["FA"]="ú"; ascii["FB"]="û"; ascii["FC"]="ü"; ascii["FD"]="ý"; ascii["FE"]="þ";
    ascii["FF"]="ÿ";*/
    for(var i=0;i<s.length;++i){
        ret += "0x"+padi(ascii[ s[i]+s[++i] ])+" ";
    }
    return ret;
}
function hex_to_ascii(s){
    var ascii = [], hexi = [], ret ="";
    //hexi["NUL"]="00";hexi["SOH"]="01";hexi["STX"]="02";hexi["ETX"]="03";hexi["EOT"]="04";hexi["ENQ"]="05";hexi["ACK"]="06";hexi["BEL"]="07";hexi["BS"]="08";hexi["HT"]="09";hexi["LF"]="0A";hexi["VT"]="0B";hexi["FF"]="0C";hexi["CR"]="0D";hexi["SO"]="0E";hexi["SI"]="0F";hexi["DLE"]="10";hexi["DC1"]="11";hexi["DC2"]="12";hexi["DC3"]="13";hexi["DC4"]="14";hexi["NAK"]="15";hexi["SYN"]="16";hexi["ETB"]="17";hexi["CAN"]="18";hexi["EM"]="19";hexi["SUB"]="1A";hexi["ESC"]="1B";hexi["FS"]="1C";hexi["GS"]="1D";hexi["RS"]="1E";hexi["US"]="1F";hexi["&#32;"]="20";hexi["!"]="21";hexi["""]="22";hexi["#"]="23";hexi["$"]="24";hexi["%"]="25";hexi["&"]="26";hexi["'"]="27";hexi["("]="28";hexi[")"]="29";hexi["*"]="2A";hexi["+"]="2B";hexi[","]="2C";hexi["-"]="2D";hexi["."]="2E";hexi["/"]="2F";hexi["0"]="30";hexi["1"]="31";hexi["2"]="32";hexi["3"]="33";hexi["4"]="34";hexi["5"]="35";hexi["6"]="36";hexi["7"]="37";hexi["8"]="38";hexi["9"]="39";hexi[":"]="3A";hexi[";"]="3B";hexi["<"]="3C";hexi["="]="3D";hexi[">"]="3E";hexi["?"]="3F";hexi["@"]="40";hexi["A"]="41";hexi["B"]="42";hexi["C"]="43";hexi["D"]="44";hexi["E"]="45";hexi["F"]="46";hexi["G"]="47";hexi["H"]="48";hexi["I"]="49";hexi["J"]="4A";hexi["K"]="4B";hexi["L"]="4C";hexi["M"]="4D";hexi["N"]="4E";hexi["O"]="4F";hexi["P"]="50";hexi["Q"]="51";hexi["R"]="52";hexi["S"]="53";hexi["T"]="54";hexi["U"]="55";hexi["V"]="56";hexi["W"]="57";hexi["X"]="58";hexi["Y"]="59";hexi["Z"]="5A";hexi["["]="5B";hexi["\"]="5C";hexi["]"]="5D";hexi["^"]="5E";hexi["_"]="5F";hexi["`"]="60";hexi["a"]="61";hexi["b"]="62";hexi["c"]="63";hexi["d"]="64";hexi["e"]="65";hexi["f"]="66";hexi["g"]="67";hexi["h"]="68";hexi["i"]="69";hexi["j"]="6A";hexi["k"]="6B";hexi["l"]="6C";hexi["m"]="6D";hexi["n"]="6E";hexi["o"]="6F";hexi["p"]="70";hexi["q"]="71";hexi["r"]="72";hexi["s"]="73";hexi["t"]="74";hexi["u"]="75";hexi["v"]="76";hexi["w"]="77";hexi["x"]="78";hexi["y"]="79";hexi["z"]="7A";hexi["{"]="7B";hexi["|"]="7C";hexi["}"]="7D";hexi["~"]="7E";hexi["&#127;"]="7F";hexi["€"]="80";hexi["130"]="81";hexi["ƒ"]="83";hexi["„"]="84";hexi["…"]="85";hexi["†"]="86";hexi["‡"]="87";hexi["ˆ"]="88";hexi["‰"]="89";hexi["Š"]="8A";hexi["‹"]="8B";hexi["Œ"]="8C";hexi["142"]="8D";hexi["144"]="8F";hexi["‘"]="91";hexi["’"]="92";hexi["“"]="93";hexi["”"]="94";hexi["•"]="95";hexi["–"]="96";hexi["—"]="97";hexi["˜"]="98";hexi["™"]="99";hexi["š"]="9A";hexi["›"]="9B";hexi["œ"]="9C";hexi["158"]="9D";hexi["Ÿ"]="9F";hexi["&#160;"]="A0";hexi["¡"]="A1";hexi["¢"]="A2";hexi["£"]="A3";hexi["¤"]="A4";hexi["¥"]="A5";hexi["¦"]="A6";hexi["§"]="A7";hexi["¨"]="A8";hexi["©"]="A9";hexi["ª"]="AA";hexi["«"]="AB";hexi["¬"]="AC";hexi["&#173;"]="AD";hexi["®"]="AE";hexi["¯"]="AF";hexi["°"]="B0";hexi["±"]="B1";hexi["²"]="B2";hexi["³"]="B3";hexi["´"]="B4";hexi["µ"]="B5";hexi["¶"]="B6";hexi["·"]="B7";hexi["¸"]="B8";hexi["¹"]="B9";hexi["º"]="BA";hexi["»"]="BB";hexi["¼"]="BC";hexi["½"]="BD";hexi["¾"]="BE";hexi["¿"]="BF";hexi["À"]="C0";hexi["Á"]="C1";hexi["Â"]="C2";hexi["Ã"]="C3";hexi["Ä"]="C4";hexi["Å"]="C5";hexi["Æ"]="C6";hexi["Ç"]="C7";hexi["È"]="C8";hexi["É"]="C9";hexi["Ê"]="CA";hexi["Ë"]="CB";hexi["Ì"]="CC";hexi["Í"]="CD";hexi["Î"]="CE";hexi["Ï"]="CF";hexi["Ð"]="D0";hexi["Ñ"]="D1";hexi["Ò"]="D2";hexi["Ó"]="D3";hexi["Ô"]="D4";hexi["Õ"]="D5";hexi["Ö"]="D6";hexi["×"]="D7";hexi["Ø"]="D8";hexi["Ù"]="D9";hexi["Ú"]="DA";hexi["Û"]="DB";hexi["Ü"]="DC";hexi["Ý"]="DD";hexi["Þ"]="DE";hexi["ß"]="DF";hexi["à"]="E0";hexi["á"]="E1";hexi["â"]="E2";hexi["ã"]="E3";hexi["ä"]="E4";hexi["å"]="E5";hexi["æ"]="E6";hexi["ç"]="E7";hexi["è"]="E8";hexi["é"]="E9";hexi["ê"]="EA";hexi["ë"]="EB";hexi["ì"]="EC";hexi["í"]="ED";hexi["î"]="EE";hexi["ï"]="EF";hexi["ð"]="F0";hexi["ñ"]="F1";hexi["ò"]="F2";hexi["ó"]="F3";hexi["ô"]="F4";hexi["õ"]="F5";hexi["ö"]="F6";hexi["÷"]="F7";hexi["ø"]="F8";hexi["ù"]="F9";hexi["ú"]="FA";hexi["û"]="FB";hexi["ü"]="FC";hexi["ý"]="FD";hexi["þ"]="FE";hexi["ÿ"]="FF";
    for(var i=0;i<s.length;++i){
        ret += hexi[ s[i]+s[++i] ]+" ";
    }
    return ret;
}
function lrc(str){
    var lrc=0;
    var buffer = str;//convertStringToArrayBuffer(str);
    for (var i = 0; i < str.length; i++) {
        lrc = (lrc ^ buffer[i]) ;
    }
    lrc=lrc&0xff;
    return lrc.toString(16);
}
