import { useEffect, useState } from "react";

const ImageWithPlaceholder = ({ src, alt, className, imgClassName, placeholderSrc }) => {
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
      <div className={`${className} bg-[url('${placeholderSrc}')]`}>
        <img src={`${src}`} loading="lazy" alt={`${alt}`} className={`${imgClassName} w-full h-full object-cover object-center ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`} />
      </div>
    </>
  )
}

export default ImageWithPlaceholder;
