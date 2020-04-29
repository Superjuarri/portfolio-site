import React, { useState } from "react"
import { animateScroll } from "react-scroll"

import { Hamburger } from "./Hamburger"
import { Nav } from "./Nav"

import { Wrapper, Container, Logo } from "./styles"

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <Wrapper>
      <Container>
        <Logo
          onClick={() => animateScroll.scrollToTop()}
          width="50"
          height="22"
          viewBox="0 0 50 22"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M49.4224 21.7143V18.0714H43.2974H37.1724V21.7143H49.4224Z" />
          <path d="M9.90533 0.995537H14.9297V15.2112C14.9297 16.5299 14.6187 17.7062 13.9967 18.7403C13.3842 19.7742 12.5229 20.5759 11.4127 21.145C10.3121 21.7143 9.08227 21.9989 7.7233 21.9989C5.44555 21.9989 3.67505 21.4297 2.41177 20.2913C1.14849 19.1529 0.516846 17.5402 0.516846 15.4532H5.56998C5.56998 16.4018 5.73267 17.0896 6.05806 17.5165C6.39302 17.9433 6.9481 18.1568 7.7233 18.1568C8.42193 18.1568 8.95786 17.9007 9.33111 17.3884C9.71392 16.8666 9.90533 16.141 9.90533 15.2112V0.995537ZM25.883 14.4002H23.1554V21.7143H18.1167V0.995537H26.3423C28.821 0.995537 30.7591 1.54102 32.1563 2.63198C33.5535 3.72293 34.2522 5.2645 34.2522 7.25676C34.2522 8.6986 33.9556 9.89394 33.3622 10.8427C32.7784 11.7913 31.8596 12.5597 30.6059 13.1479L34.97 21.5008V21.7143H29.5723L25.883 14.4002ZM23.1554 10.5438H26.3423C27.2994 10.5438 28.0172 10.2972 28.4956 9.80384C28.9838 9.30101 29.2278 8.60377 29.2278 7.71212C29.2278 6.82032 28.9838 6.12305 28.4956 5.62025C28.0076 5.10798 27.2898 4.85184 26.3423 4.85184H23.1554V10.5438Z" />
        </Logo>
        <Nav navOpen={navOpen} setNavOpen={setNavOpen} />
        <Hamburger navOpen={navOpen} setNavOpen={setNavOpen} />
      </Container>
    </Wrapper>
  )
}

export { Navbar }
