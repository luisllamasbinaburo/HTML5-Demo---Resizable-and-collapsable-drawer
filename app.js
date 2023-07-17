function InitDrawer() {
    const menuToggle = document.getElementById('menu_toggle');
    const sidebar = document.querySelector("#sidebar");
    const sidebarResizer = document.querySelector("#sidebar_resizer");

    sidebarResizer.addEventListener("mousedown", (event) => {
        event.preventDefault();

        document.addEventListener("mousemove", resize, false);

        const root_theme = document.querySelector(':root');
        root_theme.style.setProperty('--sidebar-transition', "all 0s linear");

        document.addEventListener("mouseup", () => {
            document.removeEventListener("mousemove", resize, false);
            root_theme.style.setProperty('--sidebar-transition', "all 0.2s linear");
        }, false);
    });

    function resize(e) {
        const size = `${e.x}px`;
        const root_theme = document.querySelector(':root');
        root_theme.style.setProperty('--sidebar-width', size);
    }

    menuToggle.addEventListener('change', () => {
        if (menuToggle.checked) {
            sidebar.classList.add('show');
            sidebar.classList.remove('hide');
            sidebarResizer.classList.add('show');
            sidebarResizer.classList.remove('hide');
        } else {
            sidebar.classList.add('hide');
            sidebar.classList.remove('show');
            sidebarResizer.classList.add('hide');
            sidebarResizer.classList.remove('show');
        }
    });
}

InitDrawer();