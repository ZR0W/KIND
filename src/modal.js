var word = ["hello", "oh"];

$(document).ready(function() {
    console.log("document ready function fired from");
    console.log(word);

    $(document).keydown(function(e) {
        console.log(e.code);
        //get focued active element
        var target = document.activeElement;
        // var $focused = $(':focus');
        // console.log($focused);
        console.log(target);
        var text = $(':focus').val();
        console.log(text);

        function hasBadWord(text) {
            console.log("text form inside has badword fuction: " + text);
        }

        hasBadWord(text);
    });


});