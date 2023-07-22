// import "./chat.scss";
// import React, { useState } from "react";
// import { Input, Button, List } from "antd";

// import axios from "axios";
// const Chatbot = () => {
//   const [messages, setMessages] = useState([]);

//   const sendMessage = async (value) => {
//     setMessages([...messages, { text: value, isUser: true }]);
//     try {
//       const response = await axios.post(
//         "https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium",
//         {
//           inputs: {
//             text: value,
//           },
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `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`,
//           },
//         }
//       );
//       const { choices } = response.data?.choices?.[0] || {};
//       const result = choices?.[0]?.text;
//       setMessages([...messages, { text: result, isUser: true }]);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//     // const sendMessage = (value) => {
//     //   setMessages([...messages, { text: value, isUser: true }]);
//     //   // TODO: Gọi API của chatbot để lấy kết quả
//     //   // ở đây tạm thời sử dụng kết quả cứng
//     //   setMessages([
//     //     ...messages,
//     //     { text: "Đây là kết quả của chatbot", isUser: false },
//     //   ]);
//     // };

//   const handleKeyPress = (event) => {
//     if (event.key === "Enter") {
//       sendMessage(event.target.value);
//       event.target.value = "";
//     }
//   };

//   return (
//     <div className="chatbot">
//       <div className="chatbot-header">
//         <h2>GPT Chat</h2>
//       </div>
//       <div className="chatbot-messages">
//         <List
//           itemLayout="horizontal"
//           dataSource={messages}
//           renderItem={(item) => (
//             <List.Item
//               className={
//                 item.isUser ? "chatbot-message user" : "chatbot-message bot"
//               }
//             >
//               <List.Item.Meta
//                 title={item.isUser ? "You" : "Chatbot"}
//                 description={item.text}
//               />
//             </List.Item>
//           )}
//         />
//       </div>
//       <div className="chatbot-input">
//         <Input
//           placeholder="Type your message here"
//           onKeyPress={handleKeyPress}
//         />
//         <Button
//           type="primary"
//           onClick={() =>
//             sendMessage(document.querySelector(".chatbot-input input").value)
//           }
//         >
//           Send
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Chatbot;

/*
const [messages, setMessages] = useState([]);
  const KEY = "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";
  const generateAnswer = async (prompt) => {
    try {
      const response = await axios.post(
        // "https://api.openai.com/v1/engines/davinci-codex/completions",
        "https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium",
        {
          prompt,
          max_tokens: 100,
          n: 1,
          stop: "\n",
        },
        {
          headers: {
            "Content-Type": "application/json",
            // using key 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
            Authorization: `Bearer ${KEY}`,
          },
        }
      );
      const { choices } = response.data?.choices?.[0] || {};
      const answer = choices?.[0]?.text;
      return answer;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const sendMessage = (value) => {
    setMessages([...messages, { text: value, isUser: true }]);
    // TODO: Gọi API của chatbot để lấy kết quả
    // ở đây tạm thời sử dụng kết quả cứng
    generateAnswer(value).then((answer) => {
      setMessages([...messages, { text: answer, isUser: false }]);
    });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      sendMessage(event.target.value);
      event.target.value = "";
    }
  };
  const promt = "hello";
  //create comproetion openai
*/
// import "./chat.scss";
// import React, { useState } from "react";
// import { Input, Button, List } from "antd";

// import axios from "axios";
// import { OpenAIApi } from "openai";
// const Chatbot = () => {
//   const [messages, setMessages] = useState([]);
//   const KEY = "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";
//   const generateAnswer = async (prompt) => {
//     try {
//       const response = await axios.post(
//         // "https://api.openai.com/v1/engines/davinci-codex/completions",
//         "https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium",
//         {
//           prompt,
//           max_tokens: 100,
//           n: 1,
//           stop: "\n",
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//             // using key 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
//             Authorization: `Bearer ${KEY}`,
//           },
//         }
//       );
//       const { choices } = response.data?.choices?.[0] || {};
//       const answer = choices?.[0]?.text;
//       return answer;
//     } catch (error) {
//       console.error(error);
//       return null;
//     }
//   };

//   const sendMessage = (value) => {
//     setMessages([...messages, { text: value, isUser: true }]);
//     // TODO: Gọi API của chatbot để lấy kết quả
//     // ở đây tạm thời sử dụng kết quả cứng
//     generateAnswer(value).then((answer) => {
//       setMessages([...messages, { text: answer, isUser: false }]);
//     });
//   };

//   const handleKeyPress = (event) => {
//     if (event.key === "Enter") {
//       sendMessage(event.target.value);
//       event.target.value = "";
//     }
//   };
//   const promt = "hello";
//   //create comproetion openai

//   return (
//     <>
//       {/* <div className="chatbot">
//         <div className="chatbot-header">
//           <h2>GPT Chat</h2>
//         </div>
//         <div className="chatbot-messages">
//           <List
//             itemLayout="horizontal"
//             dataSource={messages}
//             renderItem={(item) => (
//               <List.Item
//                 className={
//                   item.isUser ? "chatbot-message user" : "chatbot-message bot"
//                 }
//               >
//                 <List.Item.Meta
//                   title={item.isUser ? "You" : "Chatbot"}
//                   description={item.text}
//                 />
//               </List.Item>
//             )}
//           />
//         </div>
//         <div className="chatbot-input">
//           <Input
//             placeholder="Type your message here"
//             onKeyPress={handleKeyPress}
//           />
//           <Button
//             type="primary"
//             onClick={() =>
//               sendMessage(document.querySelector(".chatbot-input input").value)
//             }
//           >
//             Send
//           </Button>
//         </div>
//       </div> */}
//     </>
//   );
// };

// export default Chatbot;

import "./chat.scss";
import React, { useState, useEffect } from "react";

import { Input, Button, List } from "antd";

import axios from "axios";
import { Configuration, OpenAIApi } from "openai";

const Chatbot = () => {
  const [engines, setEngines] = useState([]);
  const KEY = "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";
  const URL1 = "https://api.openai.com/v1/engines/davinci-codex/completions";
  const URL2 =
    "https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium";

  const configuration = new Configuration({
    organization: "org-dxE9CUIccVpqJmhr31vTIo8b",
    apiKey: KEY,
  });
  const openai = new OpenAIApi(configuration);

  useEffect(() => {
    const getEngines = async () => {
      const response = await openai.listEngines();
      setEngines(response.data);
    };
    getEngines();
  }, []);
  const generateAnswer = async (prompt) => {
    try {
      const response = await axios.post(
        // "https://api.openai.com/v1/engines/davinci-codex/completions",
        URL2,
        {
          prompt,
          max_tokens: 100,
          n: 1,
          stop: "\n",
        },
        {
          headers: {
            "Content-Type": "application/json",
            // using key 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
            Authorization: `Bearer ${KEY}`,
          },
        }
      );
      const { choices } = response.data?.choices?.[0] || {};
      const answer = choices?.[0]?.text;
      return answer;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  console.log(engines);
  const promt = "hello";
  //create comproetion openai
  const [messages, setMessages] = useState([]);
  const sendMessage = async (value) => {
    setMessages([...messages, { text: value, isUser: true }]);
    const answer = await generateAnswer(value);
    setMessages([...messages, { text: answer, isUser: false }]);
  };

  return (
    <>
      <div className="chatbot">
        <button
          className="btn btn-primary"
          onClick={() => sendMessage("hello")}
        >
          Click me
        </button>
      </div>
    </>
  );
};

export default Chatbot;
