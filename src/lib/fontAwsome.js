import React ,{Fragment} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserPlus,faEnvelope,faAward, faTag,faEye,faQuoteRight,faQuoteLeft, faHome ,faUser} from '@fortawesome/free-solid-svg-icons'

export const Fa_Resume = () => (
  <Fragment>
    <FontAwesomeIcon icon={faUserPlus} />
  </Fragment>
)
export const Fa_Profile = () => (
  <Fragment>
    <FontAwesomeIcon icon={faTag} />
  </Fragment>
)
export const Fa_Skills = () => (
  <Fragment>
    <FontAwesomeIcon icon={faAward} />
  </Fragment>
)
export const Fa_Contact = () => (
  <Fragment>
    <FontAwesomeIcon icon={faEnvelope} />
  </Fragment>
)
export const Fa_Link = () => (
  <Fragment>
    <FontAwesomeIcon icon={faEye} />
  </Fragment>
)

export const Fa_QuoteLeft = () => (
  <Fragment>
    <FontAwesomeIcon icon={faQuoteLeft} />
  </Fragment>
)
export const Fa_QuoteRight = () => (
  <Fragment>
    <FontAwesomeIcon icon={faQuoteRight} />
  </Fragment>
)

export const Fa_Home = () => (
  <Fragment>
    <FontAwesomeIcon icon={faHome} />
  </Fragment>
)
export const Fa_User = () => (
  <Fragment>
    <FontAwesomeIcon icon={faUser} />
  </Fragment>
)