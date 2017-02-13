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

var d = function(cb){
    setTimeout(function(){
       cb("b");
    },randomtime());
}
var allfuntion =[];
allfuntion.push(a);
allfuntion.push(b);
allfuntion.push(c);
allfuntion.push(b);
allfuntion.push(a);
allfuntion.push(b);
allfuntion.push(c);
allfuntion.push(b);
allfuntion.push(a);
allfuntion.push(b);
allfuntion.push(c);
allfuntion.push(b);

var running = 0;
var limit =2;
var index = 0;
var maxitem = 12;
function callLimit(){
    while(running < limit && index < maxitem){
        
        allfuntion[index++](function(result){
           running--;
           if(index<maxitem) callLimit();
           console.log(result);
        });
        
        
        running++;
    }
    
}
callLimit();