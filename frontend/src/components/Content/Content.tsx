import React from 'react';
import "./Content.css";

function Content({ children }: { children: React.ReactNode }) {
  return (
    <div className="content">
      <main className="main">
        {children}
      </main>
    </div>
  )
}

export default Content
