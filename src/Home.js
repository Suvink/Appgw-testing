import React, { useEffect, useState } from 'react';
import { StytchLogin } from "@stytch/react";
import { Products } from "@stytch/vanilla-js";

function Home() {
    const config = {
        products: [Products.emailMagicLinks, Products.oauth],
        emailMagicLinksOptions: {
          loginRedirectURL: "http://localhost:3001",
          loginExpirationMinutes: 60,
          signupRedirectURL: "http://localhost:3001",
          signupExpirationMinutes: 60,
        },
        oauthOptions: {
          providers: [{ type: "google" }],
          loginRedirectURL: "http://localhost:3001",
          loginExpirationMinutes: 60,
          signupRedirectURL: "http://localhost:3001",
          signupExpirationMinutes: 60,
        },
      };

    return (
        <div>
            <StytchLogin config={config} />
        </div>
    );
}

export default Home;
