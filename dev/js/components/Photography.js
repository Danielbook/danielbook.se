import React from "react";
import { Grid } from 'react-bootstrap';
import { PhotoSwipeGallery } from 'react-photoswipe';

export default class Photography extends React.Component {
  constructor(props) {
    super(props);
    this.swipe = {
      isOpen: false,
      items: [
        {
          src: 'http://lorempixel.com/1200/900/nightlife/1',
          thumbnail: 'http://lorempixel.com/120/90/nightlife/1',
          w: 1200,
          h: 900,
          title: 'Image 1'
        },
        {
          src: 'http://lorempixel.com/1200/900/nightlife/2',
          thumbnail: 'http://lorempixel.com/120/90/nightlife/2',
          w: 1200,
          h: 900,
          title: 'Image 2'
        },
        {
          src: 'http://lorempixel.com/1200/900/nightlife/3',
          thumbnail: 'http://lorempixel.com/120/90/nightlife/3',
          w: 1200,
          h: 900,
          title: 'Image 3'
        },
        {
          src: 'http://lorempixel.com/1200/900/nightlife/4',
          thumbnail: 'http://lorempixel.com/120/90/nightlife/4',
          w: 1200,
          h: 900,
          title: 'Image 4'
        }
      ],
      options: {
        closeOnScroll: false
      }
    };
  }

  getThumbnailContent(item) {
    return (
      <img src={item.thumbnail} width={120} height={90}/>
    );
  };

  render() {
    let { items, options } = this.swipe;
    return (
      <Grid fluid>
        <PhotoSwipeGallery items={items}
                           options={options}
                           thumbnailContent={this.getThumbnailContent}/>
      </Grid>
    );
  }
}