// DROPDOWN
// CHARRED PIZZA
function dropdown() {
    var submit = document.getElementById("submit");
    var input = document.getElementById("select").value;

    const srcs = [
        "/html/charred_pizza/1.html",
        "/html/charred_pizza/2.html",
        "/html/charred_pizza/3.html",
        "/html/charred_pizza/4.html",
        "/html/charred_pizza/5.html",
        "/html/charred_pizza/6.html",
        "/html/charred_pizza/7.html",
        "/html/charred_pizza/8.html",
        "/html/charred_pizza/9.html",
        "/html/charred_pizza/10.html",
        "/html/charred_pizza/11.html",
        "/html/charred_pizza/12.html",
        "/html/charred_pizza/13.html",
        "/html/charred_pizza/notice.html"
    ];

    input--;

    // if (srcs[input] === undefined) {
    //     input = 13;
    // } else {
    //     input --;
    // }
    open(srcs[input], "_self");
}

// BLOX FABLES
function dropdown_bf() {
    var input = document.getElementById("select").value;

    const srcs = [
        "/html/index.html",
        "/html/blox_fables/1.html",
        "/html/blox_fables/2.html"
    ];
    
    input--;

    open(srcs[input], "_self");
}