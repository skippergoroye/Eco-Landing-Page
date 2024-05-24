interface OrgCardProps {
  title: string;
  imgUrl: string;
  imgBgColor: string;
  imgBg: string;
  description: string;
}

export default function OrgCard({
  title,
  imgUrl,
  imgBgColor,
//   imgBg,
  description,
}: OrgCardProps) {
  return (
    <div
      className="flex-1 rounded-[20px] shadow-3xl w-[350px] py-4 px-6 bg-gray-100"
      style={{ backgroundColor: imgBgColor }}
    >
      <div className="mt-2"> 
        <div
          className={`w-8 h-8 flex justify-center items-center rounded-full`}
        >
          <img src={imgUrl} alt="{title}" width={30} height={30} />
        </div>
        <h3 className="mt-2 font-montserrat text-2xl font-semibold text-black">
          {title}
        </h3>
        <p className="mt-5 font-montserrat text-sm leading-[25px] text-slate-gray">
          {description}
        </p>
      </div>
    </div>
  );
}
