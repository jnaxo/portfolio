import type { ChangeEventHandler, FocusEventHandler, KeyboardEventHandler } from 'react';

import { useState } from 'react';

type InputProps = {
  history: string[];
  onCommand: Function;
};

const Input = ({ history, onCommand }: InputProps) => {
  const [command, setCommand] = useState('');
  const [historyCursor, setHistoryCursor] = useState<number>(0);

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

    if (history?.length && command === '' || historyCursor > 0) {
      if (event.key === 'ArrowUp' && historyCursor < history.length - 1) {
        setCommand('');
        setTimeout(() => {
          setCommand(history[historyCursor + 1]);
          setHistoryCursor(historyCursor + 1);
        }, 100);
      } else if (event.key === 'ArrowDown' && historyCursor > 0) {
        setCommand('');
        setTimeout(() => {
          setCommand(history[historyCursor - 1]);
          setHistoryCursor(historyCursor - 1);
        }, 100);
      } else if (event.key !== 'ArrowUp') {
        setHistoryCursor(0);
      }
    }
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      event.preventDefault();
      return false;
    }
  };

  return (
    <div>
      <span className="mr-2 text-custom-primary">guest@zeek.com:~$</span>
      {command}
      <div className="cursor" />
      <input
        autoFocus
        className="w-0"
        onBlur={handleInputBlur}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        style={{ position: 'absolute', left: '-1000px' }}
        type="text"
        value={command}
      />
    </div>
  );
};

export default Input;
