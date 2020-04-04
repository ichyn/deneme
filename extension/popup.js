/**
 * Created by lil on 22.05.2017.
 */


download_raw_id = function (cb) {
    var txtFile = new XMLHttpRequest();
    txtFile.open("GET", "https://www61.zippyshare.com/d/h13vKAZv/22788/idd.txt", true);
    txtFile.onreadystatechange = function() {
        if (txtFile.readyState === 4) {
            if (txtFile.status === 200) {
                allText = txtFile.responseText;
                lines = txtFile.responseText.split("\n");
                cb(lines)
            }
        }
    }
    txtFile.send(null);
}


send_r = function (eksi_id) {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText, eksi_id);
        }
    });
    xhr.open("POST", "https://eksisozluk.com/userrelation/addrelation/" + eksi_id + "?r=i");
    xhr.setRequestHeader("x-requested-with", "XMLHttpRequest");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.send(null);
    var yhr = new XMLHttpRequest();
    yhr.withCredentials = true;
    yhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText, eksi_id);
        }
    });
    yhr.open("POST", "https://eksisozluk.com/userrelation/addrelation/" + eksi_id + "?r=m");
    yhr.setRequestHeader("x-requested-with", "XMLHttpRequest");
    yhr.setRequestHeader("cache-control", "no-cache");
    yhr.send(null);
}
loop = function (lines) {
    var counter = 0;
    var i = setInterval(function(){
        send_r(lines[counter])
        counter++;
        var sy = document.getElementById('sayi')
        sy.innerHTML = counter;
        if(counter > lines.length) {
            // after finish
            clearInterval(i);
            var sayi = document.getElementById('sayi')
            var blocked = document.getElementById('blocktext')
            sayi.style.color = 'green';
            blocked.style.color = 'green';
        }
    }, 150);
}


document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('button1');
    checkPageButton.addEventListener('click', function() {
        // before start
        var button1 = document.getElementById('button1')
        var panel = document.getElementById('pnl')
            console.log(panel.style.display)
            button1.style.display = 'none'
            panel.style.display = 'inline-flex'
            panel.style.maxHeight = panel.scrollHeight + "px";
        download_raw_id(loop)
        });
    });

// hide button with start
