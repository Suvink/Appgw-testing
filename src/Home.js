import React from 'react';
import { useAuth, useLoginWithRedirect, ContextHolder } from "@frontegg/react";


function Home() {
  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();

  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <p>Welcome {user?.name}</p>
          <div>
            <pre>{user.accessToken}</pre>
          </div>
          <div>
            <button onClick={() => logout()}>Logout</button>
          </div>
        </div>
      ) : (
        <div>
          <button onClick={() => loginWithRedirect()}>Login</button>
        </div>
      )}
    </div>
  );

}

export default Home;
