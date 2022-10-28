document.getElementById("submit").addEventListener("click", () => {
    document.getElementById("submit-result").style.display = "block";
    document.getElementById("ok").style.display= "none";
});
function number(id) {
    const rateNumber = document.getElementById(id).innerHTML;
    document.getElementById("submit-result__response").innerHTML = "You selected "+rateNumber+" out of 5";
}
