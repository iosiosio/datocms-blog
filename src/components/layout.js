/* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/

import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { motion, AnimatePresence } from 'framer-motion'
import Nav from '../components/Nav'
import '../styles/style.css'

import "../styles/index.sass";

const duration = 0.5

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: duration,
      delay: duration,
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: duration },
  },
}

const Layout = ({ children, location }) => (
  <>
    <Nav />
    <div
      style={{
        margin: `60px auto 0`,
        maxWidth: 960,
        padding: `1em`,
      }}
    >
      <AnimatePresence>
        <motion.main
          key={location.pathname}
          variants={variants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </div>
  </>
)

export default Layout;
/* eslint-enable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/
