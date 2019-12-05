var data = document.querySelector("#fetchBtn");
data.addEventListener("click", buttonClickListener);


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
