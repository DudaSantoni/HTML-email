const form = document.getElementById("contactForm");
const feedback = document.getElementById("feedback");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const templateParams = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("template_25u307w", "Email Next Gen", templateParams)
    .then(
      function(response) {
        feedback.textContent = "Mensagem enviada com sucesso!";
        feedback.style.color = "green";
        form.reset();
      },
      function(error) {
        feedback.textContent = "Erro ao enviar. Tente novamente.";
        feedback.style.color = "red";
        console.error("Erro:", error);
      }
    );
});
