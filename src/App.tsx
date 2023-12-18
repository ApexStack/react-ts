import React  from 'react'
import '~/App.css'

const App = () => {

  return (
    <div className="container">
      <header className="header">
        <h1 className="title">Reactive Forge</h1>
        <p className="description">
          Simplifying React bundling for an optimized development experience.
        </p>
      </header>

      <section className="main-content">
        <div className="features">
          <h2 className="feature-title">Key Features</h2>
          <ul className="feature-list">
            <li>Efficient bundling of React apps</li>
            <li>Performance optimization</li>
            <li>Seamless development experience</li>
          </ul>
        </div>

        <div className="additional-content">
          <h2 className="additional-title">Additional Information</h2>
          <p className="additional-description">
            This space can contain more details, FAQs, or any other relevant information about Reactive Forge.
          </p>
        </div>
      </section>
    </div>
  )
}

export default App