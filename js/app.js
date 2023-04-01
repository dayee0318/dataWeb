// 각 버튼 선택
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');

// 이미지 컨테이너 선택
const imageContainer = document.getElementById('image-container');

// 버튼 클릭 이벤트 핸들러 함수
option1.addEventListener('click', function() {
  // 새로운 이미지 생성
  const newImg = document.createElement('img');
  newImg.src = 'path/to/option1/image.png';
  
  // 이미지 컨테이너에 새로운 이미지 추가
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
