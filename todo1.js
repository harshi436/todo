let todo=[];
let req=prompt("please entre your request");
while(true){
    if(req=="quit"){
        console.log("quitting app");
        break;
    }

    if(req=="list"){
        console.log("--------------");
        //for(task of todo){
          //  console.log(task);
          for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
          }
          console.log("----------------");
        }
       
    
    else if(req=="add"){
        let task=prompt("please enter the task you want to add");
        todo.push(task);
        console.log("task added")
    }
    //req=prompt("please entre your request");

    else if(req=="delete"){
    let idx=prompt("please enter the task u want to delete");
    todo.splice(idx,1);
    console.log("task deleted") ;
    }
    else{
        console.log("wrong request");
    }
    req=prompt("please entre your request");
}