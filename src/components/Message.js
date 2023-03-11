// import React from 'react';

// const Message = () => {
//     return (
//         <div className="message owner">
//             <div className="messageInfo">
//                 <img src="https://images.pexels.com/photos/14540599/pexels-photo-14540599.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
//                 <span>just now</span>
//             </div>
//             <div className="messageContent">
//                 <p>hello</p>
//                 <img src="https://images.pexels.com/photos/14540599/pexels-photo-14540599.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />

//             </div>


//         </div>
//     );
// }

// export default Message;



import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
    const { currentUser } = useContext(AuthContext);
    const { data } = useContext(ChatContext);

    const ref = useRef();

    useEffect(() => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    }, [message]);

    return (
        <div
            ref={ref}
            className={`message ${message.senderId === currentUser.uid && "owner"}`}
        >
            <div className="messageInfo">
                <img
                    src={
                        message.senderId === currentUser.uid
                            ? currentUser.photoURL
                            : data.user.photoURL
                    }
                    alt=""
                />
                <span>just now</span>
            </div>
            <div className="messageContent">
                <p>{message.text}</p>
                {message.img && <img src={message.img} alt="" />}
            </div>
        </div>
    );
};

export default Message;
