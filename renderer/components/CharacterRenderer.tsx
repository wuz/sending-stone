import { useState, useEffect } from "react";

import Stat from "./Stat";
import Name from "./Name";

export type CharacterData = {
  name: string;
  avatar: string;
  totalLevels: number;
  attributes: {
    hp: {
      value: number;
    };
    overrideAC: {
      flat: number;
    };
  };
  abilities: {
    str: {
      value: number;
    };
    dex: {
      value: number;
    };
    con: {
      value: number;
    };
    int: {
      value: number;
    };
    wis: {
      value: number;
    };
    cha: {
      value: number;
    };
  };
};

type CharacterRendererProps = {
  data: CharacterData;
  player: string;
  handle: string;
  isVisible?: boolean;
};

const CharacterRenderer: React.FC<CharacterRendererProps> = ({
  data,
  player,
  handle,
  isVisible = true,
}) => {
  if (!data || !player || !handle) return <>Loading</>;
  const names = [data.name, player, `@${handle}`];
  return (
    <>
      <input type="text" value={window.location.href} />
      <div style={{ display: isVisible ? "block" : "none" }} className="card">
        <img className="avatar" src={data.avatar} />
        <Name names={names} />
        <div className="statBlock attributes">
          <Stat name="Level" value={data.totalLevels} />
          <Stat name="HP" value={data.attributes?.hp?.value} />
          <Stat name="AC" value={data.attributes?.overrideAC.flat} />
        </div>
        <div className="statBlock abilities">
          {Object.entries(data.abilities ?? {}).map(([name, info]) => (
            <Stat name={name} value={info.value} key={name} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CharacterRenderer;
