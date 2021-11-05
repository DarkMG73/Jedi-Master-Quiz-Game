// image = document.querySelector('.islrc > .isv-r:nth-child(3) img')
//image.click()
//imgSrc = image.getAttribute('src')

//imageParent = document.querySelector('.islrc > .isv-r:nth-child(3)')
//imageParentDataId = imageParent.getAttribute('data-id')
// var hiddenElement = document.createElement('a'); hiddenElement.href = imgSrc
// hiddenElement.target = '_blank';
// hiddenElement.download = 'myFile.jpg';
// hiddenElement.click();

//image = document.querySelector('.islrc > .isv-r:nth-child(3) wXeWr')

//imgSrc = image.getAttribute('src')
//var hiddenElement = document.createElement('a'); hiddenElement.href = imgSrc

//hiddenElement.click();

// function openGoogleLargeImagePage(imageSel) {
//   setTimeout(function () {
//     const image = document.querySelector(imageSel);
// 		console.log('image', image)
//     if(image){const imgSrc = image.getAttribute("href");
//     var hiddenElement = document.createElement("a");
//     hiddenElement.href = imgSrc;
//     hiddenElement.target = "_new";
//     // hiddenElement.download = "myFile.jpg";
//     console.log("imgSrc", imgSrc);
//     console.log("image", image);
//     console.log("hiddenElement", hiddenElement);
//     hiddenElement.click();}

//   }, 1000)
// }
//   openGoogleLargeImagePage('.islrc > .isv-r:nth-child(3) .wXeWr')

// FOR STYLER JS SECTION ON GOOGLE IMAGAES PAGE
function downloadImage(imageSel, imageNode) {
  console.log("********imageNode: ", imageNode);
  console.log("imageSel: ", imageSel);
  setTimeout(function () {
    const image = imageSel ? document.querySelector(imageSel) : imageNode;
    if (image) {
      const imgSrc = image.getAttribute("src");
      console.log("imgSrc: ", imgSrc);
      console.log("image", image);

      function forceDownload(blob, filename) {
        //   console.log('forceDownload: ', blob);
        var a = document.createElement("a");
        a.download = filename;
        a.href = blob;
        console.log("FINAL DIV: ", a);
        // For Firefox https://stackoverflow.com/a/32226068
        document.body.appendChild(a);
        a.click();
        a.remove();
      }

      // Current blob size limit is around 500MB for browsers
      function downloadResource(url, filename) {
        //   console.log('url: ', url);

        const getUrl = () => {
          const replSpace = (str) => {
            return str.trim().replaceAll(" ", "_");
          };

          try {
            var url_string = window.location.href;
            var url = new URL(url_string);
            var NameForFile = url.searchParams
              .get("q")
              .replace("star", "")
              .replace("wars", "")
              .trim();
            console.log("NameForFile", NameForFile);
            return replSpace(NameForFile);
          } catch (err) {
            console.log("Issues with Parsing URL Parameter's - " + err);
            return err;
          }
        };
        if (!filename) filename = getUrl() + ".jpg";
        fetch(url, {
          headers: new Headers({
            Origin: location.origin,
          }),
          mode: "cors",
        })
          .then((response) => response.blob())
          .then((blob) => {
            let blobUrl = window.URL.createObjectURL(blob);
            // console.log('blobUrl: ', blobUrl);
            forceDownload(blobUrl, filename);
          })
          .catch((e) => {
            console.log("THIS IMAGE COULD NOT BE FETCHED");
            console.error(e);
          });
      }

      downloadResource(imgSrc);
    }
  }, 100);
}

setTimeout(function () {
  const allImages = document.querySelectorAll(".islrc > .isv-r");
  allImages.forEach((image) => {
    // console.log("image: ", image);

    const imageClickHandler = () => {
      setTimeout(function () {
        const parent = document.getElementById("islsp");
        const imageForDownload = parent.getElementsByTagName("img")[2];
        // console.log("imageForDownload: ", imageForDownload);
        downloadImage(false, imageForDownload);
      }, 1000);
    };
    image.addEventListener("click", imageClickHandler);
  });
}, 1000);

function openLinks(indexToStart = 1, amountToOpen = 3) {
  console.log("amountToOpen: ", amountToOpen);
  console.log("indexToStart: ", indexToStart);
  const allListItems = document.querySelectorAll("li");
  console.log("allListItems: ", allListItems);

  for (let i = indexToStart; i < indexToStart + amountToOpen; i++) {
    const itemLink = allListItems[i].querySelector("a");
    console.log("allListItems[i]: ", allListItems[i]);
    if (itemLink && itemLink.getAttribute("href") !== "")
      setTimeout(function () {
        itemLink.click();
        console.log("itemLink.click(): ", itemLink);
      }, 2000);

    console.log("itemLink: ", itemLink);
  }
}
openLinks();
