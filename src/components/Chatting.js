// import React,{useContext} from 'react';
// import Messages from './Messages';
// import Input from './Input';
// import { ChatContext } from "../context/ChatContext";

// const Chatting = () => {
//     const { data } = useContext(ChatContext);

//     return (
//         <div className='chatting'>
//             <div className="chatInfo">
//             <span>{data.user?.displayName}</span>
//                 <div className="chatIcons">
//                     <i className="fa-solid fa-video"></i>
//                     <i className="fa-solid fa-user-plus"></i>
//                     <i className="fa-solid fa-comment-dots"></i>
//                 </div>

//             </div>
//             <Messages/>
//             <Input/>


//         </div>
//     );
// }

// export default Chatting;


import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chatting = () => {
    const { data } = useContext(ChatContext);

    return (
        <div className="chat">
            <div className="chatInfo">
                <span>{data.user?.displayName}</span>
                <div className="chatIcons">
                <i className="fa-solid fa-video"></i>
                <i className="fa-solid fa-user-plus"></i>
                <i className="fa-solid fa-comment-dots"></i>
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    );
};

export default Chatting;