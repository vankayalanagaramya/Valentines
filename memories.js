const memories = [
  {
    img: "assets/img1.jpeg",
    title: "Our outing and want the same",
    text: "I still remember how my heart felt that day. Enjoyed every moment 💗",
    date: "2023"
  },
  {
    img: "assets/img2.jpeg",
    title: "That silly laughter",
    text: "We laughed until our cheeks hurt. I want a million more moments like this 😄",
    date: "2025"
  },
  {
    img: "assets/img3.jpeg",
    title: "Last pic of 2025",
    text: "Goodbyes are never easy, but I know we'll have so many more memories to make. Here's to us 🥂",
    date: "2025"
  }
];

const grid = document.getElementById("grid");


memories.forEach((m) => {
  const card = document.createElement("div");
  card.className = "flip";
  card.innerHTML = `
    <div class="flip-inner">
      <div class="face front">
        <img src="${m.img}" alt="${m.title}">
        <div class="label">${m.date}</div>
      </div>
      <div class="face back">
        <h3>${m.title}</h3>
        <p>${m.text}</p>
        <p class="small">I love you 💞</p>
      </div>
    </div>
  `;
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
  grid.appendChild(card);
});

// Centered container for gift box and surprise
const centerContainer = document.createElement("div");
centerContainer.style.display = "flex";
centerContainer.style.flexDirection = "column";
centerContainer.style.alignItems = "center";
centerContainer.style.justifyContent = "center";
centerContainer.style.margin = "32px auto 0 auto";
centerContainer.style.width = "100%";

const giftBox = document.createElement("div");
giftBox.className = "gift-box surprise";
giftBox.style.background = "none";
giftBox.style.boxShadow = "none";
giftBox.innerHTML = `
  <img src="assets/img6.jpg" alt="Gift" style="width:120px;height:120px;border-radius:16px;box-shadow:0 4px 18px #ffb6c8aa;object-fit:cover;display:block;" />
  <span class="gift-text" style="color:#b0124b;position:relative;bottom:-12px;">One Last Surprise!</span>
`;

const surprise = document.createElement("div");
surprise.className = "valentine-surprise hidden";
surprise.innerHTML = `
  <img src="assets/img5.jpg" alt="Dudu and Bubu Happy Valentines Day" class="valentine-img" />
  <h2>Happy Valentine's Day Kanna💖</h2>
`;


giftBox.addEventListener("click", () => {
  window.location.href = "valentine.html";
});


// Place the centerContainer after the grid, inside memories-wrap
const memoriesWrap = document.querySelector('.memories-wrap');
centerContainer.appendChild(giftBox);
centerContainer.appendChild(surprise);
memoriesWrap.appendChild(centerContainer);
