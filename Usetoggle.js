import { useState } from 'react';

function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = () => setValue(v =>!v);
  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);

  return [value, { toggle, setTrue, setFalse }];
}

export default useToggle;

// USAGE
function Modal() {
  const [isOpen, { toggle, setFalse }] = useToggle();

  return (
    <>
      <button onClick={toggle}>Open Modal</button>

      {isOpen && (
        <div className="modal">
          <p>Modal Content</p>
          <button onClick={setFalse}>Close</button>
        </div>
      )}
    </>
  );
}
