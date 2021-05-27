console.log("Heating things up...")

separator = " : "

function downloadTextArea() {
    currentdate = new Date().getTime();
    textarea = document.getElementById("yoitsme").value;
    function dataUrl(data) {
                return "data:x-application/xml;charset=utf-8," + escape(data);
              }
              var downloadLink = document.createElement("a");
              downloadLink.href = dataUrl(textarea);
              downloadLink.download = ("rsg"+currentdate+".txt");

              document.body.appendChild(downloadLink);
              downloadLink.click();
              document.body.removeChild(downloadLink);
}
function isNumber(input){
    if(isNaN(input) || input ==""){
        return false;
    } else {
        return true;
    }
}

function resizeTextarea() {
    find = document.getElementById("yoitsme");
    find.style.height = "";
    find.style.height = find.scrollHeight + "px";
}
function makeString(length) {
    var result = [];
    if(document.getElementById("4").checked) {
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
        }
        return result.join('');
    } else {
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
        }
        return result.join('');
    }
   // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
}

function printAll(input){
    place = document.getElementsByClassName("output")[0].getElementsByClassName("textarea-holder")[0];
    place.innerHTML=
    (
        "<textarea readonly id='yoitsme'>"+input+"</textarea>"
    );
    resizeTextarea();
}

function one(input) {
    printAll(makeString(input));
}

function few(input1, input2) {
    var result = "";
    for (var i=0; i<input2; i++) {
        result = result.concat(makeString(input1)+"\n");
    }
    printAll(result)
}

function alot(input1, input2, input3) {
    var result = "";
    for (var i=0; i<input2; i++) {
        for (var j=0; j<input3; j++) {
            if(j<(input3-1)) {
                result = result.concat(makeString(input1)+separator);
            } else {
                result = result.concat(makeString(input1));
            }
        }
        result = result.concat("\n");
    }
    printAll(result);
}

function app() {
    stringlen = parseInt(document.getElementById("1").value);
    amount = parseInt(document.getElementById("2").value);
    inlineamount = parseInt(document.getElementById("3").value);

    document.getElementById("dwn").style.display="flex";
    if(isNumber(stringlen) && stringlen>0) {
        if(isNumber(amount) && amount>0) {
            if(isNumber(inlineamount) && inlineamount>0) {
                // 3
                alot(stringlen, amount, inlineamount)
            } else {
                // 2
                few(stringlen, amount)
            }
        } else {
            // 1
            one(stringlen)
        }
    } else {
        if(isNumber(amount) && amount>0) {
            if(isNumber(inlineamount) && inlineamount>0) {
                // 3
                alot(16, amount, inlineamount)
            } else {
                // 2
                few(16, amount)
            }
        } else {
            // 1
            one(16)
        }
    }

}

console.log("Loaded succesfully!")