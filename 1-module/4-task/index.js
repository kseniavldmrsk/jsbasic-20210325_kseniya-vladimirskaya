function checkSpam(str) {
  var res = str.toLowerCase();
  if (res.includes('1xbet') || res.includes('xxx')) {
    return true;
  } else {
    return false;
  }
}
