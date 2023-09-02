
var editLoopCount=0; 
var slLoopCount =0;
var editStatus =  false;
//function saveTask or addTask button
function savetask()
{
    if(blankcheck())
    {
        add_storage_data();
        previewForm();
        display_data();
        closeModal();
        //edit_task()
        location.reload();
    }else
    return false;
}

// blankCheck function
function blankcheck()
{
        // stor datainto a varrriable
        var taskTitle = document.forms["new-task-form"]["task"].value;
        var taskDesc = document.forms["new-task-form"]["description"].value;
    if (taskTitle == "")
    {
        alert("Task must be filled out");
        return false;
     }
     else 
     {
        return  true;
     }
}

//comlete button function
function Completed(count)
{
    alert("Task no : "+(count+1)+" is completed");
    var jsonVal = localStorage.getItem("jsondata");
    const json = JSON.parse(jsonVal);
    
    if (json[count].status==1){
        json[count].status=0; 
    }
    else
        json[count].status=1;
    localStorage.setItem("jsondata",JSON.stringify(json));
    location.reload();
    return false;
}

//Delete button function
function Delete(count)
{
    alert("Are you sure to delete task no : "+(+count+1)+" ?");
    var jsonVal = localStorage.getItem("jsondata");
    const json = JSON.parse(jsonVal);
    if (count > -1) { // only splice array when item is found
        json.splice(count, 1); // 2nd parameter means remove one item only
    }
    localStorage.setItem("jsondata",JSON.stringify(json));//update storage
    location.reload();
}

//Edit button
function Edit(count) 
{
    alert("Are you sure to delete task no : "+(count+1)+" ?");
    var jsonVal = localStorage.getItem("jsondata");
    const json = JSON.parse(jsonVal);
    showModal();
    document.forms["new-task-form"]["task"].value = json[count].name;
    document.forms["new-task-form"]["description"].value = json[count].description;
    document.forms["new-task-form"]["task-date"].value = json[count].date;
    
    editStatus= true;
    editLoopCount=count;
}


// Modal Window
// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
function showModal() 
{
    document.getElementById("myModal").style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function closeModal()
{
    document.getElementById("myModal").style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event)
{
    var modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


//ADD data in local storage
window.localStorage
function add_storage_data()
{

    var task = document.forms["new-task-form"]["task"].value;
    var desc = document.forms["new-task-form"]["description"].value;
    var date = document.forms["new-task-form"]["task-date"].value;
    
    var jsonVal = localStorage.getItem("jsondata");
    const json = JSON.parse(jsonVal);
    
    if (editStatus){
        json[editLoopCount].date=date;
        json[editLoopCount].name=task;
        json[editLoopCount].description=desc;
        
        localStorage.setItem("jsondata",JSON.stringify(json));
    }
    else{
    var arrayNew= 
        {
            "id":(json!=null?json.length+1:1),
            "name":task,
            "description":desc,
            "date":date,
            "status":0
        } ;
    if (json!=null){
        json.push(arrayNew);
        localStorage.setItem("jsondata",JSON.stringify(json));
    }else{
        localStorage.setItem("jsondata","["+ JSON.stringify(arrayNew)+"]");
    } 
    }
}

//display function-display all data
function display_data() 
{
    var table=document.getElementById('tableContainer');
    var jsonVal = localStorage.getItem("jsondata");
    var json = JSON.parse(jsonVal);
    //let json = JSON.stringify(jsonData);

    if (json!=null){
            for (var i=0; i<json.length; i++)
            {
                // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
                var row = table.insertRow(i+1); 
                var cell1 = row.insertCell(0);   //for sl no 
                var cell2 = row.insertCell(1);   //for date 
                var cell3 = row.insertCell(2);   //for task title 
                var cell4 = row.insertCell(3);   //for task description 
                var cell5 = row.insertCell(4);   //for completed
                var cell6 = row.insertCell(5);   //for edit
                var cell7 = row.insertCell(6);    //for delete   
                // Add some text to the new cells:
                var j = (i+1);
                cell1.innerHTML = j;
                cell2.innerHTML = json[i].date;
                cell3.innerHTML = json[i].name;
                cell4.innerHTML = json[i].description;
                cell5.innerHTML = "<img src='https://github.com/abir396/to-do_Application_using_localStorage.github.io/blob/main/images/complete.png' alt='Complete' title='Complete-task' style='width: 25px ; height: 25px;' onclick='Completed("+i+"); return false;'>";
                cell6.innerHTML = "<img src='./images/edit.png' alt='Edit' title='Edit-task' style='width: 20px ; height: 20px;' onclick='Edit("+i+"); return false;'>";
                cell7.innerHTML = "<img src='./images/delete.png' alt='Delete' title='Delete-task' style='width: 30px ; height: 30px;' onclick='Delete("+i+"); return false;'>";

                var table1=document.getElementById('tableContainer').getElementsByTagName("tr");
                if(json[i].status==1){
                    table1[i+1].style.backgroundColor="green"; 
                }
            }
        }
        //return false;
}

//delete all data from local storage
function empty_storage() 
{
    alert(" Are you sure to delete all data ?");
    localStorage.clear();
    location.reload();
}
