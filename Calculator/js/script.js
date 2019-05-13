function c(val) {
  document.getElementById("d").value = val;
}
function v(val) {
  document.getElementById("d").value += val;
}
function e() {
  try {
    c(eval(document.getElementById("d").value));
  } catch (e) {
    c("Error");
  }
}
function factorial() {
  x = a("answer").value;
  let kq = 1;
  for (let i = x; i > 1; i--) {
    kq *= i;
    a("answer").value = kq;
  }
}

function sqrt() {
  if (a("answer").value == "") {
    a("answer").value = "";
    x = a("answer").value;
  } else {
    x = a("answer").value;
    a("answer").value = Math.sqrt(x);
  }
}

function sqr() {
  if (a("answer").value == "") {
    a("answer").value = "";
    x = a("answer").value;
  } else {
    x = a("answer").value;
    a("answer").value = x * x;
  }
}
