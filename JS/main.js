async function loadComponent(containerId, path, cssPath, jsPath) {
  if (cssPath) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = cssPath;

    await new Promise((resolve) => {
      link.onload = resolve;
      document.head.appendChild(link);
    });
  }

  const html = await fetch(path).then((res) => res.text());
  document.getElementById(containerId).innerHTML = html;

  if (jsPath) {
    const script = document.createElement("script");
    script.src = jsPath;
    script.defer = true;
    document.body.appendChild(script);
  }
}


loadComponent(
  "navbar-container",
  "./components/navbar/navbar.html",
  "./components/navbar/navbar.css",
  "./components/navbar/navbar.js"
);

loadComponent(
  "home-container",
  "./components/home/home.html",
  "./components/home/home.css"
);

loadComponent(
  "products-container",
  "./components/products/products.html",
  "./components/products/products.css",
  "./components/products/products.js"
);
