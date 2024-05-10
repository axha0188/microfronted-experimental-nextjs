import dynamic from "next/dynamic";

const RemoteCounter = dynamic(() => import("app2/counter"), {
  ssr: false,
});

const RemoteCounterPage = () => <RemoteCounter/>;

export default RemoteCounterPage;
