import React from "react";

export const Confrence = () => {
  return (
    <>
      <div className="pt-4" id="conference-section" style={{ marginBottom: '20px' }}>
        <h2
          className="text-left text-xl font-bold pl-1"
          style={{
            background: "repeating-linear-gradient(-45deg, transparent, transparent 5px, rgba(0, 0, 0, 0.1) 5px, rgba(0, 0, 0, 0.1) 10px)",
            backgroundSize: "10px 100%",
            height: 'auto',
            backgroundRepeat: "repeat",
          }}
        >
          THE CONFERENCE
        </h2>
        <div className="flex lg:flex-row md:flex-col">
          <div>
          <p
            className="justify text-sm" 
            style={{
              textAlign: "justify",
              textIndent: "0",
              paddingLeft: "0",
              marginLeft: "0",
              paddingTop: "0",
              marginRight: "auto",
              fontSize: "16px",
            }}
          >
            <span
              style={{
                display: "inline-block",
                fontSize: "45px",
                lineHeight: "55px",
                paddingTop: "0",
                paddingRight: "1px",
                paddingLeft: "3px",
                paddingBottom: "0px",
                fontFamily: "Times New Roman",
              }}
            >
              S
            </span>
            ixth International Conference on Computational Intelligence in
            Communications and Business Analytics (CICBA - 2024) aims to carry
            together researchers, engineers, developers and practitioners from
            academia and industry to share their experience, and exchange and
            synthesize their ideas. CICBA-2024 will be organized by Department
            of Computer Science & Engineering, National Institute Of Technology,
            Patna during January 23-25, 2024. CICBA 2017 and CICBA 2018 were
            organized by Calcutta Business School, Kolkata and Kalyani
            Government Engineering College, Kalyani, respectively. And the third
            conference of this series was organised by Department of Computer &
            System Sciences, Visva-Bharati University during December 7-9,
            2021. First two series of this international conference were
            organized in association with Computer Society of India. The fourth
            international conference of this series was organized by Department
            of Computer Science and Engineering, Assam University during January
            6-7, 2022. The previous series of this conference constituted a
            collection of high-quality peer-reviewed research papers received
            from all over the world. The chairs and co-chairs of different
            committees consisted of international academic and industrial
            luminaries, and the Technical Program Committee comprised of
            technical experts, in all the series. The proceedings publication
            partner was Springer Nature in CCIC series.
            <br />
            <br/>
            <strong>
              {" "}
              The Sixth conference of this series, CICBA-2024 is inviting all
              research findings in the field of Computational Intelligence (CI) -
              both Theories and Applications primarily encompassing the domains
              of Data Communications and Analytics. This international conference
              will offer a comprehensive platform for the research community to
              exchange their ideas on contemporary augmentation from the relevant
              topics.
            </strong>
          </p>
          </div>
          <div className="flex flex-col text-xl text-white pt-2 w-full ml-3">
            <div className="bg-sky-600">
              <div className="block px-2 py-1">
                <a
                  href="http://www.cicba.in/CICBA_2022/"
                  target="_blank"
                  style={{ whiteSpace: "normal" }}
                >
                  CICBA-2022
                </a>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div className="bg-sky-600">
              <div className="block px-2 py-1">
                <a
                  href="http://www.cicba.in/CICBA_2021/"
                  target="_blank"
                  style={{ whiteSpace: "normal" }}
                >
                  CICBA-2021
                </a>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div className="bg-sky-600">
              <div className="block px-2 py-1">
                <a
                  href="http://cicba.kgec.edu.in/"
                  target="_blank"
                  style={{ whiteSpace: "normal" }}
                >
                  CICBA-2018
                </a>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div className="bg-sky-600">
              <div className="block px-2 py-1">
                <a
                  href="http://2017.cicba.in/"
                  target="_blank"
                  style={{ whiteSpace: "normal" }}
                >
                  CICBA-2017
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4">
        <div className="flex flex-row" id="institute">
          <div className="w-96 m-6">
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
      </div>
    </>
  );
};
