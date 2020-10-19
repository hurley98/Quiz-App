function submitAnswers(){
    var total = 5;
    var score = 0;

    //Get user input
    var q1 = document.forms["quizForm"]["q1"].value; //grab all forms on the page(just quizForm), wahtever he selects for q1
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;

    // Validation
   for(i = 1; i <= total; i++){
        if(eval('q' + i) == null || eval('q' + i) == ''){  //q1,q2,q3,q4,q5
            alert('You missed question ' + i);
            return false;
        }
    }

    //Set Correct Answers
    var answers = ["b", "a", "d", "b", "d"];

    //Check Answers
    for(i = 1; i <= total; i++){
        if(eval('q' + i) == answers[i - 1]){//q1,q2..
            score++;
        }
    }
    
    // Display results
    var results = document.getElementById('results');
    results.innerHTML = '<h3>You scored <span>' + score + '</span> out of <span>' + total + '</span></h3>'; 

    //alert('You scored ' + score + ' out of ' + total);

    return false;//because we re not actually submitting the form to any server
}