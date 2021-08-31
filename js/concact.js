window.addEventListener('load',function(){
    // (A) 常見問題---
    // (A) 常見問題---
    let QandA = document.getElementsByClassName('QandA');
    let theQuestion = document.getElementsByClassName('theQuestion');
    let theAns = document.getElementsByClassName('theAns');
    let btnOnOff = document.getElementsByClassName('btnOnOff');

    for(let i=0; i < theQuestion.length; i++){
        // ===== mouseover theQuestion =====
        theQuestion[i].addEventListener('mouseover',function(){
            if(theQuestion[i].style.color == "rgb(224, 16, 16)"){
                theQuestion[i].style.backgroundColor = "";
            }else{
                theQuestion[i].style.backgroundColor = "#eee";
            }
        },false);
        // ===== mouseout theQuestion =====
        theQuestion[i].addEventListener('mouseout',function(){
            theQuestion[i].style.backgroundColor = "";
        },false);

        // ===== click theQuestion =====
        theQuestion[i].addEventListener('click',function(e){
            // (1)----------先將全隱藏
            for(let j=0; j < theQuestion.length; j++){
                theQuestion[j].style.color = "";
                theAns[j].style.display = "none";
                btnOnOff[j].src = "http://127.0.0.1:5500/img/icon_down.jpg";
                QandA[j].style.marginTop = "";
                QandA[j].style.marginBottom = "";
                QandA[j].style.borderRadius = "";
            }
            // (2)----------顯示被click的那一個
            theQuestion[i].style.color == "";
            theQuestion[i].style.color = "rgb(224, 16, 16)";
            theQuestion[i].style.backgroundColor = "";
            theAns[i].style.display = "block";
            btnOnOff[i].src = "http://127.0.0.1:5500/img/icon_up.jpg";
            QandA[i].style.marginTop = "15px";
            QandA[i].style.marginBottom = "15px";
            QandA[i].style.borderRadius = "7px 7px 7px 7px";

            // ==========================================
            // ==========================================
            // (3)----------目前顯示的這一個 再次被click到
            theQuestion[i].addEventListener('click',function(){
                // (3-1) 如果已顯示，就隱藏
                if(theQuestion[i].style.color == "rgb(224, 16, 16)"){
                    theQuestion[i].style.color = "";
                    theAns[i].style.display = "none";
                    btnOnOff[i].src = "http://127.0.0.1:5500/img/icon_down.jpg";
                    QandA[i].style.marginTop = "";
                    QandA[i].style.marginBottom = "";
                    QandA[i].style.borderRadius = "";
                // (3-2) 如果已隱藏，就顯示
                }else{
                    theQuestion[i].style.color = "rgb(224, 16, 16)";
                    theQuestion[i].style.backgroundColor = "";
                    theAns[i].style.display = "block";
                    btnOnOff[i].src = "http://127.0.0.1:5500/img/icon_up.jpg";
                    QandA[i].style.marginTop = "15px";
                    QandA[i].style.marginBottom = "15px";
                    QandA[i].style.borderRadius = "7px 7px 7px 7px";
                }
            },false);
            // ==========================================
            // ==========================================
        },false);
    }
    // (B) 聯絡我們---
    // (B) 聯絡我們---

    let theFieldest = document.getElementsByClassName('theFieldest');
    let theLegend = document.getElementsByClassName('theLegend');
    let theKeyInPlace = document.getElementsByClassName('theKeyInPlace');
    let theDiv = document.getElementsByClassName('theDiv');
    
    for(let m=0; m < theKeyInPlace.length; m++){
        let thePlaceholder = theKeyInPlace[m].placeholder;  // (1)讀取到placeholder
        let theInnerHTML = theKeyInPlace[m].innerHTML;      // (2)讀取到innerHTML
        // ======"focus"======
        // ======"focus"======
        // ======"focus"======
        theKeyInPlace[m].addEventListener('focus',function(){
            // --------------------------
            if(theKeyInPlace[m].tagName.toLocaleLowerCase()=='input'){
                theLegend[m].style.display="block";                         // 1.theLegend[m]要Block
                if(theFieldest[m].classList.contains('changeBorderColor')){ // 5.如果再次focus，而未輸入資料:
                    theLegend[m].style.color="rgb(224, 16, 16)";
                }
                theFieldest[m].style.height="63.5px";          // 2.theFieldest[m] height要調高
                theFieldest[m].style.alignItems= "flex-start"; // 3.theFieldest[m] 改為"向上對齊"
                theKeyInPlace[m].placeholder="";               // 4.placeholder 要改為"空值"
            // --------------------------
            }else if(theKeyInPlace[m].tagName.toLocaleLowerCase()=='textarea'){
                theLegend[m].style.display="block";                          // 1.theLegend[m]要Block
                if(theFieldest[m].classList.contains('changeBorderColor')){  // 5.如果再次focus，而未輸入資料:
                    theLegend[m].style.color="rgb(224, 16, 16)"; 
                }
                theFieldest[m].style.height="143.5px"          // 2.theFieldest[m] height要調高
                theFieldest[m].style.alignItems= "flex-start"; // 3.theFieldest[m] 改為"向上對齊"
                theKeyInPlace[m].innerHTML="";                 // 4.innerHtml 要改為"空值"
            // --------------------------
            }else{ //(theKeyInPlace[m].tagName.toLocaleLowerCase()=='select')
                theLegend[m].style.display="block";    // 1.theLegend[m]要Block
                theFieldest[m].style.height="63.5px";  // 2.theFieldest[m] height要調高
                if(theFieldest[m].classList.contains('changeBorderColor')){
                    theLegend[m].style.color="rgb(224, 16, 16)";
                }
            }
            // --------------------------
            // $$$$$$$$$$$$$$$$$$$$$$$$$$
            // $$$$$$$$$$$$$$$$$$$$$$$$$$ 意見類別作下拉選擇時，會出現相關條位欄位(預設:隱藏)
            if(m == 4){
                theKeyInPlace[m].addEventListener('change',function(){
                    //將所有條件式欄位全部隱藏
                    for(let y=5; y <= 11; y++){
                        theDiv[y].style.display = "none";
                    }
                    if(theKeyInPlace[m].options.selectedIndex == 1){
                        for(let y=5; y <= 10; y++){
                            theDiv[y].style.display = "flex";
                        }
                        // theDiv[5].style.display = "flex";
                        // theDiv[6].style.display = "flex";
                        // theDiv[7].style.display = "flex";
                        // theDiv[8].style.display = "flex";
                        // theDiv[9].style.display = "flex";
                        // theDiv[10].style.display = "flex";
                    }else if(theKeyInPlace[m].options.selectedIndex == 2){
                        theDiv[11].style.display = "flex";
                    }else{    
                    //(theKeyInPlace[m].options.selectedIndex == 3 || theKeyInPlace[m].options.selectedIndex == 4 )
                        for(let y=6; y <= 10; y++){
                            theDiv[y].style.display = "flex";
                        }
                        // theDiv[6].style.display = "flex";
                        // theDiv[7].style.display = "flex";
                        // theDiv[8].style.display = "flex";
                        // theDiv[9].style.display = "flex";
                        // theDiv[10].style.display = "flex";
                    }
                },false);
            }
            // $$$$$$$$$$$$$$$$$$$$$$$$$$
            // $$$$$$$$$$$$$$$$$$$$$$$$$$
        },false); //function of focus

        // ======="blur"======
        // ======="blur"======
        // ======="blur"======
        theKeyInPlace[m].addEventListener('blur',function(){
            // --------------------------
            if(theKeyInPlace[m].tagName.toLocaleLowerCase()=='input'){
                // ===被blur時未填入資料===:
                if(theKeyInPlace[m].value == ""){   // 1.theLegend[m]要改回"原值none"
                    theLegend[m].style.display="";  // 2.filedest[m] height要調回"原值"，且邊框改為紅色
                    theFieldest[m].style.height="";
                    theFieldest[m].classList.add('changeBorderColor');
                    theFieldest[m].style.alignItems= "";  // 3.theFieldest[m] 改為"原值(center)"
                    theKeyInPlace[m].placeholder = thePlaceholder; //4.placeholder 要改為"原始placeholder"，且為紅字
                    theKeyInPlace[m].classList.add('changePlaceHolderColor');
                // ===被blur時已填入資料===:
                }else{
                    theLegend[m].style.color="";  // 1.theLegend[m](顯示) 顏色改為"原值#222"
                    theFieldest[m].classList.remove('changeBorderColor'); // 2.theFiledest[m]邊框改為"原值(#222)"
                }
            }
            // --------------------------
            else if(theKeyInPlace[m].tagName.toLocaleLowerCase()=='textarea'){
                // ===被blur時未填入資料===:
                if(theKeyInPlace[m].value == ""){   
                    theLegend[m].style.display="";             // 1.theLegend[m]要改回"原值none"
                    theFieldest[m].style.height="";            // 2.theFiledest[m] height要調回"原值"，且邊框改為紅色
                    theFieldest[m].classList.add('changeBorderColor');
                    theFieldest[m].style.alignItems= "";       // 3.theFieldest[m] 改為"原值(center)"
                    theKeyInPlace[m].innerHTML= theInnerHTML ; // 4.innerHtml 要改為"原始innerHtml"，且為紅字
                    theKeyInPlace[m].classList.add('changeColor');                  
                // ===被blur時已填入資料===:
                }else{
                    theLegend[m].style.color="";                          // 1.theLegend[m](顯示) 顏色改為"原值#222"
                    theFieldest[m].classList.remove('changeBorderColor'); // 2.theFiledest[m]邊框改為"原值(#222)"
                    theKeyInPlace[m].classList.remove('changeColor');     // 3.theKeyInPlace[m] 顏色改回"原值(#222)"
                }
            }
            // --------------------------
            else{  //(theKeyInPlace[m].tagName.toLocaleLowerCase()=='select')
                // ===被blur時如果未勾選===:
                if(theKeyInPlace[m].options.selectedIndex == 0){
                    theLegend[m].style.display="";         // 1.theLegend[m]要改回"原值none"
                    theFieldest[m].style.height="";        // 2.theFiledest[m] height要調回"原值"，且邊框改為紅色
                    theFieldest[m].classList.add('changeBorderColor');
                    theKeyInPlace[m].classList.add('changeColor');
                }
                // ===被blur時如果已勾選===:
                else{
                    theFieldest[m].classList.remove('changeBorderColor');
                    theLegend[m].style.color=""; 
                    theKeyInPlace[m].classList.remove('changeColor');
                }
            }
            // --------------------------
        },false); //function of blur
    } // for迴圈
},false);  //function of load