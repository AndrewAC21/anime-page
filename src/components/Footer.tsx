import styled from "styled-components"
import { Box, Divider } from "@mui/material";
import {Link} from "wouter"

const StyledBox = styled(Box)`
  width: 100%;
  min-height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #1976d2;
`

const StyledTypography = styled.p`
  color: #fff;
  margin: 0 1rem;
  margin-bottom: 0;
`
const StyledAnchor = styled.a`
  text-decoration: none;
`
export default function Footer() {
  return (
    <StyledBox>
      <Link to="/">
      <StyledTypography>Home</StyledTypography>
      </Link>
      <Divider orientation="vertical" variant="middle" flexItem sx={{borderColor:"rgba(255,255,255,0.7)"}} />
      <StyledTypography >About</StyledTypography>
      <StyledAnchor  href="https://github.com/AndrewAC21/anime-page" target="_blank">

      <StyledTypography >Repository</StyledTypography>
      </StyledAnchor>
    </StyledBox>
  );
}
