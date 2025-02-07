// template for cards
function groupAddCard(imageUrl, text) {
  const template = document
    .getElementById("card-template")
    .content.cloneNode(true);
  template.querySelector(".card-logo").src = imageUrl;
  template.querySelector(".card-title").innerText = text;
  document.querySelector("#card-list").appendChild(template);
}

const groups = [
  {
    imageUrl: "images/dg.jpeg",
    text: "804 Disc Golf",
  },
  {
    imageUrl: "images/soccerball.jpg",
    text: "804 Pick-Up",
  },
  {
    imageUrl: "images/SCOR.jpg",
    text: "SCOR",
  },
];

groups.forEach((groups) => {
  groupAddCard(groups.imageUrl, groups.text);
});
