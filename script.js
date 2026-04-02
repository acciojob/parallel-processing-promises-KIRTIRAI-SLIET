//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("download-images-button");
  const output = document.getElementById("output");

  function downloadImage(url) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = url;

      img.onload = () => resolve(img);
      img.onerror = () => reject("Failed to load image");
    });
  }

  function downloadImages() {
    output.innerHTML = "";

    const imageUrls = [
      "https://picsum.photos/id/237/200/300",
      "https://picsum.photos/id/238/200/300",
      "https://picsum.photos/id/239/200/300"
    ];

    Promise.all(imageUrls.map(downloadImage))
      .then(images => {
        images.forEach(img => output.appendChild(img));
      })
      .catch(err => {
        console.error(err);
      });
  }

  button.addEventListener("click", downloadImages);
});