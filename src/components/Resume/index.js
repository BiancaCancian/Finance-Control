import React from 'react';
import * as C from "./styles"
import ResumeItem from '../ResumeItem';
import{
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";

const Resume = ({income, expense, total}) => {
  return (
  <C.Container>
    <ResumeItem title ="Inflows" Icon={FaRegArrowAltCircleUp} value = {income} />
    <ResumeItem title ="Outflows" Icon={FaRegArrowAltCircleDown} value = {expense} />
    <ResumeItem title ="Total" Icon={ FaDollarSign} value = {total} />
  </C.Container>
  );
};
export default Resume;
