// var ar = ["green","red","yellow","blue"];

// var game = false;
// var ans = [];
// var inputArr = [];

// $(document).keypress(function() {
//     if (!game) 
//     {  
//         game = true;
//         level = 0;
//         ans = [];        
//         nextLevel(ans,ar);
//     }
// });

// function nextLevel(ans,ar){
//     level++;
//     inputArr = [];
//     $("h1").text("Level " + level);
//     var index = Math.floor(Math.random()*4);
//     ans.push(index);
//     setTimeout(function(){$("."+ ar[index]).hide().fadeIn(200);},500);   
//     userInput(ans,ar);
// }

// function userInput(ans,ar){
//     $(".btn").off("click").on("click",function(){
//         let temp = ar.indexOf($(this).attr('class').split(' ')[1]);                  
//         animatePress(this);
//         inputArr.push(temp);
//         setTimeout(function(){check(inputArr,ans);},100);       
//     })
// }

// function check(inputArr,ans){
//     const json1 = JSON.stringify(ans);
//     const json2 = JSON.stringify(inputArr)
//     if(ans.length === inputArr.length)
//     {
//         if(json1 === json2){
//             nextLevel(ans,ar);
//         }
//         else{
//             inputArr = [];
//             $("h1").text("chiii kruthii bot!, wanna play again then edokati nokki saav");
//             game = false;
//         }
//     }
//     else
//     {
//         var temp = 0;
//         for(var i=0;i<inputArr.length;i++){
//             if(ans[i]===inputArr[i]){
//                 temp++;
//                 continue;
//             }
//             else{
//                 inputArr = [];
//                 $("h1").text("chiii kruthii bot!, wanna play again then edokati nokki saav");
//                 game = false;
//             }
//         }
//         if(temp === inputArr.length){
//             userInput(ans,arr);
//         }        
//     }    
// }


// function animatePress(button)
// {
//     $(button).addClass("pressed");
//     setTimeout(function(){$(button).removeClass("pressed");},100);   

// }

var ar=["green","red","yellow","blue"],game=!1,ans=[],inputArr=[];function nextLevel(e,t){level++,inputArr=[],$("h1").text("Level "+level);var n=Math.floor(4*Math.random());e.push(n),setTimeout((function(){$("."+t[n]).hide().fadeIn(200)}),500),userInput(e,t)}function userInput(e,t){$(".btn").off("click").on("click",(function(){let n=t.indexOf($(this).attr("class").split(" ")[1]);animatePress(this),inputArr.push(n),setTimeout((function(){check(inputArr,e)}),100)}))}function check(e,t){const n=JSON.stringify(t),i=JSON.stringify(e);if(t.length===e.length)n===i?nextLevel(t,ar):(e=[],$("h1").text("chiii kruthii bot!, wanna play again then edokati nokki saav"),game=!1);else{for(var a=0,r=0;r<e.length;r++)t[r]!==e[r]?(e=[],$("h1").text("chiii kruthii bot!, wanna play again then edokati nokki saav"),game=!1):a++;a===e.length&&userInput(t,arr)}}function animatePress(e){$(e).addClass("pressed"),setTimeout((function(){$(e).removeClass("pressed")}),100)}$(document).keypress((function(){game||(game=!0,level=0,nextLevel(ans=[],ar))}));