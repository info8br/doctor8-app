
//Admin
localStorage.setItem("newusers", "1");

// Store
localStorage.setItem("url", "https://supabase.mehfius.repl.co");


// Supabase

localStorage.setItem("supabasekey", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZmbGh1cXF6am1na2Roamd4em5pIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE5MDE1NzIsImV4cCI6MTk3NzQ3NzU3Mn0.h8KOM1CCXPY80ImmmsrLmGp0Wib0z8C80KNFFGjzcn8");

localStorage.setItem("supabaseurl", "https://vflhuqqzjmgkdhjgxzni.supabase.co/");


const subdomain = window.location.hostname.split(".")[0]

if (subdomain == 'dark') {

  document.body.setAttribute('darkmode', '');

  script = document.createElement("script");
  script.src = "https://vflhuqqzjmgkdhjgxzni.supabase.co/storage/v1/object/public/js/all_dev.js";
  document.head.appendChild(script);

} else {

  script = document.createElement("script");
  script.src = "https://doctor8js.vercel.app/all.js";
  document.head.appendChild(script);
}