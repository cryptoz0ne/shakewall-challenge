import countries from "i18n-iso-countries";
import Select from "react-select";
import { CountrySelectOption, CountrySelectValueContainer } from "./CountrySelectOption";

// Register countries
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

// --- TASK G ---
// Please replace "any" with a proper type in this file (and where it is needed).

// Props
interface CountrySelectProps {
  value: Country;
  onChange: (value: Country) => void;
}

export interface Country {
  code: string;
  name: string;
}

export interface CountryOption {
  readonly value: Country;
  readonly label: string;
}

// Constants
export const DEFAULT_COUNTRY: Country = {
  code: "US",
  name: "United States of America",
};

// Component
export const CountrySelect = ({
  value = DEFAULT_COUNTRY,
  onChange,
}: CountrySelectProps) => {
  // Prepare Data
  const data = Object.entries(
    countries.getNames("en", { select: "official" })
  ).map(([code, name]) => {
    return {
      value: { code, name },
      label: name,
    };
  });
  const defaultValue = { value: value, label: value.name };

  // Render
  return (
    <div>
      <label>
        <span className="selectLabel">Country</span>
        <Select
          options={data}
          menuPlacement="auto"
          menuPosition="fixed"
          menuPortalTarget={document.body}
          components={{ ValueContainer: CountrySelectValueContainer, Option: CountrySelectOption }}
          defaultValue={defaultValue}
          onChange={(newValue) => onChange((newValue as CountryOption).value)}
        />
      </label>
    </div>
  );
};

export default CountrySelect;
