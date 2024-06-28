import CurrencyData from "currency-codes/data";
import Select from "react-select";

// Props
interface CurrencySelectProps {
  value: string;
  onChange: (currency: string) => void;
}

// Constants
export const DEFAULT_CURRENCY = "USD - US Dollar";

export interface CurrencyOption {
  readonly value: string;
  readonly label: string;
}

// Component
const CurrencySelect = ({
  value = DEFAULT_CURRENCY,
  onChange,
}: CurrencySelectProps) => {
  // Prepare data
  const data = CurrencyData.map(({ code, currency }: { code: string, currency: string }) => {
    return {
      value: code + " - " + currency,
      label: code + " - " + currency,
    };
  });
  const defaultValue = { value: value, label: value };

  // Render
  return (
    <div>
      <label>
        Currency
        <Select
          options={data}
          defaultValue={defaultValue}
          onChange={(newValue) => onChange((newValue as CurrencyOption).value)}
        />
      </label>
    </div>
  );
};

export default CurrencySelect;
