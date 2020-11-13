var convertBtn = document.querySelector(".convert-button");
var URLinput = document.querySelector(".URL-input");

convertBtn.addEventListener("click", function(){
    console.log(`URL : ${URLinput.value}`);
    sendURL(URLinput.value);
})

function sendURL(URL) {
    window.location.href = `/tiktok?URL=${URL}`;
}
