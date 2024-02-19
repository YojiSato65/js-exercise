import { useEffect, useState } from "react";
import { PartySize } from "../Pages/ShopBookingPage/PartySize";

type Props = {
  partySize: PartySize;
};

export const PartySizeList = ({ partySize }: Props): JSX.Element => {
  const [counters, setCounters] = useState({
    adults: 1,
    children: 0,
    babies: 0,
    seniors: 0,
    min: 1,
    max: 10,
  });

  const { showBaby, showChild, showSenior } = partySize.shop;

  const totalPeople =
    counters.adults + counters.seniors + counters.children + counters.babies;

  useEffect(() => {
    let minPartySize = partySize.shop.minNumPeople;
    let maxPartySize = partySize.shop.maxNumPeople;

    partySize.menu.forEach((item) => {
      if (item.isGroupOrder) {
        minPartySize = Math.max(minPartySize, item.minOrderQty);
        maxPartySize = Math.min(maxPartySize, item.maxOrderQty);
      }
    });

    maxPartySize = Math.max(maxPartySize, minPartySize); // max cannot be less than min

    setCounters((prevCounters) => ({
      ...prevCounters,
      adults: minPartySize,
      min: minPartySize,
      max: maxPartySize,
    }));
  }, [partySize]);

  const increment = (counterKey: string) => {
    if (totalPeople < counters.max) {
      setCounters((prevCounters) => ({
        ...prevCounters,
        [counterKey]: prevCounters[counterKey] + 1,
      }));
    }
  };

  const decrement = (counterKey: string) => {
    if (totalPeople > counters.min) {
      setCounters((prevCounters) => ({
        ...prevCounters,
        [counterKey]: prevCounters[counterKey] - 1,
      }));
    }
  };

  return (
    <div
      data-testid="Party Size List"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1em",
        marginBottom: "1em",
      }}
    >
      <div data-testid="Party Size List Adults Counter">
        Adults
        <button
          data-testid="Counter Subtract Button"
          disabled={counters.adults <= 0 || totalPeople <= counters.min}
          onClick={() => {
            decrement("adults");
          }}
        >
          -
        </button>
        <span>{counters.adults}</span>
        <button
          data-testid="Counter Add Button"
          onClick={() => {
            increment("adults");
          }}
          disabled={totalPeople >= counters.max}
        >
          +
        </button>
      </div>
      {showChild && (
        <div data-testid="Party Size List Children Counter">
          Children
          <button
            data-testid="Counter Subtract Button"
            onClick={() => {
              decrement("children");
            }}
            disabled={counters.children <= 0 || totalPeople <= counters.min}
          >
            -
          </button>
          <span>{counters.children}</span>
          <button
            data-testid="Counter Add Button"
            onClick={() => {
              increment("children");
            }}
            disabled={totalPeople >= counters.max}
          >
            +
          </button>
        </div>
      )}
      {showBaby && (
        <div data-testid="Party Size List Babies Counter">
          Babies
          <button
            data-testid="Counter Subtract Button"
            onClick={() => {
              decrement("babies");
            }}
            disabled={counters.babies <= 0 || totalPeople <= counters.min}
          >
            -
          </button>
          <span>{counters.babies}</span>
          <button
            data-testid="Counter Add Button"
            onClick={() => {
              increment("babies");
            }}
            disabled={totalPeople >= counters.max}
          >
            +
          </button>
        </div>
      )}
      {showSenior && (
        <div data-testid="Party Size List Seniors Counter">
          Seniors
          <button
            data-testid="Counter Subtract Button"
            onClick={() => {
              decrement("seniors");
            }}
            disabled={counters.seniors <= 0 || totalPeople <= counters.min}
          >
            -
          </button>
          <span>{counters.seniors}</span>
          <button
            data-testid="Counter Add Button"
            onClick={() => {
              increment("seniors");
            }}
            disabled={totalPeople >= counters.max}
          >
            +
          </button>
        </div>
      )}
    </div>
  );
};
