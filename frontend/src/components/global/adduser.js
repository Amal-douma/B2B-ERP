import React, { useState } from "react";
import AnimationRevealPage from "../../helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "../../components/misc/Layouts.js";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
//import illustration from "../../../src/images/design-illustration-2.svg";
import logo from "images/logo.png";
import { ReactComponent as SignUpIcon } from "feather-icons/dist/icons/user-plus.svg";
import { connect } from "react-redux";
import { SetAlert } from "../../../src/Actions/Alert";
import { register } from "../../../src/Actions/auth";
import PropTypes from "prop-types";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Alert } from '@mui/material';
const Container = tw(
    ContainerBase
)`min-h-screen bg-gradient-to-t from-transparent via-transparent to-blue-300 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const LogoLink = tw.a``;
const LogoImage = tw.img`h-12 mx-auto`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1 mt-8`;

const DividerTextContainer = tw.div`my-12 border-b text-center relative`;
const DividerText = tw.div`leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2 absolute inset-x-0 top-1/2 bg-transparent`;

const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-blue-200 placeholder-gray-500 text-sm focus:outline-none focus:border-blue-400 focus:bg-white mt-5 first:mt-0`;
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-blue-500 text-gray-100 w-full py-4 rounded-lg hover:bg-blue-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;
// const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-blue-100 text-center hidden lg:flex justify-center`;
// const IllustrationImage = styled.div`
//   ${(props) => `background-image: url("${props.imageSrc}");`}
//   ${tw`m-12 xl:m-16 w-full max-w-lg bg-contain bg-center bg-no-repeat`}
// `;

function Signup({
    logoLinkUrl = "#",
    // illustrationImageSrc = illustration,
    headingText = "Bienvenue à votre espace ",
    submitButtonText = "Ajouter",
    SubmitButtonIcon = SignUpIcon,
    signInUrl = "/components/blocks/global/users",
}) {
    let history = useHistory();
    const [fromData, setFormData] = useState({
        lastname: "",
        firstname: "",
        email: "",
        password: "",
        tel: "",
        entreprise: "",
    });

    const { lastname, firstname, email, password, tel, entreprise } = fromData;
    const hundelchange = (e) =>
        setFormData({ ...fromData, [e.target.name]: e.target.value });
    const onsubmit = (e) => {
        e.preventDefault();
        RegisterSend(fromData);
    };
    const RegisterSend = (fromData) => {
        axios.post("/users/addUser", { ...fromData })
            .then((res) => {
                alert(res.data);
                console.log(res.data);
                console.log("utilisateur ajouter avec succès");

                history.push("/components/blocks/global/users");
            })
            .catch(err => {
                alert(err.data);
                console.log(err.data);
                console.log(Alert)
            })




    };

    return (
        <AnimationRevealPage>
            <Container>
                <Content>
                    <MainContainer>
                        <LogoLink href={logoLinkUrl}>
                            <LogoImage src={logo} />
                        </LogoLink>
                        <MainContent>
                            <Heading>{headingText}</Heading>
                            <FormContainer>
                                <DividerTextContainer>
                                    <DividerText>Ajouter nouveaux Utilisateur</DividerText>
                                </DividerTextContainer>
                                <Form onSubmit={(e) => onsubmit(e)}>
                                    <Input
                                        className="myinput"
                                        type="text"
                                        placeholder="Nom"
                                        name="lastname"
                                        value={lastname}
                                        onChange={(e) => hundelchange(e)}
                                        required
                                    />
                                    <Input
                                        className="myinput"
                                        type="text"
                                        placeholder="Prènom"
                                        name="firstname"
                                        value={firstname}
                                        onChange={(e) => hundelchange(e)}
                                        required
                                    />
                                    <Input
                                        className="myinput"
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => hundelchange(e)}
                                        required
                                    />
                                    <Input
                                        className="myinput"
                                        type="password"
                                        placeholder="Mot de passe"
                                        name="password"
                                        value={password}
                                        minLength="6"
                                        onChange={(e) => hundelchange(e)}
                                        required
                                    />
                                    <Input
                                        className="myinput"
                                        type="tel"
                                        placeholder="Numèro de téléphone"
                                        name="tel"
                                        value={tel}
                                        minLength="8"
                                        onChange={(e) => hundelchange(e)}
                                        required
                                    />
                                    <Input
                                        className="myinput"
                                        type="text"
                                        placeholder="Entreprise employante"
                                        name="entreprise"
                                        value={entreprise}
                                        onChange={(e) => hundelchange(e)}
                                        required
                                    />
                                    <SubmitButton style={{ borderRadius: "50px" }} type="submit">
                                        <SubmitButtonIcon className="icon" />
                                        <span className="text">{submitButtonText}</span>
                                    </SubmitButton>


                                </Form>
                            </FormContainer>
                        </MainContent>
                    </MainContainer>
                    {/* <IllustrationContainer>
                        <IllustrationImage imageSrc={illustrationImageSrc} />
                    </IllustrationContainer> */}
                </Content>
            </Container>
        </AnimationRevealPage>
    );

}
Signup.propTypes = {
    SetAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
};
const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { SetAlert, register })(Signup);
