function randomtime(){
    return Math.random()*2000
}

function a(cb) {
    setTimeout(function(){
        cb("a");
    },randomtime());
    
}

var b = function(cb){
     setTimeout(function(){
        cb("b");
    },randomtime());
}

var c = function(cb){
     setTimeout(function(){
       cb("c");
    },randomtime(cb));
}

var d = function(){
    setTimeout(function(){
        return "d";    
    },randomtime());
}

///undefined เพราะว่า มันยังทำไม่เสร็จเลยทำให้เกิด undefined 
// result = d();
// console.log(result);

//ทำให้เป็นซิงโคไนท์
// a(function(result){
//     console.log(result);
//     b(function(result){
//         console.log(result);
//         c(function(result){
//             console.log(result);
//         });
//     });
// });

var allfuntion =[];
allfuntion.push(a);
allfuntion.push(b);
allfuntion.push(c);
allfuntion.forEach(function(value,index,alldata) {
    value(function(result){
        console.log(result);
    })
})

