/* 
 * Table of Contents (TOC) generator for profgarrett.github.io
 *
 * Scans the page for h2–h6 headings and builds a floating TOC block
 * that is inserted immediately after the first h1 element.
 *
 * Usage: add the following tag to any markdown or HTML page:
 *   <script src="/toc.js"></script>
 */


function loadGtag() {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-FW5XCZZEW1';
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-FW5XCZZEW1');
}
document.addEventListener('DOMContentLoaded', function () {
    loadGtag(); 
    generateTableOfContents();
});

function loadCSS() {
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = '/toc.css';
    link.media = 'all';
    head.appendChild(link);
}

function generateTableOfContents() {
    // Find all sub-headers (h2–h6); h1 is the page title, not a TOC entry
    const headers = document.querySelectorAll('h2, h3, h4, h5, h6');

    if (headers.length === 0) {
        return; // Nothing to build a TOC from
    }

    // --- Build the TOC DOM structure ---

    const tocContainer = document.createElement('div');
    tocContainer.id = 'toc';
    tocContainer.className = 'toc';

    const tocBlock = document.createElement('div');
    tocBlock.className = 'toc-block';
    tocContainer.appendChild(tocBlock);

    const tocTitle = document.createElement('div');
    tocTitle.className = 'toc-title';
    tocTitle.textContent = 'Contents';
    tocBlock.appendChild(tocTitle);

    const tocList = document.createElement('ul');
    tocList.className = 'toc-list';

    headers.forEach(function (header, index) {
        // Ensure the heading has an anchor id
        if (!header.id) {
            // Derive a slug from the heading text; fall back to index
            var slug = header.textContent
                .trim()
                .toLowerCase()
                .replace(/[^\w\s-]/g, '')
                .replace(/\s+/g, '-');
            header.id = slug || 'section-' + index;
        }

        const listItem = document.createElement('li');
        listItem.className = 'toc-item toc-level-' + header.tagName.toLowerCase();

        const link = document.createElement('a');
        link.href = '#' + header.id;
        link.textContent = header.textContent;

        listItem.appendChild(link);
        tocList.appendChild(listItem);
    });

    tocBlock.appendChild(tocList);

    // --- Insert the TOC into the page ---

    const firstH1 = document.querySelector('h1');
    if (firstH1) {
        firstH1.parentNode.insertBefore(tocContainer, firstH1.nextSibling);
    } else {
        // No h1 found – prepend to body
        document.body.insertBefore(tocContainer, document.body.firstChild);
    }

    loadCSS();
}
