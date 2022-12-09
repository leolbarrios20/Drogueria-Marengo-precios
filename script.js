function createPDF() {
    let element = document.getElementById('element-to-print');
    html2pdf(element, {
        margin:0,
        padding:0,
        filename: 'Lista de precios.pdf',
        image: { type: 'jpg', quality: 1 },
        html2canvas: { scale: 1,  logging: true },
        jsPDF: { unit: 'in', format: 'A3', orientation: 'P' },
        class: createPDF
    });
};

