function detectButton(button) {
    var exampleNews = button.parentNode;
    var p = exampleNews.getElementsByTagName("p")[0];
    var result = exampleNews.getElementsByClassName("result")[0];
    var text = p.textContent || p.innerText;
    var words = ['fake', 'trump']; // 추가하고 싶은 단어들을 배열로 정의합니다.
    var wordsCount = Array.from(words, () => 0); // 배열의 요소 수 만큼 0으로 초기화된 배열을 만듭니다.
    for (var j = 0; j < words.length; j++) {
    wordsCount[j] = (text.match(new RegExp(words[j], 'gi')) || []).length;
    }
    var total = wordsCount.reduce((a, b) => a + b, 0); // 배열의 모든 요소를 더해 총 개수를 구합니다.
    if (total >= 5) {
    result.innerHTML = 'FAKE!';
    } else {
    result.innerHTML = 'TRUE!';
    }
    }