import React from 'react';
import { useDescope, useSession, useUser } from '@descope/react-sdk'
import { Descope } from '@descope/react-sdk'
import { getSessionToken } from '@descope/react-sdk';

function Home() {
  const { isAuthenticated, isSessionLoading } = useSession()
  const { user, isUserLoading } = useUser()
  const { logout } = useDescope()
  const [accessToken, setAccessToken] = React.useState(null);

  const getAccessToken = async () => {
    const accessToken = await getSessionToken();
    setAccessToken(accessToken);
  }

  return (
    <div>
      {!isAuthenticated &&
        (
          <Descope
            flowId="sign-up-or-in"
            onSuccess={(e) => console.log(e.detail.user)}
            onError={(e) => console.log('Could not log in!')}
          />
        )
      }

      {
        (isSessionLoading || isUserLoading) && <p>Loading...</p>
      }

      {!isUserLoading && isAuthenticated &&
        (
          <>
            <p>Welcome {user.name}</p>
            <button onClick={() => logout()}>Logout</button>
            <pre>{accessToken}</pre>
            <button onClick={() => getAccessToken()}>Get Access Token</button>
          </>
        )
      }
    </div>
  );

}

export default Home;
