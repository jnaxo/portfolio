import { useEffect, useRef, useState } from 'react';
import { Input } from './';

const Terminal = () => {
  const outputRef = useRef<HTMLInputElement>(null);
  const [output, setOutput] = useState('Hello!');

  const handleCommand = (value: string) => {
    // TODO: try to execute command
    setOutput(prev => `${prev}<br />${value}`);
  };

  const executeScroll = () => outputRef.current?.scrollIntoView();

  useEffect(executeScroll, [output]);

  return (
    <div className="overflow-y-auto max-h-full">
      <div dangerouslySetInnerHTML={{ __html: output }} />
      <div ref={outputRef}>
        <Input onCommand={handleCommand} />
      </div>
    </div>
  );
};

export default Terminal;
