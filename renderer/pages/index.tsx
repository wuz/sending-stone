import { useEffect, useState } from "react";
import Link from "next/link";
import electron from "electron";

import CharacterRenderer from "../components/CharacterRenderer";
import useElectronStore from "./hooks/useElectronStore";

const ipcRenderer = electron.ipcRenderer || false;

// ipcRenderer.on("focus", () => {
//   // Change UI state to focused
// });
//
// ipcRenderer.on("blur", () => {
//   // Change UI state to unfocused
// });

const CharacterList = () => {
  const characterStore = useElectronStore({ name: "characterStore" });
  return (
    <ul>
      {Object.entries(characterStore.store).map(([characterId, data]) => {
        return (
          <li>
            <Link href={`character/${characterId}`}>{data.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

const TextInput = ({ value, onChange, label, ...props }) => {
  const handleChange = ({ target: { value: inputValue } }) => {
    onChange(inputValue);
  };
  return (
    <label>
      {label}
      <input type="text" value={value} onChange={handleChange} {...props} />
    </label>
  );
};

const getCharacterId = (url: string): string => {
  let matches;
  const CONFIGS = [
    () => {
      const PATTERN = /.*dndbeyond\.com\/profile\/[\w-_]+\/characters\/(\d+)/;
      matches = url.match(PATTERN);
      if (matches) {
        return matches[1];
      }
      return null;
    },
    () => {
      const PATTERN = /ddb.ac\/characters\/(\d+)\/[\w-_]+/;
      matches = url.match(PATTERN);
      if (matches) {
        return matches[1];
      }
      return null;
    },
    () => {
      const PATTERN = /dndbeyond.com\/characters\/(\d+)/;
      matches = url.match(PATTERN);
      if (matches) {
        return matches[1];
      }
      return null;
    },
    () => {
      const PATTERN =
        /character-service.dndbeyond.com\/character\/v\d+\/character\/(\d+)/;
      matches = url.match(PATTERN);
      if (matches) {
        return matches[1];
      }
      return null;
    },
  ];

  return CONFIGS.map((fn) => fn(url)).reduce(
    (prev, cur) => (!prev && cur ? cur : prev),
    null
  );
};

const NewCharacterCreator = () => {
  const characterStore = useElectronStore({ name: "characterStore" });
  const [characterURL, setCharacterURL] = useState("");
  const [loading, setLoading] = useState(false);
  const createCharacter = (e) => {
    e.preventDefault();
    setLoading(true);
    const characterId = getCharacterId(characterURL);
    fetch(`/api/character?id=${characterId}`)
      .then((res) => res.json())
      .then(({ character }) => {
        characterStore.set(characterId, character);
        setLoading(false);
      });
  };
  return (
    <section>
      {loading && <>Getting character data...</>}
      {!loading && (
        <form onSubmit={createCharacter}>
          <TextInput
            value={characterURL}
            onChange={setCharacterURL}
            label="D&DBeyond URL..."
          />
          <button>Create</button>
        </form>
      )}
    </section>
  );
};

export default function IndexPage() {
  const characterStore = useElectronStore({ name: "characterStore" });
  return (
    <section className="introPage">
      <NewCharacterCreator />
      <CharacterList />
    </section>
  );

  // const router = useRouter();
  // const [currentPage, setCurrentPage] = useState(0);
  // const {
  //   ids: idsString,
  //   players: playersString,
  //   handles: handlesString,
  // } = router.query;
  // const ids = idsString?.split(",");
  // const players = playersString?.split(",");
  // const handles = handlesString?.split(",");
  //
  // useEffect(() => {
  //   if (!ids) return;
  //   const interval = setInterval(() => {
  //     if (currentPage === ids.length - 1) {
  //       setCurrentPage(0);
  //     } else {
  //       setCurrentPage(currentPage + 1);
  //     }
  //   }, 120000);
  //   return () => clearInterval(interval);
  // });
  // return (
  //   <>
  //     <div className="sidebar">
  //       <label>
  //         D&D Beyond Link
  //         <input type="text" />
  //       </label>
  //       <label>
  //         Player Name
  //         <input type="text" />
  //       </label>
  //       <label>
  //         Player Handle
  //         <input type="text" />
  //       </label>
  //     </div>
  //     <div className="card-container">
  //       {ids &&
  //         players &&
  //         handles &&
  //         ids.map((id, i) => {
  //           const player = players[i];
  //           const handle = handles[i];
  //           return (
  //             <CharacterSection
  //               key={id}
  //               isVisible={currentPage === i}
  //               id={id}
  //               player={player}
  //               handle={handle}
  //             />
  //           );
  //         })}
  //     </div>
  //   </>
  // );
}
