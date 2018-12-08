$(document).ready(function() {

    //game start page
    $(".start-btn").click(function () {

        //hide the start page
        $(".start-btn").hide();
        $("#questionSite").empty();
        
        var questions = {
            q1: {
                question: '<br>1. <em>"Frankly, my dear, I do not give a damn."</em> Which movie was this quote from?',
                answer: [" The Searchers", " Gone with the Wind", " Rebecca", " Casablanca", " Die Hard"],
                correct: " Gone with the Wind"
            },
            q2: {
                question: '<br>2. <em>"They call me Mister Tibbs!"</em> Which movie was this quote from?',
                answer: [" In the Heat of the Night", " Do the Right Thing", " To Sir, with Love", " On the Waterfront", " Rebecca"],
                correct: " In the Heat of the Night"
            },
            q3: {
                question: '<br>3. <em>"Made it, Ma! Top of the world!"</em> Which movie was this quote from?',
                answer: [" White Heat", " Goodfellas", " Little Caesar", " In the Heat of the Night", " The Godfather"],
                correct: " White Heat"
            },
            q4: {
                question: '<br>4. <em>"May the Force be with you."</em> Which movie was this quote from?',
                answer: [" Star Trek", " Back to the Future", " Key Largo", " The Matrix", " Star Wars"],
                correct: " Star Wars"
            },
            q5: {
                question: '<br>5. <em>"Here is looking at you, kid."</em> Which movie was this quote from?',
                answer: [" The Maltese Falcon", " Key Largo", " The Matrix", " The Big Sleep", " Casablanca"],
                correct: " Casablanca"
            },
            q6: {
                question: '<br>6. <em>"You can not handle the truth!"</em> Which movie was this quote from?',
                answer: [" The Matrix", " The Godfather", " A Few Good Men", " Tootsie", " The Maltese Falcon"],
                correct: " A Few Good Men"
            },
            q7: {
                question: '<br>7. <em>"Love means never having to say you are sorry."</em> Which movie was this quote from?',
                answer: [" The Notebook", " Casablanca", " Love Story", " Gone with the Wind", " A Few Good Men"],
                correct: " Love Story"
            },
            q8: {
                question: '<br>8. <em>"Oh, Jerry, don not let us ask for the moon. We have the stars."</em> Which movie was this quote from?',
                answer: [" Dark Victory", " Mildred Pierce", " All About Eve", " The Notebook", " Now, Voyager"],
                correct: " Now, Voyager"
            },
            q9: {
                question: '<br>9. <em>"The stuff that dreams are made of."</em> Which movie was this quote from?',
                answer: [" The Wizard of Oz", " The Matrix", " The Natural", " The Maltese Falcon", " Mildred Pierce"],
                correct: " The Maltese Falcon"
            },
            q10: {
                question: '<br>10. <em> "Today, I consider myself the luckiest man on the face of the earth."</em> Which movie was this quote from?',
                answer: [" The Maltese Falcon", " The Natural", " The Pride of the Yankees", " Bull Durham", " A Few Good Men"],
                correct: " A Few Good Men"
            },

        };
        
        $("#questionSite").append("<div class='timer'><p>Time left: <span class='time-Text'>60</span> s</p></div>");

        //Timer
        var isTimeOn = false;
        var timeCountDown = 60;
        if (isTimeOn == false) {
            var timer = setInterval(function() {
                timeCountDown--;
                $(".time-Text").text(timeCountDown);
                if (timeCountDown <= 0) {
                    getResult();   
                }
            }, 1000);
            isTimeOn = true;
        }

        var qArray = [];
        for (var set in questions) {
            //showing correct answer
            qArray.push(questions[set].correct);
            //showing questions
            $("#questionSite").append("<br><p>" + questions[set].question + "</p><br>");
            for (var i = 0; i < 5; i++) {
                var newInput = $("<input>");
                newInput.addClass("radioChoice");
                newInput.attr("type", "radio");
                newInput.attr("name", questions[set].answer[4]);
                newInput.attr("value", questions[set].answer[i]);
                newInput.text(questions[set].answer[i]);
                //showing choices
                $("#questionSite").append(newInput);
                $("#questionSite").append("<li style='display:inline'>" + questions[set].answer[i] + "</li><br>");

            }
        };
   
        //create submit button
        var newSbumitButton = $('<button class="start-btn"></button>');
        newSbumitButton.addClass("button btn-success btn-lg submit-btn");
        newSbumitButton.text("Submit");
        $("#questionSite").append("<br>");
        $("#questionSite").append(newSbumitButton);

        var userArray = [];

        $(".submit-btn").click(function () {
            getResult();
        })
        var correctNo;
        var skippedNo;
        var wrongNo;

        function getResult() {
            correctNo = 0;
            var getCheckedInput = $("Input:checked");
            $("Input:checked").each(function() {
                userArray.push($(this).val());
            });

            
            for (var i = 0; i < userArray.length; i++) {
                if (qArray.indexOf(userArray[i]) > -1) {
                correctNo++;
                }
            }
            skippedNo = qArray.length - userArray.length;
            wrongNo = qArray.length - correctNo - skippedNo;


            //result page
            $("#questionSite").empty();
            $("#questionSite").append("<h3> Correct:" + correctNo + "</h3>");
            $("#questionSite").append("<h3> Wrong:" + wrongNo + "</h3>");
            $("#questionSite").append("<h3> Skipped:" + skippedNo + "</h3>");
            $("#questionSite").append("<h3> Try Again!</h3>");
            $(".start-btn").show();
            isTimeOn == false;
            clearInterval(timer);
        }

    });

})