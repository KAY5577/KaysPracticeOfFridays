window.addEventListener('load',function(){

    // ---------------header : 更改語言---------------
    // ---------------header : 更改語言---------------
    let theLang = document.getElementsByClassName('theLang');
    let lanBox = document.getElementsByClassName('lanBox');
    let lanBoxLi = document.getElementsByClassName('lanBoxLi');
    let Language = document.getElementsByClassName('Language');

    theLang[0].addEventListener('click',function(){
        // 語言盒 開關 的切換
        if(lanBox[0].style.display == "block"){
            lanBox[0].style.display = "none";
        }else{
            lanBox[0].style.display = "block"; 
        }
        // 選擇語言
        for(let i=0; i < lanBoxLi.length; i++){
            lanBoxLi[i].addEventListener('click',function(){
                Language[0].innerText = lanBoxLi[i].innerText;
            },false);
        }
    },false);
    
    // ---------------section5 : 更改幣別--------------
    // ---------------section5 : 更改幣別--------------
    let theVipBtn = document.getElementById('theVipBtn');
    let theVipFee = document.getElementById('theVipFee');
    let CurrencyBox = document.getElementById('CurrencyBox');
    let theVipBtnText = document.getElementById('theVipBtnText');
    let CurrencyBoxLi = this.document.getElementsByClassName('CurrencyBoxLi');

    theVipBtn.addEventListener('click',function(){
        // 幣別 開關 的切換
        if(CurrencyBox.style.display == "block"){
            CurrencyBox.style.display = "none";
        }else{
            CurrencyBox.style.display = "block"
        }
        // 選擇幣別
        for(let j=0; j < CurrencyBoxLi.length; j++){
            CurrencyBoxLi[j].addEventListener('click',function(){
                if(j==0){
                    theVipBtnText.innerText = "TWD";
                    theVipFee.innerText = "TWD $3000";
                }else if(j==1){
                    theVipBtnText.innerText = "HKD";
                    theVipFee.innerText = "HKD $800";
                }else if(j==2){
                    theVipBtnText.innerText = "CNY";
                    theVipFee.innerText = "CNY ￥650";
                }else{
                    theVipBtnText.innerText = "SGD";
                    theVipFee.innerText = "SGD $135";
                }
            },false);
        }
    },false);
    // -----------------------------------------------
    // -----------------------------------------------
},false);