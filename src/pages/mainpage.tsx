import React from "react";
import one from "../resource/one.jpg";
import Homedesc from "../components/homedesc";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import logo2 from '../resource/logos 2/Aerogenesis.png'
import { styled } from 'styled-components';
import { Button } from "@aws-amplify/ui-react";
import TopBar from "../components/topbar";
import '../stylesheets/styles.css'
const MainPage: React.FC = () => {
  return (

        <Homedesc />
   
  );
};

export default MainPage;
