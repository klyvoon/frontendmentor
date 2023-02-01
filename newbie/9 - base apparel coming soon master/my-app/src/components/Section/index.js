import styled from "styled-components";
import Title from "./Title";
import Paragraph from "./Paragraph.js"

const Section = styled.div`
  margin: auto;
  margin-top: 64px;
  width: 80%;
  @media (min-width: 1000px) {
    /* background-color:red; */
    width: 40%;
    margin: unset;
    margin-left: 10%;
  }
`;

Section.Title = Title;
Section.Paragraph = Paragraph;

export default Section;