
function on_load()
{
  var onsubmit = function (e) {
    // stop the regular form submission
    e.preventDefault();
    
    // collect the form data while iterating over the inputs
    var data = {};
    for (var i = 0, ii = this.length; i < ii; ++i) {
      var input = this[i];
      if (input.name) {
        data[input.name] = input.value;
      }
    }

    // construct an HTTP request
    var xhr = new XMLHttpRequest();
    xhr.open(this.method, this.action, true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    
    // send the collected data as JSON
    var json = JSON.stringify(data);
    xhr.send(json);

    xhr.onloadend = function () {
      var response = xhr.responseText;
      var json = JSON.parse(response);
      if (json.success)
      {
        var output = document.getElementById("video-submit");
        output.innerHTML = json.output;
        on_load();
      }
    };
  };

  var video_form = document.getElementById("video_form");
  if (video_form)
  {
    video_form.onsubmit = onsubmit;
  }
}

