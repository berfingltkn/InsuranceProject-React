import chatbotLogo from '../assets/chatbotLogo.jpg'
import React from 'react';
import { css } from '@emotion/react';
import { Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ChatbotAl from './ChatbotAI';

export function Chatbot() {
    const [görünür, setGörünür] = useState(false);
 
    const nextHandle = () => {
        setGörünür(true);
    };
    
    const handleClick = () => {
        setGörünür(false);
    };

    const navigate = useNavigate();
    
    return (
        <div>
            <div
                onClick={nextHandle}
                style={{
                    position:"fixed",
                    zIndex:"9999",
                    width:"130px",
                    height:"130px",
                    borderRadius:"150px",
                    border:"5px solid orange",
                    boxShadow:"0 0 5px orange, 0 0 10px orange, 0 0 20px orange",
                    left:"1300px",
                    top:"557px",
                }}
            >
                <img src={chatbotLogo} style={{ width: "130px", height: "130px", borderRadius: "150px" }}></img>
            </div>
            {görünür && <ChatbotAl />}
            {görünür && (
                <div
                    onClick={handleClick}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "rgba(0, 0, 0, 0.5)",
                        zIndex: "9998"
                    }}
                ></div>
            )}
        </div>
    )
}

export default Chatbot;