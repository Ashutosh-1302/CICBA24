import React from "react";

export const Confrence = () => {
  return (
    <>
      <div className="">
        <h2 className="text-left text-xl font-bold pl-6">THE CONFERENCE</h2>
        <div className="flex flex-row">
          <div className="flex flex-row">
            <span className=" text-8xl p-2 m-2">L</span>
            <p className="text-base p-6">
              orem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              deleniti excepturi porro perspiciatis laborum laudantium,
              corrupti, reprehenderit, officiis quasi delectus fugiat neque
              deserunt qui.
            </p>
          </div>
          <div className="flex flex-col text-lg text-white m-4 ">
            <div className="bg-sky-600  rounded-md ">
              {" "}
              <a href="http://www.cicba.in/CICBA_2022/" target="_blank">
                {" "}
                CICBA-2022
              </a>{" "}
            </div>
            <br />
            <br />
            <br />
            <div className="bg-sky-600  rounded-md ">
              {" "}
              <a href="http://www.cicba.in/CICBA_2021/" target="_blank">
                {" "}
                CICBA-2021
              </a>{" "}
            </div>
            <br />
            <br />
            <br />
            <div className="bg-sky-600  rounded-md ">
              {" "}
              <a href="http://cicba.kgec.edu.in/" target="_blank">
                {" "}
                CICBA-2018
              </a>{" "}
            </div>
            <br />
            <br />
            <br />
            <div className="bg-sky-600  rounded-md ">
              <a href="http://2017.cicba.in/" target="_blank">
                {" "}
                CICBA-2017
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row">
        <div className=" w-96 m-6">
          <img src="Assets/nitpatna.jpg" alt="" />
        </div>
        <div className="">
          <span className="pl-12 font-bold">
            NATIONAL INSTIUTE OF TECHNOLOGY PATNA
          </span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            id reprehenderit sunt eaque repellendus vero ducimus iste eius
            ratione deserunt quasi in tempore numquam reiciendis illum
            consectetur, ut dolore itaque vel optio voluptas, enim rem illo! Ad
            recusandae est nobis?
          </p>
        </div>
      </div>
    </>
  );
};
