import SendButton from "../components/SendButton";

export default function Dashboard() {
  const safeAddress = "0xYourSafeAddress";      // your Safe address
  const recipient = "0xRecipientAddress";       // recipient ETH address

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">SafeVault Dashboard</h1>
      
      {/* Other dashboard UI like balances, proposals, etc. */}

      <div className="mt-6">
        <SendButton safeAddress={safeAddress} recipient={recipient} />
      </div>
    </div>
  );
}
