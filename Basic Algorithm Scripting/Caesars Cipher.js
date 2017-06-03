/** DESCRIPTION */
/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known
 as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places.
 Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
Write a function which takes a ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase. Do not transform any non-alphabetic character
(i.e. spaces, punctuation), but do pass them on.
*/

/** First solution */
function rot13(str) { // LBH QVQ VG!
  var arr = str.split('');
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 'A' && arr[i] <= 'Z') {
      var intCode = 'A'.charCodeAt(0) + (arr[i].charCodeAt(0) + 13 - 'A'.charCodeAt(0)) % 26;
      arr[i] = String.fromCharCode(intCode);
    }
  }
  return arr.join("");
}

/** Second solution */
function rot13(str) { // LBH QVQ VG!
  var result = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i] >= 'A' && str[i] <= 'Z') {
      var intCode = 65 + (str.charCodeAt(i) + 13 - 65) % 26; // 65 it's 'A' numeric ASCII code
      result += String.fromCharCode(intCode);
    } else {
      result += str[i];
    }
  }
  return result;
}
/** Test calls */
rot13("SERR PBQR PNZC"); // should decode to "FREE CODE CAMP"
rot13("SERR CVMMN!"); // should decode to "FREE PIZZA!"
rot13("SERR YBIR?"); // should decode to "FREE LOVE?"
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."); // should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."
