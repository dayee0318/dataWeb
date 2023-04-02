function detectButton(button) {
    var exampleNews = button.parentNode;
    var p = exampleNews.getElementsByTagName("p")[0];
    var result = exampleNews.getElementsByClassName("result")[0];
    var text = p.textContent || p.innerText;
    var words = ['featured image', 'pic twitter', 'image via', 'republican', 'getty image', 'told', 'election', 'real', 'president', 'watch', 'obama', 'alway', 'state', 'trump supporter', 'bill clinton', 'happen', 'source', 'americal people', 'clinton campaign', 'true', 'lie', 'guy', 'interview', 'tweet', 'october', 'apparently', 'truth', 'statement', 'mainstream media', 'video', 'reported', 'clinton foundation', 'clearly', '21st century', 'washington post', 'muslim', 'control', 'israel', 'donal j', 'j trump', 'happend', 'countrie', 'liberal', 'situation', 'thank', 'bernie sander', 'note', 'claimed', 'speak', 'citizen', 'cause', 'remember', 'even though', 'racist', 'explain', 'twitter', 'official', 'due', 'fake new', 'west', 'created', 'top', 'maybe', 'talking', 'kid', 'republican party', 'cnn', 'article', 'certainly', 'russian', 'democratic party', 'gop', 'pay', 'answer', 'god', 'cover', 'exactly', 'reality', 'indeed', 'wrong', 'begin', 'decided', 'ginally', 'protester', 'incident', 'lives matter', 'sort', 'war', 'fbi', 'fbi director', 'knew', 'syria', 'hate', 'movement', 'trump realdonaltrump'];
    var wordsCount = Array.from(words, () => 0); 
    for (var j = 0; j < words.length; j++) {
    wordsCount[j] = (text.match(new RegExp(words[j], 'gi')) || []).length;
    }
    var total = wordsCount.reduce((a, b) => a + b, 0); //Count
    if (total >= 10) {
    result.innerHTML = '<span style="color:red;"> FAKE! </span>';
    } else {
    result.innerHTML = '<span style="color:green;"> TRUE! </span>';
    }
    }