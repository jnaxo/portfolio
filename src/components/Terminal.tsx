import { useEffect, useRef, useState } from 'react';

import { Input } from './';
import { runCommand } from '../utils';

const Terminal = () => {
  const firstRender = useRef(true);
  const outputRef = useRef<HTMLInputElement>(null);
  const screenRef = useRef<HTMLInputElement>(null);
  const [history, setHistory] = useState<string[]>([]);
  const [output, setOutput] = useState('');

  const handleCommand = (input: string) => {
    if (input !== '') {
      setHistory(prev => [...prev, input]);
    }
    const statement = input === 'history' ? `${input} ${history.join('<>')}` : input;
    setOutput(
      prev => `
      ${prev}
      <div class="mt-1"><span class="text-lime-500">❯</span> ${input}</div>
      <div class="mb-1">${runCommand(statement, setOutput)}</div>
    `
    );
  };

  const executeScroll = () => outputRef.current?.scrollIntoView();

  useEffect(() => {
    if (firstRender.current) {
      setOutput(`<div class="my-2">${runCommand('welcome')}</div>`);
    }
    firstRender.current = false;
  }, []);

  useEffect(executeScroll, [output]);

  return (
    <div
      className="overflow-y-auto h-full max-h-full leading-relaxed text-gray-200"
      onClick={() => {
        const selection = window.getSelection();
        if (selection?.type !== 'Range') {
          screenRef.current?.focus();
        }
      }}
    >
      <div className="mb-2" dangerouslySetInnerHTML={{ __html: output }} />
      <div ref={outputRef}>
        <Input history={[...history, ''].reverse()} ref={screenRef} onCommand={handleCommand} />
      </div>
    </div>
  );
};

export default Terminal;
