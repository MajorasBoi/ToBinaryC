var introbin=document.getElementById('introbin');
var outronum=document.getElementById('outronum');
const enter=document.getElementById('enter')

function Convertion(){
    outronum.value='';
    var dec = introbin.value; 
    var ar=[];
    var bin=[];
    var i=0;
    if(Number(dec)===0){
        introbin.value='';
        outronum.value=0;
    }
    else if(Number(dec)===1){
        introbin.value='';
        outronum.value=1;
    }
    else{
        while(dec>=1){
            if(dec===1){
                ar[i] = 1;
                break;
            }
            ar[i]= (dec%2);
            dec=dec/2;
            if(ar[i]===1){
                dec=dec-0.5;
            }
            i=i+1;
        }
        introbin.value='';
        var j=0;
        while(i>=0){
            bin[j]=ar[i];
            i=i-1;
            j=j+1;
        }
        for(i=0;i<j;i++){
            outronum.value+=bin[i];
        }
    }
    
}

introbin.addEventListener('mouseenter',(e)=>{
    introbin.style.boxShadow="0 0 5px 1px";
});

introbin.addEventListener('mouseleave',(e)=>{
    introbin.style.boxShadow="0 0 0 0";
});

outronum.addEventListener('mouseenter',(e)=>{
    outronum.style.boxShadow="0 0 5px 1px";
});

outronum.addEventListener('mouseleave',(e)=>{
    outronum.style.boxShadow="0 0 0 0";
});

enter.addEventListener('click',Convertion);

onkeydown = (event)=>{
    if(introbin.value.length > 0 && event.keyCode === 13){
        Convertion();
    }
}

