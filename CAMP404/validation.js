function klik() {
  document.getElementById("info").innerHTML =
    "isikan semua FIELD, format email";
}

function validate() {
  event.preventDefault();
  let huruf = /^[A-Za-z]+$/;
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{w,3})+$/;
  let inputNama = document.forms["form_daftar"]["nama"].value;
  let inputEmail = document.forms["form_daftar"]["email"].value;
  let inputAlamat = document.forms["form_daftar"]["alamat"].value;
  let inputNomor = document.forms["form_daftar"]["nomorHP"].value;
  if (inputNama.match(huruf)) {
    let namaValid = inputNama;
  } else {
    alert("Input nama tidak sesuai");
  }
  if (inputEmail.match(mailformat)) {
    let emailValid = inputEmail;
  } else {
    alert("inputemail tidak sesuai");
  }
  if (inputAlamat == "") {
    alert("alamat tidak boelh kososng");
  } else {
    let alamatValid = inputAlamat;
  }
  if (isNaN(inputNomor) || inputNomor.toString().length < 10) {
    alert("Input nomor hp tidak sesuai");
  } else {
    let nomorValid = inputNomor;
  }

  document.getElementById("hasil").innerHTML =
    namaValid +
    "<br />" +
    emailValid +
    <br /> +
    alamatValid +
    "<br/>" +
    nomorValid;

  document.getElementById("tombol2").textContent = "Registered";
}
