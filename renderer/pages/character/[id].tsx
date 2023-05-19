import { useRouter } from "next/router";
import CharacterRenderer, {
  CharacterData,
} from "../../components/CharacterRenderer";
import useElectronStore from "../hooks/useElectronStore";

export default () => {
  const router = useRouter();
  const { id } = router.query;

  const characterStore = useElectronStore({ name: "characterStore" });

  const character = characterStore.get(id) as CharacterData;

  if (!character) return <>Loading...</>;

  return (
    <div className="card-container">
      <CharacterRenderer
        data={character}
        player="Conlin"
        handle="hasbeenwizard"
      />
    </div>
  );
};
