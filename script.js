//For Name
var myName=" Hello I am Asfa Naaz.....";
var str="";
var i=0;
const myinterval=setInterval(()=>{
str=str+myName[i];
i++
    document.getElementById("myname").innerHTML=str;
    if(i==myName.length)
    {
        clearInterval(myinterval);
    }
},500);

//For Profession
var myweb=" I Am Web Developer";
var str1="";
var j=0;
const myinterval1=setInterval(()=>{
str1=str1+myweb[j];
j++;
    document.getElementById("myweb").innerHTML=str1;
    if(j==myweb.length)
    {
        clearInterval(myinterval1);
    }
},300);



