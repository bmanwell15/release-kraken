// Circumvent.js 1.3
// Made by Benjamin Manwell
function $circumventVersion(){return"Circumvent.js version 1.3";}
function $delay(f,t){var a=setInterval(r,t);function r(){eval(f);clearInterval(a);}}
function $touching(a,b){var f=[$removeLabel(a.style.left),$removeLabel(a.style.top),$removeLabel(a.style.width),$removeLabel(a.style.height),],g=[$removeLabel(b.style.left),$removeLabel(b.style.top),$removeLabel(b.style.width),$removeLabel(b.style.height),];if(Number(f[0])<=Number(g[0])+Number(g[2])&&Number(f[0])+Number(f[2])>=Number(g[0])&&Number(f[1])<=Number(g[1])+Number(g[3])&&Number(f[1])+Number(f[3])>=Number(g[1])){return true;}else{return false;}}
function $distanceOf(a,b){return Math.sqrt(Math.abs($removeLabel(a.style.left)-$removeLabel(b.style.left))+Math.abs($removeLabel(a.style.top)-$removeLabel(b.style.top)));}
function $insertCommas(n){var a=n.toString(),b="",p="";if(a.includes(".")){p=a.substring(a.indexOf("."));a=a.substring(0,a.indexOf("."));}var m=a.slice(0,a.length%3);if(a.length%3!=0){m+=",";}else{m=a.slice(0,3)+",";}for(var i=0;i<a.length-m.length;i+=3){b+=a.slice(i+(m.length-1),i+(m.length-1)+3)+",";}if((m+b).slice(0,-1)==""){return n+p;}else{return(m+b).slice(0,-1)+p;}}
var forIntervali=0;function $forInterval(f,t,p,s){var id;if(s==undefined){forIntervali=0;}else{forIntervali=s;}if(p!=undefined){id=setInterval(a,p);}else{id=setInterval(a,1);}
function a(){eval(f);forIntervali++;$getForInterval(forIntervali);if(t<=forIntervali){clearInterval(id);}}}
function $getForInterval(){return Number(forIntervali);}
function $fwNum(l,v,c){v=v.toString();var o="";for(var i=0;i<=Number(l-v.length)-1;i++){if(c!=undefined){o+=c.toString();}else{o+="0";}}return o+v;}
function $round(n,p){return Math.round(n*Math.pow(10,p))/Math.pow(10,p);}
function $toggleDisplay(a){if(a.style.display=="block"){a.style.display="none";}else if(a.style.display=="none"){a.style.display="block";}}
function $wordNumber(v){if(v>99||v<-99){return"ERROR: Number is too low or high (-99 to 99)";}
var isNeg="",a=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty",],t=["twenty","thirty","fourty","fifty","sixty","seventy","eighty","ninty",];if(v<0){isNeg="negative ";v=Math.abs(v);}if((v>20||v<-20)&&a[v%10]=="zero"){return isNeg+t[Math.floor(v/10-2)];}if(v>20||v<-20){return isNeg+t[Math.floor(v/10-2)]+"-"+a[v%10];}
return isNeg+a[v];}
function $between(v,f1,f2){var v1,v2;if(f1.length>4&&f2.length>4){if(f1.slice(1)=="figs"&&f2.slice(1)=="figs"){f1=f1.slice(0,-4);f2=f2.slice(0,-4);v1=10**Number(f1-1);v2=10**Number(f2-1);}else{v1=f1;v2=f2;}}else{v1=f1;v2=f2;}
if(v>v1&&v<v2){return true;}else{return false;}}
function $capitalize(s){return s.slice(0,1).toUpperCase()+s.slice(1,s.length);}
function $capitalizeAll(s){var a=[s.slice(0,1).toUpperCase()];for(var i=1;i<s.length;i++){if(s.charAt(i)==" "){a.push(s.slice(i,i+2).toUpperCase());i++;}else{a.push(s.slice(i,i+1));}}var e="";for(var i=0;i<a.length;i++){e+=a[i];}
return e;}
function $log(s,p){$clearLog();if(p==undefined){$("body").append("<log style='z-index:99;font-size: 25px;font-family:Courier New;position:fixed;left: 1%;top:2%;background-color:rgba(0,0,0,0.6);color:#fff'>"+s+"</log>");}else{p.innerHTML=s;}}
function $trackLog(s,p){if(p==undefined){$("body").append("<log style='z-index:99;font-size: 25px;font-family:Courier New;background-color:rgba(0,0,0,0.5);color:#fff'>"+s+"<br></log>");}else{p.innerHTML=s;}}
function $clearLog(){$("log").remove();}
function $removeLabel(s){var t=[".","-","0","1","2","3","4","5","6","7","8","9"],n="";for(var i=0;i<s.length;i++){if(t.includes(s.charAt(i))){n+=s.charAt(i);}else{if(n!=""){return Number(n);}}}return Number(n);}
function $onEdge(s){var w=$removeLabel(s.style.width),h=$removeLabel(s.style.height),l=$removeLabel(s.style.left),t=$removeLabel(s.style.top);if(l<=0||t<=0||l+w>=screen.width||t+h>=screen.height){return true;}else{return false;}}
function $pointToward(e1,e2){e1.style.transform="rotate("+Math.atan2($removeLabel(e1.style.left)-$removeLabel(e2.style.left),-($removeLabel(e1.style.top)-$removeLabel(e2.style.top)))+"rad)";}
function $randomInt(n){return Math.round(Math.random()*n);}
function $randomColor(){return ("rgba("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+"0.4)");}
function $pointAt(a,r){if($getLabel(r)==""){a.style.transform="rotate("+r+"rad)";}else{a.style.transform="rotate("+r+")";}}
function $getLabel(s){var t=[".","-","0","1","2","3","4","5","6","7","8","9"],n="";for(var i=0;i<s.length;i++){if(!t.includes(s.charAt(i))){n+=s.charAt(i);}}return n;}
function $moveForward(a,s){if(s==undefined){s=1;}a.style.left=$removeLabel(a.style.left)+Math.sin($removeLabel(a.style.transform))*s+$getLabel(a.style.left);a.style.top=$removeLabel(a.style.top)-Math.cos($removeLabel(a.style.transform))*s+$getLabel(a.style.top);}
function $moveBackwards(a,s){if(s==undefined){s=1;}a.style.left=$removeLabel(a.style.left)-Math.sin($removeLabel(a.style.transform))*s+$getLabel(a.style.left);a.style.top=$removeLabel(a.style.top)+Math.cos($removeLabel(a.style.transform))*s+$getLabel(a.style.top);}
function $moveInDirrection(b,a,s){if(s==undefined){s=1;}
a+=1.57;b.style.left=$removeLabel(b.style.left)+Math.sin(a)*s+$getLabel(b.style.left);b.style.top=$removeLabel(b.style.top)-Math.cos(a)*s+$getLabel(b.style.top);}
function $turnLeft(b,a){if(a==undefined){a=0.1;}if($getLabel(a)==""){b.style.transform="rotate("+($removeLabel(b.style.transform)-a)+"rad)";}else{b.style.transform="rotate("+($removeLabel(b.style.transform)-$removeLabel(a))+$getLabel(a)+")";}}
function $turnRight(b,a){if(a==undefined){a=0.1;}if($getLabel(a)==""){b.style.transform="rotate("+($removeLabel(b.style.transform)+a)+"rad)";}else{b.style.transform="rotate("+($removeLabel(b.style.transform)+$removeLabel(a))+$getLabel(a)+")";}}
function $Clock(a){var sec=a;if(a==undefined){sec=1;}
this.getAllMilliseconds=()=>{return sec*1000;};this.getAllSeconds=()=>{return sec;};this.getAllMinutes=()=>{return Math.floor(sec/60);};this.getAllHours=()=>{return Math.floor(sec/3600);};this.getAllDays=()=>{return Math.floor(sec/86400);};this.getMilliseconds=()=>{return(sec*1000)%1000;};this.getSeconds=()=>{return sec%60;};this.getMinutes=()=>{return(sec/60)%60;};this.getHours=()=>{return(sec/3600)%60;};this.getDays=()=>{return(sec/86400)%24;};this.setTime=(i)=>{if(a==undefined){sec=1;}else sec=i;};}
var animateLeft_FLAG,animateLeft_TURN_ID,animateLeft_CHECK_ID;function $animateLeft(a,s,d){if(d>0&&d<=360&&s>=10){animateLeft_FLAG=0;animateLeft_TURN_ID=setInterval($turnLeft,30,a,(d/s)*30);animateLeft_CHECK_ID=setInterval($checkAnimateLeft,30,s/30,a,d);}}
function $checkAnimateLeft(t,a,d){animateLeft_FLAG++;if(animateLeft_FLAG>t){clearInterval(animateLeft_TURN_ID);clearInterval(animateLeft_CHECK_ID);a.style.transform="rotate("+$round($removeLabel(a.style.transform),1)+"rad)";}}
var animateRight_FLAG,animateRight_TURN_ID,animateRight_CHECK_ID;function $animateRight(a,s,d){if(d>0&&d<=360&&s>=10){animateRight_FLAG=0;animateRight_TURN_ID=setInterval($turnRight,30,a,(d/s)*30);animateRight_CHECK_ID=setInterval($checkAnimateRight,30,s/30,a,d);}}
function $checkAnimateRight(t,a,d){animateRight_FLAG++;if(animateRight_FLAG>t){clearInterval(animateRight_TURN_ID);clearInterval(animateRight_CHECK_ID);a.style.transform="rotate("+$round($removeLabel(a.style.transform),1)+"rad)";}}
function $toDegrees(n){return(n*180)/Math.PI;}
function $toRadians(n){return(n*Math.PI)/180;}
function $fade(a,s){if(s==undefined){s=750;}
if(document.getElementById(a).style.opacity==1){$("#"+a).animate({opacity:0},s);$delay("$fade231("+a+")",s);}else{document.getElementById(a).style.display="block";$("#"+a).animate({opacity:1},s);}}
function $fade231(a){if (document.getElementById(a)) document.getElementById(a).style.display="none";}
var $KEY=new KEYOBJECT();function KEYOBJECT(){this.backspace=8;this.tab=9;this.enter=13;this.shift=16;this.ctrl=17;this.alt=18;this.esc=27;this.space=32;this.leftArrow=37;this.upArrow=38;this.rightArrow=39;this.downArrow=40;this.zero=48;this.one=49;this.two=50;this.three=51;this.four=52;this.five=53;this.six=54;this.seven=55;this.eight=56;this.nine=57;this.a=65;this.b=66;this.c=67;this.d=68;this.e=69;this.f=70;this.g=71;this.h=72;this.i=73;this.j=74;this.k=75;this.l=76;this.m=77;this.n=78;this.o=79;this.p=80;this.q=81;this.r=82;this.s=83;this.t=84;this.u=85;this.v=86;this.w=87;this.x=88;this.y=89;this.z=90;this.semiColon=186;this.equals=187;this.comma=188;this.dash=189;this.period=190;this.forwardSlash=191;this.accent=192;this.openBracket=219;this.backSlash=220;this.closeBracket=221;this.singleQuote=222;}
function $isValid(x){if(x==null||x==undefined||x==NaN){return false;}return true;}