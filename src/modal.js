var word = ["fuck", "damn", "shit", "suck", "faggot","bitch", "cunt"];
var triggerElement;
var monitorOn = true;
var secondtry = false;

$(document).ready(function() {
    console.log("document ready function fired from modal.js");
    console.log(word);

    function appendModal() {
        // var box = '<div id="myModal" class="modal"><div class="modal-content"><div class="modal-header"><span class="close">&times;</span><h2></h2></div><div class="modal-body"><p id="modaltext">Are you <span class="bigger">SURE</span> you want to say  <span class="bigger">________</span> to @Blah</p><button id="modalReturn">Retract</button><button id="modalContinue">Continue</button></div></div>';
        // $("body").append(box);

        //modal close button
        $(".close").click(function() {
            console.log($("myModal"));
            console.log($("myModal").style);
            $(".modal")[0].style.display = "none";
        });

        $("#modalReturn").click(function() {
            console.log("modal return clicked");
            // triggerElement.val("");
            // triggerElement.innerText = "";
            /*
            this function is specificaly targeting the code for twitter.com
            */
            function targetTwitter() {
                $(".DraftEditor-root").find("span[data-text]").text("");
                location.reload();
                //.text("") cleared the text at first glance but comes back with focus returns to draft box
                // triggerElement.focus();

                //trying a different thing:
                // var out = $(".DraftEditor-root").find("span[data-offset-key]");
                // $(".DraftEditor-root").find("span[data-text]").remove();
                // $(".DraftEditor-root").find("span[data-offset-key]").append(document.createElement("br").setAttribute("data-text", "true"));
                //the above method successfully got rid of the text but then casued twitter to realize a page error and refreshed
            }
            $(".modal")[0].style.display = "none";
            targetTwitter();
        });

        $("#modalContinue").click(function() {
            console.log("modal continue called");
            if(secondtry){
                monitorOn = false;
                $(".modal")[0].style.display = "none";
            }else{
                var txt = "Really? Give it another thought please."
                var speed = 20;
                var i =0;
                function typeWriter() {
                    if (i < txt.length) {
                        document.getElementById("typetext").innerHTML += txt.charAt(i);
                        i++;
                        setTimeout(typeWriter, speed);
                      }
                  }
                // initial animation attempt
                // $("#modaltext").addClass("modaltext-change");
                typeWriter();
                secondtry = true;
            }
        });

    }

    appendModal();

    $(document).keyup(function(e) {
        if(!monitorOn) {
            return;
        }
        console.log(e.code);
        //get focued active element
        var target = document.activeElement;
        // var $focused = $(':focus');
        // console.log($focused);
        console.log("activeElement: " + target);
        // console.log("activeElement detail: " + target.html());
        triggerElement = $(':focus');
        console.log("focused element: " + triggerElement);
        console.log("focused element detail: " + triggerElement.html());
        // var text = triggerElement.val().toLowerCase();
        /*
        right now it seems the html() method works for editable div and val() for input tags
        */
        var text = triggerElement.html().toLowerCase();
        console.log(text);

        function hasBadWord(text) {
            console.log("text form inside has badword fuction: " + text);
            for(var i = 0; i < word.length; i++){
                if(text.includes(word[i])){
                    //found matching keyword
                    console.log("found keyword: " + word[i]);
                    //fire modal popup
                    function showModal() {
                        $('#modalContinue').hide();
                        $(".modal")[0].style.display = "block";
                        $('#modalContinue').delay(5000).fadeIn(300);
                    }
                    showModal();
                }
            }
        }

        hasBadWord(text);
    });

});