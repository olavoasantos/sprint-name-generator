import React, { useEffect, useState, useCallback, useRef } from 'react';
import nouns from './nouns';
import adjectives from './adjectives';

const random = (arr) => arr[Math.floor(Math.random()*arr.length)];

export default () => {
  const [state, setState] = useState({ title: '', names: 'Felipe, Geneva, Himanshi, Jamie, Olavo, Thyago, Jordan, Rob, Daniel, Teena, Keith, Jean' });
  const generate = useCallback(() => {
    const noun = random(nouns);
    const adjective = random(adjectives);
    const name = random(state.names.replace(', ', ',').split(','));
    setState({ ...state, title: `${Boolean(name) ? `${name}'s ` : ''}${adjective} ${noun}` });
  }, [state, setState]);

  const setNames = useCallback(() => {
    setState({ ...state, names: input.current.value });
  }, [setState, state, input]);

  const input = useRef();

  useEffect(() => {
    generate();
  }, [])

  return (
    <div>
      <h1>{state.title}</h1>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <textarea style={{ width: '90%', border: '1px #eee solid', padding: 16 }} ref={input} onChange={setNames} value={state.names}></textarea>
        <div style={{ marginRight: '100%', marginTop: 16 }}>
          <button onClick={generate} style={{ padding: '8px 16px' }}>generate</button>
        </div>
      </div>
    </div>
  )
}
