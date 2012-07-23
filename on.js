// https://gist.github.com/603980
/*javascript: */(function(window, document) {

  // http://www.quirksmode.org/js/cookies.html#script
  function createCookie(name,value,days) {
    var expires;
    if (days) {
      var date = new Date();
      date.setTime(date.getTime()+(days*24*60*60*1000));
      expires = '; expires='+date.toGMTString();
    }
    else expires = '';
    document.cookie = name+'='+value+expires+'; path=/';
  }

  createCookie('fstrz', '', -1);
  window.location.reload(true);
}(this, document));
