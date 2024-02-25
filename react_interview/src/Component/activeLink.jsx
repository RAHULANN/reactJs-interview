import React, { useState, useEffect } from "react";
import "./active.css"; // Assuming you have a CSS file for styling

function ActiveLink() {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id");
        }
      });
      setActiveLink(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <a
              href="#section1"
              className={activeLink === "section1" ? "active" : ""}
            >
              Section 1
            </a>
          </li>
          <li>
            <a
              href="#section2"
              className={activeLink === "section2" ? "active" : ""}
            >
              Section 2
            </a>
          </li>
          <li>
            <a
              href="#section3"
              className={activeLink === "section3" ? "active" : ""}
            >
              Section 3
            </a>
          </li>
        </ul>
      </nav>

      <section id="section1">
        <h2>Section 1</h2>
        <p>
          n this article, we will see how to create links in their HTML page
          that are linked to the section of the same page. Creating internal
          links in HTML improves user experience by making navigation easier for
          website visitors. By using the id attribute and the a(anchor) tag, you
          can easily link to specific sections of a webpage, allowing quick
          access to needed information without scrolling through the entire
          page.n this article, we will see how to create links in their HTML
          page that are linked to the section of the same page. Creating
          internal links in HTML improves user experience by making navigation
          easier for website visitors. By using the id attribute and the
          a(anchor) tag, you can easily link to specific sections of a webpage,
          allowing quick access to needed information without scrolling through
          the entire page.n this article, we will see how to create links in
          their HTML page that are linked to the section of the same page.
          Creating internal links in HTML improves user experience by making
          navigation easier for website visitors. By using the id attribute and
          the a(anchor) tag, you can easily link to specific sections of a
          webpage, allowing quick access to needed information without scrolling
          through the entire page.n this article, we will see how to create
          links in their HTML page that are linked to the section of the same
          page. Creating internal links in HTML improves user experience by
          making navigation easier for website visitors. By using the id
          attribute and the a(anchor) tag, you can easily link to specific
          sections of a webpage, allowing quick access to needed information
          without scrolling through the entire page.n this article, we will see
          how to create links in their HTML page that are linked to the section
          of the same page. Creating internal links in HTML improves user
          experience by making navigation easier for website visitors. By using
          the id attribute and the a(anchor) tag, you can easily link to
          specific sections of a webpage, allowing quick access to needed
          information without scrolling through the entire page.n this article,
          we will see how to create links in their HTML page that are linked to
          the section of the same page. Creating internal links in HTML improves
          user experience by making navigation easier for website visitors. By
          using the id attribute and the a(anchor) tag, you can easily link to
          specific sections of a webpage, allowing quick access to needed
          information without scrolling through the entire page.n this article,
          we will see how to create links in their HTML page that are linked to
          the section of the same page. Creating internal links in HTML improves
          user experience by making navigation easier for website visitors. By
          using the id attribute and the a(anchor) tag, you can easily link to
          specific sections of a webpage, allowing quick access to needed
          information without scrolling through the entire page. n this article,
          we will see how to create links in their HTML page that are linked to
          the section of the same page. Creating internal links in HTML improves
          user experience by making navigation easier for website visitors. By
          using the id attribute and the a(anchor) tag, you can easily link to
          specific sections of a webpage, allowing quick access to needed
          information without scrolling through the entire page.n this article,
          we will see how to create links in their HTML page that are linked to
          the section of the same page. Creating internal links in HTML improves
          user experience by making navigation easier for website visitors. By
          using the id attribute and the a(anchor) tag, you can easily link to
          specific sections of a webpage, allowing quick access to needed
          information without scrolling through the entire page.n this article,
          we will see how to create links in their HTML page that are linked to
          the section of the same page. Creating internal links in HTML improves
          user experience by making navigation easier for website visitors. By
          using the id attribute and the a(anchor) tag, you can easily link to
          specific sections of a webpage, allowing quick access to needed
          information without scrolling through the entire page.n this article,
          we will see how to create links in their HTML page that are linked to
          the section of the same page. Creating internal links in HTML improves
          user experience by making navigation easier for website visitors. By
          using the id attribute and the a(anchor) tag, you can easily link to
          specific sections of a webpage, allowing quick access to needed
          information without scrolling through the entire page.n this article,
          we will see how to create links in their HTML page that are linked to
          the section of the same page. Creating internal links in HTML improves
          user experience by making navigation easier for website visitors. By
          using the id attribute and the a(anchor) tag, you can easily link to
          specific sections of a webpage, allowing quick access to needed
          information without scrolling through the entire page.n this article,
          we will see how to create links in their HTML page that are linked to
          the section of the same page. Creating internal links in HTML improves
          user experience by making navigation easier for website visitors. By
          using the id attribute and the a(anchor) tag, you can easily link to
          specific sections of a webpage, allowing quick access to needed
          information without scrolling through the entire page.n this article,
          we will see how to create links in their HTML page that are linked to
          the section of the same page. Creating internal links in HTML improves
          user experience by making navigation easier for website visitors. By
          using the id attribute and the a(anchor) tag, you can easily link to
          specific sections of a webpage, allowing quick access to needed
          information without scrolling through the entire page.n this article,
          we will see how to create links in their HTML page that are linked to
          the section of the same page. Creating internal links in HTML improves
          user experience by making navigation easier for website visitors. By
          using the id attribute and the a(anchor) tag, you can easily link to
          specific sections of a webpage, allowing quick access to needed
          information without scrolling through the entire page.n this article,
          we will see how to create links in their HTML page that are linked to
          the section of the same page. Creating internal links in HTML improves
          user experience by making navigation easier for website visitors. By
          using the id attribute and the a(anchor) tag, you can easily link to
          specific sections of a webpage, allowing quick access to needed
          information without scrolling through the entire page.n this article,
          we will see how to create links in their HTML page that are linked to
          the section of the same page. Creating internal links in HTML improves
          user experience by making navigation easier for website visitors. By
          using the id attribute and the a(anchor) tag, you can easily link to
          specific sections of a webpage, allowing quick access to needed
          information without scrolling through the entire page.n this article,
          we will see how to create links in their HTML page that are linked to
          the section of the same page. Creating internal links in HTML improves
          user experience by making navigation easier for website visitors. By
          using the id attribute and the a(anchor) tag, you can easily link to
          specific sections of a webpage, allowing quick access to needed
          information without scrolling through the entire page.
        </p>
        <p>This is the content of section 1.</p>
      </section>

      <section id="section2">
        <h2>Section 2</h2>
        <p>
          n this article, we will see how to create links in their HTML page
          that are linked to the section of the same page. Creating internal
          links in HTML improves user experience by making navigation easier for
          website visitors. By using the id attribute and the a(anchor) tag, you
          can easily link to specific sections of a webpage, allowing quick
          access to needed information without scrolling through the entire
          page.n this article, we will see how to create links in their HTML
          page that are linked to the section of the same page. Creating
          internal links in HTML improves user experience by making navigation
          easier for website visitors. By using the id attribute and the
          a(anchor) tag, you can easily link to specific sections of a webpage,
          allowing quick access to needed information without scrolling through
          the entire page.n this article, we will see how to create links in
          their HTML page that are linked to the section of the same page.
          Creating internal links in HTML improves user experience by making
          navigation easier for website visitors. By using the id attribute and
          the a(anchor) tag, you can easily link to specific sections of a
          webpage, allowing quick access to needed information without scrolling
          through the entire page.n this article, we will see how to create
          links in their HTML page that are linked to the section of the same
          page. Creating internal links in HTML improves user experience by
          making navigation easier for website visitors. By using the id
          attribute and the a(anchor) tag, you can easily link to specific
          sections of a webpage, allowing quick access to needed information
          without scrolling through the entire page.n this article, we will see
          how to create links in their HTML page that are linked to the section
          of the same page. Creating internal links in HTML improves user
          experience by making navigation easier for website visitors. By using
          the id attribute and the a(anchor) tag, you can easily link to
          specific sections of a webpage, allowing quick access to needed
          information without scrolling through the entire page.n this article,
          we will see how to create links in their HTML page that are linked to
          the section of the same page. Creating internal links in HTML improves
          user experience by making navigation easier for website visitors. By
          using the id attribute and the a(anchor) tag, you can easily link to
          specific sections of a webpage, allowing quick access to needed
          information without scrolling through the entire page.n this article,
          we will see how to create links in their HTML page that are linked to
          the section of the same page. Creating internal links in HTML improves
          user experience by making navigation easier for website visitors. By
          using the id attribute and the a(anchor) tag, you can easily link to
          specific sections of a webpage, allowing quick access to needed
          information without scrolling through the entire page. n this article,
          we will see how to create links in their HTML page that are linked to
          the section of the same page. Creating internal links in HTML improves
          user experience by making navigation easier for website visitors. By
          using the id attribute and the a(anchor) tag, you can easily link to
          specific sections of a webpage, allowing quick access to needed
          information without scrolling through the entire page.n this article,
          we will see how to create links in their HTML page that are linked to
          the section of the same page. Creating internal links in HTML improves
          user experience by making navigation easier for website visitors. By
          using the id attribute and the a(anchor) tag, you can easily link to
          specific sections of a webpage, allowing quick access to needed
          information without scrolling through the entire page.n this article,
          we will see how to create links in their HTML page that are linked to
          the section of the same page. Creating internal links in HTML improves
          user experience by making navigation easier for website visitors. By
          using the id attribute and the a(anchor) tag, you can easily link to
          specific sections of a webpage, allowing quick access to needed
          information without scrolling through the entire page.n this article,
          we will see how to create links in their HTML page that are linked to
          the section of the same page. Creating internal links in HTML improves
          user experience by making navigation easier for website visitors. By
          using the id attribute and the a(anchor) tag, you can easily link to
          specific sections of a webpage, allowing quick access to needed
          information without scrolling through the entire page.n this article,
          we will see how to create links in their HTML page that are linked to
          the section of the same page. Creating internal links in HTML improves
          user experience by making navigation easier for website visitors. By
          using the id attribute and the a(anchor) tag, you can easily link to
          specific sections of a webpage, allowing quick access to needed
          information without scrolling through the entire page.n this article,
          we will see how to create links in their HTML page that are linked to
          the section of the same page. Creating internal links in HTML improves
          user experience by making navigation easier for website visitors. By
          using the id attribute and the a(anchor) tag, you can easily link to
          specific sections of a webpage, allowing quick access to needed
          information without scrolling through the entire page.n this article,
          we will see how to create links in their HTML page that are linked to
          the section of the same page. Creating internal links in HTML improves
          user experience by making navigation easier for website visitors. By
          using the id attribute and the a(anchor) tag, you can easily link to
          specific sections of a webpage, allowing quick access to needed
          information without scrolling through the entire page.n this article,
          we will see how to create links in their HTML page that are linked to
          the section of the same page. Creating internal links in HTML improves
          user experience by making navigation easier for website visitors. By
          using the id attribute and the a(anchor) tag, you can easily link to
          specific sections of a webpage, allowing quick access to needed
          information without scrolling through the entire page.n this article,
          we will see how to create links in their HTML page that are linked to
          the section of the same page. Creating internal links in HTML improves
          user experience by making navigation easier for website visitors. By
          using the id attribute and the a(anchor) tag, you can easily link to
          specific sections of a webpage, allowing quick access to needed
          information without scrolling through the entire page.n this article,
          we will see how to create links in their HTML page that are linked to
          the section of the same page. Creating internal links in HTML improves
          user experience by making navigation easier for website visitors. By
          using the id attribute and the a(anchor) tag, you can easily link to
          specific sections of a webpage, allowing quick access to needed
          information without scrolling through the entire page.n this article,
          we will see how to create links in their HTML page that are linked to
          the section of the same page. Creating internal links in HTML improves
          user experience by making navigation easier for website visitors. By
          using the id attribute and the a(anchor) tag, you can easily link to
          specific sections of a webpage, allowing quick access to needed
          information without scrolling through the entire page.
        </p>
        <p>This is the content of section 2.</p>
      </section>

      <section id="section3">
        <h2>Section 3</h2>
        <p>This is the content of section 3.</p>
      </section>
    </div>
  );
}

export default ActiveLink;
