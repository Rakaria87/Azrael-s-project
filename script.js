var countdown = new Date ("Aug 12, 2036 03:43:11").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countdown - now;

    var days = Math.floor(distance / (1000*60*60*24)); //untuk perhitungan hari
    var hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60)); //untuk perhitungan jam
    var minutes = Math.floor((distance % (100*60*60)) / (1000*60)); //untuk perhitungan menit
    var seconds = Math.floor((distance % (1000*60)) / 1000); //untuk perhitungan detik

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0){
        clearInterval(x);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    }
},1000);