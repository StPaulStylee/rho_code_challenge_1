/*
1 - Write a for loop that runs 5 times. Each iteration will increase the
    value of checkz by 1.
*/
var checkz = 0;

/*
2 - Write a while loop that runs 3 times. Each iteration will decrease
    the value of checkz by 2
*/
function loopFor() {
  for (var i = 0; i <= 4; i++) {
  checkz += 1;
  }
  return checkz;
}

function loopWhile() {
  while (checkz > (-6)) {
  checkz -= 2;
  }
return checkz;
}
