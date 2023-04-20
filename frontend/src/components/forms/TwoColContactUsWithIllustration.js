// import React from "react";
// import tw from "twin.macro";
// import styled from "styled-components";
// import { css } from "styled-components/macro"; //eslint-disable-line
// import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
// import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
// import EmailIllustrationSrc from "images/email-illustration.svg";

// const Container = tw.div`relative`;
// const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
// const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
// const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
// const TextColumn = styled(Column)(props => [
//   tw`md:w-7/12 mt-16 md:mt-0`,
//   props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
// ]);

// const Image = styled.div(props => [
//   `background-image: url("${props.imageSrc}");`,
//   tw`rounded bg-contain bg-no-repeat bg-center h-full`,
// ]);
// const TextContent = tw.div`lg:py-8 text-center md:text-left`;

// const Subheading = tw(SubheadingBase)`text-center md:text-left`;
// const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
// const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

// const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col lg:flex-row`
// const Input = tw.input`border-2 px-5 py-3 rounded focus:outline-none font-medium transition duration-300 hocus:border-primary-500`

// const SubmitButton = tw(PrimaryButtonBase)`inline-block lg:ml-6 mt-6 lg:mt-0`

// export default ({
//   subheading = "Contact Us",
//   heading = <>Feel free to <span tw="text-primary-500">get in touch</span><wbr/> with us.</>,
//   description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//   submitButtonText = "Contact Me",
//   formAction = "#",
//   formMethod = "get",
//   textOnLeft = true,
// }) => {


//   return (
//     <Container>
//       <TwoColumn>
//         <ImageColumn>
//           <Image imageSrc={EmailIllustrationSrc} />
//         </ImageColumn>
//         <TextColumn textOnLeft={textOnLeft}>
//           <TextContent>
//             {subheading && <Subheading>{subheading}</Subheading>}
//             <Heading>{heading}</Heading>
//             <Description>{description}</Description>
//             <Form action={formAction} method={formMethod}>
//               <Input type="email" name="email" placeholder="Your Email Address" />
//               <SubmitButton type="submit">{submitButtonText}</SubmitButton>
//             </Form>
//           </TextContent>
//         </TextColumn>
//       </TwoColumn>
//     </Container>
//   );
// };

import React, { useState } from 'react';
import bcrypt from 'bcryptjs';
import tw from "twin.macro";
import styled from "styled-components";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import Tooltip from "@material-ui/core/Tooltip";
import { IconButton } from "@material-ui/core";
import { css } from "styled-components/macro"; //eslint-disable-line
const SubmitButton = tw(PrimaryButtonBase)`inline-block lg:ml-6 mt-6 lg:mt-0`
const TextContent = tw.div`lg:py-8 text-center md:text-left`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;

const Container = tw.div`relative`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`


const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`

function TwoColContactUsWithIllustration() {
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
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({ ...formData, [event.target.name]: event.target.value });

    // Retrieve the current password hash from local storage
    const currentPasswordHash = localStorage.getItem('passwordHash');
    // Verify that the user has provided their current password correctly
    // if (!bcrypt.compareSync(currentPassword, currentPasswordHash)) {
    //   alert('Incorrect current password');
    //   return;
    // }

    if (!bcrypt.compare(currentPassword, currentPasswordHash)) {
      alert('Incorrect current password');
      return;
    } else
      // Verify that the new password and confirmation match
      if (newPassword !== confirmNewPassword) {
        alert('New password and confirmation do not match');
        return;
      } else
      // Hash the new password
      {
        const newPasswordHash = bcrypt.hashSync(newPassword, 10);
        // Store the new password hash in local storage
        localStorage.setItem('passwordHash', newPasswordHash);
        // Inform the user that their password has been updated successfully
        alert('Password updated successfully');
        localStorage.setItem('user', JSON.stringify(formData))
      }

  };

  const [showPassword, setShowPassword] = React.useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const [showPassword1, setShowPassword1] = React.useState(false);
  const handleShowPassword1 = () => {
    setShowPassword1(!showPassword1);
  };
  const [showPassword2, setShowPassword2] = React.useState(false);
  const handleShowPassword2 = () => {
    setShowPassword2(!showPassword2);
  }
  return (
    <Container>
      <TwoColumn>
        <TextContent>
          <Description>si vous avez modifier votre mot de passe </Description>
          <Form onSubmit={handleSubmit} method="get">
            <div tw="min-w-[100%] ">
              <Input tw="min-w-[80%] " type={showPassword ? "text" : "password"} name="Current_Password" placeholder=" Current Password" onChange={(e) => setCurrentPassword(e.target.value)} />
              <IconButton tw="min-w-[20%] "
                onClick={handleShowPassword}>
                {showPassword ? (
                  <Tooltip title="Masquer mot de passe">
                    <Visibility />
                  </Tooltip>
                ) : (
                  <Tooltip title="Voir mot de passe">
                    <VisibilityOff />
                  </Tooltip>
                )}
              </IconButton>
            </div>
            
            <div tw="min-w-[100%] ">
              <Input tw="min-w-[80%] " type={showPassword1 ? "text" : "password"} name="New_Password" placeholder=" New Password" onChange={(e) => setNewPassword(e.target.value)} minLength={6} />
              <IconButton tw="min-w-[20%] "
                onClick={handleShowPassword1}>
                {showPassword1 ? (
                  <Tooltip title="Masquer mot de passe">
                    <Visibility />
                  </Tooltip>
                ) : (
                  <Tooltip title="Voir mot de passe">
                    <VisibilityOff />

                  </Tooltip>
                )}
              </IconButton>
            </div>

            <div tw="min-w-[100%] ">
              <Input tw="min-w-[80%] " type={showPassword2 ? "text" : "password"} name="Confirm_New_Password" placeholder="Confirm New Password" onChange={(e) => setConfirmNewPassword(e.target.value)} minLength={6} />
              <IconButton tw="min-w-[20%] "
                onClick={handleShowPassword2}>
                {showPassword2 ? (
                  <Tooltip title="Masquer mot de passe">
                    <Visibility />
                  </Tooltip>
                ) : (
                  <Tooltip title="Voir mot de passe">
                    <VisibilityOff />
                  </Tooltip>
                )}
              </IconButton>
            </div>
            <SubmitButton type="submit">UPdate</SubmitButton>
          </Form>
        </TextContent>
      </TwoColumn>

    </Container >



  )
}

export default TwoColContactUsWithIllustration

