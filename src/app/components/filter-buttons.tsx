/**
 * FilterButtons component renders two buttons: "Reset" and "Apply Filters".
 * It accepts two callback functions as props to handle the respective button clicks.
 *
 * @param {Object} props - The props object.
 * @param {() => void} props.handleReset - Callback function to handle the reset button click.
 * @param {() => void} props.handleApplyFilters - Callback function to handle the apply filters button click.
 * @returns {JSX.Element} The rendered FilterButtons component.
 */
import { Flex } from "@radix-ui/themes";
import PrimaryButton from "./button";
const FilterButtons = ({
  handleReset,
  handleApplyFilters,
}: {
  handleReset: () => void;
  handleApplyFilters: () => void;
}) => {
  return (
    <Flex m="4" justify="between" align="center" gap="2">
      <PrimaryButton
        text="Reset"
        style={{
          fontFamily: "Poppins",
          backgroundColor: "transparent",
          color: "#111827",
          display: "flex",
          padding: "18px",
          border: "1px solid #E0E8F2",
          borderRadius: "12px",
          width: "100%",
          maxWidth: "145px",
          flex: "1 1 auto",
        }}
        onClick={handleReset}
      />
      <PrimaryButton
        text="Apply Filters"
        style={{
          fontFamily: "Poppins",
          padding: "18px",
          maxWidth: "145px",
          width: "100%",
          borderRadius: "12px",
          backgroundColor: "#1369D9",
          color: "white",
          border: "1px solid #E0E8F2",
          flex: "1 1 auto",
        }}
        onClick={handleApplyFilters}
      />
    </Flex>
  );
};

export default FilterButtons;
