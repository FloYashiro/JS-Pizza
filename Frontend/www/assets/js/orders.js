function validon(div, input, span) {
    if(div.hasClass("input-error"))
        div.removeClass("input-error");
    div.addClass("input-success");
    
    if(input.hasClass("input-error-border"))
        input.removeClass("input-error-border");
    input.addClass("input-success-border");
    
    if(span.hasClass("cheat-show")) {
        span.removeClass("cheat-show");
    }
    span.addClass("cheat-hidden");
}

function invalidon(div, input, span) {
    if(div.hasClass("input-success"))
        div.removeClass("input-success");
    div.addClass("input-error");
    
    if(input.hasClass("input-success-border"))
        input.removeClass("input-success-border");
    input.addClass("input-error-border");
    
    if(span.hasClass("cheat-hidden")) {
        span.removeClass("cheat-hidden");
    }
    span.addClass("cheat-show");
}

function namevalid() {
    var input = $('#name');
    var val = input.val();
    
    if(val.length < 2) {
        invalidon($('.name-group'), input, $('.name-cheat'));
        return false;
    }
    
    for(var i = 0; i < val.length; i++) {
        var char = val.charAt(i);
        if(char <= "9" && char >= "0" || char == " ") {
            invalidon($('.name-group'), input, $('.name-cheat'));
            return false;
        }
    }
    
    validon($('.name-group'), input, $('.name-cheat'));
    return true;
}

function phonevalid() {
    var input = $('#phone');
    var val = input.val();
    
    if(val.length != 13 && val.length != 10) {
        invalidon($('.phone-group'), input, $('.phone-cheat'));
        return false;
    } else if(val.length == 13) {
        if(val.charAt(0) != "+") {
            invalidon($('.phone-group'), input, $('.phone-cheat'));
            return false;
        }
        for(var i = 1; i < val.length; i++) {
            var char = val.charAt(i);
            if(char > "9" || char < "0") {
                invalidon($('.phone-group'), input, $('.phone-cheat'));
                return false;
            }
        }
    } else if(val.length == 10) {
        if(val.charAt(0) != "0") {
            invalidon($('.phone-group'), input, $('.phone-cheat'));
            return false;
        }
        for(var i = 1; i < val.length; i++) {
            var char = val.charAt(i);
            if(char > "9" || char < "0") {
                invalidon($('.phone-group'), input, $('.phone-cheat'));
                return false;
            }
        }
    }
    
    validon($('.phone-group'), input, $('.phone-cheat'));
    return true;
}

$('.button-reorder').click(function() {
    document.location.href="index.html";
});