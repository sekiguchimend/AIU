"use client";

import Header from "../components/Header";
import { db } from "../firebase/Firebase";
import { collection, query, orderBy, limit, onSnapshot } from 'firebase/firestore'
import { useState, useEffect } from "react";

export default function Home() {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const messageRef = collection(db, "message")
        const q = query(messageRef, orderBy("createdat", "desc"), limit(50))
        
        const unsubscribe = onSnapshot(q, (snap) => {
            const messagesData = snap.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setMessages(messagesData)
            console.log("Retrieved messages:", messagesData) // デバッグ用
        })

        return () => unsubscribe()
    }, [])

    const adjustHeight = (element) => {
        element.style.height = 'auto';
        element.style.height = `${element.scrollHeight}px`;
    };

    return (
        <>
        <Header />
        <div className="container">
           
            <main className="main-content">
                <div className="message-list">
                    {messages.map((item) => (
                        <div key={item.id} className="message-item">
                            <textarea
                                readOnly
                                className="textarea-square"
                                value={item.data}
                                ref={(el) => {
                                    if (el) {
                                        adjustHeight(el);
                                    }
                                }}
                            />
                        </div>
                    ))}
                    {messages.length === 0 && <p>No messages found.</p>}
                </div>
            </main>
            <style jsx>{`
                .container {
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
                    width: 100%; /* 横幅を100%に固定 */
                }
                .main-content {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                }
                .message-list {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 15px;
                    width: 100%;
                    max-width: 600px;
                }
                .message-item {
                    width: 100%;
                }
                .textarea-square {
                    width: 100%;
                    min-height: 100px;
                    padding: 10px;
                    border-radius: 8px;
                    border: 1px solid #ccc;
                    background-color: #f9f9f9;
                    font-size: 16px;
                    line-height: 0.8;
                    resize: none;
                    overflow-y: hidden;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                    transition: box-shadow 0.3s ease;
                }
                .textarea-square:focus {
                    outline: none;
                    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
                }
                @media (max-width: 768px) {
                    .main-content {
                        padding: 10px;
                    }
                    .textarea-square {
                        width: 90%;
                        min-height: 90px;
                    }
                }
            `}</style>
        </div>
        </>
    )
}
