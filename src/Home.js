import React, { useEffect, useState } from 'react';
import { StytchLogin, useStytchUser, useStytch } from "@stytch/react";
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
  const stytch = useStytch();
  const { user } = useStytchUser();
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    // Validate code
    if (stytch && !user) {
      const queryParams = new URLSearchParams(window.location.search);
      const token = queryParams.get("token");
      const tokenType = queryParams.get("stytch_token_type");

      // If a token is found, authenticate it with the appropriate method
      if (token && tokenType) {
        if (tokenType === "magic_links") {
          stytch.magicLinks.authenticate(token, {
            session_duration_minutes: 60,
          });
        } else if (tokenType === "oauth") {
          stytch.oauth.authenticate(token, {
            session_duration_minutes: 60,
          });
        }
      }
    }
  }, [stytch, user]);

  const getAccessToken = async () => {
    const sessionCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("stytch_session_jwt"));
    setAccessToken(sessionCookie.split("=")[1]);
  }

  return (
    <div>
      {
        user ? <div>
          <h1>Welcome {user.name.first_name}</h1>
          <button onClick={getAccessToken}>Get access token</button>
          <div>
            <pre>{accessToken}</pre>
          </div>
        </div> :
          <StytchLogin config={config} />
      }
    </div>
  );
}

export default Home;
