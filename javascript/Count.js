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
document.getElementById("formFile").addEventListener("change", async (e) => {
  let imageBase64 = await uploadImage(e);
  document
    .getElementById("formFile")
    .setAttribute("data-image-base64", imageBase64);
  document
    .getElementById("formFile")
    .setAttribute("name", e.target.files[0].name);
});
document.getElementById("i7ads").onclick = (event) => {
    console.log('Check10');
//     console.log(document
//          .querySelector("[annotationname = 'pImage']")
//          .getAttribute("data-image-base64"));
  
//   console.log(String(document
//          .querySelector("[annotationname = 'pImage']")
//          .getAttribute("data-image-base64")));
//   event.preventDefault();

    product["pImage"] = {
      data:      document
        .querySelector("[annotationname = 'pImage']")
        .getAttribute("data-image-base64") !== null
        ? String( document
            .querySelector("[annotationname = 'pImage']")
            .getAttribute("data-image-base64"))
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
        //location.href = "/Dashboard/" + response.body.query._id + "";
      }
    }
  });
};
window.onload = () => {};
