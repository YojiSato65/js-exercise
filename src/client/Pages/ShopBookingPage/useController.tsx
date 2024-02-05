import { useMenu, useShop } from "../../App";
import { PartySizeList } from "../../Components/PartySizeList";
import { useMutableState } from "../../utils/useMutableState";
import { PartySize } from "./PartySize";

type Controller = {
  title: string;
  isCTAOpen: boolean;
  openCTA(): void;
  renderModal(): JSX.Element;
};

export function useController(): Controller {
  const shop = useShop();
  const menu = useMenu();
  const [state, setState] = useMutableState({
    isCTAOpen: false,
    partySize: new PartySize(shop.config, menu.items),
  });

  const handleClose = () => {
    setState((d) => {
      d.isCTAOpen = false;
    });
  }
  
  const api: Controller = {
    ...state,
    title: `welcome to ${shop.config.slug}`,
    openCTA() {
      setState((d) => {
        d.isCTAOpen = true;
      });
    },
    renderModal() {
      return (
        <dialog open={state.isCTAOpen} data-testid="Party Size Modal">
          <PartySizeList partySize={state.partySize} />

          <button onClick={handleClose}>close</button>
        </dialog>
      );
    },
  };

  return api;
}
