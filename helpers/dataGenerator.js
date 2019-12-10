const aws = require('aws-sdk');
const s3 = new aws.S3();
const config = require('./config.json');
const imgUrlPrfx = 'https://awayhome.s3-us-west-1.amazonaws.com/';

module.exports = () => {
  async function getImgs(folder, cb) {
    aws.config.setPromisesDependency();
    aws.config.update({
      accessKeyId: config.accessKey,
      secretAccessKey: config.secretKey,
      region: 'us-west-1'
    });
    let response = await s3.listObjectsV2({
      Bucket: 'awayhome',
      Prefix: `home${folder}/`
    }).promise();
    cb(response.Contents);
  }

  let imgPromises = [];
  for (var i = 0; i < 10; i++) {
    let imgPromise = new Promise((resolve, reject) => {
      getImgs(i + 1,resolve);
    });
    imgPromises.push(imgPromise);
  }

  Promise.all(imgPromises)
    .then(response => {
      let images = [];
      response.forEach(imgArr => {
        let imgs = imgArr.filter(img => img.Size > 1).map(img => {
          return imgUrlPrfx + img.Key;
        });
        images.push(imgs);
      });
      // seed database
      require('../db/seed').seed(images);
    })
    .catch(e => console.error('aws: ', e));
};
