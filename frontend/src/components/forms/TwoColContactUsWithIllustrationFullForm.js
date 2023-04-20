import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import EmailIllustrationSrc from "images/email-illustration.svg";
import { useHistory } from "react-router-dom";
import Axios from "axios";


const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`
// const Textarea = styled(Input).attrs({ as: "textarea" })`
//   ${tw`h-24`}
// `

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`



export default ({
  subheading = "Contact Us",
  heading = <>Bienvenue  <span tw="text-primary-500">à votre </span><wbr />Profil </>,
  description = "Vous pouvez modifier votre profil.",
  submitButtonText = "UPdate",
  formAction = "#",
  formMethod = "get",
  textOnLeft = true,
}) => {

  const history = useHistory();
  const storedData = JSON.parse(localStorage.getItem('user'));

  const [formData, setFormData] = useState(() => {
    return storedData ? storedData : {
      lastname: `${storedData.lastname}`,
      firstname: `${storedData.firstname}`,
      email: `${storedData.email}`,
      entreprise: `${storedData.entreprise}`,
      tel: `${storedData.tel}`,
      currentPassword: `${storedData.password}`,
      NewPassword: `${storedData.password}`,
      confirmNewPassword: `${storedData.password}`,
    }
  });


  const handleUpdate = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log("set", e.target.name)
    console.log("setFormData", formData)
  };

  const handleSubmmit = (e) => {

    e.preventDefault();
    Update(formData);
    localStorage.removeItem('user');
    localStorage.setItem('user', JSON.stringify(formData))


  };


  const Update = async (formData) => {
    await Axios.post(`/users/updateUser/${storedData._id}`, { ...formData })
    alert("Votre Compte modifier avec success");
    history.push("/components/innerPages/ContactUsPage")
  };




  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={EmailIllustrationSrc} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}


            <Form action={formAction} method={formMethod} onSubmit={handleSubmmit} className="w-full max-w-sm">
              <Input type="text" name="lastname" placeholder="Nom" defaultValue={storedData.lastname} onChange={(e) => handleUpdate(e)} />
              <Input type="text" name="firstname" placeholder="Prenom" defaultValue={storedData.firstname} onChange={(e) => handleUpdate(e)} />
              <Input type="email" name="email" placeholder="Adress Email " defaultValue={storedData.email} onChange={(e) => handleUpdate(e)} />
              <Input type="tel" name="tel" placeholder="Numero de Telephone" defaultValue={storedData.tel} onChange={(e) => handleUpdate(e)} minLength={8} maxLength={8} size={8} />
              <Input type="text" name="entreprise" placeholder="nom de l'entreprise" defaultValue={storedData.entreprise} onChange={(e) => handleUpdate(e)} />




              <SubmitButton type="submit"  >{submitButtonText}</SubmitButton>
            </Form>
          </TextContent>
        </TextColumn>
      </TwoColumn>

    </Container>
  );
};

