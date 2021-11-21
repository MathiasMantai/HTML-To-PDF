function createPDF() {
    // let doc = new jsPDF();
    let file = document.getElementById("imageFile").files[0];
    let reader = new FileReader();
    reader.onload = function(fileLoadedEvent) {
       let srcData = fileLoadedEvent.target.result;
       let newImage = document.createElement("img");
       newImage.src = srcData;
       let doc = new jsPDF('p','px');
       doc.addImage(srcData,"JPEG",0,0,newImage.width,newImage.height,"img","FAST",0);   
       doc.save("test.pdf"); 
       console.log("PDF file created");
    }
    reader.readAsDataURL(file);                  
}