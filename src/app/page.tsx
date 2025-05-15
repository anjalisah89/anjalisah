import { ThemeSwitcher } from '@/components/ThemeSwitcher';

export default function HomePage() {
  return (
    <div>
      <header>
        <h1>My App</h1>
        <ThemeSwitcher />
      </header>

      {/* Sidebar navigation */}
      <div className="sidebar">
        <p>Sidebar</p>
        <a href="#">Navigation Link 1</a>
        <a href="#">Navigation Link 2</a>
        <a href="#">Another Link</a>
      </div>

      {/* Main content area */}
      <main className="main-content">
        <h2>Welcome to the App!</h2>
        <p>This page demonstrates the dark and light theme switching.</p>

        <h3>Buttons Showcase</h3>
        {/* Button group using a CSS class for layout */}
        <div className="button-group">
          <button className="primary">Primary Button</button>
          <button className="secondary">Secondary Button</button>
          <button className="danger">Danger Button</button>
          <button className="outline">Outline Button</button>
        </div>
        {/* Disabled button group using a CSS class for layout */}
        <div className="button-group">
          <button className="primary" disabled>Primary Disabled</button>
          <button className="secondary" disabled>Secondary Disabled</button>
          <button className="danger" disabled>Danger Disabled</button>
          <button className="outline" disabled>Outline Disabled</button>
        </div>

        <h3>Form Elements</h3>
        {/* Form elements group using a CSS class for layout */}
        <div className="form-elements">
          <input type="text" placeholder="Enter your name" />
          <textarea placeholder="Your message..."></textarea>
        </div>

        <h3>Code Block Example</h3>
        {/* Preformatted text block for code */}
        <pre>
          <code>
            {`function greet(name) {
      console.log(\`Hello, \${name}!\`);
    }`}
          </code>
        </pre>

        {/* Example of text with an icon and a link */}
        <p>
          <span className="icon">⭐</span>
          This is some text with an icon and a <a href="#">link</a>.
        </p>
      </main>
    </div>
  );
}
