function isEmpty(obj) {
  var res = 0;
    for(var key in obj){
        res++;
    }
    if(res != 0) {
        return false;
    }
    return true;
};

var months = {};
