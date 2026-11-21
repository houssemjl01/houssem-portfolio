const themeScript = `(function(){try{var stored=localStorage.getItem("theme");var theme=stored==="light"||stored==="dark"?stored:(window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark");document.documentElement.setAttribute("data-theme",theme);var meta=document.querySelector('meta[name="theme-color"]');if(meta){meta.setAttribute("content",theme==="light"?"#FAFAF8":"#08090B");}}catch(error){}})();`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: themeScript }} />;
}
