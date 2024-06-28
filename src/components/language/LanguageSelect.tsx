import ISO_6391_Languages from "iso-639-1";

import Select from "react-select";

// Props
interface LanguageSelectProps {
  language: string;
  onChange: (language: string) => void;
}

export interface LanguageOption {
  readonly value: string;
  readonly label: string;
}

// Constants
export const DEFAULT_LANGUAGE = "English - English";

// Component
const LanguageSelect = ({
  language = DEFAULT_LANGUAGE,
  onChange,
}: LanguageSelectProps) => {
  // Prepare data
  const data = ISO_6391_Languages.getLanguages([
    "en",
    "de",
    "pl",
    "fr",
    "it",
    "es",
  ]).map(({ name, nativeName }) => {
    return {
      value: name + " - " + nativeName,
      label: name + " - " + nativeName,
    };
  });
  const defaultValue = { value: language, label: language };

  // Render
  return (
    <div>
      <label>
        <span className="selectLabel">Language</span>
        <Select
          options={data}
          menuPlacement="auto"
          menuPosition="fixed"
          menuPortalTarget={document.body}
          defaultValue={defaultValue}
          onChange={(newValue) => onChange((newValue as LanguageOption).value)}
        />
      </label>
    </div>
  );
};

export default LanguageSelect;
