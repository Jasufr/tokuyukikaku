const Tabs = () => {
  return (
    <>
      <div className="w-11/12 m-auto pt-2 flex justify-center items-center">
        <div className="w-full bg-lightpink p-2 rounded-full shadow-md">
          <div className="tabs relative flex items-center py-2">
            <input type="radio" id="radio-1" name="tabs" className="hidden peer/radio-1" defaultChecked />
            <label className="tab peer-checked/radio-1:text-white z-10 w-1/3 text-center transition-all duration-200 h-full" htmlFor="radio-1">サービス紹介</label>
            <input type="radio" id="radio-2" name="tabs" className="hidden peer/radio-2" />
            <label className="tab peer-checked/radio-2:text-white z-10 w-1/3 text-center transition-all duration-200" htmlFor="radio-2">利用方法・対象</label>
            <input type="radio" id="radio-3" name="tabs" className="hidden peer/radio-3" />
            <label className="tab peer-checked/radio-3:text-white z-10 w-1/3 text-center transition-all duration-200" htmlFor="radio-3">料金</label>
            <span className="glider absolute flex justify-center items-center left-0 bg-darkpink transition-all duration-500 ease-in-out h-full w-1/3 peer-checked/radio-1:translate-x-[0%] peer-checked/radio-2:translate-x-[100%] peer-checked/radio-3:translate-x-[200%] rounded-full"></span>

          </div>
        </div>
      </div>

    </>
  );
};

export default Tabs;
