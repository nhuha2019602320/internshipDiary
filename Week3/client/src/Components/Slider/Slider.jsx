import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function Slider() {
  return (
    <MDBCarousel>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://res.cloudinary.com/uploadimgvvv/image/upload/v1677342449/phk33nv5gwrcogbhe9zz.png'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://res.cloudinary.com/uploadimgvvv/image/upload/v1677341859/fxbbgsatycizvuys7z4g.png'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://res.cloudinary.com/uploadimgvvv/image/upload/v1677342449/phk33nv5gwrcogbhe9zz.png'
        alt='...'
      />
    </MDBCarousel>
  );
}