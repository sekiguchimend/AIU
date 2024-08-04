"use client";
import { useState } from "react";
import { db } from "./firebase/Firebase";
import { collection, addDoc } from "firebase/firestore";
import { Fab, Alert } from "@mui/material";
import NavigationIcon from '@mui/icons-material/Navigation'; // アイコンをインポート
import Header from "./components/Header";

export default function Home() {
  const [input, setInput] = useState("");
  const [error, setError] = useState(""); // エラーメッセージの状態を追加
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = async () => {
    if (input.trim() === "") {
      setError("入力をしてください"); // エラーメッセージを設定
      return;
    }
    setLoading(true);
    try {
      await addDoc(collection(db, "message"), {
        createdat: new Date(),
        data: input
      });
      setInput(""); // 成功したら入力フィールドをクリア
      setError(""); // エラーメッセージをクリア
    } catch {
      setError("もう一度送信してください"); // エラーメッセージを設定
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <main
        className="flex min-h-screen flex-col items-center justify-center"
        style={{ height: "100vh" }}
      >
        {error && (
          <Alert severity="error" style={{ marginBottom: "16px" }}>
            {error}
          </Alert>
        )}
        <textarea
          className="textarea-square"
          onChange={handleChange}
          value={input}
        />
        <Fab variant="extended" onClick={handleClick} disabled={loading} style={{ marginTop: "16px" }}>
          <NavigationIcon sx={{ mr: 1 }} />
          {loading ? "loading" : "SEND"}
        </Fab>
        <style jsx>{`
          .textarea-square {
            line-height: 0.8em;
            width: 100%;
            max-width: 600px;
            height: 60%;
            min-height: 100px;
            padding: 10px;
            border-radius: 8px;
            border: 1px solid #ccc;
            background-color: #f9f9f9;
            font-size: 16px;
            resize: none;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            transition: box-shadow 0.3s ease;
          }
          @media (max-width: 768px) {
            .textarea-square {
              width: 90%;
              height: 90%;
              min-width: auto;
            }
          }
        `}</style>
      </main>
    </>
  );
}
