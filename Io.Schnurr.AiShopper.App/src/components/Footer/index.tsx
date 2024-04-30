import { Row } from "antd"

import Container from "../../common/Container"
import { Logo } from "../../common/Logo"
import { Extra, FooterContainer, Large, LogoContainer, NavLink } from "./styles"

const Footer = () => {
    return (
        <Extra>
            <Container border={true}>
                <Row justify="space-between" align="middle" style={{ paddingTop: "3rem" }}>
                    <NavLink to="/">
                        <LogoContainer>
                            <Logo
                                src="logo.png"
                                aria-label="homepage"
                                width="101px"
                                height="64px"
                            />
                        </LogoContainer>
                    </NavLink>
                    <Large to="/">{"About"}</Large>
                    <FooterContainer>
                        <a href="https://github.com/Adrinlol/create-react-app-adrinlol">a</a>
                        <a href="https://twitter.com/Adrinlolx">a</a>
                        <a href="https://www.linkedin.com/in/lasha-kakabadze/">a</a>
                        <a href="https://medium.com/@lashakakabadze/">a</a>
                        <a
                            href="https://ko-fi.com/Y8Y7H8BNJ"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img
                                height="36"
                                style={{ border: 0, height: 36 }}
                                src="https://storage.ko-fi.com/cdn/kofi3.png?v=3"
                                alt="Buy Me a Coffee at ko-fi.com"
                            />
                        </a>
                    </FooterContainer>
                </Row>
            </Container>
        </Extra>
    )
}

export default Footer
