import React from 'react';
import { PanelHeader } from 'rebass';
import $ from 'jquery';
import _ from 'lodash';
import Measure from 'react-measure';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

export default class Photography extends React.Component {
  constructor(props) {
    super(props);
    this.state = { photos: null, pageNum: 1, totalPages: 1, loadedAll: false, currentImage: 0 };
    this.handleScroll = this.handleScroll.bind(this);
    this.loadMorePhotos = this.loadMorePhotos.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }

  componentDidMount() {
    this.loadMorePhotos();
    this.loadMorePhotos = _.debounce(this.loadMorePhotos, 200);
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    if ((window.innerHeight + scrollY) >= (document.body.offsetHeight - 50)) {
      this.loadMorePhotos();
    }
  }

  loadMorePhotos(e) {
    if (e) {
      e.preventDefault();
    }
    if (this.state.pageNum > this.state.totalPages) {
      this.setState({ loadedAll: true });
      return;
    }

    // TODO Make this happen with react redux and redux saga http://joelhooks.com/blog/2016/03/20/build-an-image-gallery-using-redux-saga
    $.ajax({
      url: `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=b6d8949723d54e4ec391890e19ea1e63&photoset_id=72157681672932415&user_id=113753265@N07&format=json&per_page=21&page=${this.state.pageNum}&extras=url_m,url_c,url_l,url_h,url_o`,
      dataType: 'jsonp',
      jsonpCallback: 'jsonFlickrApi',
      cache: false,
      success: function (data) {
        const photos = [];
        data.photoset.photo.forEach((obj, i, array) => {
          const aspectRatio = parseFloat(obj.width_o / obj.height_o);
          photos.push({
            src: (aspectRatio >= 3) ? obj.url_c : obj.url_m,
            width: parseInt(obj.width_o),
            height: parseInt(obj.height_o),
            caption: obj.title,
            alt: obj.title,
            srcset: [
              `${obj.url_m} ${obj.width_m}w`,
              `${obj.url_c} ${obj.width_c}w`,
              `${obj.url_l} ${obj.width_l}w`,
              `${obj.url_h} ${obj.width_h}w`,
            ],
            sizes: [
              '(min-width: 480px) 50vw',
              '(min-width: 1024px) 33.3vw',
              '100vw',
            ],
          });
        });

        this.setState({
          photos: this.state.photos ? this.state.photos.concat(photos) : photos,
          pageNum: this.state.pageNum + 1,
          totalPages: data.photoset.pages,
        });
      }.bind(this),
      error(xhr, status, err) {
        console.error(status, err.toString());
      },
    });
  }

  openLightbox(index, event) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }

  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }

  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  renderGallery() {
    return (
      <Measure whitelist={['width']}>
        {
          ({ width }) => {
            let cols = 3;
            if (width >= 480) {
              cols = 5;
            }
            if (width >= 1024) {
              cols = 7;
            }
            return (<Gallery
              photos={this.state.photos}
              cols={cols}
              onClickPhoto={this.openLightbox}
            />);
          }
        }
      </Measure>
    );
  }

  render() {
    if (this.state.photos) {
      return (
        <div>
          <PanelHeader my={1} f={[3, 4, 5, 6]}>
            Photography
          </PanelHeader>
          {this.renderGallery()}
          <Lightbox
            images={this.state.photos}
            backdropClosesModal
            onClose={this.closeLightbox}
            onClickPrev={this.gotoPrevious}
            onClickNext={this.gotoNext}
            currentImage={this.state.currentImage}
            isOpen={this.state.lightboxIsOpen}
            width={1600}
          />
          {!this.state.loadedAll &&
          <div className="loading-msg" id="msg-loading-more">Loading</div>}
        </div>
      );
    }
    return (
      <div>
        <PanelHeader my={1} f={[4, 5, 6]}>
          Photography
        </PanelHeader>
      </div>
    );
  }
}
