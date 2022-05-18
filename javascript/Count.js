let apiProductApi = new TempApi.ProductApi();
import TempApi from "../src/index";
let product = new TempApi.Product();
const uploadImage = async (event) => {
  const file = event.target.files[0];
  const base64 = await convertBase64(file);
  return base64;
};
const convertBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

function calculateSize(img, maxWidth, maxHeight) {
  let width = img.width;
  let height = img.height;

  // calculate the width and height, constraining the proportions
  if (width > height) {
    if (width > maxWidth) {
      height = Math.round((height * maxWidth) / width);
      width = maxWidth;
    }
  } else {
    if (height > maxHeight) {
      width = Math.round((width * maxHeight) / height);
      height = maxHeight;
    }
  }
  return [width, height];
}

const MAX_WIDTH = 800;
const MAX_HEIGHT = 800;
const MIME_TYPE = "image/jpeg";
const QUALITY = 1;

document.getElementById("formFile").addEventListener("change", async (e) => {

  const file = e.target.files[0]; // get the file
  const blobURL = URL.createObjectURL(file);
  const img = new Image();
  img.src = blobURL;
  img.onerror = function () {
    URL.revokeObjectURL(this.src);
    // Handle the failure properly
    console.log("Cannot load image");
  };
  img.onload = function () {
    URL.revokeObjectURL(this.src);
    const [newWidth, newHeight] = calculateSize(img, MAX_WIDTH, MAX_HEIGHT);
    const canvas = document.createElement("canvas");
    canvas.width = newWidth;
    canvas.height = newHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, newWidth, newHeight);
    canvas.toBlob(
      async (blob) => {
        // Handle the compressed image. es. upload or save in local state
        //displayInfo('Original file', file);
        //displayInfo('Compressed file', blob);
        const base64 = await convertBase64(blob);

        document
          .getElementById("formFile")
          .setAttribute("data-image-base64", base64);
        document
          .getElementById("formFile")
          .setAttribute("name", e.target.files[0].name);
      },
      MIME_TYPE,
      QUALITY
    );
  };

  //let imageBase64 = await uploadImage(e);
  // document
  //   .getElementById("formFile")
  //   .setAttribute("data-image-base64", imageBase64);
  // document
  //   .getElementById("formFile")
  //   .setAttribute("name", e.target.files[0].name);
});

document.getElementById("i7ads").onclick = (event) => {
  event.preventDefault();
  console.log('Check2');
  product["pImage"] = {
    data:
      document
        .querySelector("[annotationname = 'pImage']")
        .getAttribute("data-image-base64") !== null
        ? document
            .querySelector("[annotationname = 'pImage']")
            .getAttribute("data-image-base64")
        : document.querySelector("[annotationname = 'pImage']").src,
    name: document
      .querySelector("[annotationname = 'pImage']")
      .getAttribute("name"),
  };
  product["pTitle"] = document.querySelector(
    "[annotationname = 'pTitle']"
  ).value;
  product["pCount"] = document.querySelector(
    "[annotationname = 'pCount']"
  ).value;
 
 console.log(product);
 
  apiProductApi.createproduct(product, (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log("API called successfully. Returned data: " + data);
      {
        location.href = "/Dashboard/" + response.body.query._id + "";
      }
    }
  });
};
window.onload = () => {};
