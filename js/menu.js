window.addEventListener('load',function(){

    let menuAll = document.getElementsByClassName('menuAll');
    let menuA = document.getElementsByClassName('menuA');
    let menuB = document.getElementsByClassName('menuB');

    let menuListA = document.getElementsByClassName('menuListA');
    let menuListB = document.getElementsByClassName('menuListB');

    let theMenuA = document.getElementsByClassName('theMenuA');
    let theMenuB = document.getElementsByClassName('theMenuB');
    let theMenuACards = document.getElementsByClassName('theMenuACards');
    let theMenuBCards = document.getElementsByClassName('theMenuBCards');

    let allowDown = document.getElementById('allowDown');
    let allowRight = document.getElementById('allowRight');
    
    // 預設menuA按鈕底色是紅色(預選狀態)
    // 預設menuA清單打開，menuB清單隱藏
    menuA[0].style.display == "none";
    menuA[0].style.backgroundColor = "rgb(224, 16, 16)";
    menuB[0].style.display = "none";
    menuListA[0].style.display = "none";
    menuListB[0].style.display = "none";
    theMenuA[0].style.color = "rgb(224, 16, 16)";
    theMenuB[0].style.color = "rgb(224, 16, 16)";

    // =============================================================
    // =============================================================
    menuAll[0].addEventListener('click',function(){

        if(allowDown.style.display == "block"){
            allowDown.style.display = "none";
            allowRight.style.display = "block";
        }else{
            allowDown.style.display = "block";
            allowRight.style.display = "none";
        }

        // ---click"完整菜單menuAll[0]"---:
        // ---click"完整菜單menuAll[0]"---:
        if(menuA[0].style.display == "block"){
            menuA[0].style.display = "none";
            menuB[0].style.display = "none";
            menuListA[0].style.display = "none";
            menuListB[0].style.display = "none";
        }else{
            if(menuA[0].style.backgroundColor == "rgb(224, 16, 16)"){
                menuA[0].style.display = "block";
                menuB[0].style.display = "block";
                menuListA[0].style.display = "block";
                menuListB[0].style.display = "none";
            }else{
                menuA[0].style.display = "block";
                menuB[0].style.display = "block";
                menuListA[0].style.display = "none";
                menuListB[0].style.display = "block";
            }
        }  
        // @@@@@@@@@@@@@@ theMenuA mouseover @@@@@@@@@@@@@@
        for(let x=0; x < theMenuA.length; x++){
            theMenuA[x].addEventListener('mouseover',function(){
                if(theMenuA[x].style.color != "rgb(224, 16, 16)"){
                    theMenuA[x].style.color = "#fff";
                    theMenuA[x].style.backgroundColor = "rgb(224, 16, 16)";
                }
            },false);
            theMenuA[x].addEventListener('mouseout',function(){
                if(theMenuA[x].style.color != "rgb(224, 16, 16)"){
                    theMenuA[x].style.color = "#222";
                    theMenuA[x].style.backgroundColor = "#fff";
                }
            },false);
        }
        // @@@@@@@@@@@@@@ theMenuB mouseout @@@@@@@@@@@@@@@
        for(let y=0; y < theMenuB.length; y++){
            theMenuB[y].addEventListener('mouseover',function(){
                if(theMenuB[y].style.color != "rgb(224, 16, 16)"){
                    theMenuB[y].style.color = "#fff";
                    theMenuB[y].style.backgroundColor = "rgb(224, 16, 16)";
                }
            },false);
            theMenuB[y].addEventListener('mouseout',function(){
                if(theMenuB[y].style.color != "rgb(224, 16, 16)"){
                    theMenuB[y].style.color = "#222";
                    theMenuB[y].style.backgroundColor = "#fff";
                }
            },false);
        }
        // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

        // %%%%%%%%%%%%% click"精緻美食menuA[0]" %%%%%%%%%%%%%:
        // %%%%%%%%%%%%% click"精緻美食menuA[0]" %%%%%%%%%%%%%:

        menuA[0].addEventListener('click',function(){
            menuA[0].style.backgroundColor = "rgb(224, 16, 16)";
            menuB[0].style.backgroundColor = "";
            menuListA[0].style.display = "block";
            menuListB[0].style.display = "none";
            // 預設為「完整菜單」狀態: (1)menuAll[0]要顯示「完整菜單」
            menuAll[0].innerText = theMenuA[0].innerText;
            // (2)menuListA[0]內的完整菜單要改為紅色
            for(let a=0; a < theMenuA.length; a++){
                theMenuA[a].style.color="#222";
            }
            theMenuA[0].style.color="rgb(224, 16, 16)";
            // (3)theMenuACards要全部顯示
            for(let b=0; b < theMenuACards.length; b++){
                theMenuACards[b].style.display="flex";
            }
            // (4)theMenuBCards要全部隱藏
            for(let c=0; c < theMenuBCards.length; c++){
                theMenuBCards[c].style.display="none";
            }
        },false);

        // %%%%%%%%%%%%% click"極致飲品menuB[0]" %%%%%%%%%%%%%:
        // %%%%%%%%%%%%% click"極致飲品menuB[0]" %%%%%%%%%%%%%:
        
        menuB[0].addEventListener('click',function(){
            menuA[0].style.backgroundColor = "#222";
            menuB[0].style.backgroundColor = "rgb(224, 16, 16)";
            menuListA[0].style.display = "none";
            menuListB[0].style.display = "block";
            // 預設為「完整菜單」狀態: (1)menuAll[0]要顯示「完整菜單」
            menuAll[0].innerText = theMenuB[0].innerText;
            // (2)menuListB[0]內的完整菜單要改為紅色
            for(let d=0; d < theMenuB.length; d++){
                theMenuB[d].style.color="#222";
            }
            theMenuB[0].style.color="rgb(224, 16, 16)";
            // (3)theMenuACards要全部隱藏
            for(let e=0; e < theMenuACards.length; e++){
                theMenuACards[e].style.display="none";
            }
            // (4)theMenuBCards要全部顯示
            for(let f=0; f < theMenuBCards.length; f++){
                theMenuBCards[f].style.display="flex";
            }
        },false);

        // %%%%%%%% click精緻美食menuA[0]底下的'theMenuA清單選項' %%%%%%%%:
        // %%%%%%%% click精緻美食menuA[0]底下的'theMenuA清單選項' %%%%%%%%:

        for(let i=0; i <theMenuA.length; i++){
            theMenuA[i].addEventListener('click',function(){
                // ----------(1)menuAll的innerText=theMenuA[i].innerText;
                menuAll[0].innerText = theMenuA[i].innerText;
                // ----------(2)theMenuA[i]color="rgb(224, 16, 16)";
                for(let j=0; j < theMenuA.length; j++){
                    theMenuA[j].style.color="#222";
                }
                theMenuA[i].style.color="rgb(224, 16, 16)";
                theMenuA[i].style.backgroundColor="#fff";
                // ----------(3)theMenuBCards要全數關閉
                for(let l=0; l < theMenuBCards.length; l++){
                    theMenuBCards[l].style.display="none";
                }
                // ----------(4)如果theMenuA[i]==0,畫面呈現theMenuACards[全部組數]
                if(i == "0"){
                    for(let k=0; k < theMenuACards.length; k++){
                        theMenuACards[k].style.display="flex";
                    }
                }else{
                // ----------(5)否則畫面只呈現theMenuACards第[i-1]組
                    for(let k=0; k < theMenuACards.length; k++){
                        theMenuACards[k].style.display="none";
                    }
                    theMenuACards[i-1].style.display="flex";
                }
                // ----------(6)menuA/menuB/menuListA 要隱藏
                menuA[0].style.display="none";
                menuB[0].style.display="none";
                menuListA[0].style.display="none";
            },false);
        }

        // %%%%%%%% click極致飲品menuB[0]底下的'theMenuB清單選項' %%%%%%%%:
        // %%%%%%%% click極致飲品menuB[0]底下的'theMenuB清單選項' %%%%%%%%:

        for(let m=0; m <theMenuB.length; m++){
            theMenuB[m].addEventListener('click',function(){
                // ----------(1)menuAll的innerText=theMenuB[i].innerText;
                menuAll[0].innerText = theMenuB[m].innerText;
                // ----------(2)theMenuB[n]color="rgb(224, 16, 16)";
                for(let n=0; n < theMenuB.length; n++){
                    theMenuB[n].style.color="#222";
                }
                theMenuB[m].style.color="rgb(224, 16, 16)";
                theMenuB[m].style.backgroundColor="#fff";
                // ----------(3)theMenuACards要全數關閉
                for(let o=0; o < theMenuACards.length; o++){
                    theMenuACards[o].style.display="none";
                }
                // ----------(4)如果theMenuB[m]==0,畫面呈現theMenuBCards[全部組數]
                if(m == "0"){
                    for(let p=0; p < theMenuBCards.length; p++){
                        theMenuBCards[p].style.display="flex";
                    }
                }else{
                // ----------(5)否則畫面只呈現theMenuBCards第[m-1]組
                    for(let q=0; q < theMenuBCards.length; q++){
                        theMenuBCards[q].style.display="none";
                    }
                    theMenuBCards[m-1].style.display="flex";
                }
                // ----------(6)menuA/menuB/menuListB 要隱藏
                menuA[0].style.display="none";
                menuB[0].style.display="none";
                menuListB[0].style.display="none";
            },false);
        }
    },false);

    // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    let theCard = document.getElementsByClassName('theCard');
    let theDishName = this.document.getElementsByClassName('theDishName');
    let theDishPrice = this.document.getElementsByClassName('theDishPrice');
    let theDishExplain = this.document.getElementsByClassName('theDishExplain');
    let theDishImg = this.document.getElementsByClassName('theDishImg');
    
    let PopUpBoxBg = document.getElementsByClassName('PopUpBoxBg');
    let thePopUpImg = document.getElementById('thePopUpImg');
    let thePopUpH1 = document.getElementById('thePopUpH1');
    let thePopUpH2 = document.getElementById('thePopUpH2');
    let thePopUpP = document.getElementById('thePopUpP');
    
    for(let z=0 ; z < theCard.length; z++){

        // @@@@@@@@@@ theCard mouseover @@@@@@@@@
        theCard[z].addEventListener('mouseover',function(){
            theDishName[z].style.color = "rgb(224, 16, 16)";
        },false);

        // @@@@@@@@@@ theCard mouseout @@@@@@@@@@
        theCard[z].addEventListener('mouseout',function(){
            theDishName[z].style.color="";
        },false);

        // @@@@@@@@@@ theCard click @@@@@@@@@@@@@
        theCard[z].addEventListener('click',function(){
            thePopUpImg.src = theDishImg[z].src;
            thePopUpH1.innerText = theDishName[z].innerText;
            thePopUpH2.innerText = theDishPrice[z].innerText;
            thePopUpP.innerText = theDishExplain[z].innerText;

            PopUpBoxBg[0].style.display="block";
            document.body.style.overflow = "hidden";
        },false);
    }
    // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

    // =============================================================
    // =============================================================
    // click 商品跳窗
    PopUpBoxBg[0].addEventListener('click',function(){
        PopUpBoxBg[0].style.display="none";
        document.body.style.overflow = "";
    },false);
},false);