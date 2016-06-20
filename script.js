//Initializing the game for level 1

var level=1;
var total=0;
var gt=0;
//console.log(gt);
var guess=0;


function help()
{
    alert('This is a game between you and the evil lord darthVader. If you can guess the color'+
            ' you will be able to defeat him and destroy the empire. In the horrifying galactic war'+
            ' this will be your last action. So, Try to play wisely.\n\nHow to play?\n\n'+
            ' Lord vader choosed a color from the given color table. You have to choose what color vader have '+
            'already choosen. You have only 4 chances. And as an advantage to your side. Lord vader let '+
            'R2-D2 to guide you to the right choice. Follow his direction.\n\n'+
            'Here lower means the left side of your choosen color and higher is the opposite.');
}

flag=0;
function start()
{   
    clearAll();
    guess=0;
    total=(level+3)*2;
    gt=Math.floor(Math.log2(total))+1;
    color=document.getElementById('color');
    lvl=document.getElementById('lvl');
    lvl.innerHTML="Level: "+level;
    choosen=Math.floor((Math.random()*total)+1); 
    //alert(choosen); 
    div=100/total;
    gl=document.getElementById('gl');
    gl.innerHTML='Guess Left: '+(gt-guess);
    gl.style.cssText='color:white;';
    larr=document.getElementById('larr');
    rarr=document.getElementById('rarr');
    larr.innerHTML='&larr;Lower';
    rarr.innerHTML='Higher&rarr;';
    all_color=['AliceBlue'
,'AntiqueWhite'
,'Aqua'
,'Aquamarine'
,'Azure'
,'Beige'
,'Bisque'
,'BlanchedAlmond'
,'Blue'
,'BlueViolet'
,'Brown'
,'BurlyWood'
,'CadetBlue'
,'Chartreuse'
,'Chocolate'
,'Coral'
,'CornflowerBlue'
,'Cornsilk'
,'Crimson'
,'Cyan'
,'DarkBlue'
,'DarkCyan'
,'DarkGoldenRod'
,'DarkGray'
,'DarkGrey'
,'DarkGreen'
,'DarkKhaki'
,'DarkMagenta'
,'DarkOliveGreen'
,'DarkOrange'
,'DarkOrchid'
,'DarkRed'
,'DarkSalmon'
,'DarkSeaGreen'
,'DarkSlateBlue'
,'DarkSlateGray'
,'DarkSlateGrey'
,'DarkTurquoise'
,'DarkViolet'
,'DeepPink'
,'DeepSkyBlue'
,'DimGray'
,'DimGrey'
,'DodgerBlue'
,'FireBrick'
,'FloralWhite'
,'ForestGreen'
,'Fuchsia'
,'Gainsboro'
,'GhostWhite'
,'Gold'
,'GoldenRod'
,'Gray'
,'Grey'
,'Green'
,'GreenYellow'
,'HoneyDew'
,'HotPink'
,'IndianRed '
,'Indigo  '
,'Ivory'
,'Khaki'
,'Lavender'
,'LavenderBlush'
,'LawnGreen'
,'LemonChiffon'
,'LightBlue'
,'LightCoral'
,'LightCyan'
,'LightGoldenRodYellow'
,'LightGray'
,'LightGrey'
,'LightGreen'
,'LightPink'
,'LightSalmon'
,'LightSeaGreen'
,'LightSkyBlue'
,'LightSlateGray'
,'LightSlateGrey'
,'LightSteelBlue'
,'LightYellow'
,'Lime'
,'LimeGreen'
,'Linen'
,'Magenta'
,'Maroon'
,'MediumAquaMarine'
,'MediumBlue'
,'MediumOrchid'
,'MediumPurple'
,'MediumSeaGreen'
,'MediumSlateBlue'
,'MediumSpringGreen'
,'MediumTurquoise'
,'MediumVioletRed'
,'MidnightBlue'
,'MintCream'
,'MistyRose'
,'Moccasin'
,'NavajoWhite'
,'Navy'
,'OldLace'
,'Olive'
,'OliveDrab'
,'Orange'
,'OrangeRed'
,'Orchid'
,'PaleGoldenRod'
,'PaleGreen'
,'PaleTurquoise'
,'PaleVioletRed'
,'PapayaWhip'
,'PeachPuff'
,'Peru'
,'Pink'
,'Plum'
,'PowderBlue'
,'Purple'
,'RebeccaPurple'
,'Red'
,'RosyBrown'
,'RoyalBlue'
,'SaddleBrown'
,'Salmon'
,'SandyBrown'
,'SeaGreen'
,'SeaShell'
,'Sienna'
,'Silver'
,'SkyBlue'
,'SlateBlue'
,'SlateGray'
,'SlateGrey'
,'Snow'
,'SpringGreen'
,'SteelBlue'
,'Tan'
,'Teal'
,'Thistle'
,'Tomato'
,'Turquoise'
,'Violet'
,'Wheat'
,'White'
,'WhiteSmoke'
,'Yellow'
,'YellowGreen'];

    colorArr=random_choice(total,all_color)
    console.log(colorArr);
    shuffle(colorArr);
    //alert(div);
    for(var i=1;i<=total;i++)
    {
        var divColor=document.createElement('input');
        divColor.type="button";
        divColor.setAttribute('id',i);
        divColor.onclick=play;
        divColor.style.cssText='height:100%;width:'+div+'%;float:left;background-color:'+colorArr[i-1]+';';
        color.appendChild(divColor);
    }
}

function random_choice(n,arr)
{

    var len=arr.length;
    var m=[];
    var result=[];
    result.length=n;
    m.length=len;
    for(var i=1;i<=n;)
    {
        var temp=Math.floor(Math.random()*len);
        if(m[temp]!=1)
        {
            m[temp]=1;
            result[i-1]=arr[temp];
            i++;
        }

    }
    return result;
}

function clearAll()
{
    col=document.getElementById('color');
    while(col.firstChild)
    {
        col.removeChild(col.firstChild);
    }
    gl=document.getElementById('gl');
    gl.innerHTML="";
    lvl=document.getElementById('lvl');
    lvl.innerHTML="";
}

function shuffle(o)
{
    for(var j,x,i=o.length;i;j=Math.floor(Math.random()*i),x=o[--i],o[i]=o[j],o[j]=x);
    return o;
}

function play()
{
    guess++;
    this.onclick="";
    var pl=this.id;
    if(pl>choosen)
    {
        divColor=document.getElementById(this.id);
        id=divColor.id;
        divColor.style.cssText='height:100%;width:'+div+'%;float:left;background-color:black;';
        //alert(id);
        alert('pick lower color');
    }
    else if(pl<choosen)
    {
        divColor=document.getElementById(this.id);
        id=divColor.id;
        divColor.style.cssText='height:100%;width:'+div+'%;float:left;background-color:black;';
        //alert(id);
        alert('pick higher color');
    }
    else
    {
        alert('congratulations you won!!!\nyou took '+guess+' gusses only');
        //clearAll();
        level=level+1;
        start();
    }
    if(guess==gt)
    {
        alert("Sorry you couldn't make it\nBetter Luck next time\n");
        //clearAll();
        level=1;
        start();
    }
    gl=document.getElementById('gl');
    gl.innerHTML='Guess Left: '+(gt-guess);

}
