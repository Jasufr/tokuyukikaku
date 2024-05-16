import { Link } from "wouter";

const ErrorPage = ({error, resetErrorBoundary}) => {
  console.log("An Error Occured", error);
  return (
    <>
      <div className="bg-black bg-opacity-80 h-full flex flex-col justify-center items-center p-8 text-center">
        <img className="w-20" src="./icons/broken-robot.png" alt="" />
        <h1 className="text-white text-lg mb-3">予期せぬエラーが発生しました</h1>
        <p className="text-white mb-4">もう一度お試しください。<br /> 何度も発生する場合は、お問い合わせ窓口までご連絡ください。</p>
        <Link to="/" onClick={resetErrorBoundary} className="text-black bg-zinc w-32 p-1 rounded-lg shadow-md hover:opacity-40 transition-all duration-200">再試行</Link>
      </div>
    </>
  );
};

export default ErrorPage;
