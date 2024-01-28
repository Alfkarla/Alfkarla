function encryptText() {
    const originalTextArea = document.getElementById('originalText');
    const encryptedTextArea = document.getElementById('encryptedText');
    const imageInput = document.getElementById('imageInput');
  
    // Verificar si se proporcionó una imagen
    if (imageInput.files.length > 0) {
      const imageFile = imageInput.files[0];
      const reader = new FileReader();
  
      reader.onload = function (e) {
        // Obtener el texto Base64 de la imagen
        const imageBase64 = e.target.result.split(',')[1];
        const encryptedImageText = btoa(imageBase64);
        encryptedTextArea.value = encryptedImageText;
      };
  
      reader.readAsDataURL(imageFile);
    } else {
      // Si no se proporciona una imagen, encriptar el texto ingresado
      const originalText = originalTextArea.value.trim();
      const encryptedText = btoa(originalText);
      encryptedTextArea.value = encryptedText;
    }
  }
  