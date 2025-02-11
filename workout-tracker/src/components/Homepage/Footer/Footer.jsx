import lift from './lift.png'
import twitter from './twitter.png'
import instagram from './instagram.png'
import github from './github.png'
import fb from './fb.png'
const Footer = ({ className, ...props }) => {
    return (
      <div
        className={
          "bg-[#ffffff] pt-5 flex flex-col gap-[63px] items-center justify-start shrink-0 relative " +
          className
        }
      >
        <div className="pt-5 pr-20 pb-5 pl-20 flex flex-row items-center justify-between self-stretch shrink-0 relative">
          <img
            className="shrink-0 w-[59px] h-[52px] relative"
            style={{ objectFit: "cover" }}
            src={lift}
          />
          <div className="flex flex-row gap-[74px] items-center justify-start shrink-0 relative">
            <div className="text-[#000000] text-left font-['DmSans-Bold',_sans-serif] text-base font-bold relative">
              Home{" "}
            </div>
            <div className="text-[#000000] text-left font-['DmSans-9PtRegular',_sans-serif] text-base font-normal relative">
              Plan{" "}
            </div>
            <div className="text-[#000000] text-left font-['DmSans-9PtRegular',_sans-serif] text-base font-normal relative">
              Stats{" "}
            </div>
            <div className="text-[#000000] text-left font-['DmSans-9PtRegular',_sans-serif] text-base font-normal relative">
              Workout Exercises{" "}
            </div>
          </div>
          <div className="shrink-0 w-[148px] h-7 static">
            <div className="w-7 h-7 static">
              <div className="bg-black rounded-[50%] w-7 h-7 absolute left-[1212px] top-8"></div>

              <img
                className="w-[11.17px] h-[9.03px] absolute left-[1221.03px] top-[41.94px] overflow-visible"
                src={twitter}    
              />
            </div>
            <div className="w-7 h-7 static">
              <div className="bg-blue-600 rounded-[50%] w-7 h-7 absolute left-[1252px] top-8"></div>
              <img
                className="w-[6.32px] h-[12.17px] absolute left-[1262.84px] top-[40.13px] overflow-visible"
                src={fb}
              />
            </div>
            <div className="w-7 h-7 static">
              <div className="bg-black rounded-[50%] w-7 h-7 absolute left-[1292px] top-8"></div>
              <img
                className="w-[13.55px] h-[13.55px] absolute left-[1299.23px] top-[39.23px] overflow-visible"
                src={instagram}
              />
            </div>
            <div className="w-7 h-7 static">
              <div className="bg-black rounded-[50%] w-7 h-7 absolute left-[1332px] top-8"></div>
              <img
                className="w-[12.96px] h-[12.65px] absolute left-[1340.13px] top-[39.23px] overflow-visible"
                src={github}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[39px] items-center justify-center shrink-0 w-[1296px] relative">
          <div
            className="border-solid border-[#b9b9b9] border-t border-r-[0] border-b-[0] border-l-[0] self-stretch shrink-0 h-0 relative"
            style={{ marginTop: "-1px" }}
          ></div>
          <div className="text-[#0c0c0d] text-center font-regular-13px-font-family text-regular-13px-font-size leading-regular-13px-line-height font-regular-13px-font-weight relative self-stretch">
            © Copyright 2022, All Rights Reserved by ClarityUI{" "}
          </div>
        </div>
      </div>
    );
  };
export default Footer;