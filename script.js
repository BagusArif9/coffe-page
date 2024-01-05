async function sliderImg(imageName) {
    const product = document.querySelector('.product');
    product.src = `assets/${imageName}`;
  
    const productImages = document.querySelectorAll('.product');
    productImages.forEach(image => {
      image.src = `assets/${imageName}`;
    });
  
    const response = await fetch('product_descriptions.json');
    const descriptions = await response.json();
    const headerElement = document.querySelector('h2');
    const pElement = document.getElementById('specialParagraph');
    pElement.textContent = descriptions[imageName].paragraph;
  
    // Update the header and paragraph text
    headerElement.textContent = descriptions[imageName].header;
    pElement.textContent = descriptions[imageName].paragraph;
  }
  