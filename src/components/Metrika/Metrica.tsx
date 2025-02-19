import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const Metrika = () => {
  const location = useLocation();

  useEffect(() => {
    const metrikaScript = `
      (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
      m[i].l=1*new Date();
      for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
      k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
      (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
      ym(99977055, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true
      });
    `;
    
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.text = metrikaScript;
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    if (typeof window.ym !== 'undefined') {
      window.ym(99977055, 'hit', location.pathname);
    }
  }, [location]);

  return null;
};
