import React from 'react';
import { FaPizzaSlice } from 'react-icons/fa';

export const Header = () => {
  const x = 1;

  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="https://applets.imgix.net/https%3A%2F%2Fassets.ifttt.com%2Fimages%2Fchannels%2F1148373811%2Ficons%2Fmonochrome_large.png%3Fversion%3D0?w=240&h=240&auto=compress&s=b0fd29b4f7230929eaba28566da41fb1" alt="Todoist" />
        </div>
        <div className="settings">
          <ul>
            <li>+</li>
            <li>
              <FaPizzaSlice />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
