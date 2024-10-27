import { Box, Flex, Text, Button } from '@radix-ui/themes';
import { useState } from 'react';

function Product() {
  const [imageIndex, setImageIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [zoomStyle, setZoomStyle] = useState({ display: 'none' });
  
  const images = [
    "/toothbrush.png",
    "/toothbrush22.png",
  ];

  const handleImageClick = (index) => {
    setFade(true);
    setTimeout(() => {
      setImageIndex(index);
      setFade(false);
    }, 400);
  };

  const handleNext = () => {
    setFade(true);
    setTimeout(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setFade(false);
    }, 400);
  };

  const handlePrevious = () => {
    setFade(true);
    setTimeout(() => {
      setImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      setFade(false);
    }, 400);
  };

  const handleMouseMove = (e) => {
    const zoomSize = 150;
    const { offsetX, offsetY, target } = e.nativeEvent;
    const { width, height } = target;
    
    const posX = (offsetX / width) * 100;
    const posY = (offsetY / height) * 100;

    setZoomStyle({
      display: 'block',
      top: `${e.clientY - zoomSize / 2}px`,
      left: `${e.clientX - zoomSize / 2}px`,
      backgroundImage: `url(${images[imageIndex]})`,
      backgroundSize: `${width * 2}px ${height * 2}px`,
      backgroundPosition: `${posX}% ${posY}%`,
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({ display: 'none' });
  };

  return (
    <>
      {/* Desktop Layout */}
      <Flex className="desktop-product" width="100%">
        <Flex justify="between" py="9" style={{ flexDirection: "column" }} width="25%">
          <Box>
            {images.map((src, index) => (
              <Box key={index} onClick={() => handleImageClick(index)} style={{ cursor: 'pointer', marginBottom: '8px' }}>
                <img className="thumbnail-image" width="100px" src={src} alt={`Thumbnail ${index + 1}`} />
              </Box>
            ))}
          </Box>
          <Box mt="6">
            <Text as="div" size="2" color="gray">Stuff</Text>
            <Text as="div" size="8" wrap="nowrap">Toothbrush</Text>
            <Text as="div" mt="1" size="5">50$</Text>
          </Box>
        </Flex>

        <Flex minHeight="533px" width="50%" justify="center" align="center" position="relative">
          <Button onClick={handlePrevious} style={{ position: 'absolute', left: '0', zIndex: 1 , fontSize: "20px", cursor: "pointer"}}>
            {"<"}
          </Button>
          <img
            className={`main-image ${fade ? 'fade' : ''}`}
            width="400px"
            height="auto"
            src={images[imageIndex]}
            alt="Main product"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          />
          <div className="zoom-circle" style={zoomStyle}></div>
          <Button onClick={handleNext} style={{ position: 'absolute', right: '0', zIndex: 1, fontSize: "20px", cursor: "pointer" }}>
            {">"}
          </Button>
        </Flex>

        <Flex justify="end" py="9" style={{ flexDirection: "column" }} width="25%">
          <Flex mb="9" justify="end" gap="3">
            <Box className="colors"></Box>
            <Box className="colors beige"></Box>
          </Flex>
          <Flex justify="end">
            <Button style={{cursor: "pointer"}} mr={0} className="add" color="">Add to cart</Button>
          </Flex>
        </Flex>
      </Flex>

      {/* Mobile Layout */}
      <Box mt="8" className="mobile-product" width="100%">
        <Flex className='sas' minHeight="533px" width="100%" justify="center" align="center" position="relative">
          <Button onClick={handlePrevious} style={{ position: 'absolute', left: '20px', zIndex: 1 , fontSize: "20px", cursor: "pointer"}}>
            {"<"}
          </Button>
          <img
            className={`main-image ${fade ? 'fade' : ''}`}
            width="300px"
            height="auto"
            src={images[imageIndex]}
            alt="Main product"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          />
          <div className="zoom-circle" style={zoomStyle}></div>
          <Button onClick={handleNext} style={{ position: 'absolute', right: '20px', zIndex: 1, fontSize: "20px", cursor: "pointer" }}>
            {">"}
          </Button>
        </Flex>
        <Flex className='fof'>
          <Flex py="9" style={{ flexDirection: "column-reverse" }}>
            <Flex className='gog' align="center">
              {images.map((src, index) => (
                <Flex className='imgd' width="40%" key={index} onClick={() => handleImageClick(index)} style={{ cursor: 'pointer', marginBottom: '8px' }}>
                  <img className='imgf thumbnail-image' width="40%" height="auto" src={src} alt={`Thumbnail ${index + 1}`} />
                </Flex>
              ))}
            </Flex>
            <Box>
              <Text as="div" size="2" color="gray">Stuff</Text>
              <Text as="div" size="8" wrap="nowrap">Toothbrush</Text>
              <Text as="div" mt="1" size="5">50$</Text>
            </Box>
          </Flex>
          <Flex className='yoy' justify="end" py="9" style={{ flexDirection: "column" }}>
            <Flex className='hoh' mb="9" justify="end" gap="3">
              <Box className="colors"></Box>
              <Box className="colors beige"></Box>
            </Flex>
            <Flex justify="end">
              <Button style={{cursor: "pointer"}} mr={0} className="add" color="">Add to cart</Button>
            </Flex>
          </Flex>
        </Flex>
      </Box>

      <style jsx>{`
        .desktop-product {
          display: flex;
        }
        .mobile-product {
          display: none;
        }

        .main-image, .thumbnail-image {
          transition: opacity 0.4s ease-in-out;
        }

        .main-image {
          cursor: pointer;
        }

        .zoom-circle {
          display: none;
          position: absolute;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          pointer-events: none;
          background-color: #dfdfdf;
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
          overflow: hidden;
          z-index: 12 !important;
        }
        .fade {
          opacity: 0;
        }
          .add{
        border: 1px solid #fff;
        }
        .add:hover{
          background-color: transparent !important;
          border: 1px solid #000;
          color: #000 !important;
          transition-duration: .5s
        }

        @media (max-width: 800px) {
          .desktop-product {
            display: none;
          }
          .mobile-product {
            display: block;
          }
          .sas {
            max-height: 300px !important;
            min-height: 0;
          }
        }

        @media (max-width: 600px) {
          .fof {
            display: block !important;
          }
          .hoh {
            justify-content: start;
          }
          .yoy {
            flex-direction: row !important;
            justify-content: space-between;
          }
          .imgd {
            justify-content: center;
          }
          .imgf {
            width: 100%;
          }
          .gog{
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
}

export default Product;
