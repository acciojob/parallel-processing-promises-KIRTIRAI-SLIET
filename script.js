//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

const errorDiv = document.getElementById("error");
const loading = document.getElementById("loading");

function downloadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;

    img.onload = () => resolve(img);
    img.onerror = () => reject(`Failed to load ${url}`);
  });
}

function downloadImages() {
  if (loading) loading.style.display = "block";
  if (errorDiv) errorDiv.textContent = "";
  output.innerHTML = "";

  const imageUrls = [
    "https://picsum.photos/id/237/200/300",
    "https://picsum.photos/id/238/200/300",
    "https://picsum.photos/id/239/200/300"
  ];

  Promise.all(imageUrls.map(downloadImage))
    .then(images => {
      if (loading) loading.style.display = "none";

      images.forEach(img => output.appendChild(img));
    })
    .catch(err => {
      if (loading) loading.style.display = "none";
      if (errorDiv) errorDiv.textContent = err;
    });
}

document
  .getElementById("download-images-button")
  .addEventListener("click", downloadImages);