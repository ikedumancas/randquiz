/*!
 * RandQuiz v0.1
 * by Miguel Ike Dumancas
 * MIT licensed || http://bit.ly/mit-license
 *
 * Copyright (C) 2015 Miguel Ike Dumancas, https://www.facebook.com/ikedumancas.official
 */
function shuffle(array) {
  var m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

function numAlpha(n) {
	n = n-1;
    var ordA = 'a'.charCodeAt(0);
    var ordZ = 'z'.charCodeAt(0);
    var len = ordZ - ordA + 1;
    var s = "";
    while(n >= 0) {
        s = String.fromCharCode(n % len + ordA) + s;
        n = Math.floor(n / len) - 1;
    }
    return s;
}

var insertHTML = '';
insertHTML = insertHTML + '<section id="intro"> \
	<h1>randQuiz</h1> \
	<h3>A simple multiple choice questions randomizer</h3> <p> <small> \
	Created by <a href="https://www.facebook.com/ikedumancas.official">Miguel Ike Dumancas</a></small></p> \
	</section>';

difficulty.forEach(function(d){
	insertHTML = insertHTML + '<section class="difficulty" data-background="#F1C40F"><h1>Difficulty : '+d.title+'</h1></section>'

	var shuffledQuestions = shuffle(d.questions);

	var i = 1;
	shuffledQuestions.forEach(function(q){
		insertHTML = insertHTML + '<section class="question"> \
			<section class="question-number"> \
				<h1>Question #'+i+'</h1> \
			</section> \
			<section class="question-body"> \
				<p> \
					'+q.question+' \
				</p> \
				<ol class="question-choices">';

		q.choices.forEach(function(c){
			insertHTML = insertHTML + '<li class="fragment">'+c+'</li>';
		});

		insertHTML = insertHTML + '</ol> \
			</section> \
			<section class="question-answer"  data-transition="zoom" data-background="#2980B9" data-background-transition="zoom"> \
				<h1>Answer</h1> \
				<h3 class="fragment">'+numAlpha(q.answer)+'. '+q.choices[q.answer-1]+'</h3> \
			</section> \
		</section>';
		i++;
	});
});
insertHTML = insertHTML + '<section id="end" data-background="#2ECC71" style="color:white"> \
	<h1>Thank you for using randQuiz</h1> \
	<p>Email me at <a href="mailto:ikedumancas.official@gmail.com">ikedumancas.official@gmail.com</a> </p> <p> <small> \
	Created by <a href="https://www.facebook.com/ikedumancas.official">Miguel Ike Dumancas</a></small></p> \
	<p><form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top"> \
		<input type="hidden" name="cmd" value="_s-xclick"> \
		<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7----- \
		"> \
		<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"> \
		<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"> \
		</form> \
	</p>\
	</section>';

$('.slides').append(insertHTML);