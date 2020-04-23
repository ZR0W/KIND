var word = ["hello", "oh", "fuck", "damn", "shit", "suck"];
var triggerElement;
var monitorOn = true;

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
                //.text("") cleared the text at first glance but comes back with focus returns to draft box
                // triggerElement.focus();

                //trying a different thing:
                // var out = $(".DraftEditor-root").find("span[data-offset-key]");
                // $(".DraftEditor-root").find("span[data-text]").remove();
                // $(".DraftEditor-root").find("span[data-offset-key]").append(document.createElement("br").setAttribute("data-text", "true"));
                //the above method successfully got rid of the text but then casued twitter to realize a page error and refreshed
            }
            targetTwitter();
            $(".modal")[0].style.display = "none";
        });

        $("#modalContinue").click(function() {
            console.log("modal continue called");
            monitorOn = false;
            $(".modal")[0].style.display = "none";
        });
        // document.getElementsByClassName("close")[0].onclick = spanClick;
        // window.onclick = windowClick;//close the modal on window click
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
                    $(".modal")[0].style.display = "block";
                }
            }
        }

        hasBadWord(text);
    });

});