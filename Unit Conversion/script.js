function celToFer () {
    var cel_value = document.getElementById("c").value;
    var fer = ((cel_value * 9 )/5 ) + 32;
    document.getElementById("f").value = fer;
}

function kgToLbs () {
    var kg_value = document.getElementById("kg").value;
    var lbs = (kg_value * 2.2);
    document.getElementById("lbs").value = lbs;
}

function kmsToMil () {
    var kms_value = document.getElementById("km").value;
    var mls = (kms_value * 0.62137);
    document.getElementById("m").value = mls;
}