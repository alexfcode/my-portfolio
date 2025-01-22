import { ElementRef, useRef } from "react";
import { S } from "./Form_Styles";
import emailjs from "@emailjs/browser";



export const Form: React.FC = () => {

  const form = useRef<ElementRef<"form">>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs.sendForm("service_r2m8fas", "template_q75gzv1", form.current, {
        publicKey: "H18oFrh86VNcGeril",
      }).then(() => {
          console.log("SUCCESS!");
        }, (error) => {
          console.log("FAILED...", error.text);
        }
      );
      e.target.reset();

  };

  return (
    <S.Form ref={form} onSubmit={sendEmail}>
      <S.Input required placeholder={"Name"} name={"username"}></S.Input>
      <S.Input required placeholder={"Email"} name={"email"}></S.Input>
      <S.Input required placeholder={"Subject"} name={"subject"}></S.Input>
      <S.Input required as={"textarea"} placeholder={"Type your message..."} name={"username"}></S.Input>
      <S.Button type={"submit"}>SEND MESSAGE</S.Button>
    </S.Form>
  );
};
