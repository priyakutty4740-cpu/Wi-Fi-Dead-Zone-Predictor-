function predictSignal() {
  const distance = Number(document.getElementById("distance").value);
  const walls = Number(document.getElementById("walls").value);
  const signal = Number(document.getElementById("signal").value);

  const result = document.getElementById("result");

  if (!distance || walls < 0 || !signal) {
    result.textContent = "⚠️ Please enter all details";
    return;
  }

  let score = 0;

  if (distance > 15) score += 2;
  else if (distance > 8) score += 1;

  if (walls >= 3) score += 2;
  else if (walls >= 1) score += 1;

  if (signal <= -80) score += 2;
  else if (signal <= -70) score += 1;

  if (score >= 4) {
    result.textContent = "🔴 Dead Zone";
  } 
  else if (score >= 2) {
    result.textContent = "🟡 Weak Signal";
  } 
  else {
    result.textContent = "🟢 Good Signal";
  }
}