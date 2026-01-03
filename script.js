const supabaseUrl = "DEINE_SUPABASE_URL";
const supabaseKey = "DEIN_ANON_KEY";
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Buttons
const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");

// Beispiel Login
loginBtn.addEventListener("click", async () => {
  const email = prompt("Email:");
  const password = prompt("Password:");
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if(error) alert(error.message);
  else alert("Erfolgreich eingeloggt!");
});

// Beispiel Registration
registerBtn.addEventListener("click", async () => {
  const email = prompt("Email:");
  const password = prompt("Password:");
  const { data, error } = await supabase.auth.signUp({ email, password });
  if(error) alert(error.message);
  else alert("Account erstellt!");
});
