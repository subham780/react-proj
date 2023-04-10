import React from "react";

const Banner = () => {
  const data = [
    "https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg",
    "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",
    "https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg",  
  ];
  return (
    <div className="w-full h-auto">
        <div>
            <div className="w-[400vw] h-full flex">
                <img className="w-screen h-full object-cover" src={data[0]} 
                alt="ImgOne"
                loading="priority"
                 />
                 <img className="w-screen h-full object-cover" src={data[1]} 
                alt="ImgTwo"
                
                 />
                 <img className="w-screen h-full object-cover" src={data[2]} 
                alt="ImgThree"
                
                 />
                </div>
        </div>
    </div>
  );
};

export default Banner;