document.getElementById('sendButton').addEventListener('click', function() {
    const fileInput = document.getElementById('fileInput');
    const codeInput = document.getElementById('codeInput').value;

    if (fileInput.files.length > 0 && codeInput) {
        // Logika untuk mengirim file
        alert(`File ${fileInput.files[0].name} telah dikirim dengan kode: ${codeInput}`);
    } else {
        alert('Silakan pilih file dan masukkan kode.');
    }
});

document.getElementById('receiveButton').addEventListener('click', function() {
    const receiveCodeInput = document.getElementById('receiveCodeInput').value;

    if (receiveCodeInput) {
        // Logika untuk menerima file
        alert(`File diterima dengan kode: ${receiveCodeInput}`);
    } else {
        alert('Silakan masukkan kode penerimaan.');
    }
});