// header語言盒切換================================================
$(function(){
    $("div.theLang").on("click", function(){
        $("div.langBox").toggleClass("showMe");
    });
});

window.addEventListener('load',function(){
    // (A)BANNER輪播圖切換==========================================
    let bannerBtn = new Array();
    bannerBtn = document.getElementsByClassName('bannerBtn');

    for(let i=0; i < bannerBtn.length; i++){
        // 建立bannerBtn事件聆聽功能
        bannerBtn[i].addEventListener('click',function(){
            // (1)bannerBtn顏色切換
            for(let j=0; j<bannerBtn.length; j++){
                if(bannerBtn[j] == bannerBtn[i]){
                    bannerBtn[j].style.backgroundColor = "#fff";
                }else{
                    bannerBtn[j].style.backgroundColor = "#bbb";
                }
            }
            // (2)theImgBox位置調整切換
            let thePosition = document.getElementById('theImgBox');
            thePosition.style.left = -100 * i + "%";
            thePosition.style.transition = "all 1s linear";
        },false);
    }
    
    // (B)section3 訂位時段切換====================================
    let btnSlectTimeBlock = new Array();
    btnSlectTimeBlock = document.getElementsByClassName('btnSlectTimeBlock');

    let theTimeArea = new Array();
    theTimeArea = document.getElementsByClassName('theTimeArea');

    for(let k=0; k < btnSlectTimeBlock.length; k++){
        btnSlectTimeBlock[k].addEventListener('click',function(e){
            for(let l=0; l < btnSlectTimeBlock.length; l++){
                btnSlectTimeBlock[l].style.color = "#222";
                btnSlectTimeBlock[l].style.borderBottom = "none";
                theTimeArea[l].style.color="";
            }
            e.target.style.color = "#FF850E";
            e.target.style.borderBottom = "3px solid #FF850E";
            theTimeArea[k].style.color="#aaa";
        },false);
    }
    
    // (C)更多門市切換 =============================================

    // --------1.抓取到隱藏的門市數量
    let someboxHiddem = new Array();
    someboxHiddem = document.getElementsByClassName('someboxHiddem');
    // console.log(someboxHiddem.length);
    
    // --------2.建立「更多門市按鈕」事件聆聽&處理
    let showMoreShop = document.getElementById('showMoreShop');

    showMoreShop.addEventListener('click',function(){
        if(someboxHiddem[0].style.display == "none"){
            for(let m=0; m <= 2; m++){
                someboxHiddem[m].style.display = "block";
            }
            // someboxHiddem[0].style.display = "block";
            // someboxHiddem[1].style.display = "block";
            // someboxHiddem[2].style.display = "block";
        }else{
            for(let n=3; n <= 5; n++){
                someboxHiddem[n].style.display = "block";
            }
            showMoreShop.style.display = "none";
            // someboxHiddem[3].style.display = "block";
            // someboxHiddem[4].style.display = "block";
            // someboxHiddem[5].style.display = "block";
        }
    },false);

    // (D) 切換菜單 ================================================

    // 讀取到圖片盒
    let menuImgBox = document.getElementsByClassName('menuImgBox');
    // 預設圖片盒left位置為0
    let curentPostion = 0;
    menuImgBox[0].style.left = curentPostion + "px";

    // ========================讀取左按鈕 並建立聆聽&處理 功能
    let btnLeft = document.getElementById('btnLeft');
    btnLeft.addEventListener('click',function(){
        // 按下時，先讀取到目前的left數值
        // console.log(`before the Left = ${curentPostion}`);
        curentPostion = curentPostion + (-1 * 466.56 -10);
        // console.log(`After the Left = ${curentPostion}`);

        if(curentPostion == 0){
            menuImgBox[0].style.left = curentPostion + "px";
            btnRight.style.display = "none";
        }else if(curentPostion == -1906.24){
            menuImgBox[0].style.left = "-2174.94px";
            btnLeft.style.display = "none";
            btnRight.style.display = "block";
        }else{
            menuImgBox[0].style.left = curentPostion + "px";
            btnLeft.style.display = "block";
            btnRight.style.display = "block";
        }
    },false);

    // ========================讀取右按鈕 並建立聆聽&處理 功能
    let btnRight = document.getElementById('btnRight');
    btnRight.addEventListener('click',function(){
        // 按下時，先讀取到目前的left數值
        // console.log(`before the Left = ${curentPostion}`);
        curentPostion = curentPostion + (1 * 466.56 + 10);
        // console.log(`After the Left = ${curentPostion}`);

        if(curentPostion ==  -1.1368683772161603e-13 || curentPostion ==  0){
            menuImgBox[0].style.left = "0px";
            btnRight.style.display = "none";
        }else if(curentPostion == 1906.24){
            menuImgBox[0].style.left = "2174.94px";
            btnRight.style.display = "none";
            btnLeft.style.display = "block";
        }else{
            menuImgBox[0].style.left = curentPostion + "px";
            btnLeft.style.display = "block";
            btnRight.style.display = "block";
        }
    },false);

    // (E)MENU開關圖片切換==========================================
    
    // 讀取到Menu images
    let imgOfMenuImgBox = document.getElementsByClassName('imgOfMenuImgBox');
    // 讀取到要放大顯示MENU的DIV
    let zoomInMenu = document.getElementById('zoomInMenu');
    
    // Menu images建立 聆聽 & 處理 功能
    for(let z=0; z < imgOfMenuImgBox.length; z++){
        imgOfMenuImgBox[z].addEventListener('click',function(){

            let section4 = document.getElementsByClassName('section4');

            let CurrentHeight = document.documentElement.scrollTop;
            let ClientHeight = document.body.clientHeight;
            console.log(`CurrentHeight = ${CurrentHeight}`);
            console.log(`ClientHeight = ${ClientHeight}`);
            console.log(typeof(CurrentHeight));
            
            // section4[0].style.top = (parseInt(CurrentHeight - ClientHeight)) + "px";
            section4[0].style.top = CurrentHeight + "px";
            console.log(section4[0].style.top);

            // 先讀取到使用者目前螢幕寬
            // 讀取到section4(id=zoomInMenu)目前寬度
            // 讀取到(id=pupUpBox)目前寬度
            // 按鈕right距離 = (zoomInMenu-pupUpBox)/2

            let ClientWidth = document.body.clientWidth;
            let pupUpBox = document.getElementById('pupUpBox');

            console.log(`ClientWidth = ${ClientWidth}`);
            console.log(`zoomInMenu.width = ${zoomInMenu.style.width}`);
            // console.log(`pupUpBox.width = ${pupUpBox.style.width}`);

            let closeBtn = document.getElementById('closeBtn');

            zoomInMenu.style.display="block";
            // 讀取到X按鈕

            // X按鈕建立 聆聽 & 處理 功能
            closeBtn.addEventListener('click',function(){
                zoomInMenu.style.display="none";
                
            },false);
        },false);
    }
},false);