import styled from "styled-components";
import marvel from "../../../public/marvel-logo.svg";
import { handleLogin } from "../../utils/auth/authService";
import avengers from "../../../public/avengers.png";
import { Button, ButtonText } from "../../components/Button";
import { Input } from "../../components/Input";
import { TitleH3 } from "../../components/h3";
import { TextGray } from "../../components/Texts";
import { Label, LabelError } from "../../components/Label";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Theme } from "../../theme/theme"; //VARIAVÉIS PRINCIPAIS DA APLICAÇÃO


const HandlerImage = styled.div`
  display: flex;
  justify-content: end;
  width: 50%;
  transition: 1s ease-out;
`;

const FirstDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  width: 50%;
  transition: opacity 1s ease-in-out;
`;

const Container = styled.div`
  display: flex;
  overflow-y: hidden;
  max-width: 100vw;
  justify-content: space-between;

  ${Theme.breakpoint.tablet}{//RESPONSIVIDADE
    ${HandlerImage}{
      display: none;
    }
    ${FirstDiv}{
      width: 100%;
    }
  }
`;

const ContainerFirstDiv = styled.div`
  max-width: 500px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CheckBoxContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
`;


const StyledImage = styled.img`
  height: 100vh;
  object-fit: cover;
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default function LoginAndRegister() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await handleLogin(email, password); //dados do banco de dados
    } catch (error) {
      console.error("Erro:", error);
      setErrorMessage("Credenciais incorretas");
    }
  };

  return (
    <Container>
      <FirstDiv>
        <ContainerFirstDiv>
          <img src={marvel} alt="logotipo-marvel" />
          <TitleH3>Bem vindo(a) de volta!</TitleH3>
          <TextGray>Acesse sua conta </TextGray>
          <Form onSubmit={handleSubmit}>{/*gatilho para enviar os valores dos inputs */}
            <Input
              placeholder="E-mail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              placeholder="Senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <CheckBoxContainer>
                <Input type="checkbox" name="checkbox" />
                <Label>Salvar login</Label>
              </CheckBoxContainer>
              <ButtonText>Esqueceu sua senha ?</ButtonText>
            </div>
            <Button $primary type="submit">
              <Link to="/personagens">ENTRAR</Link> {/**considerando personagens como a Home */}
            </Button>
            {errorMessage && <LabelError>{errorMessage}</LabelError>}
          </Form>
          <TextGray> Ainda não tem login ?</TextGray>
        </ContainerFirstDiv>
      </FirstDiv>
      <HandlerImage>
        <StyledImage src={avengers} alt="avengers-cover" />
      </HandlerImage>
    </Container>
  );
}
