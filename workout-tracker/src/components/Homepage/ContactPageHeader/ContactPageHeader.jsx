import ArrowRightProperty1Outline from '../ArrowRightProperty1Outline/ArrowRightProperty1Outline.jsx' ;
import image0 from "./image0.png";
import chevron from "./chevron-down.svg";
const ContactPageHeader = ({ className, ...props }) => {
  return (
    <div
      className={
        "bg-white flex flex-row gap-0 items-start justify-start self-stretch shrink-0 relative " +
        className
      }
    >
      <img
        className="self-stretch flex-1 w-[720px] relative"
        style={{ objectFit: "cover" }}
        src={image0}
      />
      <div className="pt-24 pb-24 flex flex-row gap-16 items-center justify-start self-stretch shrink-0 w-[720px] relative">
        <div className="pr-8 pl-8 flex flex-row gap-0 items-start justify-center flex-1 relative">
          <div className="flex flex-col gap-12 items-start justify-start shrink-0 w-[512px] relative">
            <div className="flex flex-col gap-6 items-start justify-start self-stretch shrink-0 relative">
              <div
                className="text-gray-900 text-left font-['DmSans-SemiBold',_sans-serif] text-5xl leading-[60px] font-semibold relative self-stretch"
                style={{ letterSpacing: "-0.02em" }}
              >
                Fit &amp; Functional Program{" "}
              </div>
              <div className="text-left font-['-',_sans-serif] text-xl leading-[30px] font-normal relative self-stretch">
                <span>
                  <span className="you-can-reach-us-anytime-via-hi-untitledui-com-span">
                    You can reach us anytime via
                  </span>
                  <span className="you-can-reach-us-anytime-via-hi-untitledui-com-span2">
                    hi@untitledui.com
                  </span>
                </span>{" "}
              </div>
            </div>
            <div className="flex flex-col gap-8 items-start justify-start self-stretch shrink-0 relative">
              <div className="flex flex-col gap-6 items-start justify-start self-stretch shrink-0 relative">
                <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
                  <div className="flex flex-col gap-1.5 items-start justify-start self-stretch shrink-0 relative">
                    <div className="flex flex-col gap-1.5 items-start justify-start self-stretch shrink-0 relative">
                      <div className="text-gray-700 text-left font-text-sm-medium-font-family text-text-sm-medium-font-size leading-text-sm-medium-line-height font-text-sm-medium-font-weight relative">
                        Name{" "}
                      </div>
                      <div
                        className="bg-white rounded-lg border-solid border-gray-300 border pt-3 pr-4 pb-3 pl-4 flex flex-row gap-2 items-center justify-start self-stretch shrink-0 relative overflow-hidden"
                        style={{
                          boxShadow:
                            "var(--shadow-xs-box-shadow,  0px 1px 2px 0px rgba(16, 24, 40, 0.05))",
                        }}
                      >
                        <div className="flex flex-row gap-2 items-center justify-start flex-1 relative">
                          <div className="text-gray-500 text-left font-text-md-normal-font-family text-text-md-normal-font-size leading-text-md-normal-line-height font-text-md-normal-font-weight relative flex-1">
                            Your name{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
                  <div className="flex flex-col gap-1.5 items-start justify-start self-stretch shrink-0 relative">
                    <div className="flex flex-col gap-1.5 items-start justify-start self-stretch shrink-0 relative">
                      <div className="text-gray-700 text-left font-text-sm-medium-font-family text-text-sm-medium-font-size leading-text-sm-medium-line-height font-text-sm-medium-font-weight relative">
                        Email{" "}
                      </div>
                      <div
                        className="bg-white rounded-lg border-solid border-gray-300 border pt-3 pr-4 pb-3 pl-4 flex flex-row gap-2 items-center justify-start self-stretch shrink-0 relative overflow-hidden"
                        style={{
                          boxShadow:
                            "var(--shadow-xs-box-shadow,  0px 1px 2px 0px rgba(16, 24, 40, 0.05))",
                        }}
                      >
                        <div className="flex flex-row gap-2 items-center justify-start flex-1 relative">
                          <div className="text-gray-500 text-left font-text-md-normal-font-family text-text-md-normal-font-size leading-text-md-normal-line-height font-text-md-normal-font-weight relative flex-1">
                            you@company.com{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
                  <div className="flex flex-col gap-1.5 items-start justify-start self-stretch shrink-0 relative">
                    <div className="flex flex-col gap-1.5 items-start justify-start self-stretch shrink-0 relative">
                      <div className="text-gray-700 text-left font-text-sm-medium-font-family text-text-sm-medium-font-size leading-text-sm-medium-line-height font-text-sm-medium-font-weight relative">
                        Phone number{" "}
                      </div>
                      <div
                        className="bg-white rounded-lg border-solid border-gray-300 border flex flex-row gap-0 items-start justify-start self-stretch shrink-0 relative overflow-hidden"
                        style={{
                          boxShadow:
                            "var(--shadow-xs-box-shadow,  0px 1px 2px 0px rgba(16, 24, 40, 0.05))",
                        }}
                      >
                        <div className="pt-3 pr-3 pb-3 pl-4 flex flex-row items-center justify-between self-stretch shrink-0 relative overflow-hidden">
                          <div className="text-gray-900 text-left font-text-md-normal-font-family text-text-md-normal-font-size leading-text-md-normal-line-height font-text-md-normal-font-weight relative">
                            US{" "}
                          </div>
                          <img
                            className="shrink-0 w-5 h-5 relative overflow-visible"
                            src={chevron}
                          />
                        </div>
                        <div className="pt-3 pr-4 pb-3 flex flex-row gap-2 items-center justify-start flex-1 relative">
                          <div className="text-gray-500 text-left font-text-md-normal-font-family text-text-md-normal-font-size leading-text-md-normal-line-height font-text-md-normal-font-weight relative flex-1">
                            +1 (555) 000-0000{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 h-[154px] relative">
                  <div className="flex flex-col gap-1.5 items-start justify-start self-stretch flex-1 relative">
                    <div className="flex flex-col gap-1.5 items-start justify-start self-stretch flex-1 relative">
                      <div className="text-gray-700 text-left font-text-sm-medium-font-family text-text-sm-medium-font-size leading-text-sm-medium-line-height font-text-sm-medium-font-weight relative">
                        How can we help?{" "}
                      </div>
                      <div
                        className="bg-white rounded-lg border-solid border-gray-300 border pt-2.5 pr-3.5 pb-2.5 pl-3.5 flex flex-row gap-2 items-center justify-start self-stretch flex-1 relative overflow-hidden"
                        style={{
                          boxShadow:
                            "var(--shadow-xs-box-shadow,  0px 1px 2px 0px rgba(16, 24, 40, 0.05))",
                        }}
                      >
                        <div className="text-gray-500 text-left font-text-md-normal-font-family text-text-md-normal-font-size leading-text-md-normal-line-height font-text-md-normal-font-weight relative self-stretch flex-1">
                          Tell us a little about the project...{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#000000] rounded-xl pt-3 pr-4 pb-3 pl-4 flex flex-row gap-3 items-center justify-center self-stretch shrink-0 relative">
                <div className="text-[#ffffff] text-left font-['DmSans-Medium',_sans-serif] text-base font-medium relative">
                  Get Started{" "}
                </div>
                <ArrowRightProperty1Outline
                  property1="outline"
                  className="!shrink-0"
                ></ArrowRightProperty1Outline>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactPageHeader;