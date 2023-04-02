// select each button
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');

// select each image container
const imageContainer = document.getElementById('image-container');

// button click event handler
option1.addEventListener('click', function() {
  // create new image
  const newImg = document.createElement('img');
  newImg.src = 'path/to/option1/image.png';
  
  // add new image in image container
  imageContainer.innerHTML = '';
  imageContainer.appendChild(newImg);
});

option2.addEventListener('click', function() {
  const newImg = document.createElement('img');
  newImg.src = 'path/to/option2/image.png';
  
  imageContainer.innerHTML = '';
  imageContainer.appendChild(newImg);
});

option3.addEventListener('click', function() {
  const newImg = document.createElement('img');
  newImg.src = 'path/to/option3/image.png';
  
  imageContainer.innerHTML = '';
  imageContainer.appendChild(newImg);
});
