

var activeBuu = false;

function _scriptBuuu() {
  var buuPass = document.querySelectorAll('input[type=password]');
  if (buuPass) {
    if (buuPass.length > 0) {
      for (let i = 0; i < buuPass.length; i++) {
        var bu = buuPass[i];
        var buInputType = bu.getAttribute('type');
        if (buInputType === 'password') {
          bu.setAttribute('type', 'text');
        }
      }
    }
  }
  }

function handleBuuu() {
  var btnBuu = document.getElementById('btn-buuuu');
  btnBuu.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(buus) {
      chrome.scripting.executeScript(
        {
          target: { tabId: buus[0].id },
          func:  _scriptBuuu,
        }
      );
    });
  });
}

// buuu init
document.addEventListener('DOMContentLoaded', function() {
  handleBuuu();
});

