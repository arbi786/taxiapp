import React, { useState } from "react";
import styled from "styled-components";
import { MdSpaceDashboard } from "react-icons/md";
import { RiDashboard2Fill } from "react-icons/ri";
import { FaAddressCard, FaTaxi } from "react-icons/fa";
import { GiTwirlCenter } from "react-icons/gi";
import { BsFillChatTextFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";

const Sidebar = () => {
  const [curState, setCurState] = useState(1);

  return (
    <>
      <Section>
        <div className="top">
          <div className="brand">
            <FaTaxi />
            <span>MY TAXI</span>
          </div>
          <div className="toggle"></div>
          <div className="links">
            <ul>
              <li
                onClick={() => {
                  setCurState(1);
                }}
                className={curState === 1 ? "active" : ""}
              >
                <a href="#">
                  <MdSpaceDashboard />
                  <span> Dashboard</span>
                </a>
              </li>
              <li
                onClick={() => {
                  setCurState(2);
                }}
                className={curState === 2 ? "active" : ""}
              >
                <a href="#">
                  <RiDashboard2Fill />
                  <span> Riders</span>
                </a>
              </li>
              <li
                onClick={() => {
                  setCurState(3);
                }}
                className={curState === 3 ? "active" : ""}
              >
                <a href="#">
                  <FaAddressCard />
                  <span> Payment Details</span>
                </a>
              </li>
              <li
                onClick={() => {
                  setCurState(4);
                }}
                className={curState === 4 ? "active" : ""}
              >
                <a href="#">
                  <GiTwirlCenter />
                  <span> Learning Center</span>
                </a>
              </li>
              <li
                onClick={() => {
                  setCurState(5);
                }}
                className={curState === 5 ? "active" : ""}
              >
                <a href="#">
                  <BsFillChatTextFill />
                  <span> FAQs</span>
                </a>
              </li>
              <li
                onClick={() => {
                  setCurState(6);
                }}
                className={curState === 6 ? "active" : ""}
              >
                <a href="#">
                  <IoSettings />
                  <span> Settings</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="logout">
          <a href="#">
            <FiLogOut />
            Logout
          </a>
        </div>


        </div>
     
      </Section>
    </>
  );
};

const Section = styled.section`
  position: fixed;
  background-color: #212121;
  left: 0;
  height: 100vh;
  width: 20vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 2rem 2rem 0rem;
  gap: 1rem;

  .top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    width: 100%;

    .brand {
      font-size: 2rem;
      color: #ffc107;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      gap: 2rem;
      font-family: "Poppins", sans-serif;

      svg {
        color: #ffc107;
      }
    }
    .toggle {
      display: none;
    }

    .links {
      display: flex;
      justifycontent: center;

      ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        li {
          padding: 0.6rem 1rem;
          border-radius: 1.6rem;
          &:hover {
            background: #ffc107;

            a {
              color: black;
            }
          }

          a {
            text-decoration: none;
            display: flex;
            gap: 1rem;
            color: white;
            align-items: center;
          }
        }
      }

      .active {
        background-color: #ffc107;

        a {
          color: black;
        }
      }
    }
  }
  .logout{
    position:relative;
    top:4rem;
    left:0;

    color:white;
    border-radius:1.5rem;


    

    a{
      text-decoration:none;
      color:white;
      display:flex;
      align-items:center;
      padding:.3rem 1rem;
      width:100%;




    }

    &:hover{
      background:#da0037;
    }

  }
`;

export default Sidebar;
