import React from 'react';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';


function Home() {
  const { login, isAuthenticated, user, getToken } = useKindeAuth();
  const [accessToken, setAccessToken] = React.useState(null);

  const getAccessToken = async () => {
    const accessToken = await getToken();
    setAccessToken(accessToken);
  }

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h1>Welcome {user.given_name}</h1>
          <button onClick={getAccessToken}>Get access token</button>
          <div>
            <pre>{accessToken}</pre>
          </div>
        </div>
      ) : (
        <div>
          <h1>Please sign in to continue</h1>
          <button onClick={() => login()}>Login</button>
        </div>
      )}
    </div>
  );

}

export default Home;
