import { useEffect, useState } from 'react';
import { getView } from '@/router/manage-view';
import ReactPingIcon from '@/components/react-ping-icon';
import Nav from '@/components/nav';
import Router from '@/router';

function Playground() {
  const [route, setRoute] = useState(getView);

  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(location.search);
      const nextRoute = params.get('view');

      if (nextRoute) setRoute(nextRoute);
    };

    globalThis.addEventListener('popstate', handlePopState);

    return () => {
      globalThis.removeEventListener('popstate', handlePopState);
    };
  }, [route]);

  return (
    <section className="Playground bg-euid-gray-200 wrapper">
      <h1 lang="en" className="flex items-center gap-2 font-normal text-react">
        <ReactPingIcon size={24} /> Playground
      </h1>
      <Nav onChangeRoute={setRoute} />
      <Router route={route} />
    </section>
  );
}

export default Playground;
