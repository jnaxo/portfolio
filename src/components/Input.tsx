import type { ChangeEventHandler, FocusEventHandler, KeyboardEventHandler } from 'react';

import { useState } from 'react';

type InputProps = {
  onCommand: Function;
};

const Input = ({ onCommand }: InputProps) => {
  const [command, setCommand] = useState('');

  const handleInputBlur: FocusEventHandler<HTMLInputElement> = event => {
    event.preventDefault();
    const target = event.currentTarget;
    setTimeout(() => target.focus(), 10);
  };

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = event => {
    setCommand(event.target?.value);
  };

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = event => {
    if (event.key === 'Enter') {
      onCommand(command);
      setCommand('');
    }
  };

  return (
    <div className="flex">
      <span className="mr-2 text-custom-primary">guest@zeek.com:~$</span>
      <input
        autoFocus
        className="block w-full focus:outline-none"
        onBlur={handleInputBlur}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        type="text"
        value={command}
      />
    </div>
  );
};

export default Input;
