import * as React from 'react';

export default function NextjsRemoteComponent() {
  console.log('print statement from next remote component')
  return (
    <>
    <nav
      style={{
        background: 'cadetblue',
        width: '100%',
        height: '100px',
        color: 'white',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '24px',
      }}
    >
     
      Hello from Remote Nextjs component (Component Sharing Example)- Aravind Pandit

    </nav>
    </>
    
  );
};


