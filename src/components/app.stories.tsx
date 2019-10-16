import { storiesOf } from '@storybook/react';
import * as React from 'react';
import "../css/index.css"

storiesOf("Button", module)
  .add("with text", () => (
    <div className="container flex h-full">
        <div className="flex-grow flex flex-col">
          <div className="flex-auto bg-gray-200 p-2 border-gray-200 border-4 rounded m-2">Hello, how are you doing?</div>
          <div className="flex-auto bg-green-200 p-2 border-green-200 border-4 rounded m-2">Fine, thanks for asking.</div>
          <div className="flex-auto bg-green-200 p-2 border-green-200 border-4 rounded m-2">How are you doing?</div>
          <div className="flex-auto bg-gray-200 p-2 border-gray-200 border-4 rounded m-2">Fine asswell.</div>
        </div>
        <div className="w-64 flex-none">Users</div>
    </div>
  ));
