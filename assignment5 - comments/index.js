var i = 1;

function postFunction() {
  let text = document.getElementById("text1").value;
  console.log(text);
  if (i == 1 && text != "") {
    document.getElementById("topic1").innerHTML = text;
    i++;
  } else if (i == 2 && text != "") {
    document.getElementById("comment1").innerHTML = text;
    i++;
  } else if (i == 3 && text != "") {
    document.getElementById("comment2").innerHTML = text;
    i++;
  } else if (i > 3 && text != "") {
    alert("ข้อมูลในบันทึกของคุณเต็มแล้ว ไม่สามารถโพสเพิ่มได้แล้วครับ");
  } else {
    if (text == "") {
      alert("กรุณาใส่ข้อมูลลงในช่องข้อความด้วยครับ");
    }
  }

  document.getElementById("text1").value = "";
}

function clearFunction() {
  document.getElementById("topic1").innerHTML = "";
  document.getElementById("comment1").innerHTML = "";
  document.getElementById("comment2").innerHTML = "";
  document.getElementById("text1").input = "";
  i = 1;
}
