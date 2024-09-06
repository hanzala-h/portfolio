import React from "react";

const App = () => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/documents/resume.pdf";
    link.download = "Hanzalahs_Resume.pdf";
    link.click();
  };

  return (
    <>
      <h1>Hanzalah's Portfolio</h1>
      <p>
        Welcome to{" "}
        <a href="mailto:sayhi.hanzla@gmail.com">
          <strong>Hanzalah's</strong>
        </a>{" "}
        portfolio! I am a first-year <strong>Artificial Intelligence</strong>{" "}
        student at Islamia University Bahawalpur. (Not sponsored by my
        university, by the way.)
      </p>

      <h2>About Me</h2>
      <p>
        Hello again! I’m a versatile programmer with many skills, though
        sometimes it feels like too many to focus on just one thing. You could
        say I’m a jack of all trades ⛏️.
      </p>

      <h2>Skills</h2>
      <p>Here are some of the skills I’m confident in:</p>
      <ul>
        <li>
          <strong>HTML:</strong> I consider myself a master, as evidenced by
          this very document!
        </li>
        <li>
          <strong>CSS:</strong> I have a deep understanding of CSS.
        </li>
        <li>
          <strong>JavaScript:</strong> While I’m not an expert, I know quite a
          bit about JavaScript.
        </li>
        <li>
          <strong>TypeScript:</strong> Since I know JavaScript, I also have a
          solid grasp of TypeScript.
        </li>
        <li>
          <strong>Python:</strong> My first programming language, and one I’m
          quite proficient in.
        </li>
        <li>
          <strong>C++:</strong> I learned C++ in my first year at university.
        </li>
        <li>
          <strong>C#:</strong> I have a basic understanding of C#.
        </li>
        <li>
          <strong>PHP:</strong> I have extensive knowledge of PHP, though not
          quite mastery.
        </li>
        <li>
          I’m familiar with several frameworks and libraries in these languages,
          but here are my favorites:
          <ul>
            <li>Laravel (PHP)</li>
            <li>React, Express (JavaScript)</li>
            <li>Tailwind (CSS)</li>
            <li>Django, OpenCV, and more (Python)</li>
          </ul>
        </li>
        <li>
          I also have experience with version control using{" "}
          <strong>Git/GitHub</strong>.
        </li>
      </ul>

      <h2>Projects</h2>
      <ul>
        <li>
          <a href="https://github.com/hanzala-h/phantom" target="_blank">
            <strong>Phantom</strong>
          </a>{" "}
          – a PHP MVC framework built from scratch.{" "}
          <strong>In progress.</strong>
        </li>
        <li>
          <a
            href="https://github.com/hanzala-h/realtime_tracker"
            target="_blank"
          >
            <strong>Realtime Tracker</strong>
          </a>{" "}
          – a real-time tracker built with JavaScript.
        </li>
        <li>
          <a href="https://github.com/hanzala-h/chess-pvp" target="_blank">
            <strong>Chess</strong>
          </a>{" "}
          – a PvP chess game.
        </li>
        <li>
          <a
            href="https://github.com/hanzala-h/express-builder"
            target="_blank"
          >
            <strong>Express Builder</strong>
          </a>{" "}
          – a VS Code extension for building Express.js starter projects.
        </li>
        <li>
          <a href="https://github.com/hanzala-h/code-crafter" target="_blank">
            <strong>Code Crafter</strong>
          </a>{" "}
          – a VS Code extension for creating starter kits for various projects.
          <strong> In progress.</strong>
        </li>
      </ul>

      <h2>Thanks for Visiting!</h2>
      <p>
        Here are some useful links:
        <br />
        <a href="https://github.com/hanzala-h" target="_blank">
          GitHub
        </a>{" "}
        |{" "}
        <a href="https://www.linkedin.com/in/hanzala-h/" target="_blank">
          LinkedIn
        </a>{" "}
        |{" "}
        <a href="https://www.instagram.com/mehanzalahaha/" target="_blank">
          Instagram
        </a>{" "}
        | <button onClick={handleDownloadResume}>Download my resume</button>
      </p>
    </>
  );
};

export default App;
