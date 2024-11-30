import { Helmet } from "react-helmet-async";
import { Link } from "wouter";

const PageNotFound = () => {
  return (
    <>
      <Helmet>
        <title>徳有企画 | エラー 404</title>
        <meta name="description" content="お探しのページは見つかりませんでした。ご指定いただいたアドレスが間違っているか、ページが移動または削除された可能性があります。" />
      </Helmet>
      <div className="not-found relative">
        <div className="blobs w-full h-full absolute overflow-hidden -z-10">
          <div className="green absolute w-36 2md:w-48 top-36 -right-2 -rotate-90">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#2FAD41" d="M25.4,-38.5C33.7,-29,41.8,-22.6,48.3,-13.2C54.8,-3.8,59.7,8.6,57.6,19.9C55.6,31.1,46.5,41.3,35.7,44.6C24.9,47.9,12.4,44.4,1.4,42.4C-9.6,40.4,-19.2,40,-34.4,38.2C-49.7,36.3,-70.5,33,-80.9,21.5C-91.2,10,-91,-9.8,-85.4,-28C-79.9,-46.3,-68.9,-63,-53.8,-70.3C-38.6,-77.5,-19.3,-75.3,-5.4,-67.9C8.6,-60.5,17.1,-47.9,25.4,-38.5Z" transform="translate(100 100)" />
            </svg>
          </div>
          <div className="darkpink absolute w-40 2md:w-52 -left-4 2md:left-4 top-2 2md:top-6 -rotate-12">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#ED0066" d="M54.1,-67.2C66.1,-54.4,69,-33.6,68.8,-15C68.6,3.5,65.3,19.6,56.9,31.7C48.6,43.8,35.2,51.8,20.5,57.8C5.8,63.9,-10.2,68,-27.4,65.9C-44.6,63.8,-63,55.4,-67.6,41.8C-72.2,28.2,-62.9,9.4,-58.5,-9.4C-54.1,-28.1,-54.5,-46.8,-45.6,-60.1C-36.6,-73.4,-18.3,-81.4,1.4,-83C21.1,-84.6,42.1,-80,54.1,-67.2Z" transform="translate(100 100)" />
            </svg>
          </div>
          <div className="lightpink absolute w-52 2md:w-64 -bottom-8 2md:-bottom-10 left-1/3 rotate-180">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FFEDF4" d="M29.1,-41.6C40.1,-32,53,-26.7,61.9,-16.2C70.8,-5.6,75.6,10.3,73.6,26.2C71.6,42.2,62.8,58.2,49.4,60C36,61.8,18,49.3,7.7,38.7C-2.6,28.1,-5.1,19.4,-18.8,17.7C-32.5,16,-57.3,21.3,-68.7,15.5C-80,9.6,-77.8,-7.5,-70.9,-21.4C-64.1,-35.3,-52.7,-46,-40.1,-55.1C-27.5,-64.2,-13.8,-71.6,-2.4,-68.4C9,-65.1,18.1,-51.2,29.1,-41.6Z" transform="translate(100 100)" />
            </svg>
          </div>
        </div>
        <div className="px-6 2md:px-12 lg:px-24 xl:px-28 mb-6 py-6 lg:py-12 ">
          <div className="text-center">
            <img className="w-24 m-auto" loading="eager" src="./icons/nothing-found.webp" alt="エラー　アイコン　404" />
            <h1 className="text-2xl mb-3">404 Page Not Found</h1>
            <h2 className="text-xl mb-3">お探しのページは見つかりませんでした。</h2>
            <p className="mb-1">ご指定いただいたアドレスが間違っているか、ページが移動または削除された可能性があります。</p>
            <p className="mb-8">上部のメニューよりお探し頂けますようお願い致します。</p>
            <Link to="/" className="bg-darkpink text-white px-4 py-2 rounded-lg shadow-md hover:opacity-40 transition-all duration-200">ホームページへ戻る</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
