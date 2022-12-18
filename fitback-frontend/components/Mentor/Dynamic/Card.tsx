import { colors } from "../../../res/colors";
import auth from "../../../res/icons/auth-incum.svg";
import Image from "next/image";
import { Incumbent } from "../../../interfaces/IncumbentInterface";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Router from "next/router";

interface itemProps {
  info: Incumbent;
}

export default function Card(props: itemProps) {
  const { info } = props;
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const router = Router;

  const shuffle = () => {
    const randomArray = colors.sort(() => 0.5 - Math.random());
    setStart(randomArray[0]);
    setEnd(randomArray[1]);
  };

  useEffect(() => {
    shuffle();
  }, []);

  return (
    <div className="container">
      <div className="color-box">
        <div className="dark-box" />
      </div>
      <div className="bottom-box">
        <div className="img-container">
          <div className="img-box">
            <Image
              src={info.img}
              layout="fill"
              objectFit="cover"
              alt="profile-img"
            />
          </div>
        </div>
        <div className="info-box">
          <span className="name">{info.name}</span>
          <ul className="info-list">
            <li>
              <Image src={auth} width={16} height={16} alt="현직자 인증마크" />
            </li>
            <li className="company">{info.company}</li>
            <li>|</li>
            <li>{info.job}</li>
            <li>|</li>
            <li>{info.career}년차</li>
          </ul>
          <ul className="advertise-box">
            <li>#후기 {info.reviews}건</li>
            <li>#만족도 {info.satisfaction}%</li>
          </ul>
        </div>
      </div>
      <div className="btn-box">
        <button className="like-btn">
          <FontAwesomeIcon icon={faHeart} />
        </button>
        <button
          className="ask-btn"
          onClick={() => router.push(`/registerfeedback/${info.name}`)}
        >
          내 작업물 피드백 받기
        </button>
      </div>
      <style jsx>{`
        @-webkit-keyframes AnimationName {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @-moz-keyframes AnimationName {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @-o-keyframes AnimationName {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes AnimationName {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .dark-box {
          width: 100%;
          height: 100%;
          background-color: #00000058;
        }
        .container {
          width: 360px;
          height: 340px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          background-color: white;
          position: relative;
        }
        .color-box {
          width: 100%;
          height: 26%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: ${`linear-gradient(135deg, ${start}, ${end})`};
          transition: all 0.15s;
          position: relative;
        }
        .container:hover .color-box {
          background-size: 150% 150%;
          -webkit-animation: AnimationName 4s ease infinite;
          -moz-animation: AnimationName 4s ease infinite;
          -o-animation: AnimationName 4s ease infinite;
          animation: AnimationName 4s ease infinite;
          animation: AnimationName 4s ease infinite;
        }
        .ment {
          width: 70%;
          word-break: keep-all;
          text-align: center;
          white-space: pre-line;
          word-break: keep-all;
          font-size: 20px;
          color: white;
          font-weight: 600;
          position: absolute;
          top: 45%;
          left: 50%;
          transform: translate(-50%, -50%);
          line-height: 28px;
          z-index: 10;
        }
        .bottom-box {
          width: 100%;
          height: 55%;
          position: relative;
          background-color: white;
          display: flex;
          align-items: flex-end;
          justify-content: center;
        }
        .img-container {
          width: 30%;
          aspect-ratio: 1/1;
          position: absolute;
          top: -40px;
          left: 50%;
          transform: translate(-50%, 0);
        }
        .img-box {
          width: 100%;
          height: 100%;
          border-radius: 100%;
          border: 5px solid white;
          position: relative;
          overflow: hidden;
          transition: all 0.25s;
        }
        .container:hover .img-box {
          transform: scale(1.02);
        }
        .info-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 18px;
        }
        .name {
          font-size: 18px;
          font-weight: 700;
          color: #0a0a0a;
          text-align: center;
        }
        ul {
          list-style-type: none;
          padding: 0px;
          margin: 0px;
          display: flex;
        }
        li {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
        }
        .info-list {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap: 5px;
          font-size: 14px;
        }
        .company {
          font-weight: 800;
          color: #30b5ff;
        }
        .advertise-box {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 15px;
          color: #656565;
          font-weight: 500;
          font-size: 14px;
        }
        .btn-box {
          width: 90%;
          height: 25%;
          align-self: center;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          border-top: 1px solid #dedede;
        }
        .btn-box button {
          border-radius: 10px;
          height: 60%;
          padding: 0px 15px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
        }
        .like-btn {
          border: 2px solid #30b5ff;
          background: none;
          color: #30b5ff;
        }
        .ask-btn {
          background-color: #30b5ff;
          border: none;
          color: white;
        }
      `}</style>
    </div>
  );
}
