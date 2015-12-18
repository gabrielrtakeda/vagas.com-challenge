module.exports = function(kNum, modalService) {
  var self = this;

  self.video = {
    description: void 0,
    publishedAt: void 0,
    src: void 0,
    thumbnail: void 0,
    title: void 0,
    viewCount: void 0
  };

  self.showModal = () => {
    modalService.show(self.video);
  };

  self.updateData = (data) => {
    self.video.description = nl2br(data.description);
    self.video.publishedAt = data.publishedAt;
    self.video.src = data.src;
    self.video.thumbnail = data.thumbnail;
    self.video.title = data.title;
    self.video.viewCount = kNum.thin(data.viewCount)
      .concat(data.viewCount !== 1 ? ' views' : ' view');
  };
};
