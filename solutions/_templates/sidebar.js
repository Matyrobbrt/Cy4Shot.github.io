/**
 * Call this function on the body onLoad event. This function will add the sidebar to the document. (There has to be a div with the id of 'sidebar' in the document)
 * @param {Document} document
 * @param {String} currentPage the id of the current page chapter button
 */
function loadSidebar(document, currentPage) {
  document.getElementById(
    "sidebar"
  ).innerHTML = `<script type="text/javascript">
    var html = document.querySelector('html');
    var sidebar = 'hidden';
    if (document.body.clientWidth >= 1080) {
        try {
            sidebar = localStorage.getItem('mdbook-sidebar');
        } catch (e) {}
        sidebar = sidebar || 'visible';
    }
    html.classList.remove('sidebar-visible');
    html.classList.add("sidebar-" + sidebar);
</script>

<nav id="sidebar-nav" class="sidebar" aria-label="Table of contents">
    <div class="sidebar-scrollbox">
        <ol class="chapter">
            <li class="chapter-item expanded affix "><a href="solutions.html" id="solutions-chapter">Solutions</a></li>
            <li class="chapter-item expanded "><a href="javaversion.html" id="javaversion-chapter"><strong aria-hidden="true">1.</strong>
                    Wrong Java Version</a></li>
            <li class="chapter-item expanded "><a href="mappings.html" id="mappings-chapter"><strong aria-hidden="true">2.</strong>
                    Mappings</a></li>
            <li class="chapter-item expanded "><a href="export.html" id="export-chapter"><strong aria-hidden="true">3.</strong>
                    Exporting</a></li>
            <li class="chapter-item expanded "><a href="foods.html" id="foods-chapter"><strong aria-hidden="true">4.</strong> Food
                    Item</a></li>
            <li class="chapter-item expanded "><a href="fuels.html" id="fuels-chapter"><strong aria-hidden="true">5.</strong>
                    Fuel Item</a></li>
            <li class="chapter-item expanded "><a href="blit.html" id="blit-chapter"><strong aria-hidden="true">6.</strong> Blit
                    Method</a></li>
            <li class="chapter-item expanded "><a href="17-tooltags.html" id="17-tooltags-chapter"><strong
                        aria-hidden="true">7.</strong>
                    1.17 ToolTags</a></li>
            <li class="chapter-item expanded "><a href="mcmeta-animations.html" id="mcmeta-animations-chapter"><strong
                        aria-hidden="true">8.</strong>
                    MCMeta Animations</a></li>
            <li class="chapter-item expanded "><a href="effects.html" id="effects-chapter"><strong
                    aria-hidden="true">9.</strong>
                Effects</a></li>
        </ol>
    </div>

    <div id="sidebar-resize-handle" class="sidebar-resize-handle"></div>
</nav>`;
  document.getElementById(currentPage).classList.add("active");
}
