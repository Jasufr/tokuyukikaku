import { useEffect, useState } from "react";

const ImageWithPlaceholder = ({ src, alt, className, imgClassName, placeholderSrc, loading }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoaded(true);
    };
  }, [src]);

  return (
    <>
      {/* <div className={`${className} bg-[url('${placeholderSrc}')]`}> */}
      <div className={`${className}`} style={{backgroundImage: `url(${placeholderSrc})`}}>
        <img src={`${src}`} loading={`${loading ? "eager" : "lazy"}`} alt={`${alt}`} className={`${imgClassName} w-full h-full object-cover object-center ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`} />
      </div>
    </>
  )
}

export default ImageWithPlaceholder;
