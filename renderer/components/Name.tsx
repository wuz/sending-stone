import { useEffect, useRef, useState } from "react";

const Name = ({ names }) => {
  const [currentName, setCurrentName] = useState(names[0]);
  const nameRef = useRef();
  const nextName = () => {
    const cur = names.indexOf(currentName);
    nameRef.current.animate(
      {
        opacity: [1, 0]
      },
      500
    );
    if (cur === names.length - 1) {
      setCurrentName(names[0]);
    } else {
      setCurrentName(names[cur + 1]);
    }
    nameRef.current.animate(
      {
        opacity: [0, 1]
      },
      500
    );
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextName();
    }, 5000);
    return () => clearTimeout(interval);
  });
  return (
    <div className="characterName" ref={nameRef} style={{ opacity: 1 }}>
      {currentName}
    </div>
  );
};

export default Name;
