const { exec } = require('child_process');

exec('npx eslint . --ext .js --fix', (err, stdout, stderr) => {
  if (err) {
    console.log('❌ Errores encontrados:\n');
    console.log(stdout || stderr);
    console.log('\n🛠️ Ejecutando fix automático...\n');
    // El --fix ya intentó corregir, acá solo avisamos que quedaron errores
    console.log('⚠️ No se pudieron arreglar todos los errores automáticamente.');
  } else {
    console.log('✅ Todo está en orden. Nada que arreglar. 🎉');
  }
});
