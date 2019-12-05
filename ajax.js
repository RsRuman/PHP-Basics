var data = document.querySelector("#fetchBtn");
var postBtn = document.querySelector("#postBtn");

data.addEventListener("click", buttonClickListener);
postBtn.addEventListener("click", postBtnListener);

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
