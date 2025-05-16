function handleSubmit(event) {
  event.preventDefault();

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const sex = document.querySelector('input[name="sex"]:checked')?.value;
  const reason = document.getElementById("reason").value.trim();

  if (!firstName || !lastName || !email || !sex || !reason) {
    alert("Please fill in all required fields.");
    return;
  }

  localStorage.setItem("firstName", firstName);
  localStorage.setItem("lastName", lastName);
  localStorage.setItem("email", email);
  localStorage.setItem("sex", sex);
  localStorage.setItem("reason", reason);

  window.location.href = "../html/profile.html";
}

function loadProfile() {
  const container = document.getElementById("profile-container");

  const data = {
    firstName: localStorage.getItem("firstName"),
    lastName: localStorage.getItem("lastName"),
    email: localStorage.getItem("email"),
    sex: localStorage.getItem("sex"),
    reason: localStorage.getItem("reason"),
  };

  container.innerHTML = `<div class="profile-info">
      <h1>Hello, ${data.firstName} ${data.lastName}!</h1>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Sex:</strong> ${data.sex}</p>
      <p><strong>Why you joined:</strong> ${data.reason}</p>
    </div>
  `;
}
