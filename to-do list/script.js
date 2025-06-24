const inputBox=document.getElementById("new-task");
const tasklist=document.getElementById("task-list");
const test=document.getElementById("test");
test.classList.toggle("default-message");
function addTask(){
        if(inputBox.value=== ''){
        }
        else{
            test.classList.add('default-message');
            let li=document.createElement("li");
            let btn=document.createElement("button");
            li.innerHTML=inputBox.value;
            btn.innerHTML=`Delete`;
            tasklist.appendChild(li);
            li.append(btn);
        }
        inputBox.value='';
        saveData();
        addclass();
}
function addclass(){
    if(tasklist.innerHTML===''){
        test.classList.remove('default-message');
    }
}

tasklist.addEventListener('click',function(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle("checked");
        saveData();
        addclass();
    }
    else if(e.target.tagName==="BUTTON"){
             e.target.parentElement.remove();
             saveData();
             addclass();
    }
},false);

function saveData(){
    localStorage.setItem("data",tasklist.innerHTML);
}

function Showtask(){
          tasklist.innerHTML=localStorage.getItem("data");
}
Showtask();