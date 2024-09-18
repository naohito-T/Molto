import { NextComponentType, NextPageContext } from 'next';
import { useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100svh;

  .full {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  .full .content {
    background-color: rgba(0, 0, 0, 0.75) !important;
    height: 100%;
    width: 100%;
    display: grid;
  }
  .full .content img {
    left: 50%;
    transform: translate3d(0, 0, 0);
    animation: zoomin 1s ease;
    max-width: 100%;
    max-height: 100%;
    margin: auto;
  }

  
  .gallery {
    display: grid;
    grid-column-gap: 8px;
    grid-row-gap: 8px;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-rows: 8px;
  }
  .gallery img {
    max-width: 100%;
    border-radius: 8px;
    box-shadow: 0 0 16px #333;
    transition: all 1.5s ease;
  }
  .gallery img:hover {
    box-shadow: 0 0 32px #333;
  }
  .gallery .content {
    padding: 4px;
  }
  .gallery .gallery-item {
    transition: grid-row-start 300ms linear;
    transition: transform 300ms ease;
    transition: all 0.5s ease;
    cursor: pointer;
  }
  .gallery .gallery-item:hover {
    transform: scale(1.025);
  }
  @media (max-width: 600px) {
    .gallery {
      grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
    }
  }
  @media (max-width: 400px) {
    .gallery {
      grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
    }
  }
  @keyframes zoomin {
    0% {
      max-width: 50%;
      transform: rotate(-30deg);
      filter: blur(4px);
    }
    30% {
      filter: blur(4px);
      transform: rotate(-80deg);
    }
    70% {
      max-width: 50%;
      transform: rotate(45deg);
    }
    100% {
      max-width: 100%;
      transform: rotate(0deg);
    }
  }
`;

type Props = {};

export const WorksTpl: NextComponentType<NextPageContext, null, Props> = ({}) => {
  useEffect(() => {
    const gallery = document.querySelector('#gallery');
    const getVal = (elem: Element, style: string) => {
      return parseInt(window.getComputedStyle(elem).getPropertyValue(style));
    };

    const getHeight = (item) => {
      return item.querySelector('.content').getBoundingClientRect().height;
    };

    const resizeAll = () => {
      var altura = getVal(gallery, 'grid-auto-rows');
      var gap = getVal(gallery, 'grid-row-gap');
      gallery.querySelectorAll<HTMLElement>('.gallery-item').forEach((item) => {
        var el = item;
        el.style.gridRowEnd = 'span ' + Math.ceil((getHeight(item) + gap) / (altura + gap));
      });
    };
    gallery.querySelectorAll<HTMLImageElement>('img').forEach(function (item) {
      item.classList.add('byebye');
      if (item.complete) {
        console.log(item.src);
      } else {
        item.addEventListener('load', function () {
          var altura = getVal(gallery, 'grid-auto-rows');
          var gap = getVal(gallery, 'grid-row-gap');
          var gitem = item.parentElement.parentElement;
          gitem.style.gridRowEnd = 'span ' + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
          item.classList.remove('byebye');
        });
      }
    });
    window.addEventListener('resize', resizeAll);
    gallery.querySelectorAll('.gallery-item').forEach((item) => {
      item.addEventListener('click', () => {
        item.classList.toggle('full');
      });
    });
  }, []);
  return (
    <Wrapper data-testid='works-tpl'>
      <h1>Masonry Gallery</h1>
      <div className='gallery' id='gallery'>
        <div className='gallery-item'>
          <div className='content'>
            <img src='https://source.unsplash.com/random/?tech,care' alt='' />
          </div>
        </div>
        <div className='gallery-item'>
          <div className='content'>
            <img src='https://source.unsplash.com/random/?tech,studied' alt='' />
          </div>
        </div>
        <div className='gallery-item'>
          <div className='content'>
            <img src='https://source.unsplash.com/random/?tech,substance' alt='' />
          </div>
        </div>
        <div className='gallery-item'>
          <div className='content'>
            <img src='https://source.unsplash.com/random/?tech,choose' alt='' />
          </div>
        </div>
        <div className='gallery-item'>
          <div className='content'>
            <img src='https://source.unsplash.com/random/?tech,past' alt='' />
          </div>
        </div>
        <div className='gallery-item'>
          <div className='content'>
            <img src='https://source.unsplash.com/random/?tech,lamp' alt='' />
          </div>
        </div>
        <div className='gallery-item'>
          <div className='content'>
            <img src='https://source.unsplash.com/random/?tech,yet' alt='' />
          </div>
        </div>
        <div className='gallery-item'>
          <div className='content'>
            <img src='https://source.unsplash.com/random/?tech,eight' alt='' />
          </div>
        </div>
        <div className='gallery-item'>
          <div className='content'>
            <img src='https://source.unsplash.com/random/?tech,crew' alt='' />
          </div>
        </div>
        <div className='gallery-item'>
          <div className='content'>
            <img src='https://source.unsplash.com/random/?tech,event' alt='' />
          </div>
        </div>
        <div className='gallery-item'>
          <div className='content'>
            <img src='https://source.unsplash.com/random/?tech,instrument' alt='' />
          </div>
        </div>
        <div className='gallery-item'>
          <div className='content'>
            <img src='https://source.unsplash.com/random/?tech,practical' alt='' />
          </div>
        </div>
        <div className='gallery-item'>
          <div className='content'>
            <img src='https://source.unsplash.com/random/?tech,pass' alt='' />
          </div>
        </div>
        <div className='gallery-item'>
          <div className='content'>
            <img src='https://source.unsplash.com/random/?tech,bigger' alt='' />
          </div>
        </div>
        <div className='gallery-item'>
          <div className='content'>
            <img src='https://source.unsplash.com/random/?tech,number' alt='' />
          </div>
        </div>
        <div className='gallery-item'>
          <div className='content'>
            <img src='https://source.unsplash.com/random/?tech,feature' alt='' />
          </div>
        </div>
        <div className='gallery-item'>
          <div className='content'>
            <img src='https://source.unsplash.com/random/?tech,line' alt='' />
          </div>
        </div>
        <div className='gallery-item'>
          <div className='content'>
            <img src='https://source.unsplash.com/random/?tech,railroad' alt='' />
          </div>
        </div>
        <div className='gallery-item'>
          <div className='content'>
            <img src='https://source.unsplash.com/random/?tech,pride' alt='' />
          </div>
        </div>
        <div className='gallery-item'>
          <div className='content'>
            <img src='https://source.unsplash.com/random/?tech,too' alt='' />
          </div>
        </div>
        <div className='gallery-item'>
          <div className='content'>
            <img src='https://source.unsplash.com/random/?tech,bottle' alt='' />
          </div>
        </div>
        <div className='gallery-item'>
          <div className='content'>
            <img src='https://source.unsplash.com/random/?tech,base' alt='' />
          </div>
        </div>
        <div className='gallery-item'>
          <div className='content'>
            <img src='https://source.unsplash.com/random/?tech,cell' alt='' />
          </div>
        </div>
        <div className='gallery-item'>
          <div className='content'>
            <img src='https://source.unsplash.com/random/?tech,bag' alt='' />
          </div>
        </div>
        <div className='gallery-item'>
          <div className='content'>
            <img src='https://source.unsplash.com/random/?tech,card' alt='' />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
