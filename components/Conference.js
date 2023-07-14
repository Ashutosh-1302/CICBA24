import React from "react";

export const Conference = () => {
  return (
    <>
      <div
        className="pt-4"
        id="conference-section"
        style={{ marginBottom: "20px" }}
      >
        <h2
          className="text-left text-xl font-bold pl-1"
          style={{
            background:
              "repeating-linear-gradient(-45deg, transparent, transparent 5px, rgba(0, 0, 0, 0.1) 5px, rgba(0, 0, 0, 0.1) 10px)",
            backgroundSize: "10px 100%",
            height: "auto",
            backgroundRepeat: "repeat",
          }}
        >
          THE CONFERENCE
        </h2>
        <div className="lg:flex-row md:flex-col" id="content">
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
                ineHeight: "1",
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
              <br />
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
          <div
            className="text-xl text-white pt-4 w-full"
            id="button"
          >
            <div className="flex flex-col space-y-4">
              <div className="bg-green-800">
                <div className="block px-2 py-1">
                  <a
                    href="http://www.cicba.in/cicba2023/index.html"
                    target="_blank"
                    style={{ whiteSpace: "normal" }}
                  >
                    CICBA-2023
                  </a>
                </div>
              </div>

              <div className="bg-green-800">
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

              <div className="bg-green-800">
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

              <div className="bg-green-800">
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
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4">
      <h2
          className="text-center text-xl font-bold pl-1"
          style={{
            background:
              "repeating-linear-gradient(-45deg, transparent, transparent 5px, rgba(0, 0, 0, 0.1) 5px, rgba(0, 0, 0, 0.1) 10px)",
            backgroundSize: "10px 100%",
            height: "auto",
            backgroundRepeat: "repeat",
          }}
        >
          National Institute Of Technology,Patna
        </h2>
        <div className="flex flex-row space-x-4 pb-3 p-3" id="institute" >
          <div className="pt-3">
            <img src="Assets/nitpatna.jpg" className="" alt="" />
          </div>
          <div className="pt-4 pl-6=">
  <p style={{ marginLeft: 0 }}>
  National Institute of Technology Patna is the 18th National Institute of Technology created by the Ministry of H.R.D. Government of India after rechristening the erstwhile Bihar College of Engineering Patna on 28. 01. 2004. NIT Patna marked its humble beginning in 1886 with the establishment of pleaders survey training school which was subsequently promoted of Bihar College of Engineering Patna in 1924. This made this institute the 6th Oldest Engineering Institute of India.  The institute is situated on the south bank of holy river Ganges behind Gandhi Ghat, one of the most important and reverential place of Patna. 
  </p>
</div>
</div>
      </div>
    </>
  );
};
