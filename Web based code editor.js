document.getElementById('runBtn').addEventListener('click', function() {
    const code = document.getElementById('editor').value;
    const iframe = document.getElementById('output');
    
    const doc = iframe.contentDocument || iframe.contentWindow.document;
    doc.open();
    doc.write(code);
    doc.close();
});

