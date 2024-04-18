import { PhysicalStatsCardProps } from "../types/uiComponents";
import { getTimeSince } from "helpers/helpers";
import Image from "next/image";

function PhysicalStatsCard({ emoji, title, body, unit, borderColor, textColor, bgColor }: PhysicalStatsCardProps) {
  return (
    <div className={`flex flex-col flex-1 justify-start items-center flex-shrink-0 border rounded-3xl m-0`}
      style={{ backgroundColor: bgColor, borderColor: borderColor }}
    >
      <div className="flex flex-row pt-7 pl-5 items-center justify-between w-full">
        <div className='text-2xl leading-3 font-black m-0'>
          {emoji}
        </div>
        <div className="text-xs mr-5"
          style={{ color: textColor }}
        >
          {unit === "lb" ? getTimeSince(body.date, body.time) : ""}
        </div>
      </div>
      <div className={`py-10 font-black text-5xl leading-10 inline-block align-middle`}
        style={{ color: textColor }}
      >
        {body === '-' ?
          <Image src="/images/fitbit-logo.svg" alt="Fitbit Icon" width={100} height={100} /> :
          <>
            {unit === "lb" ? Math.round(body.weight * 2.20462) : body}
            {unit === "mg/dl" ?
              <span className='ml-1 text-xl align-middle leading-4 inline-block font-black'>{unit}</span>
              :
              <span className='ml-1 text-3xl align-middle leading-4 inline-block font-black'>{unit}</span>
            }
          </>
        }
      </div>
      <div className={`w-full text-center mt-1 font-black text-lg pb-3`}
        style={{ color: textColor }}
      >
        {title === "Connect" ?
          <button
            className="-mt-2 bg-fitbit-bg text-white font-bold py-1 px-2 rounded-lg shadow transition-transform duration-200 ease-in-out transform active:scale-95"
          >
            {title}
          </button>
          :
          title
        }
      </div>
    </div>
  )
}

export default PhysicalStatsCard;