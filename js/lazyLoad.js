
  //获取数据
  var imageDataArr = getImageDataArr(''),
      posterImages = $('ul.ui-imgs li');

  init(imageDataArr,posterImages);

/*
  判断图片是否加载完
  @param img 图片对象
  @param callback 回调函数
*/
function isImageLoad(img,callback){
  img.onload = function(){
    callback(img);
  }
}

/*
  获取图片数据(可以从服务端获取数据)
*/
function getImageDataArr(url){
  var imageDataArr = [
        {width:"370px",height:'246.78px',url:'./img/1.jpg'},
        {width:"370px",height:'246.78px',url:'./img/3.jpg'}
    ]
    return imageDataArr;
}

/*
  初始化
  @param imageDataArr 图片信息数组
  @param posterImages 图片所在DOM节点
*/
function init(imageDataArr,posterImages){
   for(var i = 0 ; i < posterImages.length ; i++){
      var posterImage = posterImages[i],
          j = i % 2 == 0 ? 0 : 1,
          imageData = imageDataArr[j],
          styleTemplate = 'background-color: #fc758c;width:{width};height:{height}';

      //设置样式(这边可以通过聚合算法算图片的主要颜色)
      posterImage.style = styleTemplate.replace('{width}',imageData.width).replace('{height}',imageData.height);

      //判断图片有没有加载
      var image = $(posterImage).find('img')[0];
      image.src = imageData.url;
      isImageLoad(image,function(image){
          image.className += ' load';
      });
   }
}
