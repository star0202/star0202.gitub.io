var imageURLs = [
    "/asset/image/1.gif"
  , "/asset/image/2.gif"
  , "/asset/image/3.gif"
  , "/asset/image/4.gif"
];
function getImageTag() {
 var img = '<img src=\"';
 var randomIndex = Math.floor(Math.random() * imageURLs.length);
 img += imageURLs[randomIndex];
 img += '\" alt=\"Cute!!\"/>';
 return img;
}