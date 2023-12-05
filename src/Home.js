import React, { useEffect, useState } from 'react';
import { StytchLogin } from "@stytch/react";
import { Products } from "@stytch/vanilla-js";

function Home() {
  const config = {
    products: [Products.emailMagicLinks, Products.oauth],
    emailMagicLinksOptions: {
      loginRedirectURL: process.env.REACT_APP_STYTCH_LOGIN_REDIRECT_URL,
      loginExpirationMinutes: 60,
      signupRedirectURL: process.env.REACT_APP_STYTCH_SIGNUP_REDIRECT_URL,
      signupExpirationMinutes: 60,
    }
  };
  return (
    <div>
      <StytchLogin config={config} />
    </div>
  );
}

export default Home;
