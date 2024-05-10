const PopUp = props => {
  return (
    <>
      <div className="popUpBox fixed z-50 left-0 top-0 w-full h-full bg-black bg-opacity-40">
        <div className="popUp relative w-11/12 xs:w-2/3 md:w-1/2 max-w-[500px] h-1/2 max-h-[300px] m-auto top-1/2 -translate-y-1/2 flex flex-col justify-center items-center bg-white overflow-auto rounded-2xl py-2 px-6 shadow-md">
          {props.content}
          <button className="w-1/2 bg-darkstone text-white rounded-sm shadow-sm hover:bg-opacity-50 transition-all duration-200 p-2 mt-1" onClick={props.handleClose}>閉じる</button>
        </div>
      </div>
    </>
  );
};

export default PopUp;
