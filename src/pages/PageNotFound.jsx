import { Link } from "wouter";

const PageNotFound = () => {
  return (
    <>
      <div className="not-found">
        <div className="px-6 2md:px-12 lg:px-24 xl:px-28 mb-6 py-6 lg:py-12">
          <div className="text-center">
            <img className="w-24 m-auto" src="./icons/nothing-found.png" alt="" />
            <h1 className="text-2xl mb-3">404 Page Not Found</h1>
            <h1 className="text-xl mb-2">お探しのページは見つかりませんでした。</h1>
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
