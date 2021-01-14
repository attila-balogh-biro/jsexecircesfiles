function overloadStorage(){
    var exception;
    var repeat = function(str, x) { return new Array(x+1).join(str); };
    var too_big = repeat("x", 12*1024*1024/2); // each JS character is 2 bytes
    localStorage.clear();
    try {
      localStorage.setItem("test", too_big);
    } catch (e) {
      exception = e;
      var message = `Exception caught : ${e}`;
      console.log(message);
    }
}

