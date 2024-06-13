import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { login, register } from "../lib/api/auth";

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
`;
const InputGroup = styled.div`
  margin-bottom: 15px;
  label {
    display: block;
    margin-bottom: 5px;
  }
  input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
`;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 10px;

  &:disabled {
    background-color: #a0a0a0;
  }
`;
const ToggleButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default function AuthForm({ setUser }) {
  const [isSignIn, setIsSignIn] = useState(true);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async () => {
    const { userId, nickname, avatar } = await login({ id, password });
    alert("로그인이 되었습니다.");
    setUser({ userId, nickname, avatar });
    navigate("/");
  };

  const handleRegister = async () => {
    if (id.length < 4 || id.length > 10) {
      alert("아이디는 4글자에서 10글자 이내로만 가능합니다!");
      return;
    }
    if (password.length < 4 || password.length > 15) {
      alert("비밀번호는 4글자에서 15글자 이내로만 가능합니다!");
      return;
    }
    if (nickname.length < 1 || nickname.length > 10) {
      alert("닉네임은 1글자에서 10글자 이내로만 가능합니다!");
      return;
    }
    const response = await register({ id, password, nickname });
    if (response) {
      confirm("회원가입이 완료되었습니다.");
      setIsSignIn(true);
    }
  };

  return (
    <Container>
      {isSignIn ? (
        <>
          <InputGroup>
            <label htmlFor="id">아이디</label>
            <input
              type="text"
              id="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="아이디"
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호"
            />
          </InputGroup>
          <Button onClick={handleSignIn}>로그인</Button>
          <ToggleButton onClick={() => setIsSignIn(false)}>
            회원가입
          </ToggleButton>
        </>
      ) : (
        <>
          <InputGroup>
            <label htmlFor="id">아이디</label>
            <input
              type="text"
              id="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="아이디"
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호"
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="nickname">닉네임</label>
            <input
              type="text"
              id="nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="닉네임"
            />
          </InputGroup>
          <Button onClick={handleRegister}>회원가입</Button>
          <ToggleButton onClick={() => setIsSignIn(true)}>
            로그인
          </ToggleButton>
        </>
      )}
    </Container>
  );
}
