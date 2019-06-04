function post_test() {
  console.log("in post test method");

  fetch('http://localhost:8080/post_test', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "name": "zhangsan",
      "age": 18
    })
  })
}


function upload_test(file) {
  let formData = new FormData();
  formData.append('f1', file);
  formData.append('name', "zhangsan");
  fetch('http://localhost:8080/upload_test', {
    method: "POST",
    body: formData
  })
}
if (document.getElementById('post_test_btn')) {
  document.getElementById('post_test_btn').onclick = post_test;
}

if (document.getElementById('file_upload')) {
  document.getElementById('file_upload').onchange = function () {
    let file = document.getElementById('file_upload').files[0];
    upload_test(file);
  }
}