document.getElementById('dmgInput').addEventListener('change', function(event) {
  const file = event.target.files[0];
  const output = document.getElementById('output');
  output.textContent = '';
  
  if (!file) {
    output.textContent = 'Please select a DMG file.';
    return;
  }

  // Simulate DMG file analysis (since browsers can't extract DMG files)
  if (file.name.endsWith('.dmg')) {
    output.innerHTML = `
      <strong>File Name:</strong> ${file.name}<br>
      <strong>File Size:</strong> ${(file.size / (1024 * 1024)).toFixed(2)} MB<br>
      <strong>Status:</strong> DMG file detected.<br>
      <strong>Note:</strong> Actual DMG extraction is not possible in browser. This is a simulation.
    `;
  } else {
    output.textContent = 'Selected file is not a DMG file.';
  }
});
