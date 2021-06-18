var imageURLs = [
    "/image/1.gif"
  , "/image/2.gif"
  , "/image/3.gif"
  , "/image/1.gif"
];
function getImageTag() {
 var img = '<img src=\"';
 var randomIndex = Math.floor(Math.random() * imageURLs.length);
 img += imageURLs[randomIndex];
 img += '\" alt=\"Cute!!\"/>';
 return img;
}