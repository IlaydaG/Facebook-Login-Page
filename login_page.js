document.addEventListener("DOMContentLoaded", function () {
  const loginButton = document.querySelector(".login-container button");
  const emailInput = document.querySelector(".login-container input[type='text']");
  const passwordInput = document.querySelector(".login-container input[type='password']");
  const form = document.querySelector(".form form");
  const createAccountButton = document.querySelector(".button-create");

  // Giriş butonuna tıklama 
  loginButton.addEventListener("click", function (event) {
      event.preventDefault(); // Sayfanın yenilenmesini önler
      if (emailInput.value === "" || passwordInput.value === "") {
          alert("Lütfen e-posta ve şifre alanlarını doldurun!");
      } else {
          console.log("Giriş başarılı:", emailInput.value);
          alert("Başarıyla giriş yaptınız!");
      }
  });

  // Kayıt butonuna tıklama 
  createAccountButton.addEventListener("click", function (event) {
      event.preventDefault();
      const inputs = form.querySelectorAll("input");
      let isValid = true;

      inputs.forEach(input => {
          if (input.value.trim() === "") {
              isValid = false;
              input.style.border = "2px solid red"; // Boş alanları kırmızı yap
          } else {
              input.style.border = "1px solid #ddd"; // Dolu alanları normale döndür
          }
      });

      if (isValid) {
          alert("Hesap başarıyla oluşturuldu!");
          console.log("Hesap oluşturuldu.");
          form.reset(); 
      } else {
          alert("Lütfen tüm alanları doldurun!");
      }
  });

  // Gerçek zamanlı giriş kontrolü (Boş alanlar için)
  form.querySelectorAll("input").forEach(input => {
      input.addEventListener("input", function () {
          if (this.value.trim() !== "") {
              this.style.border = "1px solid #ddd";
          }
      });
  });
});
