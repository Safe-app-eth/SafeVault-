import { useWallet } from '../context/WalletProvider';

const Dashboard = () => {
  const appKit = useWallet();
  const user = appKit.getUser();

  return (
    <div>
      {user?.address ? (
        <p>Wallet connected: {user.0xAfD5f60aA8eb4F488eAA0eF98c1C5B0645D9A0A0}</p>
      ) : (
        <button onClick={() => appKit.login()}>Login</button>
      )}
    </div>
  );
};
