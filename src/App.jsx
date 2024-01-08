import { useCallback, useEffect, useRef, useState } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const inputRef = useRef(null);

  const generatePassword = useCallback(() => {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let pass = "";
    if (numbersAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*";

    for (let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }
    setPassword(pass);
  }, [length, numbersAllowed, charAllowed]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  function handleCopy() {
    window.navigator.clipboard.writeText(password);
    inputRef.current.select();
  }

  return (
    <div className="mx-auto max-w-lg p-6 bg-gray-100 shadow-md rounded-md">
      <h1 className="text-3xl font-bold mb-4">React Password Generator</h1>
      <input
        type="text"
        value={password}
        placeholder="Password"
        readOnly
        className="w-full px-3 py-2 mb-4 rounded-md border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
        ref={inputRef}
      />
      <button
        onClick={handleCopy}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500"
      >
        Copy
      </button>
      <div className="mt-6">
        <input
          type="range"
          max={30}
          min={6}
          value={length}
          onChange={(e) => {
            setLength(e.target.value);
          }}
          className="w-full mb-2"
        />
        <label className="block text-sm text-gray-600" htmlFor="length">
          {length}
        </label>
      </div>
      <div className="mt-4">
        <input
          type="checkbox"
          defaultChecked={charAllowed}
          onChange={() => setCharAllowed((prev) => !prev)}
          className="mr-2"
        />
        <label className="text-sm text-gray-600" htmlFor="charAllowed">
          Char Allowed
        </label>
        <input
          type="checkbox"
          defaultChecked={numbersAllowed}
          onChange={() => setNumbersAllowed((prev) => !prev)}
          className="ml-4 mr-2"
        />
        <label className="text-sm text-gray-600" htmlFor="numbersAllowed">
          Numbers Allowed
        </label>
      </div>
    </div>
  );
}

export default App;
