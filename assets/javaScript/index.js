/*alert("remplisser tout les champs!");
console.log("hello world");
let x = "moi";
console.log(x);*/
const article = document.querySelector('article')
const a = document.querySelector('a')

console.log(article);
console.log(a)
article.addEventListener("click", () => {
    article.classList.toggle("articleClicked");

} )

