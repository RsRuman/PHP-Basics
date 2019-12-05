var data = document.querySelector("#fetchBtn");
var postBtn = document.querySelector("#postBtn");
var empBtn = document.querySelector("#empBtn");
var list = document.querySelector("#list");

data.addEventListener("click", buttonClickListener);
postBtn.addEventListener("click", postBtnListener);
empBtn.addEventListener("click", getRandomApiData);

// Get Json data
function buttonClickListener(){
  // instantiate xhr object
  var xhr = new XMLHttpRequest();

  // open the object
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

  // on progress instantiate (Optional)
  xhr.onprogress = function(){
    console.log("The state in progress");
  }

  // onload state
  xhr.onload = function(){
    console.log(this.responseText);
  }

  // Now the last send instantiate
  xhr.send();
}

// Post Json Data
function postBtnListener(){
  // initiate xhr object
  var xhr = new XMLHttpRequest();

  // Open xhr object state
  xhr.open("POST", "http://dummy.restapiexample.com/api/v1/create", true);
  xhr.getResponseHeader("content-type", "application/json");

  // on progress state
  xhr.onprogress = function(){
    console.log("Send data is on progress");
  }

  // onload state
  xhr.onload = function(){
    if(this.status === 200){
      console.log(this.responseText);
    }
    else{
      console.log("Some error occurs.");
    }
  }

  // send data
  var jsonData ='{"name":"HumanBot","salary":"123","age":"23"}';
  xhr.send(jsonData);
}

// get data from random api
function getRandomApiData(){
  // initiate xhr object
  var xhr = new XMLHttpRequest();

  // Open xhr object state
  xhr.open("GET", "http://dummy.restapiexample.com/api/v1/employees", true);

  // on progress state
  xhr.onprogress = function(){
    console.log("Get data is on progress");
  }

  // onload state
  xhr.onload = function(){
    if(this.status === 200){
      var obj = JSON.parse(this.responseText);
      console.log(obj);
      var str = "";
      for(key in obj){
        str += '<li>' + obj[key].employee_name  + '</li>';
      }
      list.innerHTML = str;
    }
    else{
      console.log("Some error occurs.");
    }
  }

  // send state
  xhr.send();
}
